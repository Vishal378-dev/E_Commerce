import Joi from "joi";

export const productSchema = Joi.object({
  sellerId: Joi.string().min(5).required(),
  asABrand: Joi.boolean().required(),
  categoryId: Joi.string().required(),
  isActive: Joi.boolean(),
  variantAttribute: Joi.any(),
});
