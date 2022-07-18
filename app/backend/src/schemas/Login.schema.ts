import * as joi from 'joi';

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

export default schema;
