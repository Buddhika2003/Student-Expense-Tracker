import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);