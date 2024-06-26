import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const saleTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
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

const SaleTypeModel = model('saleType', saleTypeSchema);
export default SaleTypeModel;
