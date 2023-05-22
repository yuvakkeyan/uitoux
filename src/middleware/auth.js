const jwt = require("jsonwebtoken");
const User = require("../models/user");

var auth = async function (req, res, next) {
  try {
    var token = req.header("Authorization").replace("Bearer ", "");
    var decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log("decode", decode._id);
    var user = await User.findById(decode._id);

    if (!user) {
      res.status(403).send("unauthenticated");
      return;
    }

    req.role = user.role;
    next();
  } catch (e) {
    res.status(403).send("unauthenticated");
  }
};
module.exports = auth;
