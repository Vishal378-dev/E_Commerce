
import express from "express";
import { product } from "../api/dashboard.api";
import { validatePrismaSchema } from "../middleware/schemaValidation";
import {productSchema} from "../schemaPrisma/productSchema"
const dashboardRouter = express.Router();

dashboardRouter.post('/product/create',validatePrismaSchema(productSchema),  product.createProduct);
dashboardRouter.get('/products',  product.fetchProducts);

export default dashboardRouter
