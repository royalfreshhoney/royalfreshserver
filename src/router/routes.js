import express from "express";
import { ProductController } from "../controller/product.js";
import { CategoryController } from "../controller/category.js";
import { SaleTypeController } from "../controller/sale_type.js";
import { CustomerController } from "../controller/customer.js";
import { CartController } from "../controller/cart.js";
import { AddressController } from "../controller/address.js";
const product = new ProductController()
const category = new CategoryController()
const saleType = new SaleTypeController()
const cart = new CartController()
const customer = new CustomerController()
const address = new AddressController()

const router = express.Router();

router.post("/product/add", product.add);
router.get("/product/get", product.get);


router.post("/category/add", category.add);
router.get("/category/get", category.get);


router.get("/sale-type/get", saleType.get);

router.post("/customer/add", customer.add);

router.post("/cart/add", cart.add);
router.get("/cart/get", cart.get);
router.get("/cart/get/by-customer/:customerId", cart.getByCustomer);


router.post("/address/add",address.add)












export default router;
