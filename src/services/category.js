import CategoryModel from "../model/category.js";

export class CategoryService {


    async addCategory(req) {
        try {
            const { name, description, } = req?.body;
            const category = new CategoryModel({ name, description });
            return await category.save();
        } catch (error) {
            throw error;
        }
    }

    async getCategory(req) {
        try {
            return await CategoryModel.find();
        } catch (error) {
            throw error;
        }
    }

}

