import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";
import Joi from "joi";
import {checkSchema} from "../utils/schemaValidation";

const prisma = new PrismaClient();

export class product {
  public static async createProduct(req: Request, res: Response) {
    const {sellerId,asABrand,categoryId,isActive} = req.body;
    try {
     const productResult = await prisma.product.create({data:{
            isActive: isActive ? isActive : false,
            sellerId:sellerId,
            asABrand:asABrand,
            categoryId:categoryId,
            variantAttribute:{
                a:""
            }
      }})
      res.status(200).json({
        message: "Success",
        data:productResult
      });
      return
    } catch (err) {
        console.log(err)
      res.status(404).send("Something went wrong");
         return
    }
  }

  public static async fetchProducts(req:Request,res:Response){
    try {
         const productResult = await prisma.product.findMany()
         res.status(200).json({
           message: "Success",
           data:productResult
         });
         return
       } catch (err) {
           console.log(err)
         res.status(404).send("Something went wrong");
            return
       }
  }
}
