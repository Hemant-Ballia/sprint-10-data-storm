const express = require("express");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Sprint 10 Backend API is running",
  });
});

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

module.exports = app;