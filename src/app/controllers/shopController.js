const controller = require("../../utils/controller");
const dto = require("../dto");
const productService = require("../services/productService");

const getShop = controller.get(async (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Shop",
    path: "/",
    isAuth: req.isAuth,
    username: req.username,
    recommendedProducts: (
      await productService.listProducts({
        recommended: true,
      })
    ).products,
    featuredProducts: (
      await productService.listProducts({
        featured: true,
      })
    ).products,
    discountProducts: (
      await productService.listProducts({
        isDiscount: true,
      })
    ).products,
  });
});

const getListProduct = controller.get(async (req, res, next) => {
  const { products, totalCount } = await productService.listProducts(req.query);
  res.render("shop/product-list", {
    pageTitle: "All Products",
    path: "/products",
    isAuth: req.isAuth,
    username: req.username,
    products,
    totalCount,
    previousQuery: req.query,
  });
}, dto.ListProductQuery);

const getProduct = controller.get(async (req, res, next) => {
  res.render("shop/product-detail", {
    pageTitle: "Product",
    path: "/products",
    isAuth: req.isAuth,
    username: req.username,
    product: await productService.findById(req.params.id),
  });
}, dto.FindProductParams);

module.exports = {
  getShop,
  getListProduct,
  getProduct,
};
