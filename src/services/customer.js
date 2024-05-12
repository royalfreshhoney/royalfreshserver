import CustomerModel from "../model/customer.js";

export class CustomerService {


    async addCustomer(req) {
        try {
            const { name, email, phone } = req?.body;
            const customer= new CustomerModel({ name, email , phone });
            return await customer.save();
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

