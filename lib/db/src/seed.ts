import { db } from "./index";
import { cmsContentTable, calculatorConstantsTable } from "./schema";
import { sql } from "drizzle-orm";
import { cmsContent, calculatorConstants } from "./seed-data";

async function seed() {
  console.log("Seeding CMS content...");
  for (const entry of cmsContent) {
    await db
      .insert(cmsContentTable)
      .values(entry)
      .onConflictDoUpdate({
        target: cmsContentTable.key,
        set: { value: entry.value, updatedAt: sql`now()` },
      });
  }
  console.log(`  Seeded ${cmsContent.length} content entries.`);

  console.log("Seeding calculator constants...");
  for (const entry of calculatorConstants) {
    await db
      .insert(calculatorConstantsTable)
      .values({ key: entry.key, value: entry.value })
      .onConflictDoUpdate({
        target: calculatorConstantsTable.key,
        set: { value: entry.value, updatedAt: sql`now()` },
      });
  }
  console.log(`  Seeded ${calculatorConstants.length} calculator constants.`);

  console.log("Seed complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
