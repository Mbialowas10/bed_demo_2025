import Joi, {ObjectSchema} from "joi";

export const itemSchema: ObjectSchema = Joi.object({
    id: Joi.string().optional().messages({
        "string.empty": "Post ID cannot be empty"
    }),
    name: Joi.string().required().messages({
        "any.required": "Name is required",
        "string.empty": "Name cannot be empty"
    }),

    description: Joi.string().required().messages({
       "any.required": "Description is required.",
       "string:empty": "Descritpion cannot be empty" 
    }),
    price: Joi.number().optional().min(0).messages({
		"number.min": "Price must be a positive value.",
	}),
	createdAt: Joi.date().default(() => new Date()),
	updatedAt: Joi.date().default(() => new Date()),
})
