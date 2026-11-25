// The Meeting That Should Have Been an Email — entry program.
// Writes one joke line (<=200 chars) about a meeting that should
// have been an email to /output/entry.txt. Deterministic: no clock,
// no randomness, no network, no environment reads.
// Gate: the line is 145 chars, one line, no trailing newline —
// inside the sealed scorer's 1–200 char window.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This meeting could have been an email — but then no one would have seen me nod thoughtfully for 45 minutes while contributing absolutely nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
