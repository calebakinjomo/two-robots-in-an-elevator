// Two Robots in an Elevator — make.fun bounty entry
// Competition: u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f
// Writes exactly one line (<=200 chars) of awkward robot small talk
// to /output/entry.txt.
//
// The line: a robot that has rehearsed the elevator ride 47 times still
// doesn't know where to put its arms — then, flailing for small talk,
// compliments the other robot's arms. Machine logic (rehearsal count)
// collides with the most human elevator anxiety there is, and the
// compliment lands as the surprise turn: of all things to admire in a
// fellow machine, it picks arm placement. The ellipsis is the pause
// neither robot wants to name. The entry below is written verbatim,
// followed by a single trailing newline, and read back after writing
// to confirm the file matches before the program exits.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

const ENTRY =
  "I rehearsed this ride 47 times and still don't know where to put my arms. Yours look... confident.";

// Self-check: the entry must be exactly one line and within the limit,
// with no leading or trailing whitespace of its own (the single trailing
// newline is added only at write time), otherwise fail loudly instead
// of writing a bad entry.
if (
  ENTRY.includes("\n") ||
  ENTRY.length === 0 ||
  ENTRY.length > MAX_CHARS ||
  ENTRY !== ENTRY.trim()
) {
  throw new Error(
    `Invalid entry: expected one line of 1-${MAX_CHARS} chars, got ${ENTRY.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

// Read-back guard: fail loudly if what landed on disk differs from the
// entry, instead of exiting as though the write had succeeded.
if (readFileSync("/output/entry.txt", "utf8") !== ENTRY + "\n") {
  throw new Error(
    "Write verification failed: /output/entry.txt does not match ENTRY",
  );
}
