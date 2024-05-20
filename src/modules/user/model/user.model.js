import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
name:{
    type:String,
    trim: true,
    minLength: 3,
    maxLength: 500,
    required: true,
},
email: {
    type: String,
    required: true,
    unique:true,
},
password: {
    type: String,
    trim: true,
    required: true,
},
role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
},
profile_image:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    reference:'image'
},
},
{
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
}
)
const userModel=mongoose.model('user',UserSchema)

export default userModel