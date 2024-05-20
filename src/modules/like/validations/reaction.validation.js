import Joi from "joi"
export const addreactionSchema=Joi.object({
	body:{
        reaction:Joi.string().required(),
        postId:Joi.required(),
	},
    params: {},
	query: {},
})

export const getreacionSchema=Joi.object({
	body:{
        postId:Joi.required(),
	},
    params: {},
	query: {},
})
export const deletereacionSchema=Joi.object({
	body:{
        reactionId:Joi.required(),
	},
    params: {},
	query: {},
})

