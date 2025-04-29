import mongoose from "mongoose";
import { type } from "os";
import { ref } from "process";

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    enrolledCourse: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Course'
        }
    ]

}, { timestamps: true })

const User = mongoose.model("User", userSchema);

export default User;