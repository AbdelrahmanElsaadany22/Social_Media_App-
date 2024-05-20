import fcmNode from "fcm-node";
const serverKey="AAAAU9Dmqvk:APA91bEVsKd7nrwZQfiwWbIFBzz08eXuPg67uZIOynqZuPDqi8iTbu18_BF25TRsE0pM1WfNicAl7f381rEelmuT2aJ_xd57e1DXFXfqcuOFT2QMwBkFDQRU7_HkNnA3QsbhLJoikcYf"
const fcm=new fcmNode(serverKey)
import { catchAsyncError } from "../../../utils/error.handler.js";
import { deleteImage } from "../../../utils/image.js";
import friendModel from "../../friend/model/friend.model.js";
import imageModel from "../../image/model/image.model.js";
import { makeImage } from "../../image/utils/image.utils.js";
import postModel from "../model/post.model.js";


//add post
export const addPost=catchAsyncError(async(req,res)=>{
    const {text}=req.body
    const token=req.header
    const user_id=req.user.id
        const img_ids=[]
        if(req.files?.images)
        {
            await Promise.all(req.files.images.map(async(file)=>{
                try {
                    const image=await makeImage(file.path)
                    img_ids.push(image._id)
                } catch (error) {
                    return next(error)
                }
            }))
        }
    const addedPost = await postModel.create({
        text,
        user:user_id, // Include the user reference when creating the post
        images:img_ids
    });
    res.status(200).json({ message: 'post added successfully', addedPost });
})
export const getAllPosts = catchAsyncError(async (req, res) => {
    const userId = req.user.id;
    const user = await friendModel.findOne({ user: userId });
    
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const listOfFriends = user.friends;
    const posts = [];

    await Promise.all(listOfFriends.map(async (fr) => {
        try {
            const post = await postModel.find({ user: fr }); // Changed to `find` to get all posts by the friend
            posts.push(...post);
        } catch (error) {
            // Collecting errors instead of immediately responding
            posts.push({ error: `Error fetching posts for friend ${fr}` });
        }
    }));

    res.status(200).json({ posts });
});

//get post by id
export const getPost=catchAsyncError(async(req,res)=>{
    const {postId}=req.body
    const post=await postModel.findById(postId)
    if(!post)
    {
        res.status(404).json('no post to show ')
    }
    res.status(200).json({post})
})

//update post

export const updatePost = catchAsyncError(async (req, res) => {
    const { text, postId } = req.body;
    const ImagesArray = [];
    const thePost = await postModel.findById(postId);
    if (req.files?.images) {
        
        await Promise.all(thePost.images.map(async (image) => {
            const find=await imageModel.findById(image._id)
            await deleteImage(find.name)
            await imageModel.findByIdAndDelete(image._id);
        }));
        await Promise.all(
        req.files.images.map(async (file) => 
        {
            const image =await makeImage(file.path);
            ImagesArray.push(image._id);
        }));
    }
    const updatedPost = await postModel.findByIdAndUpdate(
        postId,
        { text, images: ImagesArray },
        { new: true }
    );
    res.json('post updated');
});
//delete post
export const deletePost = catchAsyncError(async (req, res) => {
    try {
        const { postId } = req.body;
        
        // Find the post
        const findPost = await postModel.findById(postId);
        if (!findPost) {
            return res.status(404).json({ message: 'The post was not found.' });
        }
        
        // Delete associated images
        await Promise.all(findPost.images.map(async (image) => {
            try {
                const find = await imageModel.findById(image._id);
                if (!find) {
                    console.log(`Image not found: ${image._id}`);
                    return;
                }
                await deleteImage(find.name);
                await imageModel.findByIdAndDelete(image._id);
                console.log(`Image deleted: ${image._id}`);
            } catch (error) {
                console.error(`Error deleting image ${image._id}:`, error);
            }
        }));

        // Delete the post
        await postModel.findByIdAndDelete(postId);
        console.log(`Post deleted: ${postId}`);

        // Send response
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
