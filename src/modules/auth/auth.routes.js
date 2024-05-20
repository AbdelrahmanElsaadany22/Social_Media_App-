import { Router } from "express";
import { validate } from "../../middlewares/validation.js";
import { signinSchema, signupSchema } from "./auth.validate.js";
import { signin, signup } from "./auth.controller.js";
import { upload } from "../../middlewares/upload.middleware.js";
import {attachImage } from "../image/middlewares/image.middlewares.js";
import { assertUniqueEmail } from "./auth.middleware.js";


const authRouter=Router()


authRouter.post('/signup',upload.single('profile_image'),validate(signupSchema),assertUniqueEmail,attachImage('profile_image'),signup)
authRouter.post('/signin',validate(signinSchema),signin)

export default authRouter
