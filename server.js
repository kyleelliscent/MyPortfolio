//import express from "express";
//var express = require("express");
//var app = express();
import mongoose from "mongoose";
import config from "./config/config.js";
import app from "./server/express.js";
import router from "./server/assets-router.js";

//Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodbUri);

mongoose.connection.on("connected", () => {
  console.log("Connected to the database!");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error details:", err);
  throw new Error(`unable to connect to database: ${config.mongodbUri}`);
});
//const assetsRouter = require("./server/assets-router");
app.use("/src", router);
app.use("/", function (req, res) {
  res.send("Welcome to My Portfolio");
});
app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}/`);
});
//module.exports = app;
export default app;
