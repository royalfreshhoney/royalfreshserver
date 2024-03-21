import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://royalfreshhoney:wsSb318DUOKlnvpC@cluster0.yshyqhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("db connected successfully")
    } catch (error) {
        console.log('error connecting db')
        console.log(error)
    }

}