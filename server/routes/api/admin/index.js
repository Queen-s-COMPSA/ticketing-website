const router = require("express").Router();
const path = require("path");

// Requiring passport
const Passport = require("#passport");

//Requiring CESAdmin Auth Middleware
const { isAdmin } = require("#auth");

// Login Serialization/Auth Route.
router.post("/login", (req, res, next) => {
  Passport.authenticate("admin", (err, admin, info) => {
    if (err) {
      return next(err);
    }

    if (!admin) {
      return next(new Error(info.message));
    }

    req.logIn(admin, (err) => {
      if (err) {
        return next(err);
      }

      return res.status(200).json({ message: "You are logged in as Admin" });
    });
  })(req, res, next);
});

// Everything before here should be publically accessible
router.all("*", isAdmin); // Everything past here client should be authorized

router.use("/account", require("./account"));

module.exports = router;
