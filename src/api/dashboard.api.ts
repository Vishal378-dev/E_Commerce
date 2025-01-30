import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";
import Joi from "joi";
import { checkSchema } from "../utils/schemaValidation";
import { variant, variantAttribute } from "../utils/enum";

const prisma = new PrismaClient();


export class product {
  public static async createProduct(req: Request, res: Response) {
    const { sellerId, asABrand, categoryId, isActive } = req.body;
    const variant: variant[] = req.body.variant;
    const variantAttribute: variantAttribute[] = req.body.variantAttribute;
    try {
      const productResult = await prisma.product.create({
        data: {
          isActive: isActive ? isActive : false,
          sellerId: sellerId,
          asABrand: asABrand,
          categoryId: categoryId,
          variantAttribute: variantAttribute,
        },
      });

      await prisma.variantTypes.createMany({
        data: variant,
        skipDuplicates: true,
      });
      res.status(200).json({
        message: "Success",
        data: productResult,
      });
      return;
    } catch (err) {
      console.log(err);
      res.status(404).send("Something went wrong");
      return;
    }
  }

  public static async fetchProducts(req: Request, res: Response) {
    try {
      const productResult = await prisma.variantTypes.findMany({
        where:{
          variantName: "default"
        }
      });
      res.status(200).json({
        message: "Success",
        data: productResult,
      });
      return;
    } catch (err) {
      console.log(err);
      res.status(404).send("Something went wrong");
      return;
    }
  }
}
