import { Router } from "express";
import authRouter from "../modules/auth/auth.routes.js";
import PostRouter from "../modules/post/routes/post.routes.js";
import commentRouter from "../modules/comment/routes/comment.routes.js";
import likeRouter from "../modules/like/routes/reaction.routes.js";
import friendRouter from "../modules/friend/routes/friend.routes.js";
import storyRouter from "../modules/story/routes/story.routes.js";

const router=Router()

router.use('/auth', authRouter)
router.use('/post',PostRouter)
router.use('/comment',commentRouter)
router.use('/like',likeRouter)
router.use('/friend',friendRouter)
router.use('/story',storyRouter)
export default router