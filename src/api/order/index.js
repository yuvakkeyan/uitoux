const express = require('express');
const router = express.Router();
const controller = require("./user.controller");

router.post("/", controller.saveUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);
router.get("/count", controller.countUser);
router.get("/:id", controller.countUser);
router.get("/", controller.getUsers);

module.exports = router;
