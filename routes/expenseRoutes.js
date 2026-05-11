import express from "express";
import {createExpense,getExpenses} from "../controller/expenseController.js";

const router = express.Router();

router.post("/expenses", createExpense);
router.get("/expenses", getExpenses);

export default router;