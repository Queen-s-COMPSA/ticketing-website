//Custom Middleware to ensure userTypes in routing and requests

module.exports = {
  isAdmin: (req, res, next) => {
    if (req.user && req.user.type === "admin") return next();
    return res
      .status(400)
      .json({ error: new Error("Could Not Authenticate Admin") });
  },

  isUser: (req, res, next) => {
    if (req.user && req.user.type === "user") return next();
    return res
      .status(400)
      .json({ error: new Error("Could Not Authenticate Admin") });
  },
};
