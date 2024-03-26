import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const Id = Schema.Types.ObjectId

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: { 
        type: Id,
        required: true
    },
    dummyPrice: {
        type: Number,
        required: false
    },
    qty: {
        type: Number,
        required: false
    },
    saleType: {
        type: Id, // sale , out-of-stock , selling_fast , etc.
        required: true
    },
    color: {
        type: String,
        required: false
    },
    size: {
        type: String,
        required: false
    },
    avg_rating: {
        type: String,
        required: false,
        default: 4.2
    }


});

const ProductModel = model('product', productSchema);

export default ProductModel;
