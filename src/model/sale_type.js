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
    }

});

const SaleTypeModel = model('saleType', saleTypeSchema);
export default SaleTypeModel;
