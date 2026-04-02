import express, { type Express, type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const staticDir = process.env.STATIC_DIR || path.resolve(__dirname, "../../bca-roi-landing/dist/public");

app.use(express.static(staticDir));

app.get("/{*splat}", (req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(staticDir, "index.html"));
});

app.use((_err: Error, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(_err, "Unhandled error");
  res.status(500).json({ error: "Internal server error" });
});

export default app;
