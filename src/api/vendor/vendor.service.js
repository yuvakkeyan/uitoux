const Vendor = require("../../models/vendor");

const getVendor = function (req) {
  try {
    return User.find(req.query);
  } catch (err) {
    return err;
  }
};

const getVendorById = function (req) {
  try {
    return User.findById(req.params.id);
  } catch (err) {
    return err;
  }
};

const saveVendor = function (req) {
  try {
    var user = new User(req.body);
    return User.save();
  } catch (err) {
    return err;
  }
};

const updateVendor = function (req) {
  try {
    return User.findByIdAndUpdate(req.params.id, res.body);
  } catch (err) {
    return err;
  }
};

const deleteVendor = function (req) {
  try {
    return User.findByIdAndDelete(req.params.id);
  } catch (err) {
    return err;
  }
};

module.exports = {
    getVendor,
    getVendorById,
    saveVendor,
    updateVendor,
    deleteVendor,
};
