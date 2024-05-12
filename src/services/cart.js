import mongoose, { isObjectIdOrHexString } from "mongoose";
import CartModel from "../model/cart.js";
const { Schema } = mongoose;

export class CartService {


    async addCart(req) {
        try {
            const { customer, product, qty } = req?.body;
            const cart = new CartModel({ customer, product, qty });
            return await cart.save();
        } catch (error) {
            throw error;
        }
    }

    async getCart(req) {
        try {
            const data = await CartModel.aggregate([
                {
                    $lookup: {
                        from: 'customers',
                        localField: 'customer',
                        foreignField: '_id',
                        as: 'customer'
                    }
                },
                {
                    $lookup: {
                        from: 'products',
                        localField: 'product',
                        foreignField: '_id',
                        as: 'product'
                    }
                }

            ]);

            return data;
        } catch (error) {
            console.error('Error fetching category data:', error);
            throw error;
        }
    }


    async getByCustomer(req) {

        try {


            const customerId = req?.params.customerId
            const objectId = new mongoose.Types.ObjectId(customerId);
            const cartData = await CartModel.aggregate([
                {
                    $lookup: {
                        from: 'products',
                        localField: 'product',
                        foreignField: '_id',
                        as: 'product'
                    }
                },
                {
                    $match: {
                        'customer': new mongoose.Types.ObjectId(objectId)
                    }
                }
            ]);

            return cartData;

        } catch (error) {
            console.error('Error fetching category data:', error);
            throw error;
        }

    }

}

