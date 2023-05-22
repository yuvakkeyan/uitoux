const express = require("express");
const router = express.Router();
const controller = require("./product.controller");
const auth = require("../../middleware/auth");
const checkRole = require("../../middleware/checkRole");
const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "img");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
});

router.post("/", auth, checkRole(["ADMIN", "VENDOR"]), upload.single("image"), controller.saveProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);
router.get("/count", controller.countProduct);
router.get("/:id", controller.countProduct);
router.get("/", controller.getProducts);

module.exports = router;
