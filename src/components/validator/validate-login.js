import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().required().email({ tlds: false }).messages({
    "string.empty": "Email is required.",
    "string.email": "Email format is incorrect",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required.",
  }),
});

// export default function validateLogin(input) {
//   const { error } = loginSchema.validate(input, { abortEarly: false });
//   if (error) {
//     return error;
//   }
// }

export default function validateLogin(input) {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
}
