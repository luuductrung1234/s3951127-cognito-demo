const controller = require("../../utils/controller");
const dto = require("../dto");
const productService = require("../services/adminProductService");

const getListProduct = controller.get(async (req, res) => {
  const { products, totalCount } = await productService.listProducts(req.query);
  res.render("admin/product-list", {
    pageTitle: "Admin Products",
    path: "/admin/products",
    isAuth: req.isAuth,
    username: req.username,
    products,
    totalCount,
    previousQuery: req.query,
  });
}, dto.ListProductQuery);

module.exports = {
  getListProduct,
};
