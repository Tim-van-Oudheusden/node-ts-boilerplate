import { Router } from "express";
import { get as getHealth } from "./controllers/health-controller";

const router = Router();

// Health check route
router.get("/health", getHealth);

export default router;
