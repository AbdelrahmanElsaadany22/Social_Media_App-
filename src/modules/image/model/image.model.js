import mongoose from "mongoose";

const ImageSchema=new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		minLength: 3,
		maxLength: 500,
		required: true,
	},
	path: {
		type: String,
		trim: true,
		required: true,
	},
})

const imageModel=mongoose.model('image',ImageSchema)
export default imageModel