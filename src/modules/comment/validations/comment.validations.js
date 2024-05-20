import Joi from "joi"

export const addCommentSchema=Joi.object({
	body:{
		comment:Joi.string().trim().required(),
        post:Joi.required()
	},
    params: {},
	query: {},
})

export const getCommentSchema=Joi.object({
	body:{
        post:Joi.required()
	},
    params: {},
	query: {},
})

export const updateCommentSchema=Joi.object({
	body:{
        comment:Joi.string().required(),
        commentId:Joi.required()
	},
    params: {},
	query: {},
})

export const deleteCommentSchema=Joi.object({
	body:{
        commentId:Joi.required()
	},
    params: {},
	query: {},
})