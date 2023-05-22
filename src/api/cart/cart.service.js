const Cart = require("../../models/cart");

const getCart = function (req) {
  try {
    return Cart.find(req.query);
  } catch (err) {
    return err;
  }
};

const getCartById = function (req) {
  try {
    return Cart.findById(req.params.id);
  } catch (err) {
    return err;
  }
};

const saveCart = function (req) {
  try {
    var cart = new Cart(req.body);
    return Cart.save();
  } catch (err) {
    return err;
  }
};

const updateCart = function (req) {
  try {
    return Cart.findByIdAndUpdate(req.params.id, res.body);
  } catch (err) {
    return err;
  }
};

const deleteCart = function (req) {
  try {
    return Cart.findByIdAndDelete(req.params.id);
  } catch (err) {
    return err;
  }
};

module.exports = {
  getCart,
  getCartById,
  saveCart,
  updateCart,
  deleteCart,
};
