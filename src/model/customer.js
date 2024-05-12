import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const customerSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
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

const CustomerModel = model('customer', customerSchema);
export default CustomerModel;
