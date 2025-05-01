import express from 'express';
import { getAllCourse, getCourseId } from '../controllers/courseController.js';


const courseRouter = express.Router()

// Add Educator Role
courseRouter.get('/all', getAllCourse)
courseRouter.get('/:id', getCourseId)


export default courseRouter;