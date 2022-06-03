const Joi = require("joi");

const schemaCreateUser = Joi.object().keys({
  username: Joi.string().required(),

  phone: Joi.number().required(),
  email: Joi.string().required().email(),
  password: Joi.string().min(8).required(),
});
const schemaLoginUser = Joi.object().keys({
  email: Joi.string().required().email(),
  password: Joi.string().min(8).required(),
});
const schemaForgotPassword = Joi.object().keys({
  password: Joi.string().min(8).required(),
});

module.exports = { schemaCreateUser, schemaLoginUser, schemaForgotPassword };
