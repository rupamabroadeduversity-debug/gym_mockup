import { Router } from "express";
import { subscribeNewsletter } from "../controllers/newsletterController.js";
import { validateNewsletter } from "../middleware/validate.js";

const router = Router();

router.post("/", validateNewsletter, subscribeNewsletter);

export default router;
