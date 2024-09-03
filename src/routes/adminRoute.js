const express = require("express");

const { claimContains } = require("../middlewares/claimMiddleware");
const adminController = require("../app/controllers/adminController");

const adminRoutes = express.Router();

// GET /admin/products
adminRoutes.get(
  "/products",
  claimContains("groups", "admin"),
  adminController.getListProduct
);

module.exports = adminRoutes;
