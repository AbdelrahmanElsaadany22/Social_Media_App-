import { AppError, catchAsyncError } from "../../utils/error.handler.js";
import userModel from "../user/model/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup=catchAsyncError(async(req,res)=>{
const {email,name,password,profile_image}=req.body
const role=req.body?.role
const hased_pass=bcrypt.hashSync(password,+process.env.SALT)
const user=await userModel.create({name,email,password:hased_pass,role,profile_image})
res.status(201).json({message:'signed up successfully'})
})


export const signin =catchAsyncError(async (req,res)=>{
	const { email, password } = req.body
	const user = await userModel.findOne({ email })
	if (!user || !bcrypt.compareSync(password, user.password))
		throw new AppError('Invalid credentials', 400)

	const { name, role, _id: id } = user
	const token = jwt.sign({ name, role, id, email },process.env.SECRET)
	res.json({ token }) 
})