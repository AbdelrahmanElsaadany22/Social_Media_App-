import { catchAsyncError } from "../../../utils/error.handler.js";
import commentModel from "../model/comment.model.js";

export const addComment=catchAsyncError(async(req,res)=>{
    const userId=req.user.id
    const {comment,post}=req.body
   const Thecomment= await commentModel.create({
        user:userId,
        comment,
        post
    })
    res.json('comment added succesfully')
})


export const getComment=catchAsyncError(async(req,res)=>{
    const {post}=req.body
    const comments=await commentModel.find({post})
    if(!comments)
    {
        res.json('there is no any comments yet')
    }
    res.json({comments})
        
})

export const updateComment = catchAsyncError(async (req, res) => {
    const { comment, commentId } = req.body;
    const updatedComment = await commentModel.findByIdAndUpdate(commentId, { comment }, { new: true });
    if (!updatedComment) {
        return res.status(404).json({ message: 'Comment not found.' });
    }
    res.json({ message: 'Comment updated successfully', updatedComment });
});


export const deleteComment=catchAsyncError(async(req,res)=>{
    const {commentId}=req.body
    const deletedComment=await commentModel.findByIdAndDelete(commentId)
    if (!deletedComment) {
        return res.status(404).json({ message: 'Comment not found.' });
    }
    res.json({ message: 'Comment deleted successfully', deletedComment });
})
