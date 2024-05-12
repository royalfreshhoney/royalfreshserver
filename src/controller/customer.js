import { sendResponse } from "../helper/handleresponse.js";
import { CustomerService } from "../services/customer.js";
const customerService = new CustomerService()

export class CustomerController {

    async add(req, res) {
        try {
            sendResponse(res, 200, await customerService.addCustomer(req));
        } catch (err) {
            console.error(err);
            sendResponse(res, 500, null, err);
        }
    }

    // async get(req, res) {
    //     try {
    //         sendResponse(res, 200, await categoryService.getProduct(req));
    //     } catch (err) {
    //         console.error(err);
    //         sendResponse(res, 500, null, err);
    //     }
    // }


}

