import express from "express";
import { ProductController } from "../controller/product.js";
import { CategoryController } from "../controller/category.js";
import { SaleTypeController } from "../controller/sale_type.js";

const router = express.Router();

const product = new ProductController()
router.post("/product/add", product.add);
router.get("/product/get", product.get);

const category = new CategoryController()
router.post("/category/add", category.add);
router.get("/category/get", category.get);

const saleType = new SaleTypeController()
router.get("/sale-type/get", saleType.get);





export default router;
