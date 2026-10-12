/* tslint:disable */
/* eslint-disable */

export class WasmGpuModel {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Encode 24 kHz mono audio, returning a `Uint32Array` of integer codes.
     */
    encode(audio: Float32Array): Promise<Uint32Array>;
    /**
     * Construct a GPU-accelerated model. `weights_bytes` and `config_json`
     * have the same shape as `WasmModel::new`. `max_t` is an upper bound on
     * the number of mel frames per encode (sets buffer sizes); 1024 covers
     * up to ~13.6s of audio at 320-hop / 24 kHz.
     *
     * Async because GPU device creation is async on WebGPU. Call once at
     * app startup; reuse the returned handle for every encode.
     */
    static new(weights_bytes: Uint8Array, config_json: string, max_t: number): Promise<WasmGpuModel>;
}

/**
 * Opaque handle to a loaded encoder + quantizer. Construct once with
 * `WasmModel.new(weights, config)` and reuse for every clip.
 */
export class WasmModel {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Encode 24 kHz mono audio. Returns the integer code sequence.
     */
    encode(audio: Float32Array): Uint32Array;
    /**
     * Encode + return codes as a single contiguous `Uint32Array`.
     * Same as `encode` but spelled to make the JS shape obvious.
     */
    encode_to_array(audio: Float32Array): Uint32Array;
    /**
     * Returns frames per second of the encoded code stream (sample_rate / hop).
     * Useful for slicing codes by Whisper word timestamps on the JS side.
     */
    frames_per_second(): number;
    /**
     * `weights_bytes` — raw `.safetensors` file as `Uint8Array`.
     * `config_json`   — JSON string of `EncoderConfig`.
     */
    constructor(weights_bytes: Uint8Array, config_json: string);
}

export function _start(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_wasmgpumodel_free: (a: number, b: number) => void;
    readonly __wbg_wasmmodel_free: (a: number, b: number) => void;
    readonly wasmgpumodel_encode: (a: number, b: number, c: number) => number;
    readonly wasmgpumodel_new: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly wasmmodel_encode: (a: number, b: number, c: number, d: number) => void;
    readonly wasmmodel_encode_to_array: (a: number, b: number, c: number) => number;
    readonly wasmmodel_frames_per_second: (a: number) => number;
    readonly wasmmodel_new: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly _start: () => void;
    readonly __wasm_bindgen_func_elem_1456: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_1476: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_573: (a: number, b: number, c: number) => void;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_export3: (a: number) => void;
    readonly __wbindgen_export4: (a: number, b: number, c: number) => void;
    readonly __wbindgen_export5: (a: number, b: number) => void;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
