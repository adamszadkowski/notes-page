const baseColors: Record<string, string> = {
  c: "#f79fb8",
  d: "#ff6908",
  e: "#ffcb08",
  f: "#96ff08",
  g: "#51a0ff",
  a: "#9d3701",
  b: "#fc092c",
};

function getNext(note: string): string {
  if (note === "g") return "a";
  return String.fromCharCode(note.charCodeAt(0) + 1);
}

function getPrevious(note: string): string {
  if (note === "a") return "g";
  return String.fromCharCode(note.charCodeAt(0) - 1);
}

export function getNoteColors(note: string): [string] | [string, string] {
  if (note.endsWith("#")) {
    return [baseColors[note.charAt(0)], baseColors[getNext(note.charAt(0))]];
  }
  if (note.length === 2 && note.endsWith("b")) {
    return [
      baseColors[getPrevious(note.charAt(0))],
      baseColors[note.charAt(0)],
    ];
  }
  return [baseColors[note]];
}
