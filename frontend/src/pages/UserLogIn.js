import React, { useState, useLayoutEffect } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import usersActions from '../redux/actions/usersActions';
import GoogleLogin from "react-google-login";

const UserLogIn = (props) => {

    document.title="Log in"

    const [userGuide, setUserGuide] = useState("")
    const [logInData, setLogInData] = useState({})
    const [disabledBtn, setDisabledBtn] = useState(true) 

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    })

    const inputHandler = (e) => {
        if ((e.target.value).length > 0) {
            if (e.target.name === "userEmail") {
                if (!e.target.value.includes("@") || !e.target.value.includes(".")) {
                    return setUserGuide("The email must be at least 4 characters long, contain a @ and a .")
                } else {
                    setUserGuide("")
                }
            }
            if (e.target.name === "userPassword") {
                if ((e.target.value).length < 5 ) {
                    return setUserGuide("The password must be at least 6 characters long, contain one upper case, one lower case and one number ")
                }  else {
                    setUserGuide("")
                }
            } 
            setLogInData({
                ...logInData,
                [e.target.name]: e.target.value,
                googleLogIn: false 
            })
            if (Object.entries(logInData).length === 3 ) {
                return setDisabledBtn(false)
            } else { 
                return setUserGuide("there are empty fields")
            }    
        }
    }

    const clickLogInHandler = async (e) => {
        e.preventDefault()
        let response = await props.logInUser(logInData)
        if (!response.data.success) {
            setUserGuide(response.data.error)
        }
    }

    const responseGoogle = async (info) => {
        // console.log(info)
        let googleLogIn = {
            userEmail: info.profileObj.email,
            userPassword: info.profileObj.googleId,
            googleLogIn: true
        }
        let response = await props.logInUser(googleLogIn)
        if (!response.data.success) {
            setUserGuide(response.data.error)
        }
    }

    return (
        <div 
        style={{backgroundImage: `url("https://i.imgur.com/zJKyzjj.jpg")`}} 
        alt="background plane" 
        className="w-full h-full bg-top bg-cover bg-fixed bg-opacity-70 ">
            <div className="w-full h-screen bg-indigo-200 bg-opacity-40">
                <Header />
                <div className="flex w-11/12 mx-auto justify-center mt-16">
                    <div className="w-1/3 h-10 hidden md:block">
                     
                    </div> 
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                        <div className="flex flex-col py-2">
                            <h2 className="text-center text-3xl md:text-4xl tracking-wide heroText">Log into your account!</h2>
                        </div>
                        <div className={`block md:hidden flex flex-col w-30 px-2.5 py-2 ml-1.5 mt- md:mt-14 text-justify bg-indigo-200 bg-opacity-80 rounded-sm shadow-md border border-gray-400 ${userGuide === "" ? "hidden" : "block"}`}>
                            <h2 className={`${userGuide === "" ? "hidden" : "block"} text-sm text-black`}>{userGuide}</h2>
                        </div>
                        <div className="w-full">
                            <input 
                                type="email"                //cambiar type a email ?? revisar
                                name="userEmail"
                                placeholder="* Enter your email" 
                                className={`inputBox w-full `}
                                onChange={inputHandler} /> 
                            <div className="w-full h-5 mb-1"></div>
                        </div>
                        <div className="w-full">
                            <input 
                                type="password" 
                                name="userPassword"
                                placeholder="* Enter your password" 
                                className="inputBox w-full" 
                                onChange={inputHandler} /> 
                            <div className="w-full h-5 mb-1"></div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-1 md:gap-4">
                            <button
                            onClick={clickLogInHandler} 
                            disabled={disabledBtn}
                            className={` ${disabledBtn ? "btnDisabled" : "btn"} `}>Sign up!</button>
                            <h2>Or</h2>
                            <div className="">
                                <GoogleLogin
                                clientId="1086726256498-432u6e7a0ukbsfj0lnkqqf3bli5u3c5a.apps.googleusercontent.com"
                                buttonText="Sign up with Google"
                                render={renderProps => (
                                    <button className="btn flex items-center gap-2" onClick={renderProps.onClick} disabled={renderProps.disabled}><img className="w-6 h-6" src="https://i.imgur.com/kxqxIXj.png" alt="Google icon" /> Sign up with Google</button>
                                  )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                className="btn"/>
                            </div>
                        </div>
                    </div> 
                    <div className="w-1/3 hidden md:block">
                        <div className="flex flex-col py-2">
                            <div className={`flex flex-col w-30 px-2.5 py-2 ml-1.5 mt-14 text-justify bg-indigo-200 bg-opacity-80 rounded-sm shadow-md border border-gray-400 ${userGuide === "" ? "hidden" : "block"}`}>
                                <h2 className={`${userGuide === "" ? "hidden" : "block"} text-black`}>{userGuide}</h2>
                            </div>
                        </div>   
                    </div>
                </div> 
                <div className="px-16 md:px-0 flex justify-center text-center ">
                    <h2>If you already have an account, click here to <Link to="/signup" className="text-lg text-indigo-700">Sign up!</Link></h2>
                </div>   
            </div>
        </div> 
    )
}

const mapDispatchToProps = {
    logInUser: usersActions.logInUser
}

export default connect(null, mapDispatchToProps)(UserLogIn)