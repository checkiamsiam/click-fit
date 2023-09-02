const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const router = require("./routes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to  Server..!");
});

// Routes
app.use("/api/v1", router);
app.use("/images", express.static(__dirname + "/upload_images/"));

// Not Found Route
app.get("*", (req, res) => {
  res.sendStatus(404).send({ message: "Route Not Found" });
});

// Handle Error
app.use(errorHandler);

module.exports = app;
