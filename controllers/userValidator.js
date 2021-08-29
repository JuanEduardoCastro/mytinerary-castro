const joi = require("joi");

const userValidator = (req, res, next) => {
    const schema = joi.object({
        userEmail: joi.string().trim().min(2).max(20).email().required().messages({
            "string.email":"It must be a valid email (contains \"@\" and .)",
            "string.min":"The length must be at least 4 characters long",
            "string.max":"That´s to long..",
            "any.required":"This field is required"
        }),
        userPassword: joi.string().trim().min(6).max(50).required().messages({      //revisar regex
            "string.min":"The length must be at least 6 characters long",
            "string.max":"That´s to long..",
            "any.required":"This field is required"
        }),
        userName: joi.string().trim().min(4).max(20).required().messages({          //convertir primera en mayuscula
            "string.min":"The length must be at least 4 characters long",
            "string.max":"That´s to long..",
            "any.required":"This field is required"
        }),
        userLastName: joi.string().trim().min(4).max(20).required().messages({      //convertir primera en mayuscula
            "string.min":"The length must be at least 4 characters long",
            "string.max":"That´s to long..",
            "any.required":"This field is required"
        }),
        userPhoto: joi.string().trim().min(4).max(500).required().messages({
            "string.min":"The length must be at least 4 characters long",
            "string.max":"That´s to long..",
            "any.required":"This field is required"
        }),
        userCountry: joi.string().trim().required().messages({                      //traer paises
            "any.required":"You must select a country"
        }),
        google: joi.boolean()
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