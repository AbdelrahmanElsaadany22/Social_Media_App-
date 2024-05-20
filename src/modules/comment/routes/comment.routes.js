import { Router } from "express";
import { authenticate, authorize } from "../../auth/auth.middleware.js";
import { addComment, deleteComment, getComment, updateComment } from "../controllers/comment.controller.js";
import { addCommentSchema, deleteCommentSchema, getCommentSchema, updateCommentSchema } from "../validations/comment.validations.js";
import { validate } from "../../../middlewares/validation.js";

const commentRouter=Router()

commentRouter.route('/').post(authenticate,authorize('user'),validate(addCommentSchema),addComment)
.get(validate(getCommentSchema),authorize('user'),getComment)
.put(authenticate,authorize('user'),validate(updateCommentSchema),updateComment)
.delete(authenticate,authorize('user'),validate(deleteCommentSchema),deleteComment)
export default commentRouter