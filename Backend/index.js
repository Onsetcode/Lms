const express = require("express");
const route = require("./route/book.route");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./route/user.route");

const app = express();

app.use(cors());
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongodbURI;

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.use(express.json()); // used for parse the data which data given by postman api
app.use("/book", route); // path for database
app.use("/user", userRoute); // ath for user login

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// import express from "express";
// const app = express();
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();
// const PORT = process.env.PORT || 400;
// const URI = process.env.MongodbURI;

// try {
//   mongoose.connect(URI);
//   console.log("mongodb connect successfully");
// } catch (error) {
//   console.log("error : ", error);
// }

// app.get("/", (req, res) => {
//   res.send("Hello bro");
// });

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });
