import type { Request, Response, NextFunction } from "express";

const ADMIN_KEY = process.env.ADMIN_API_KEY;

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!ADMIN_KEY) {
    next();
    return;
  }

  const provided = req.headers["x-admin-key"] as string | undefined;
  if (provided !== ADMIN_KEY) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}
