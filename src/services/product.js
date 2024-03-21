import ProductModel from "../model/product.js";

export class ProductService {


    async addProduct(req) {
        try {
            const { name, price, description, category } = req.body;
            const product = new ProductModel({ name, price, description, category });
            return await product.save();
        } catch (error) {
            throw error;
        }
    }

}

