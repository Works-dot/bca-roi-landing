import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { calculatorConstantsTable } from "@workspace/db/schema";
import { sql } from "drizzle-orm";
import { requireAdmin } from "../middleware/admin-auth";

const router: IRouter = Router();

router.get("/constants", async (_req, res, next) => {
  try {
    const rows = await db.select().from(calculatorConstantsTable);
    const constants: Record<string, unknown> = {};
    for (const row of rows) {
      constants[row.key] = row.value;
    }
    res.json(constants);
  } catch (err) {
    next(err);
  }
});

router.put("/constants", requireAdmin, async (req, res, next) => {
  try {
    const { entries } = req.body;
    if (!Array.isArray(entries) || entries.length === 0 || entries.length > 20) {
      res.status(400).json({ error: "entries must be a non-empty array (max 20) of {key, value}" });
      return;
    }

    for (const entry of entries) {
      if (!entry.key || typeof entry.key !== "string" || entry.value === undefined) {
        res.status(400).json({ error: "Each entry must have a string key and a value" });
        return;
      }
    }

    for (const entry of entries) {
      await db
        .insert(calculatorConstantsTable)
        .values({ key: entry.key, value: entry.value })
        .onConflictDoUpdate({
          target: calculatorConstantsTable.key,
          set: { value: entry.value, updatedAt: sql`now()` },
        });
    }

    res.json({ updated: entries.length });
  } catch (err) {
    next(err);
  }
});

export default router;
