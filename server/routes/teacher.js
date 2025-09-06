import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addTeacher , upload} from '../controllers/teacherController.js';

const router = express();

router.post("/add",authMiddleware,upload.single('image'), addTeacher)
//router.get("/course",authMiddleware, getCourses)
//router.get("/:id",authMiddleware, getCourse)
//router.put("/:id",authMiddleware, updateCourse)
//router.delete("/:id",authMiddleware, deleteCourse)

export default router