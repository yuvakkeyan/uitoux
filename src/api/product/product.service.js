const Product = require("../../models/product");

const getProduct = function (req) {
  try {
    return User.find(req.query);
  } catch (err) {
    return err;
  }
};

const getProductById = function (req) {
  try {
    return User.findById(req.params.id);
  } catch (err) {
    return err;
  }
};

const saveProduct = function (req) {
  try {
    var user = new Product(req.body);
    return Product.save();
  } catch (err) {
    return err;
  }
};

const updateProduct = function (req) {
  try {
    return Product.findByIdAndUpdate(req.params.id, res.body);
  } catch (err) {
    return err;
  }
};

const deleteProduct = function (req) {
  try {
    return Product.findByIdAndDelete(req.params.id);
  } catch (err) {
    return err;
  }
};

module.exports = {
  getProduct,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
};
