import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://pandayshubham38:Shubh171195@cluster0.swst1.mongodb.net/food-del').then(()=>console.log('DB Connected'))
}