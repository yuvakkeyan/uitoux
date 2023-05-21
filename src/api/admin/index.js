const express = require("express");
const router = express.Router();
const controller = require("./admin.controller");

router.post("/", controller.saveAdmin);
router.put("/:id", controller.updateAdmin);
router.delete("/:id", controller.deleteAdmin);
router.get("/:id", controller.getAdminById);
router.get("/", controller.getAdmin);

module.exports = router;