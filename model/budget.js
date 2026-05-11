import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema(
  {
    month: {type: Number,required: true},
    year: {type: Number,required: true},
    amount: {type: Number,required: true},
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Budget", budgetSchema);