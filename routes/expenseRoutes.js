import express from "express";
import {createExpense,getExpenses,updateExpense,deleteExpense,searchExpenses} from "../controller/expenseController.js";

const router = express.Router();

router.post("/expenses", createExpense);
router.get("/expenses", getExpenses);
router.put("/expenses/:id", updateExpense);
router.delete("/expenses/:id", deleteExpense);
router.get("/expenses/search", searchExpenses);

export default router;