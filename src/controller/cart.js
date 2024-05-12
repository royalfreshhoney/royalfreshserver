import { sendResponse } from "../helper/handleresponse.js";
import { CartService } from "../services/cart.js";
const cartService = new CartService

export class CartController {

    async add(req, res) {
        try {
            sendResponse(res, 200, await cartService.addCart(req));
        } catch (err) {
            console.error(err);
            sendResponse(res, 500, null, err);
        }
    }

    async get(req, res) {
        try {
            sendResponse(res, 200, await cartService.getCart(req));
        } catch (err) {
            console.error(err);
            sendResponse(res, 500, null, err);
        }
    }

    async getByCustomer(req, res) {
        try {
            sendResponse(res, 200, await cartService.getByCustomer(req));
        } catch (err) {
            console.error(err);
            sendResponse(res, 500, null, err);
        }
    }


}

