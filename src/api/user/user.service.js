const User = require("../../models/user");

const getAdmin = function (req) {
  try {
    return User.find(req.query);
  } catch (err) {
    return err;
  }
};

const getAdminById = function (req) {
  try {
    return User.findById(req.params.id);
  } catch (err) {
    return err;
  }
};

const saveAdmin = function (req) {
  try {
    var user = new User(req.body);
    return User.save();
  } catch (err) {
    return err;
  }
};

const updateAdmin = function (req) {
  try {
    return User.findByIdAndUpdate(req.params.id, res.body);
  } catch (err) {
    return err;
  }
};

const deleteAdmin = function (req) {
  try {
    return User.findByIdAndDelete(req.params.id);
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAdmin,
  getAdminById,
  saveAdmin,
  updateAdmin,
  deleteAdmin,
};
