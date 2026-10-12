// Start codepoints in Mathematical Alphanumeric Symbols: letters are A..Z then a..z, digits 0..9.
const STYLES = {
  bold:               { label: "Serif",         letters: 0x1d400, digits: 0x1d7ce, isBold: true },
  "sans-bold":        { label: "Sans-serif",    letters: 0x1d5d4, digits: 0x1d7ec, isBold: true },
  italic:             { label: "Serif",         letters: 0x1d434, digits: 0x1d7ce, isItalic: true },
  "sans-italic":      { label: "Sans-serif",    letters: 0x1d608, digits: 0x1d7ec, isItalic: true },
  "bold-italic":      { label: "Serif",         letters: 0x1d468, digits: 0x1d7ce, isBold: true, isItalic: true },
  "sans-bold-italic": { label: "Sans-serif",    letters: 0x1d63c, digits: 0x1d7ec, isBold: true, isItalic: true },
  "bold-script":      { label: "Bold script",   letters: 0x1d4d0, digits: 0x1d7ce, isScript: true },
  script:             { label: "Script",        letters: 0x1d49c, digits: 0x1d7ce, isScript: true },
  "bold-fraktur":     { label: "Bold Fraktur",  letters: 0x1d56c, digits: 0x1d7ce, isScript: true },
  fraktur:            { label: "Fraktur",       letters: 0x1d504, digits: 0x1d7ce, isScript: true },
  "double-struck":    { label: "Double-struck", letters: 0x1d538, digits: 0x1d7d8, isScript: true },
};

// These slots are reserved because Letterlike Symbols (U+2100) already had the glyph.
const HOLES = {
  0x1d455: 0x210e,
  0x1d49d: 0x212c, 0x1d4a0: 0x2130, 0x1d4a1: 0x2131, 0x1d4a3: 0x210b, 0x1d4a4: 0x2110, 0x1d4a7: 0x2112,
  0x1d4a8: 0x2133, 0x1d4ad: 0x211b, 0x1d4ba: 0x212f, 0x1d4bc: 0x210a, 0x1d4c4: 0x2134,
  0x1d506: 0x212d, 0x1d50b: 0x210c, 0x1d50c: 0x2111, 0x1d515: 0x211c, 0x1d51d: 0x2128,
  0x1d53a: 0x2102, 0x1d53f: 0x210d, 0x1d545: 0x2115, 0x1d547: 0x2119, 0x1d548: 0x211a, 0x1d549: 0x211d,
  0x1d551: 0x2124,
};

const PLAIN = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const STYLED = {};
const STYLE_OF = new Map();

for (const [key, { letters, digits }] of Object.entries(STYLES)) {
  STYLED[key] = new Map();
  [...PLAIN].forEach((plain, i) => {
    const code = i < 52 ? letters + i : digits + i - 52;
    const styled = String.fromCodePoint(HOLES[code] ?? code);
    STYLED[key].set(plain, styled);
    // Styles share digit blocks; the first style listed claims them.
    if (!STYLE_OF.has(styled)) STYLE_OF.set(styled, key);
  });
}

const MATH_CHAR = new RegExp(`[\\u{1D400}-\\u{1D7FF}${String.fromCodePoint(...Object.values(HOLES))}]`, "gu");

function convert(text, styleKey) {
  const map = STYLED[styleKey];
  return map ? Array.from(text, (c) => map.get(c) ?? c).join("") : text;
}

// NFKC maps every math alphanumeric back to plain, but only apply it there: it also rewrites … ™ ﬁ etc.
function normalize(text) {
  return text.replace(MATH_CHAR, (c) => c.normalize("NFKC"));
}

// Shared digits are ambiguous, so a letter decides when there is one.
function getFormattingState(text) {
  let digitStyle;
  for (const c of text || "") {
    const key = STYLE_OF.get(c);
    if (key && /\d/.test(c.normalize("NFKC"))) digitStyle ??= key;
    else if (key) return stateOf(key);
  }
  return stateOf(digitStyle);
}

function stateOf(styleKey) {
  const { isBold = false, isItalic = false, isScript = false } = STYLES[styleKey] || {};
  return { isBold, isItalic, isScript };
}
