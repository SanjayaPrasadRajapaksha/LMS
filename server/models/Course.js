import mongoose from 'mongoose';

// Define lecture schema
const lectureSchema = new mongoose.Schema({
    lectureId: { type: String, required: true },
    lectureTitle: { type: String, required: true },
    lectureDuration: { type: Number, required: true },
    lectureUrl: { type: String, required: true },
    isPreviewFree: { type: Boolean, required: true },  // fixed typo
    lectureOrder: { type: Number, required: true },
}, { _id: false });

// Define chapter schema
const chapterSchema = new mongoose.Schema({
    chapterId: { type: String, required: true },
    chapterOrder: { type: String, required: true },
    chapterTitle: { type: String, required: true },
    chapterContent: [lectureSchema],
}, { _id: false });

// Define course schema
const courseSchema = new mongoose.Schema({
    courseTitle: { type: String, required: true },
    courseDescription: { type: String, required: true },
    courseThumbnail: { type: String },
    coursePrice: { type: Number, required: true },
    isPublished: { type: Boolean, required: true },
    discount: { type: Number, required: true, min: 0, max: 100 },
    courseContent: [chapterSchema],  // fixed: referenced chapterSchema
    courseRatings: [
        {
            userId: { type: String },
            rating: { type: Number, min: 1, max: 5 },
        }
    ],
    educator: { type: String, ref: 'User', required: true },
    enrolledStudents: [
        { type: String, ref: 'User' }
    ]
}, { timestamps: true, minimize: false });

const Course = mongoose.model("Course", courseSchema);

export default Course;
