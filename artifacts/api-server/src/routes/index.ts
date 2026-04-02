import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import contentRouter from "./content";
import constantsRouter from "./constants";
import submissionsRouter from "./submissions";
import analyticsRouter from "./analytics";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(contentRouter);
router.use(constantsRouter);
router.use(submissionsRouter);
router.use(analyticsRouter);

export default router;
