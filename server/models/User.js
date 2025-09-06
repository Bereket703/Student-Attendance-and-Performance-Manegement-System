import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
    role:{type:String, enum:["admin","attendance_Checker","teacher","student"],required:true},
    profile_Image:{type:String},
    createAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
})

const User = mongoose.model("user", userSchema)
export default User