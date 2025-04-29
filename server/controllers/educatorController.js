import { clerkClient } from "@clerk/express"
import { v2 as cloudinary } from "cloudinary"
import Course from "../models/Course.js"
// update role to educator
export const updateRoleToEducator = async (req, res) => {
    try {
        const userId = req.auth.userId
        await clerkClient.users.updateUserMetadata(userId, {
            privateMetadata: {
                role: 'educator'
            }
        })
        res.json({ success: true, message: 'You can publish a course now' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Add New Course
export const addCourse = async (req, res) => {
    try {
        const { courseData } = req.body;
        const imageFile = req.file;
        const educatorId = req.auth.userId;

        if (!imageFile) {
            return res.status(400).json({ success: false, message: 'Thumbnail Not Attached' });
        }

        const parsedCourseData = JSON.parse(courseData);
        parsedCourseData.educator = educatorId;

        const newCourse = await Course.create(parsedCourseData);

        const imageUpload = await cloudinary.uploader.upload(imageFile.path);
        newCourse.courseThumbnail = imageUpload.secure_url;
        await newCourse.save();

        res.json({ success: true, message: 'Course Added' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};