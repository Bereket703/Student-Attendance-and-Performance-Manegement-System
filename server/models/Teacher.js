import mongoose from "mongoose";
import { Schema } from "mongoose";


const teacherSchema = new Schema(
  {
    teacherId: {
      type: String, 
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    gender: {
      type: String,
      
    },
    dob: {
      type: Date,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // assumes you already have a Course model
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    image: {
      type: String,
      default: null,
    },
    createAt:{type:Date,default:Date.now},
    updatedAt: {type: Date, default: Date.now}
  }
 
);

const Teacher = mongoose.model("Teacher",teacherSchema);
export default Teacher;