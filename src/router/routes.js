import express from "express";
import { ProductController } from "../controller/product.js";

const router = express.Router();
const product = new ProductController()
router.post("/product/add", product.add);

export default router;
