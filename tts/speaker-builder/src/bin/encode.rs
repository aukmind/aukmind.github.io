//! CLI: encode a WAV file with the WavTokenizer encoder.
//!
//! Usage:
//!     encode <weights.safetensors> <config.json> <audio.wav> [--codes-out codes.txt]
//!
//! Reads a 16-bit PCM mono WAV, resamples to 24 kHz if needed (linear
//! interpolation — fine for parity checks but not bit-exact with PyTorch's
//! polyphase resampler), runs the encoder + quantizer, and prints integer
//! codes one per line. The browser pipeline does its own resampling via
//! Web Audio so this difference is browser-only-irrelevant.
//!
//! Useful for:
//!   - Numeric parity testing against the PyTorch reference (compare codes).
//!   - Batch building of speaker JSON outside the browser.

use std::env;
use std::fs;
use std::io::Write;
use std::path::PathBuf;

use ndarray::ArrayView1;
use speaker_builder::encoder::EncoderConfig;
use speaker_builder::weights::LoadedModel;
use speaker_builder::encode_audio;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 4 {
        eprintln!("usage: {} <weights.safetensors> <config.json> <audio.wav> [--codes-out codes.txt]",
            args.get(0).map(|s| s.as_str()).unwrap_or("encode"));
        std::process::exit(2);
    }
    let weights_path = PathBuf::from(&args[1]);
    let config_path  = PathBuf::from(&args[2]);
    let audio_path   = PathBuf::from(&args[3]);
    let codes_out = args.iter().position(|a| a == "--codes-out")
        .and_then(|i| args.get(i + 1).cloned());

    let weights_bytes = fs::read(&weights_path)
        .unwrap_or_else(|e| die(&format!("read weights: {e}")));
    let config_text = fs::read_to_string(&config_path)
        .unwrap_or_else(|e| die(&format!("read config: {e}")));
    let cfg: EncoderConfig = serde_json::from_str(&config_text)
        .unwrap_or_else(|e| die(&format!("parse config: {e}")));

    let model = LoadedModel::from_safetensors_bytes(&weights_bytes, &cfg)
        .unwrap_or_else(|e| die(&format!("load model: {e}")));

    let audio = read_wav_24k_mono(&audio_path, cfg.sample_rate)
        .unwrap_or_else(|e| die(&format!("read wav: {e}")));

    eprintln!("encoded {} samples ({:.2}s of audio)",
        audio.len(), audio.len() as f32 / cfg.sample_rate as f32);

    let start = std::time::Instant::now();
    let codes = encode_audio(ArrayView1::from(&audio), &model, cfg);
    eprintln!("{} codes in {:.1}ms", codes.len(), start.elapsed().as_secs_f32() * 1000.0);

    if let Some(out_path) = codes_out {
        let mut f = fs::File::create(&out_path)
            .unwrap_or_else(|e| die(&format!("open out: {e}")));
        for c in &codes { writeln!(f, "{c}").unwrap(); }
        eprintln!("wrote {out_path}");
    } else {
        for c in &codes { println!("{c}"); }
    }
}

fn die(msg: &str) -> ! {
    eprintln!("error: {msg}");
    std::process::exit(1);
}

/// Read a 16-bit PCM WAV, mix down to mono, linear-resample to `target_sr`.
/// Tiny implementation; tolerates the common case (PCM 16-bit, 1-2 channels).
fn read_wav_24k_mono(path: &PathBuf, target_sr: usize) -> Result<Vec<f32>, String> {
    let data = fs::read(path).map_err(|e| e.to_string())?;
    if &data[0..4] != b"RIFF" || &data[8..12] != b"WAVE" {
        return Err("not a RIFF/WAVE file".into());
    }
    // Walk chunks; pick `fmt ` and `data`.
    let mut off = 12usize;
    let (mut sample_rate, mut channels, mut bits_per_sample) = (0u32, 0u16, 0u16);
    let mut pcm: &[u8] = &[];
    while off + 8 <= data.len() {
        let id = &data[off..off + 4];
        let sz = u32::from_le_bytes(data[off + 4..off + 8].try_into().unwrap()) as usize;
        let body = &data[off + 8..off + 8 + sz];
        if id == b"fmt " {
            channels = u16::from_le_bytes(body[2..4].try_into().unwrap());
            sample_rate = u32::from_le_bytes(body[4..8].try_into().unwrap());
            bits_per_sample = u16::from_le_bytes(body[14..16].try_into().unwrap());
        } else if id == b"data" {
            pcm = body;
            break;
        }
        off += 8 + sz + (sz & 1);                        // chunk sizes are even-aligned
    }
    if bits_per_sample != 16 {
        return Err(format!("unsupported bits_per_sample {bits_per_sample}; want 16"));
    }
    let frame_size = 2 * channels as usize;
    let frame_count = pcm.len() / frame_size;
    let mut mono = Vec::with_capacity(frame_count);
    for f in 0..frame_count {
        let mut sum = 0i32;
        for c in 0..channels as usize {
            let lo = pcm[f * frame_size + 2 * c];
            let hi = pcm[f * frame_size + 2 * c + 1];
            let s = i16::from_le_bytes([lo, hi]);
            sum += s as i32;
        }
        mono.push(sum as f32 / (channels as f32 * 32768.0));
    }
    if sample_rate as usize == target_sr { return Ok(mono); }

    // Linear resample.
    let ratio = target_sr as f64 / sample_rate as f64;
    let target_len = (mono.len() as f64 * ratio).round() as usize;
    let mut out = Vec::with_capacity(target_len);
    for i in 0..target_len {
        let src = i as f64 / ratio;
        let idx = src.floor() as usize;
        let frac = src - idx as f64;
        let s0 = mono.get(idx).copied().unwrap_or(0.0);
        let s1 = mono.get(idx + 1).copied().unwrap_or(s0);
        out.push((s0 as f64 * (1.0 - frac) + s1 as f64 * frac) as f32);
    }
    Ok(out)
}
