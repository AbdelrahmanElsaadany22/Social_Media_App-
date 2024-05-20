import Joi from "joi"
export const addStorySchema=Joi.object({
	body:{
		text:Joi.string().min(3).max(200).trim().required(),
	},
    params: {},
	query: {},
})
export const deleteStorySchema=Joi.object({
	body:{
		storyId:Joi.required(),
	},
    params: {},
	query: {},
})
