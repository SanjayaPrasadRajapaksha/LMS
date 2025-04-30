import express from 'express';
import { addCourse, getEducatorCourses, updateRoleToEducator } from '../controllers/educatorController.js'; 
import upload from '../configs/multer.js';
import { projectEducator } from '../middlewares/authMiddleware.js';

const educatorRouter = express.Router()

// Add Educator Role
educatorRouter.get('/update-role', updateRoleToEducator)
educatorRouter.post('/add-course', upload.single('image'), projectEducator,addCourse)
educatorRouter.get('/courses', projectEducator,getEducatorCourses)
export default educatorRouter;