const express = require('express');
const router = express.Router();
const controller = require("./product.controller");

router.post("/", controller.saveProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);
router.get("/count", controller.countProduct);
router.get("/:id", controller.countProduct);
router.get("/", controller.getProducts);

module.exports = router;
