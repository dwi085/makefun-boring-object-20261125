// The Most Boring Object, Reviewed in One Line — one line, at most 200 characters.
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NAME = "The doorstop has one job and has never once complained. It is the most reliable employee in this house, and it is paid in dust.";

// Gate self-check (mirror of the sealed scorer): 1-200 chars, not only whitespace.
const trimmed = NAME.trim();
if (trimmed.length < 1 || trimmed.length > 200 || trimmed.includes("\n")) {
  throw new Error(`entry invalid: ${trimmed.length} chars`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed, "utf8");
console.log(`wrote ${trimmed.length} chars to ${join(outDir, "entry.txt")}`);
