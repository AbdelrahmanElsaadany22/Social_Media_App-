import { Router } from "express";
import { authenticate, authorize } from "../../auth/auth.middleware.js";
import { addStory, deleteStory, getStories } from "../controller/story.controller.js";
import { validate } from "../../../middlewares/validation.js";
import { addStorySchema } from "../validation/story.validations.js";

const storyRouter=Router()

storyRouter.route('/').post(authenticate,authorize('user'),validate(addStorySchema),addStory).
get(authenticate,authorize('user'),getStories)
.delete(authenticate,authorize('user'),validate(deleteStory),deleteStory)

export default storyRouter
