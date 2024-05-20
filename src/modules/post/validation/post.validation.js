import Joi from "joi"


export const addPostSchema=Joi.object({
	body:{
		text:Joi.string().min(3).max(200).trim().required(),
	},
    params: {},
	query: {},
    files:Joi.object().required()
})

export const getPostSchema=Joi.object({
	body:{
		postId:Joi.required()
	},
    params: {},
	query: {},
})
export const updatePostSchema=Joi.object({
	body:{
		text:Joi.string(),
		postId:Joi.required()
	},
    params: {},
	query: {},
	files:Joi.object().required()
})
export const deletePostSchema=Joi.object({
	body:{
		postId:Joi.required()
	},
    params: {},
	query: {},
})