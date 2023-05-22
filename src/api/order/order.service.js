const Order = require("../../models/order");

const getOrder = function (req) {
  try {
    return Order.find(req.query);
  } catch (err) {
    return err;
  }
};

const getOrderById = function (req) {
  try {
    return Order.findById(req.params.id);
  } catch (err) {
    return err;
  }
};

const saveOrder = function (req) {
  try {
    var order = new Order(req.body);
    return Order.save();
  } catch (err) {
    return err;
  }
};

const updateOrder = function (req) {
  try {
    return Order.findByIdAndUpdate(req.params.id, res.body);
  } catch (err) {
    return err;
  }
};

const deleteOrder = function (req) {
  try {
    return Order.findByIdAndDelete(req.params.id);
  } catch (err) {
    return err;
  }
};

module.exports = {
  getOrder,
  getOrderById,
  saveOrder,
  updateOrder,
  deleteOrder,
};
