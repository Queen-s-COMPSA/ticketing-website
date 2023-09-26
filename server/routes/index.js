const express = require("express");
const router = express.Router();
const path = require("path");

// Handle Logout Route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }

    res.status(200).json({ status: "You have logged out" });
  });
});

// API Routes
router.use("/api", require(path.join(__dirname, "api")));

module.exports = router;
