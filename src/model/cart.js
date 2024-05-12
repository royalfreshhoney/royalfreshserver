import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const Id = Schema.Types.ObjectId

const cartSchema = new Schema({
    customer: {
        type: Id,
        required: true,
    },
    product: {
        type: Id,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    created_at: {
        type: String,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    },
    deleted_at: {
        type: Date,
        default: null
    }



});

const CartModel = model('cart', cartSchema);

export default CartModel;
