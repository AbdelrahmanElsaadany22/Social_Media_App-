import { catchAsyncError } from "../../../utils/error.handler.js";
import postModel from "../../post/model/post.model.js";
import reactionModel from "../model/reaction.model.js";

export const addReaction=catchAsyncError(async(req,res)=>{
const {reaction,postId}=req.body
const reactionMaker=req.user.id
const post=await postModel.findById(postId)
if(!post)
    res.status(404).json({message:'post not founded'})
 // Check if the user has already reacted to this post
const existingReaction = await reactionModel.findOne({ user: reactionMaker, post: postId });
        if (existingReaction) { 
            await reactionModel.findByIdAndUpdate(existingReaction._id, { reaction });
            return res.status(200).json({ message: 'Reaction updated successfully' });
        } else {
            await reactionModel.create({ reaction, post: postId, user: reactionMaker });
            return res.status(200).json({ message: 'Reaction added successfully' });
        }
})
export const getReactions=catchAsyncError(async (req,res)=>{
    const{postId}=req.body
    const post=await postModel.findById({postId})
    if(!post)
        res.status(404).json({message:'no post founded'})
    res.status(200).json({post})
})


export const deleteReaction=catchAsyncError(async(req,res)=>{
    const {reactionId}=req.body
    const reaction=await reactionModel.findById(reactionId)
    if(!reaction)
        res.status(404).json({message:'there is no reaction on this post to you'})
    await reactionModel.findByIdAndDelete(reactionId)
    res.status(200).json({message:'reaction deleted successfully'})
})




