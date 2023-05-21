const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

var auth = async function (req, res, next) {
  try {
    var token = req.header("Authorization").replace("Bearer ", "");
    var decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log("decode", decode._id);
    var admin = await Admin.findById(decode._id);

    if (!admin) {
      res.status(403).send("unauthenticated");
      return;
    }
    next();
  } catch (e) {
    res.status(403).send("unauthenticated");
  }
};
module.exports = auth;
