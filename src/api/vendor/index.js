const express = require("express");
const router = express.Router();
const controller = require("./vendor.controller");

router.post("/", controller.saveVendor);
router.put("/:id", controller.updateVendor);
router.delete("/:id", controller.deleteVendor);
router.get("/:id", controller.getVendorById);
router.get("/", controller.getVendor);

module.exports = router;