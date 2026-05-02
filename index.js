import express from 'express';
import mongoose from 'mongoose';
const app = express();

app.use(express.json());


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

