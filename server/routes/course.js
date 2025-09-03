import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addCourse } from '../controllers/courseController.js';

const router = express();

router.post("/add",authMiddleware, addCourse)

export default router