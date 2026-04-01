import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { cmsContentTable } from "@workspace/db/schema";
import { sql } from "drizzle-orm";
import { requireAdmin } from "../middleware/admin-auth";

const router: IRouter = Router();

router.get("/content", async (_req, res, next) => {
  try {
    const rows = await db.select().from(cmsContentTable);
    const content: Record<string, string> = {};
    for (const row of rows) {
      content[row.key] = row.value;
    }
    res.json(content);
  } catch (err) {
    next(err);
  }
});

router.put("/content", requireAdmin, async (req, res, next) => {
  try {
    const { entries } = req.body;
    if (!Array.isArray(entries) || entries.length === 0 || entries.length > 100) {
      res.status(400).json({ error: "entries must be a non-empty array (max 100) of {key, value}" });
      return;
    }

    for (const entry of entries) {
      if (!entry.key || typeof entry.key !== "string" || typeof entry.value !== "string") {
        res.status(400).json({ error: "Each entry must have a string key and string value" });
        return;
      }
    }

    for (const entry of entries) {
      await db
        .insert(cmsContentTable)
        .values({ key: entry.key, value: entry.value })
        .onConflictDoUpdate({
          target: cmsContentTable.key,
          set: { value: entry.value, updatedAt: sql`now()` },
        });
    }

    res.json({ updated: entries.length });
  } catch (err) {
    next(err);
  }
});

export default router;
