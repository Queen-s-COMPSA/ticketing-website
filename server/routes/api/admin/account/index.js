const router = require("express").Router();
const { isAdmin } = require("#auth");

router.get("/", isAdmin, (req, res) => {
  return res.json({
    email: req.user["email"],
    id: req.user["id"],
  });
});

module.exports = router;
