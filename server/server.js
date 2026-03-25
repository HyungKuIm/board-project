// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/board");

app.use("/api/posts", require("./routes/post"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});