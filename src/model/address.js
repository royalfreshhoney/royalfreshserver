import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const Id = Schema.Types.ObjectId

const addressSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: false
    },
    area: {
        type: String,
        required: true
    },
    street: {
        type: Number,
        required: false
    },
    zipCode: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    user: {
        type: Id,
        required: true
    }

});

const AddressModel = model('address', addressSchema);

export default AddressModel;
