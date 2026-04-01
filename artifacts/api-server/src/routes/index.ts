import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contentRouter from "./content";
import constantsRouter from "./constants";
import submissionsRouter from "./submissions";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contentRouter);
router.use(constantsRouter);
router.use(submissionsRouter);

export default router;
