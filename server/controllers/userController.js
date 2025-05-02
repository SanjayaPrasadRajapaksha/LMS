import User from "../models/User.js";
import { getEnrolledStudentsData } from "./educatorController.js";


// Get user data
export const getUserData = async (req, res) => {
    try {
        const userId = req.auth.userId
        const user = await User.findById(userId)

        if (!user) {
            res.json({ success: false, message: 'User Not Found' })
        }
        res.json({ success: true, user })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Users Enrolled Courses with Licture Links
export const userEnrolledCourses = async (req, res) => {
    try {
        const userId = req.auth.userId
        const userData = await User.findById(userId).populate('enrolledCourse')
        res.json({ success: true, enrolledCourses: userData.enrolledCourse })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}