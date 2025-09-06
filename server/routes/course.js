import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addCourse,getCourses,getCourse ,updateCourse,deleteCourse} from '../controllers/courseController.js';

const router = express();

router.post("/add",authMiddleware, addCourse)
router.get("/course",authMiddleware, getCourses)
router.get("/:id",authMiddleware, getCourse)
router.put("/:id",authMiddleware, updateCourse)
router.delete("/:id",authMiddleware, deleteCourse)

export default router