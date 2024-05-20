import { Router } from "express";
import { authenticate,authorize } from "../../auth/auth.middleware.js";
import { validate } from "../../../middlewares/validation.js";
import { AddFriendSchema, deleteFriendSchema } from "../validations/friend.validations.js";
import { addFriend, deleteFriend, getFriends } from "../controller/friend.controller.js";

const friendRouter=Router()

friendRouter.route('/').post(authenticate,authorize('user'),validate(AddFriendSchema),addFriend)
.get(authenticate,authorize('user'),getFriends).delete(authenticate,authorize('user'),validate(deleteFriendSchema),deleteFriend)

export default friendRouter