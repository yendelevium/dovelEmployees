// JOI for server-side validation
const Joi = require('joi')
module.exports.employeeSchema = Joi.object({
    name:Joi.string().required(),
    position:Joi.string().required(),
    salary:Joi.number().required().min(0)
})