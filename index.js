import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});