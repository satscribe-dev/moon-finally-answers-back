// The Moon Finally Answers Back — u-mang-the-moon-finally-answers-back-781a7ec1
// Writes the chosen one-line Moon comeback to /output/entry.txt.
// Deterministic: no input, no randomness, no clock, no network.

import { mkdirSync, writeFileSync } from "node:fs";

// Winner of an 8-candidate self-judged pairwise tournament (see log.md):
// one concrete wish, the Moon as a tired witness, twist in the last 3 words.
const ENTRY =
  "Four and a half billion years, and your big wish was 'please let him text back'? " +
  "Sweetheart, even I can't fix that. I tried. He saw the message.";

mkdirSync("/output", { recursive: true });

// Self-check the gate before writing: 1-240 characters, not only whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${chars} characters`);
}

writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
