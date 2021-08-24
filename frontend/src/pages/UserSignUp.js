import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const UserSignUp = () => {

    const [userData, setUserData] = useState({})
    // const [inputValue, setInputValue] = useState("")
    const [messageToUser, setMessageToUser] = useState("")
    const [clickSignUp, setClickSignUp] = useState(false)
    // const [reset, setReset] = useState(false)


    useEffect(() => {
        if (!clickSignUp) {
            axios.post("http://localhost:4000/api/user/signup", userData)
            .then((response) => {
                if (response.data.success) {
                    setMessageToUser("sign in ok") //hacer componente de loing con msg ?? 
                } else {
                    setMessageToUser("sign in not ok")
                    throw new Error("sign in not ok") //revisar
                }
            }).catch((error) => console.error(error.message))
        }
    }, [])

    const inputHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value 
        })
    }

    const clickSignUpHandler = () => {
        if (userData === {}) {
            setClickSignUp(true)
        } else {
            setClickSignUp(false)
            console.log("no esta completo el campo")
        }
        //revisar si estan todos los campos llenos
        console.log(userData)
    }

    console.log(messageToUser)

    return (
        <div 
        style={{backgroundImage: `url("https://i.imgur.com/zJKyzjj.jpg")`}} 
        alt="background plane" 
        className="w-full h-screen bg-top bg-cover bg-opacity-70 ">
            <div className="w-full h-full bg-indigo-200 bg-opacity-40">
                <Header />
                <div className="flex flex-col justify-center items-center">
                    <h2>Create an account!</h2>
                    <input 
                        type="text" 
                        name="userEmail"
                        /* value={inputValue} */
                        placeholder="Enter your email" 
                        className="inputBox"
                        onChange={inputHandler} /> 
                    <input 
                        type="text" 
                        name="userName"
                        /* value={inputValue} */
                        placeholder="Enter your name" 
                        className="inputBox" 
                        onChange={inputHandler} /> 
                    <input 
                        type="text" 
                        name="userLastName"
                        /* value={inputValue} */
                        placeholder="Enter your last name" 
                        className="inputBox" 
                        onChange={inputHandler} /> 
                    <input 
                        type="text" 
                        name="userPassword"
                        /* value={inputValue} */
                        placeholder="Enter your password" 
                        className="inputBox" 
                        onChange={inputHandler} /> 
                    <input 
                        type="text" 
                        name="userPhoto"
                        /* value={inputValue} */
                        placeholder="Enter your photo" 
                        className="inputBox" 
                        onChange={inputHandler} /> 
                    <select 
                        /* value={inputValue} */
                        name="userCountry"
                        className="btn text-2xl text-center hover:scale-100 px-12"
                        onChange={inputHandler}>
                        <option>Select a country</option>
                        <option>pais1</option>
                        <option>pais2</option>
                    </select>
                    <button
                        onClick={clickSignUpHandler} 
                        className="btn text-2xl">sign up!</button>
                </div> 
            </div>
        </div>
    )
}

export default UserSignUp
