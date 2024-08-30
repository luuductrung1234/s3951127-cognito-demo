const fs = require("node:fs/promises");
const path = require("node:path");

const model = require("../../app/models");
const rootDir = require("../../utils/path");

const filePath = path.join(rootDir, "infra", "data", "products.json");

/**
 * @param query
 * @returns
 * @type {(query: {
 * 	isDeleted: boolean | undefined,
 * 	recommended: boolean | undefined,
 * 	featured: boolean | undefined,
 * 	isDiscount: boolean | undefined,
 * 	searchText: string | undefined,
 * 	pageIndex: number | undefined,
 * 	pageSize: number | undefined,
 * 	sortBy: string | undefined,
 * 	sortDirection: string | undefined})
 * 	=> Promise<{
 *		products: import("../../app/models").Product[],
 *		totalCount: number
 * 	}>}
 */
const listProducts = async (query) => {
  try {
    const content = await fs.readFile(filePath, { encoding: "utf8" });
    let products = model.Product.fromString(content);

    if (query.recommended !== undefined) {
      products = products.filter((p) => p.recommended);
    }
    if (query.featured !== undefined) {
      products = products.filter((p) =>
        p.attributes.some((a) => a.name === "featured")
      );
    }
    if (query.isDiscount !== undefined) {
      products = products.filter((p) => p.discountPrice !== null);
    }

    return {
      products,
      totalCount: products.length,
    };
  } catch (err) {
    return { products: [], totalCount: 0 };
  }
};
/**
 * @param id
 * @returns
 * @type {(id: number) => Promise<import("../../app/models").Product>}
 */
const findById = async (id) => {
  return (await listProducts({})).products.find((p) => p.id === id);
};

module.exports = {
  listProducts,
  findById,
};
