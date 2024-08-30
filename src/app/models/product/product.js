class Product {
  /**
   * @param {number} id
   * @param {string} title
   * @param {string} imageUrl
   * @param {string} description
   * @param {number} price
   * @param {string} category
   * @param {string[]} attributes
   * @param {boolean} recommended
   * @param {number} discountPrice
   */
  constructor(
    id,
    title,
    imageUrl,
    description,
    price,
    category,
    attributes,
    recommended,
    discountPrice
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.category = category;
    this.attributes = attributes;
    this.recommended = recommended;
    this.discountPrice = discountPrice;
    this.isDeleted = false;
  }

  static getAttributes = () => Object.keys(new Product());

  /**
   * @param value
   * @returns
   * @type {(value: string | undefined)
   * 	=> Product[]>}
   */
  static fromString = (value) => {
    return JSON.parse(value).map(
      (p) =>
        new Product(
          p.id,
          p.title,
          p.imageUrl,
          p.description,
          p.price,
          p.category,
          p.attributes,
          p.recommended,
          p.discountPrice
        )
    );
  };
}

module.exports = Product;
