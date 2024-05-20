
import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'user'
},
comment:{
type:String,
trim :true,
maxLength:1000,
required:true,
},
post:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'post' 
},
},
{
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
}

)

const commentModel=mongoose.model('comment',commentSchema)
export default commentModel
//who made this comment and do it for any post?
