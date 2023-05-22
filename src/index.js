require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT;

const Admin = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post("/api/login", async (req, res) => {
//   try {
//     var user = await Users.findOne({
//       email: req.body.email,
//     });

//     if (!user) {
//       res.status(400).send({
//         msg: "Invalid Credentials",
//       });
//       return;
//     }
//     var isMatch = await bcrypt.compare(req.body.password, user.password);

//     if (!isMatch) {
//       res.status(400).send({
//         msg: "Invalid Credentials",
//       });
//       return;
//     }

//     var token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
//       expiresIn: "1h",
//     });
//     await user.save();

//     res.status(200).send({
//       msg: "Login Successfully",
//       token,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).send({
//       msg: "Unable to Login",
//     });
//   }
// });

// // User Logout
// app.get("/api/logout/:id", async (req, res) => {
//   try {
//     await Users.findByIdAndUpdate(req.params.id, {
//       token: "",
//     });
//     res.status(200).send({
//       msg: "Logout successfully",
//     });
//   } catch (e) {
//     res.status(500).send({
//       msg: "Unable to logout",
//       error: e,
//     });
//   }
// });

routes.apiRoute(app);

app.listen(PORT || 3000, ()=>{
    console.log(`The server is upon the ${PORT}`);
});