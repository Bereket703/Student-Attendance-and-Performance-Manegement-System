import Teacher from "../models/Teacher.js"
import User from "../models/User.js"
import bcrypt from 'bcrypt'
import multer from "multer";

const storage =  multer.diskStorage({
    destination: (req ,file ,cb) =>{
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) =>{
        cb(null, Data.now() = path.extname(file.originalname))
    }
})

const upload = multer({storage:storage})

const addTeacher = async (req , res) =>{
    try {

    
const { 
    teacherId, 
    userId, 
    fullName, 
    email, 
    gender, 
    dob, 
    course, 
    password,
    role
    } = req.body;



const user = await User.findOne({email})
if(user){
    return res.status(400).json({success: false,error: " user already registered on teacher list"});
    
}
const hashPassword = await bcrypt.hash(password,10)
const newUser = new User({
    fullName,
    email,
    gender,
    password:hashPassword,
    role,
    image: req.file ? req.file.filename: ""
    
})
const savedUser = await newUser.save()
const newTeacher = new Teacher({
    userId: savedUser._id,
    teacherId,
    fullName,
    email,
    gender,
    dob,
    course,
    password: await bcrypt.hash(password, 10),
    image,

})
await newTeacher.save()
return res.status(200).json({success:true, message: "teacher created"})
    } catch(error) {
        return res.status(500).json({success:false, error: "server erroe  in adding a teacher"})

    }
}
export {addTeacher , upload}