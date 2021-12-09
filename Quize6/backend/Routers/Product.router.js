const express = require("express");
const router = express.Router();

const ProductController = require("../Controllers/Product.Controller");

router.post("/", ProductController.createNewProduct);

module.exports = router;
