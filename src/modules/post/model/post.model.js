
import mongoose from "mongoose";


const PostSchema=new mongoose.Schema(
    {
    text:{
        type:String,
        trim :true,
        maxLength:1000,
        required:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    images:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'image',
        required:false,
    }],
},	
{
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
}
)

PostSchema.pre(/^find/,function(next){
    this.populate('user',['name'])   
    next()

})

PostSchema.virtual('comments',{
    ref:'comment',
    localField:'_id',
    foreignField:'post'
})


PostSchema.virtual('likes',{
    ref:'like',
    localField:'_id',
    foreignField:'post'
})

PostSchema.pre(/^find/,function(next){
    this.populate('comments',['user','comment'])
    this.populate('likes',['_id','reaction','-post'])
    next()
})

const postModel=mongoose.model('post',PostSchema)
export default postModel