import ProductModel from "../model/product.js";

export class ProductService {


    async addProduct(req) {
        try {
            const { name, price, description, category, dummyPrice, qty, saleType, color, size, avg_rating } = req?.body;
            const product = new ProductModel({ name, price, description, category, dummyPrice, qty, saleType, color, size, avg_rating });
            console.log(product)
            return await product.save();
        } catch (error) {
            throw error;
        }
    }

    async getProduct(req) {
        try {
            return await ProductModel.find();
        } catch (error) {
            throw error;
        }
    }

}

