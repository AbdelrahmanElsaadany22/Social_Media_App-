
import mongoose from "mongoose";



const storySchema=new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:true,
    },
    image:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'image'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        expires: '24h' 
    }
})
const storyModel=mongoose.model('story',storySchema)
export default storyModel