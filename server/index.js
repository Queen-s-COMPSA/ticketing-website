const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo"] });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
