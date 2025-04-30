import express from 'express';
import { addCourse, educatorDashboardData, getEducatorCourses, getEnrolledStudentsData, updateRoleToEducator } from '../controllers/educatorController.js'; 
import upload from '../configs/multer.js';
import { projectEducator } from '../middlewares/authMiddleware.js';

const educatorRouter = express.Router()

// Add Educator Role
educatorRouter.get('/update-role', updateRoleToEducator)
educatorRouter.post('/add-course', upload.single('image'), projectEducator,addCourse)
educatorRouter.get('/courses', projectEducator,getEducatorCourses)
educatorRouter.get('/enrolled-students', projectEducator,getEnrolledStudentsData)
educatorRouter.get('/dashboard', projectEducator,educatorDashboardData)

export default educatorRouter;