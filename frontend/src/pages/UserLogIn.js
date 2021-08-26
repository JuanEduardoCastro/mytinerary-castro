import React, { useState } from 'react';
import { connect } from "react-redux";
import Header from '../components/Header';
import usersActions from '../redux/actions/usersActions';

const UserLogIn = (props) => {

    const [logInData, setLogInData] = useState({})
    const [messageToUser, setMessageToUser] = useState("")
    // const [clickLogIn, setClickLogIn] = useState(false)
    const [error, setError] = useState(null)

    const inputHandler = (e) => {
        if ((e.target.value).length > 0) {
            if (e.target.name === "userEmail") {
                if (!e.target.value.includes("@")) {
                    return setMessageToUser("That is not a valid email")
                }
            }
            setMessageToUser("")
            if (e.target.name === "userPassword") {
                if ((e.target.value).length < 8 ) {
                    return setMessageToUser("That is not a valid password")
                }
            } 
            setMessageToUser("")
            setLogInData({
                ...logInData,
                [e.target.name]: e.target.value 
            })
        } else { 
            return setMessageToUser("there are empty fields")
        }
    }

    const clickLogInHandler = async (e) => {
        e.preventDefault()
        let response = await props.logInUser(logInData)
        console.log(response)
        if (!response.data.success) {
            setError(response.data.error)
        }
    }
    // console.log(logInData)
    // console.log(messageToUser)
    // console.log(error)


    return (
        <div 
        style={{backgroundImage: `url("https://i.imgur.com/zJKyzjj.jpg")`}} 
        alt="background plane" 
        className="w-full h-screen bg-top bg-cover bg-opacity-70 ">
            <div className="w-full h-full bg-indigo-200 bg-opacity-40">
                <Header />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-center text-4xl">Create an account!</h2>
                    <h2 className={`${logInData === {} ? "hidden" : "block"} text-red-500`}>{messageToUser}</h2>
                    <input 
                        type="email" 
                        pattern=".+@" 
                        required
                        name="userEmail"
                        /* value={inputValue} */
                        placeholder="Enter your email" 
                        className="inputBox"
                        onChange={inputHandler} /> 
                    <input 
                        type="password" 
                        name="userPassword"
                        /* value={inputValue} */
                        placeholder="Enter your password" 
                        className="inputBox" 
                        onChange={inputHandler} /> 
                    <button
                        onClick={clickLogInHandler} 
                        className="btn text-2xl">Log in!</button>
                </div> 
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    logInUser: usersActions.logInUser
}


export default connect(null, mapDispatchToProps)(UserLogIn)