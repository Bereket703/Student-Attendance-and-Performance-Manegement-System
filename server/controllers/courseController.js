import Course from "../models/Course.js"

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
export {addCourse}