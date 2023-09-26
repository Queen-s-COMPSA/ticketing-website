const express = require("express");
const router = express.Router();

// Requiring admin's route
router.use("/admin", require("./admin"));

// Allows client to get session info
router.get("/getSessionUser", (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res
      .status(200)
      .json({ error: new Error("You are not currently logged in") });
  }
});

module.exports = router;
