import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "3 AM? My secure element unionized. No signatures between midnight and sunrise — your 'urgent' memecoin can queue behind the sunrise like the rest of us.";

// Sealed-gate self-check: UTF-8 text, 1–200 chars, not whitespace-only.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
