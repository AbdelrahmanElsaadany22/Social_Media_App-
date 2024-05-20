import { Router } from "express";
import { authenticate, authorize } from "../../auth/auth.middleware.js";
import { validate } from "../../../middlewares/validation.js";
import {addreactionSchema, deletereacionSchema, getreacionSchema } from "../validations/reaction.validation.js";
import {  addReaction, deleteReaction, getReactions } from "../controller/reaction.controller.js";

const likeRouter=Router()

likeRouter.route('/').post(authenticate,authorize('user'),validate(addreactionSchema),addReaction)
.get(authenticate,authorize('user'),validate(getreacionSchema),getReactions)
.delete(authenticate,authorize('user'),validate(deletereacionSchema),deleteReaction)

export default likeRouter