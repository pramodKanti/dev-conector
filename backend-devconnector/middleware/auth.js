const jwt = require("jsonwebtoken");
const config = "hello";
const mySecret = "secret";
module.exports = function (req, res, next) {
  // Get token from header
  console.log();
  // const token = req.header("x-auth-token");
  const token = req.headers.authorization.split(" ")[1];

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  console.log(token);

  // Verify token
  try {
    jwt.verify(token, mySecret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
