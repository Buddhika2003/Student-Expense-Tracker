import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use("/api", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Student Expense Tracker API");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});