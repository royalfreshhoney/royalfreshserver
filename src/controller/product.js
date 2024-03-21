import { sendResponse } from "../helper/handleresponse.js";
import { ProductService } from "../services/product.js";
const productService = new ProductService

export class ProductController {

    async add(req, res) {
        try {
            sendResponse(res, 200, await productService.addProduct(req));
        } catch (err) {
            console.error(err);
            sendResponse(res, 500, null, err);
        }
    }


}

