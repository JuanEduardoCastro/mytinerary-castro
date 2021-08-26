import React, { useState } from 'react';
import Header from '../components/Header';
import { connect } from "react-redux";
import usersActions from '../redux/actions/usersActions';
import { Link } from 'react-router-dom';


const UserSignUp = (props) => {

    document.title="Sign up"

    const [userData, setUserData] = useState({})
    const [messageToUser, setMessageToUser] = useState("")
    const [error, setError] = useState(null)

    const inputHandler = (e) => {
        if ((e.target.value).length > 0) {
            // console.log("entro if")
            if (e.target.name === "userEmail") {
                if (!e.target.value.includes("@")) {
                    return setMessageToUser("That is not a valid email")
                }
            }
            setMessageToUser("")
            if (e.target.name === "userPassword") {
                if ((e.target.value).length < 3 ) {
                    return setMessageToUser("That is not a valid password")
                }
            } 
            setMessageToUser("")
            setUserData({
                ...userData,
                [e.target.name]: e.target.value 
            })
        } else { 
            // console.log("entro else")
            return setMessageToUser("there are empty fields")
        }
    }

    console.log(userData)

    const clickSignUpHandler = async (e) => {
        e.preventDefault()
        if (userData !== {}) {
            console.log("si manda el axios")
            let response = await props.addNewUser(userData)
            if (!response.data.success) {
                setError(true)
                setMessageToUser(response.data.error)
            }
        } else {
            console.log("campos vacios")
            setError(true)
            setMessageToUser("All fields are required")
        }
    }
    
    // console.log(userData)
    // console.log(messageToUser)
    // console.log(error)

    return (
        <div 
        style={{backgroundImage: `url("https://i.imgur.com/zJKyzjj.jpg")`}} 
        alt="background plane" 
        className="w-full h-screen bg-top bg-cover bg-opacity-70 ">
            <div className="w-full h-full bg-indigo-200 bg-opacity-40">
                <Header />
                <div className="flex flex-col justify-center items-center ">
                    <div className="flex flex-col py-2">
                        <h2 className="text-center text-4xl">Create an account!</h2>
                    </div>
                    <div>
                        <input 
                            type="email"                //cambiar type a email ?? revisar
                            pattern=".+@" 
                            required
                            name="userEmail"
                            /* value={inputValue} */
                            placeholder="Enter your email" 
                            className="inputBox"
                            onChange={inputHandler} /> 
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="userPassword"
                            /* value={inputValue} */
                            placeholder="Enter your password" 
                            className="inputBox" 
                            onChange={inputHandler} /> 
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="userName"
                            /* value={inputValue} */
                            placeholder="Enter your name" 
                            className="inputBox" 
                            onChange={inputHandler} /> 
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="userLastName"
                            /* value={inputValue} */
                            placeholder="Enter your last name" 
                            className="inputBox" 
                            onChange={inputHandler} /> 
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="userPhoto"
                            /* value={inputValue} */
                            placeholder="Enter your photo" 
                            className="inputBox" 
                            onChange={inputHandler} /> 
                    </div>
                    <div>
                        <select 
                            /* value={inputValue} */
                            name="userCountry"
                            className="btn text-xl text-center hover:scale-100 px-12"
                            onChange={inputHandler}>
                            <option>Select a country</option>
                            <option>pais1</option>
                            <option>pais2</option>
                        </select>
                    </div>
                    <div className="flex flex-col h-10">
                        <h2 className={`${userData === {} && error === true  ? "block" : "hidden"} text-red-500`}>{messageToUser}</h2>
                        <h2 className={`${userData === {} ? "hidden" : "block"} text-red-500`}>{messageToUser}</h2>
                    </div>
                    <button
                        onClick={clickSignUpHandler} 
                        className="btn text-xl">Sign up!</button>
                    <div>
                        <h2>If you already have an account, click here to <Link to="/login" className="text-lg text-indigo-700">Log in!</Link></h2>
                    </div>
                </div> 
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    addNewUser: usersActions.addNewUser,
}

export default connect(null, mapDispatchToProps) (UserSignUp)