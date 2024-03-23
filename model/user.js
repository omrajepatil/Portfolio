import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const User=new mongoose.model('User',schema);

export default User;