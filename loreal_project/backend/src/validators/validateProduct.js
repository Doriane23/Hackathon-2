const Joi = require("joi");

const getProductSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    id: Joi.number().presence('required'),
   name: Joi.string().max(50).presence('required'),
   type: Joi.string().max(50).presence('required'),
   function: Joi.string().max(50).presence('required'),
   color: Joi.string().max(50).presence('required'),

  });
};

const validateProduct = (req, res, next) => {
  const schema = getProductSchema();

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateProduct;

