import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { calculatorUsageTable } from "@workspace/db/schema";
import { sql } from "drizzle-orm";
import { requireAdmin } from "../middleware/admin-auth";

const router: IRouter = Router();

router.post("/analytics/calculator-use", async (_req, res, next) => {
  try {
    await db.insert(calculatorUsageTable).values({});
    res.status(201).json({ ok: true });
  } catch (err) {
    next(err);
  }
});

router.get("/analytics/stats", requireAdmin, async (_req, res, next) => {
  try {
    const [total] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(calculatorUsageTable);
    const [today] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(calculatorUsageTable)
      .where(sql`${calculatorUsageTable.createdAt} >= current_date`);
    const [thisWeek] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(calculatorUsageTable)
      .where(sql`${calculatorUsageTable.createdAt} >= current_date - interval '7 days'`);
    res.json({
      calculatorUses: {
        total: total.count,
        today: today.count,
        thisWeek: thisWeek.count,
      },
    });
  } catch (err) {
    next(err);
  }
});

export default router;
