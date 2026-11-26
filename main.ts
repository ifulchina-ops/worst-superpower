// Worst Superpower — make.fun entry (u-suroto-worst-superpower-461dcdbe)
// One line, at most 140 characters: the most useless superpower imaginable.
// Writes the entry to /output/entry.txt (program/v1, node runtime).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I can count every grain of rice in any bowl — but only after I have already eaten all of it.";

// Gate: the sealed scorer requires 1–140 UTF-8 chars, a single line.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(`Entry invalid: ${ENTRY.length} chars`);
}

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} chars to ${outPath}`);
console.log(ENTRY);
