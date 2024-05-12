import AddressModel from "../model/address.js";

export class AddressService {


    async addAddress(req) {
        try {
            const { city, state, area, address1, address2, street, zipCode, comment, user } = req?.body;
            const address = new AddressModel({ city, state, area, address1, address2, street, zipCode, comment, user });
            return await address.save();
        } catch (error) {
            throw error;
        }
    }

    // async getCategory(req) {
    //     try {
    //         return await CategoryModel.find();
    //     } catch (error) {
    //         throw error;
    //     }
    // }

}

