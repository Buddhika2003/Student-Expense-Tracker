import Expense from "../model/expense.js";
import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

const getLoggedUser = async (req) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  return user;
};

export const createExpense = async (req, res) => {
  try {
    const user = await getLoggedUser(req);

    const expense = await Expense.create({
      title: req.body.title,
      amount: req.body.amount,
      category: req.body.category,
      date: req.body.date,
      user: user._id
    });

    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const user = await getLoggedUser(req);
    const expenses = await Expense.find({ user: user._id }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const user = await getLoggedUser(req);

    const updatedExpense = await Expense.findOneAndUpdate(
      { _id: req.params.id, user: user._id },
      req.body,
      { new: true }
    );

    res.json(updatedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const user = await getLoggedUser(req);

    await Expense.findOneAndDelete({
      _id: req.params.id,
      user: user._id
    });

    res.json({ message: "Expense deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const searchExpenses = async (req, res) => {
  try {
    const user = await getLoggedUser(req);
    const keyword = req.query.keyword || "";

    const expenses = await Expense.find({
      user: user._id,
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } }
      ]
    });

    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMonthlyTotals = async (req, res) => {
  try {
    const user = await getLoggedUser(req);

    const totals = await Expense.aggregate([
      {
        $match: { user: user._id }
      },
      {
        $group: {
          _id: { $month: "$date" },
          totalAmount: { $sum: "$amount" }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.json(totals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};