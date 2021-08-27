const joi = require("joi");

const userValidator = (req, res, next) => {
    const schema = joi.object({
        userEmail: joi.string().trim().min(4).max(20).email().required(),
        userPassword: joi.string().trim().min(6).max(20).required(),
        userName: joi.string().trim().min(4).max(20).required(),
        userLastName: joi.string().trim().min(4).max(20).required(),
        userPhoto: joi.string().trim().min(4).max(300).required(),
        userCountry: joi.string().trim().required()  
    })

    const validations = schema.validate(req.body,  {abortEarly: false } )
    if (!validations.error) {
        next()
    } 
    else {
        res.json({ success: false, errors: validations.error.details })
    }
}

module.exports = userValidator