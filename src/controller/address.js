import { sendResponse } from "../helper/handleresponse.js";
import { AddressService } from "../services/address.js";
const addressService = new AddressService()

export class AddressController {

    async add(req, res) {
        try {
            sendResponse(res, 200, await addressService.addAddress(req));
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

