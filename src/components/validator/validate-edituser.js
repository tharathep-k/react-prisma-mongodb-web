import Joi from "joi";

const editUserSchema = Joi.object({
  email: Joi.string().required().email({ tlds: false }).messages({
    "string.empty": "Email is required.",
    "string.email": "Email format is incorrect",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
    .trim()
    .required()
    .messages({
      "string.empty": "Password is required.",
      "string.pattern.base": "Password must be at least 6 characters.",
    }),
  confirmpassword: Joi.string().valid(Joi.ref("password")).messages({
    "any.only": "Password and Confrimpassword did not match.",
    "string.empty": "Confirm password is required.",
  }),
});

export default function validateEditUser(input) {
    const { error } = editUserSchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  }