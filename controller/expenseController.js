import Expense from "../model/expense.js";

export const createExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = (await Expense.find().sort({date:-1}));
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
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
    await Expense.findByIdAndDelete(req.params.id);

    res.json({ message: "Expense deleted successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const searchExpenses = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const expenses = await Expense.find({
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