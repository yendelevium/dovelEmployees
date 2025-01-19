// JOI for server-side validation
const Joi = require('joi')
module.exports.employeeSchema = Joi.object({
    empId:Joi.string().required(),
    name:Joi.string().required(),
    position:Joi.string().required(),
    salary:Joi.number().required().min(0)
})