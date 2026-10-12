import { aukmindTheme } from "/shared/theme.js";
const { createApp, defineComponent, ref, computed, reactive, nextTick, watch } = Vue;
const naive = window.naive;

const FONT_SETTINGS = [
  { field: "bold", label: "Bold", styles: ["sans-bold", "bold"] },
  { field: "italic", label: "Italic", styles: ["sans-italic", "italic"] },
  { field: "boldItalic", label: "Bold + italic", styles: ["sans-bold-italic", "bold-italic"] },
  { field: "script", label: "Script", styles: ["bold-script", "script", "bold-fraktur", "fraktur", "double-struck"] },
].map((s) => ({
  ...s,
  options: s.styles.map((key) => ({ value: key, label: convert(STYLES[key].label, key) })),
}));

const FORMATS = [
  { type: "bold", flag: "isBold", hotkey: "b", label: "<strong>B</strong>", title: "Bold (Ctrl+B)" },
  { type: "italic", flag: "isItalic", hotkey: "i", label: "<em>I</em>", title: "Italic (Ctrl+I)" },
  { type: "script", flag: "isScript", hotkey: "s", label: "𝒮", title: "Script (Ctrl+S)" },
];

const blankState = () => stateOf();
const hasPending = (s) => s.isBold || s.isItalic || s.isScript;

function applyToggleToState(state, formatType) {
  const next = { ...state };
  const key = FORMATS.find((f) => f.type === formatType).flag;
  next[key] = !next[key];
  if (formatType === "script" && next.isScript) {
    next.isBold = false;
    next.isItalic = false;
  } else if (next[key] && (formatType === "bold" || formatType === "italic")) {
    next.isScript = false;
  }
  return next;
}

function textBefore(root, node, offset) {
  const range = document.createRange();
  range.setStart(root, 0);
  range.setEnd(node, offset);
  return range.toString();
}

function selectOffsets(root, start, end) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let pos = 0, started = false, node;
  while ((node = walker.nextNode())) {
    const next = pos + node.length;
    if (!started && start <= next) { range.setStart(node, start - pos); started = true; }
    if (started && end <= next) { range.setEnd(node, end - pos); break; }
    pos = next;
  }
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

// execCommand is deprecated but it's the only way to keep edits on the native undo stack.
// Chrome turns "\n" inside insertText into <div>s, even in plaintext-only, so breaks go in separately.
function insertText(text) {
  text.split("\n").forEach((line, i) => {
    if (i) document.execCommand("insertLineBreak");
    if (line) document.execCommand("insertText", false, line);
  });
}

function replaceSelection(root, text) {
  const range = window.getSelection().getRangeAt(0);
  const start = textBefore(root, range.startContainer, range.startOffset).length;
  insertText(text);
  if (text) selectOffsets(root, start, start + text.length);
}

const LinkedinApp = defineComponent({
  template: "#linkedin-app-template",
  setup() {
    const message = naive.useMessage();

    const editorRef = ref(null);
    const editorContent = ref("");
    const charCount = computed(() => editorContent.value.trim().length);
    // An emptied contenteditable keeps a placeholder <br>, so :empty alone misses it.
    const isEmpty = computed(() => ["", "\n"].includes(editorContent.value));
    const charCountClass = computed(() =>
      charCount.value > 3000 ? "char-over" :
      charCount.value > 2800 ? "char-warn" : ""
    );

    const pendingFormatting = reactive(blankState());

    let savedConfig = {};
    try { savedConfig = JSON.parse(localStorage.getItem("typographyConfig")) || {}; } catch {}
    const config = reactive(Object.fromEntries(FONT_SETTINGS.map(({ field, styles }) =>
      [field, styles.includes(savedConfig[field]) ? savedConfig[field] : styles[0]]
    )));

    function styleFor(s) {
      if (s.isScript) return config.script;
      if (s.isBold && s.isItalic) return config.boldItalic;
      if (s.isBold) return config.bold;
      if (s.isItalic) return config.italic;
      return null;
    }

    function inferStateFromContext(node, offset) {
      return getFormattingState(textBefore(editorRef.value, node, offset).match(/(\S)\s*$/u)?.[1]);
    }

    function syncEditorContent() {
      editorContent.value = editorRef.value.innerText;
    }

    // Any DOM update during the input event closes Chrome's typing group, making undo go char by char.
    function handleInput() {
      setTimeout(syncEditorContent);
    }

    function handleBeforeInput(e) {
      if (e.inputType !== "insertText" || !e.data || !e.cancelable || !hasPending(pendingFormatting)) return;
      const converted = convert(e.data, styleFor(pendingFormatting));
      if (converted === e.data) return;
      e.preventDefault();
      insertText(converted);
    }

    function handleKeydown(e) {
      if (!(e.ctrlKey || e.metaKey)) return;
      const fmt = FORMATS.find((f) => f.hotkey === e.key.toLowerCase());
      if (fmt) { e.preventDefault(); toggleFormat(fmt.type); }
    }

    function toggleFormat(formatType) {
      const sel = window.getSelection();
      if (sel.rangeCount === 0) return;
      const range = sel.getRangeAt(0);
      const root = editorRef.value;
      const inside = root.contains(range.commonAncestorContainer);

      if (range.collapsed || !inside) {
        if (inside && !hasPending(pendingFormatting)) {
          Object.assign(pendingFormatting, inferStateFromContext(range.startContainer, range.startOffset));
        }
        Object.assign(pendingFormatting, applyToggleToState(pendingFormatting, formatType));
        root.focus();
        return;
      }

      restyle(applyToggleToState(getFormattingState(range.toString()), formatType));
    }

    function clearFormatting() {
      restyle(blankState());
    }

    // Rewrites the selection in the target style, or the whole post (keeping the caret) when nothing is selected.
    function restyle(target) {
      Object.assign(pendingFormatting, target);
      const root = editorRef.value;
      const sel = window.getSelection();
      const range = sel.rangeCount ? sel.getRangeAt(0) : null;
      const inside = range && root.contains(range.commonAncestorContainer);
      const whole = !inside || range.collapsed;
      const caret = whole && inside ? normalize(textBefore(root, range.startContainer, range.startOffset)).length : null;

      root.focus();
      if (whole) sel.selectAllChildren(root);
      const text = sel.getRangeAt(0).toString();
      const styled = convert(normalize(text), styleFor(target));
      if (styled !== text) replaceSelection(root, styled);
      if (whole) selectOffsets(root, caret ?? styled.length, caret ?? styled.length);
      syncEditorContent();
    }

    function clearEditor() {
      editorRef.value.focus();
      document.execCommand("selectAll");
      document.execCommand("delete");
      Object.assign(pendingFormatting, blankState());
      syncEditorContent();
      message.info("Editor cleared. Press Ctrl+Z to undo.");
    }

    function updateToolbarState() {
      const sel = window.getSelection();
      if (!sel.rangeCount || !editorRef.value || !editorRef.value.contains(sel.anchorNode)) return;
      const range = sel.getRangeAt(0);

      let next;
      if (range.collapsed) {
        if (hasPending(pendingFormatting)) return;
        next = inferStateFromContext(range.startContainer, range.startOffset);
      } else {
        const text = range.toString();
        if (!text) return;
        next = getFormattingState(text);
      }

      Object.assign(pendingFormatting, next);
    }

    async function copyToClipboard() {
      const text = editorContent.value.trim();
      if (!text) {
        message.warning("Editor is empty. Add some content first.");
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        message.success("Copied with Unicode formatting. Paste it into LinkedIn.");
      } catch (err) {
        console.error("Clipboard write failed:", err);
        message.error("Failed to copy. Please select and copy manually.");
      }
    }

    document.addEventListener("selectionchange", () => nextTick(updateToolbarState));

    const savedFlash = reactive({});
    const flashTimers = {};

    for (const { field } of FONT_SETTINGS) {
      watch(() => config[field], () => {
        localStorage.setItem("typographyConfig", JSON.stringify(config));
        savedFlash[field] = true;
        clearTimeout(flashTimers[field]);
        flashTimers[field] = setTimeout(() => { savedFlash[field] = false; }, 3000);
      });
    }

    return {
      editorRef,
      charCount,
      charCountClass,
      isEmpty,
      pendingFormatting,
      config,
      savedFlash,
      fontSettings: FONT_SETTINGS,
      formats: FORMATS,
      handleBeforeInput,
      handleInput,
      handleKeydown,
      toggleFormat,
      clearFormatting,
      clearEditor,
      copyToClipboard,
    };
  },
});

const app = createApp({
  setup() {
    return { theme: aukmindTheme };
  },
});
app.use(naive);
app.component("linkedin-app", LinkedinApp);
app.mount("#app");
