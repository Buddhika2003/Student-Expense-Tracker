import express from "express";
import {setBudget,getBudgetSummary} from "../controller/budgetController.js";

const router = express.Router();

router.post("/", setBudget);
router.get("/summary", getBudgetSummary);

export default router;