import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { contactSubmissionsTable } from "@workspace/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireAdmin } from "../middleware/admin-auth";

const router: IRouter = Router();

const MIN_SUBMIT_TIME_MS = 2000;

router.post("/submissions", async (req, res, next) => {
  try {
    const { name, email, company, position, website, _t } = req.body;

    if (website) {
      res.status(201).json({ id: 0, name: "", email: "", company: "", position: "", createdAt: new Date().toISOString() });
      return;
    }

    if (typeof _t !== "number" || !Number.isFinite(_t)) {
      res.status(201).json({ id: 0, name: "", email: "", company: "", position: "", createdAt: new Date().toISOString() });
      return;
    }
    const elapsed = Date.now() - _t;
    if (elapsed < MIN_SUBMIT_TIME_MS || elapsed > 3600000) {
      res.status(201).json({ id: 0, name: "", email: "", company: "", position: "", createdAt: new Date().toISOString() });
      return;
    }

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      res.status(400).json({ error: "Name is required (min 2 characters)" });
      return;
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      res.status(400).json({ error: "Valid email is required" });
      return;
    }
    if (!company || typeof company !== "string" || company.trim().length < 2) {
      res.status(400).json({ error: "Company is required (min 2 characters)" });
      return;
    }

    const positionVal = position && typeof position === "string" ? position.trim() : null;

    const [submission] = await db
      .insert(contactSubmissionsTable)
      .values({ name: name.trim(), email: email.trim(), company: company.trim(), position: positionVal })
      .returning();

    res.status(201).json(submission);
  } catch (err) {
    next(err);
  }
});

router.get("/submissions", requireAdmin, async (_req, res, next) => {
  try {
    const rows = await db
      .select()
      .from(contactSubmissionsTable)
      .orderBy(desc(contactSubmissionsTable.createdAt));
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

router.delete("/submissions/:id", requireAdmin, async (req, res, next) => {
  try {
    const raw = req.params.id;
    const id = Number(raw);
    if (!Number.isInteger(id) || String(id) !== raw || id <= 0) {
      res.status(400).json({ error: "Invalid ID" });
      return;
    }
    const deleted = await db.delete(contactSubmissionsTable).where(eq(contactSubmissionsTable.id, id)).returning();
    if (deleted.length === 0) {
      res.status(404).json({ error: "Submission not found" });
      return;
    }
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

export default router;
