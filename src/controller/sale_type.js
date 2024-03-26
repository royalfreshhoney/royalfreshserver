import { sendResponse } from "../helper/handleresponse.js";
import { SaleTypeService } from "../services/sale_type.js";
const saleTypeService = new SaleTypeService

export class SaleTypeController {

    async add(req, res) {
        try {
            sendResponse(res, 200, await saleTypeService.addProduct(req));
        } catch (err) {
            console.error(err);
            sendResponse(res, 500, null, err);
        }
    }

    async get(req, res) {
        try {
            sendResponse(res, 200, await saleTypeService.getProduct(req));
        } catch (err) {
            console.error(err);
            sendResponse(res, 500, null, err);
        }
    }


}

