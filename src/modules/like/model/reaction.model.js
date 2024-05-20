
import mongoose from "mongoose";

const reactionSchema=new mongoose.Schema({
    reaction:{
        type:String,
        enum:['like','love','care','haha','angry','wow','sad'],
        default:'like',
        required:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'post'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    }
},
{
timestamps: true,
toJSON: { virtuals: true },
toObject: { virtuals: true },
}
)

const reactionModel=mongoose.model('like',reactionSchema)
export default reactionModel

//who made the react and for any post?