import Course from "../models/Course.js";

// Get All Course

export const getAllCourse = async (req, res) => {
    try {
        const courses = await Course.find({ isPublished: true }).select(['-courseContent', '-enrolledStudents']).populate({ path: 'educator' })
        res.json({ success: true, courses })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}
