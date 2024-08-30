const Joi = require("joi");
const BaseDto = require("../../../utils/baseDto");

class CreateProductDto extends BaseDto {
  constructor() {
    super(
      Joi.object({
        title: Joi.string().min(3).max(255).required(),
        imageUrl: Joi.string().max(500).required(),
        description: Joi.string().optional().default(""),
        price: Joi.number().min(0),
        attributeValues: Joi.array()
          .items(
            Joi.object({
              attributeId: Joi.string().required(),
              value: Joi.any().empty("").default(null).optional(),
            })
          )
          .optional()
          .default([]),
      })
    );
  }
}

module.exports = CreateProductDto;
