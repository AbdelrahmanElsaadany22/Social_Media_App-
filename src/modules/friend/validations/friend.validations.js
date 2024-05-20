import Joi from "joi"
export const AddFriendSchema=Joi.object({
	body:{
        friendId:Joi.required()
	},
    params: {},
	query: {},
})

export const deleteFriendSchema=Joi.object({
	body:{
        friendId:Joi.required()
	},
    params: {},
	query: {},
})