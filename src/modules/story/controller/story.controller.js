import { catchAsyncError } from "../../../utils/error.handler.js";
import friendModel from "../../friend/model/friend.model.js";
import postModel from "../../post/model/post.model.js";
import storyModel from "../model/story.model.js";

export const addStory=catchAsyncError(async(req,res)=>{
    const userId=req.user.id
    const {text}=req.body
    try {
        const addedStory = await storyModel.create({text,user:userId})
          res.status(201).json({ addedStory });
    } catch (error) {
        res.status(400).json({error});
    }
})
export const deleteStory=catchAsyncError(async(req,res)=>{
    const {storyId}=req.body

    const story=await storyModel.findByIdAndDelete(storyId)
    if(!story)
        res.status(404).json({message:'there is no story to deleted'})
    res.status(200).json({message:'story deleted successfully'})
})
export const getStories = catchAsyncError(async (req, res) => {
    const userId = req.user.id;
    const userFriends = await friendModel.findOne({ user: userId });
    
    if (!userFriends || !userFriends.friends) {
        return res.status(404).json({ error: "Friends not found" });
    }

    const listOfFriends = userFriends.friends;
    const stories = [];

    await Promise.all(listOfFriends.map(async (fr) => {
        try {
            const story = await storyModel.find({ user: fr });
            stories.push(...story);
        } catch (error) {
            stories.push({ error: `Error fetching story for friend ${fr}` });
        }
    }));
    res.status(200).json({ stories });
});
