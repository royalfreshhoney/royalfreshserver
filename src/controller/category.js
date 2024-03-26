import { sendResponse } from "../helper/handleresponse.js";
import { CategoryService } from "../services/category.js";
const categoryService = new CategoryService

export class CategoryController {

    async add(req, res) {
        try {
            sendResponse(res, 200, await categoryService.addProduct(req));
        } catch (err) {
            console.error(err);
            sendResponse(res, 500, null, err);
        }
    }

    async get(req, res) {
        try {
            sendResponse(res, 200, await categoryService.getProduct(req));
        } catch (err) {
            console.error(err);
            sendResponse(res, 500, null, err);
        }
    }


}

