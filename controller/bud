import Budget from "../model/budget.js";
import Expense from "../model/expense.js";
import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

const getLoggedUser = async (req) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  return user;
};

export const setBudget = async (req, res) => {
  try {
    const user = await getLoggedUser(req);

    const budget = await Budget.findOneAndUpdate(
      {
        user: user._id,
        month: req.body.month,
        year: req.body.year
      },
      {amount: req.body.amount},
      {
        new: true,
        upsert: true
      }
    );

    res.json(budget);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBudgetSummary = async (req, res) => {
  try {
    const user = await getLoggedUser(req);

    const month = Number(req.query.month);
    const year = Number(req.query.year);

    const budget = await Budget.findOne({
      user: user._id,
      month,
      year
    });

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1);

    const expenses = await Expense.find({
      user: user._id,
      date: {
        $gte: startDate,
        $lt: endDate
      }
    });

    let totalSpent = 0;

    expenses.forEach((expense) => {
      totalSpent += expense.amount;
    });

    res.json({
      budgetAmount: budget ? budget.amount : 0,
      totalSpent,
      remaining: budget ? budget.amount - totalSpent : 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};