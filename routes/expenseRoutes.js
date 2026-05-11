import express from "express";
import {createExpense,getExpenses,updateExpense} from "../controller/expenseController.js";

const router = express.Router();

router.post("/expenses", createExpense);
router.get("/expenses", getExpenses);
router.put("/expenses/:id", updateExpense);

export default router;