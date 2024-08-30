const NotFoundError = require("../../app/errors/NotFoundError");

const productRepository = require("../../infra/repositories/fileProductRepository");
const models = require("../models");

const listProducts = async (query) => {
  const { products, totalCount } = await productRepository.listProducts(query);
  return {
    products,
    totalCount,
  };
};

const findById = async (id) => {
  const product = await productRepository.findById(id);
  return product;
};

module.exports = {
  listProducts,
  findById,
};
