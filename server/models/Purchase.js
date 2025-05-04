import mongoose from "mongoose";

const PurchaseShema = new mongoose.Schema({
    courseId:{type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
        required:true
    },
    userId: {
        type:String,
        ref:'User',
        required:true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],default: 'pending'
    },
},{timestamps:true})

const Purchase = mongoose.model("Purchase", PurchaseShema);

export default Purchase;