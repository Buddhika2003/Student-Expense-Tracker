import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use("/api/expenses", expenseRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Student Expense Tracker API");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});