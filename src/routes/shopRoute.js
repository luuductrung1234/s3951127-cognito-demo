const express = require("express");

const shopController = require("../app/controllers/shopController");

const shopRoutes = express.Router();

// GET /
shopRoutes.get("/", shopController.getShop);
// GET /products
shopRoutes.get("/products", shopController.getListProduct);
// GET /products/:id
shopRoutes.get("/products/:id", shopController.getProduct);

module.exports = shopRoutes;
