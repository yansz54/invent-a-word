// showergument — Invent a Word We Need (make.fun).
// Writes one invented English word and its one-line definition to
// /output/entry.txt. Node 22, stdlib only. No clock, no network, no
// randomness: the output is a fixed string, so every run is identical.
//
// Gate (from the competition rules): /output/entry.txt must be UTF-8
// text of 1 to 140 characters, not only white space. This program
// enforces that itself and fails loudly instead of shipping a bad file:
// the whole entry is 80 characters, the definition alone 65.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "showergument";
const DEFINITION =
  "The imaginary argument you rehearse in the shower and always win.";
const ENTRY = `${WORD} \u2014 ${DEFINITION}`;

if (DEFINITION.length > 140) {
  throw new Error(`definition is ${DEFINITION.length} chars, over the 140 limit`);
}
if (ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars, fails the 1-140 gate`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Verify what actually landed on disk: re-read it and compare byte for
// byte, so a silent write failure can never pass as a good run.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt on disk does not match the entry");
}
console.log(`wrote entry.txt (${ENTRY.length} chars, verified)`);
