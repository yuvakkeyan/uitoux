const express = require('express');
const router = express.Router();
const controller = require("./address.controller");

router.post("/", controller.saveAddress);
router.put("/:id", controller.updateAddress);
router.delete("/:id", controller.deleteAddress);
router.get("/count", controller.countAddress);
router.get("/:id", controller.countAddress);
router.get("/", controller.getAddress);

module.exports = router;