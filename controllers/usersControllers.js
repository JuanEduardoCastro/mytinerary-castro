const User = require("../models/User");
const bcrypt = require("bcryptjs");

const usersControllers = {
    getAllUsers: async (req, res) => {
        try {
            const getAllUsers = await User.find()
            if (getAllUsers) {
                res.json({ success: true, response: getAllUsers })
            } else {
                throw new Error("Couldn´t get all users")
            }
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },

    addNewUser: async (req, res) => {
        const { userEmail, userName, userLastName, userPassword, userPhoto, userCountry } = req.body
        let userPasswordHash = bcrypt.hashSync(userPassword)
        const newUser = new User({ userEmail, userName, userLastName, userPassword: userPasswordHash, userPhoto, userCountry }) 
        try {
            let userEmailCheck = await User.findOne({ userEmail: userEmail })
            if (!userEmailCheck) {
                await newUser.save()
                res.json({ success: true, response: newUser })
            } else {
                throw new Error("That email allready exist")
            }
        } catch (error) {
            res.json({ success: false, error: error.message /* "Couldn´t add the user" */ }) //revisar mensajes
        }
    },

    logInUser: async (req, res) => {
        const { userEmail, userPassword } = req.body
        try {   
            let userEmailCheck = await User.findOne({ userEmail: userEmail })
            if (userEmailCheck) {
                let userPasswordCheck = bcrypt.compareSync(userPassword, userEmailCheck.userPassword)
                if (userPasswordCheck) {
                    res.json({ success: true, response: "You are log in" })
                } else {
                    throw new Error("Username or password are invalid")
                }
            } else {
                throw new Error("Username or password are invalid")
            } 
        } catch (error) {
            res.json({ succes: false, error: error.message }) //revisar mensajes
        }
    }


}
module.exports = usersControllers