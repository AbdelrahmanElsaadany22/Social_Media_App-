import { Router } from "express";
import { authenticate, authorize } from "../../auth/auth.middleware.js";
import { validate } from "../../../middlewares/validation.js";
import { addPostSchema, deletePostSchema, getPostSchema, updatePostSchema } from "../validation/post.validation.js";
import { addPost, deletePost, getAllPosts, getPost, updatePost } from "../controller/post.controller.js";
import { upload } from "../../../middlewares/upload.middleware.js";
import { attachImage } from "../../image/middlewares/image.middlewares.js";


const PostRouter=Router()


PostRouter.route('/').post
(upload.fields([{ name: 'images', maxCount: 10 }]),authenticate,validate(addPostSchema),addPost)
.get(authenticate,validate(getPostSchema),getPost)
.put(upload.fields([{ name: 'images', maxCount: 10 }]),authenticate,authorize('user'),validate(updatePostSchema),updatePost)
.delete(authenticate,authorize('user'),validate(deletePostSchema),deletePost)






PostRouter.route('/getAllPosts').get(authenticate,getAllPosts)



export default PostRouter