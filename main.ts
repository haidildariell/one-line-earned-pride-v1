// One Line of Earned Pride — writes one quiet, earned moment of pride
// to /output/entry.txt: a single line of 1-240 UTF-8 characters.
//
// The line is built in three beats so the pride lands on the last word:
// the long effort, the turn, then the quiet payoff — never stated, only seen.
import { mkdirSync, writeFileSync } from "node:fs";

const EFFORT = "He'd soldered the radio back together seventeen times;";
const TURN =
  "tonight, through the static, his grandmother's favourite song came through clear";
const PAYOFF = "— and he just sat there, grinning.";

const LINE = `${EFFORT} ${TURN} ${PAYOFF}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
