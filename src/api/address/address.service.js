const Address = require("../../models/address");

const getAddress = function (req) {
  try {
    return Address.find(req.query);
  } catch (err) {
    return err;
  }
};

const getAddressById = function (req) {
  try {
    return Address.findById(req.params.id);
  } catch (err) {
    return err;
  }
};

const saveAddress = function (req) {
  try {
    var address = new Address(req.body);
    return Address.save();
  } catch (err) {
    return err;
  }
};

const updateAddress = function (req) {
  try {
    return Address.findByIdAndUpdate(req.params.id, res.body);
  } catch (err) {
    return err;
  }
};

const deleteAddress = function (req) {
  try {
    return Address.findByIdAndDelete(req.params.id);
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAddress,
  getAddress,
  saveAddress,
  updateAddress,
  deleteAddress,
};
