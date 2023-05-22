const User = require("../../models/user");
const service = require("./user.service");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUser = async (req, res)=> {
  try {
    let User = await service.getUser(req);
    res.status(200).send(User);
  }catch(err) {
    res.status(500).send("Internal server Error");
  }
};

const getUserById = async (req, res) => {
  try {
    let User = await service.getUserById(req);
    res.status(200).send(User);
  }catch(err) {
    res.status(500).send("Internal server Error");
  }
};

const saveUser = async (req, res) => {
  try {
    await service.saveUser(req);
    res.status(200).send("User Saved Succesfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server Error");
  }
};

const updateUser = async (req, res) => {
  try {
    let User = await service.updateUser(req);
    res.status(200).send(User);
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
};

const deleteUser = async(req, res) => {
  try {
    let User = await service.deleteUser(req);
    res.status(200).send(User);
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
};

const loginUser = async(req,res) => {
  try {
    var user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      res.status(400).send({
        msg: "Invalid Credentials",
      });
      return;
    }
    var isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      res.status(400).send({
        msg: "Invalid Credentials",
      });
      return;
    }

    var token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    await user.save();

    res.status(200).send({
      msg: "Login Successfully",
      token,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      msg: "Unable to Login",
    });
  }
}

const logoutUser = async(req,res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      token: "",
    });
    res.status(200).send({
      msg: "Logout successfully",
    });
  } catch (e) {
    res.status(500).send({
      msg: "Unable to logout",
      error: e,
    });
  }
}

module.exports = {
  getUser,
  getUserById,
  saveUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser
};
