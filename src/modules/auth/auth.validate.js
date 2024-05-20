import Joi from "joi";

export const signupSchema = Joi.object({
	body: {
		email: Joi.string()
			.email({
				minDomainSegments: 2,
				tlds: { allow: ['com', 'net'] },
			})
			.required(),
		password: Joi.string()
			.required(),
		name: Joi.string().required(),
		role:Joi.string(),
	},
	params: {},
	query: {},
    file:Joi.object().required()
})


export const signinSchema=Joi.object({
	body:{
		email: Joi.string().required(),
		password: Joi.string().required(),
	},
	params: {},
	query: {},
})