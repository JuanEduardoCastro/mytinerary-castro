const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const usersControllers = {

    addNewUser: async (req, res) => {
        const { userEmail, userName, userLastName, userPassword, userPhoto, userCountry } = req.body
        let userPasswordHash = bcrypt.hashSync(userPassword)
        const newUser = new User({ userEmail, userName, userLastName, userPassword: userPasswordHash, userPhoto, userCountry }) 
        try {
            let userEmailCheck = await User.findOne({ userEmail: userEmail })
            if (!userEmailCheck) {
                await newUser.save()
                const token = jwt.sign({ ...newUser }, process.env.SECRETORKEY )
                res.json({ success: true, response: { token, userName: newUser.userName, userPhoto: newUser.userPhoto }})
            } else {
                throw new Error("That email allready exist")
            }
        } catch (error) {
            res.json({ success: false, error: error.message }) //revisar mensajes
        }
    },

    logInUser: async (req, res) => {
        const { userEmail, userPassword } = req.body
        try {   
            let userEmailCheck = await User.findOne({ userEmail: userEmail })
            if (userEmailCheck) {
                let userPasswordCheck = bcrypt.compareSync(userPassword, userEmailCheck.userPassword)
                if (userPasswordCheck) {
                    const token = jwt.sign({ ...userEmailChack }, process.env.SECRETORKEY)
                    res.json({ success: true, response: { token, userName: userEmailCheck.userName, userPhoto: userEmailCheck.userPhoto }})
                } else {
                    throw new Error("password are invalid")
                }
            } else {
                throw new Error("Username are invalid")
            } 
        } catch (error) {
            res.json({ succes: false, error: error.message }) //revisar mensajes
        }
    }
}
module.exports = usersControllers