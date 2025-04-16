import Joi from 'joi';

export const editMemesSchema = Joi.object({
  title: Joi.string().min(2).max(20).required().messages({
    'string.base': 'Title should be a string',
    'string.min': 'Title should have at least {#limit} characters',
    'string.max': 'Title should have at most {#limit} characters',
    'any.required': 'Title is required',
  }),
  img: Joi.string().uri().required(),
  likes: Joi.number(),
});
