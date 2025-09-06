import Course from "../models/Course.js"

const getCourses = async ( req,res) =>{
try {
    const course = await Course.find()
    return res.status(200).json({success: true, course})
} catch (error) {
    return res.status(500).json({success:false, error: "get course server error"})
}
}
const addCourse = async (req,res) =>{
    try {
        const {course_name, description} = req.body
        const newCourse = new Course({
         course_name,
         description
        })
        await newCourse.save()
        return res.status(200).json({success: true,course: newCourse})
    } catch (error) {
        return res.status(500).json({success:false, error: "add course server error"})
        
    }
}
const getCourse = async (req,res) =>{
    try {
        const {id} =req.params;
        const course = await Course.findById({_id:id})
        return res.status(200).json({success: true, course})
} catch (error) {
    return res.status(500).json({success:false, error: "get course server error"})
}
        
    }

const updateCourse = async (req,res) =>{
   try {
    const {id} = req.params;
    const {course_name,description} = req.body;
    const updateCourse = await Course.findOneAndUpdate({_id:id},{
        course_name,
        description
    })
    return res.status(200).json({success: true, updateCourse})

   }catch (error) {
    return res.status(500).json({success:false, error: "edit course server error"})
}
}
const deleteCourse = async (req,res) => {
     try {
    const {id} = req.params;
    const deleteCourse = await Course.findByIdAndDelete({_id:id})
    return res.status(200).json({success: true, deleteCourse})

   }catch (error) {
    return res.status(500).json({success:false, error: "delete course server error"})
}
}
export {getCourses ,addCourse ,getCourse, updateCourse , deleteCourse}

