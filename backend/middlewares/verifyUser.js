const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(new Error("You need to log in"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(new Error("Token is not valid"));
    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
