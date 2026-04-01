import app from "./app";
import { logger } from "./lib/logger";
import { db } from "@workspace/db";
import { cmsContentTable, calculatorConstantsTable } from "@workspace/db/schema";
import { cmsContent, calculatorConstants } from "@workspace/db/seed-data";

async function autoSeed() {
  const existingContent = await db.select({ key: cmsContentTable.key }).from(cmsContentTable).limit(1);
  if (existingContent.length === 0) {
    logger.info("CMS tables empty, running auto-seed...");
    for (const entry of cmsContent) {
      await db.insert(cmsContentTable).values(entry).onConflictDoNothing();
    }
    for (const entry of calculatorConstants) {
      await db.insert(calculatorConstantsTable).values({ key: entry.key, value: entry.value }).onConflictDoNothing();
    }
    logger.info(`Auto-seeded ${cmsContent.length} content entries and ${calculatorConstants.length} constants.`);
  }
}

const rawPort = process.env["PORT"];

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

autoSeed()
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        logger.error({ err }, "Error listening on port");
        process.exit(1);
      }
      logger.info({ port }, "Server listening");
    });
  })
  .catch((err) => {
    logger.error({ err }, "Auto-seed failed, starting server anyway");
    app.listen(port, (err2) => {
      if (err2) {
        logger.error({ err: err2 }, "Error listening on port");
        process.exit(1);
      }
      logger.info({ port }, "Server listening");
    });
  });
