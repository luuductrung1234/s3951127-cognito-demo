const express = require("express");

const adminController = require("../app/controllers/adminController");

const adminRoutes = express.Router();

// GET /admin/products
adminRoutes.get("/products", adminController.getListProduct);

module.exports = adminRoutes;
