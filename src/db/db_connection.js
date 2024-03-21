import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/royaladmin');
        console.log("db connected successfully")
    } catch (error) {
        console.log('error connecting db')
        handleError(error);
    }

}