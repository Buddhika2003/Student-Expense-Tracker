import express from "express";
import {createExpense,getExpenses,updateExpense,deleteExpense,searchExpenses,getMonthlyTotals} from "../controller/expenseController.js";

const router = express.Router();

router.post("/", createExpense);
router.get("/", getExpenses);
router.put("//:id", updateExpense);
router.delete("//:id", deleteExpense);

router.get("/search", searchExpenses);
router.get("/monthlytotals", getMonthlyTotals);

export default router;