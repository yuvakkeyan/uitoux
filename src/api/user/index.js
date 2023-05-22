const express = require("express");
const router = express.Router();
const controller = require("./user.controller");

router.post("/login", controller.loginUser);
router.post("/", controller.saveUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);
router.get("/logout", controller.logoutUser);
router.get("/:id", controller.getUserById);
router.get("/", controller.getUser);

module.exports = router;