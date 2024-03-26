import CategoryModel from "../model/category.js";
import SaleTypeModel from "../model/sale_type.js";

export class SaleTypeService {


    async addCategory(req) {
        try {
            const { name, description, } = req?.body;
            const saleType = new SaleTypeModel({ name, description });
            return await saleType.save();
        } catch (error) {
            throw error;
        }
    }

    async getCategory(req) {
        try {
            return await SaleTypeModel.find();
        } catch (error) {
            throw error;
        }
    }

}

