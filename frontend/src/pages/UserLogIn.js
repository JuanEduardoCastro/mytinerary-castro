import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import usersActions from '../redux/actions/usersActions';
import GoogleLogin from "react-google-login";

const UserLogIn = (props) => {

    document.title="Log in"

    const [messageToUser, setMessageToUser] = useState("")
    const [userGuide, setUserGuide] = useState("")
    const [logInData, setLogInData] = useState({})
    // const [error, setError] = useState(null)
    const [disabledBtn, setDisabledBtn] = useState(true) 

    const inputHandler = (e) => {
        if ((e.target.value).length > 0) {
            if (e.target.name === "userEmail") {
                if (!e.target.value.includes("@") || !e.target.value.includes(".")) {
                    return setUserGuide("The email must be at least 4 characters long, contain a @ and a .")
                } else {
                    setUserGuide("")
                }
            }
            setMessageToUser("")
            if (e.target.name === "userPassword") {
                if ((e.target.value).length < 5 ) {
                    return setUserGuide("The password must be at least 6 characters long, contain one upper case, one lower case and one number ")
                }  else {
                    setUserGuide("")
                }
            } 
            setMessageToUser("")
            setLogInData({
                ...logInData,
                [e.target.name]: e.target.value 
            })
            console.log(Object.entries(logInData).length)
            if (Object.entries(logInData).length === 2 ) {
                return setDisabledBtn(false)
            } else { 
                return setMessageToUser("there are empty fields")
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
        console.log(info)
        let googleLogIn = {
            userEmail: info.profileObj.email,
            userPassword: info.profileObj.googleId,
            google: true
        }
        let response = await props.logInUser(googleLogIn)
        if (!response.data.success) {
            setUserGuide(response.data.error)
        }
        
    }
    // console.log(logInData)
    // console.log(messageToUser)
    // console.log(error)

    return (
        <div 
        style={{backgroundImage: `url("https://i.imgur.com/zJKyzjj.jpg")`}} 
        alt="background plane" 
        className="w-full h-full bg-top bg-cover bg-fixed bg-opacity-70 ">
            <div className="w-full h-screen bg-indigo-200 bg-opacity-40">
                <Header />
                <div className="flex w-11/12 mx-auto">
                    <div className="w-1/3 h-10">
                        <GoogleLogin
                            clientId="1086726256498-432u6e7a0ukbsfj0lnkqqf3bli5u3c5a.apps.googleusercontent.com"
                            buttonText="Log in with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="btn w-full"/>
                        
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <div className="flex flex-col py-2">
                            <h2 className="text-center text-4xl">Create an account!</h2>
                        </div>
                        <div className="w-full">
                            <input 
                                type="email"                //cambiar type a email ?? revisar
                                pattern=".+@" 
                                required
                                name="userEmail"
                                /* value={(e) => {e.target.value}} */
                                placeholder="* Enter your email" 
                                className={`inputBox w-full `}
                                onChange={inputHandler} /> 
                            <div className="w-full h-5 mb-1"></div>
                        </div>
                        <div className="w-full">
                            <input 
                                type="password" 
                                name="userPassword"
                                /* value={e.target.value}  */
                                placeholder="* Enter your password" 
                                className="inputBox w-full" 
                                onChange={inputHandler} /> 
                            <div className="w-full h-5 mb-1"></div>

                        </div>
                        

                        <div className="flex flex-col h-10">
                            <h2 className={`${logInData === {} ? "hidden" : "block"} text-red-500`}>{messageToUser}</h2>
                        </div>
                        <button
                            onClick={clickLogInHandler} 
                            disabled={disabledBtn}
                            className={` text-xl ${disabledBtn ? "btnDisabled" : "btn"} `}>Sign up!</button>
                    </div> 
                    <div className="w-1/3 ">
                        <div className="flex flex-col py-2">
                            <div className={`flex flex-col w-30 px-2.5 py-2 ml-1.5 mt-14 text-justify bg-indigo-200 bg-opacity-80 rounded-sm shadow-md border border-gray-400 ${userGuide === "" ? "hidden" : "block"}`}>
                                <h2 className={`${userGuide === "" ? "hidden" : "block"} text-black`}>{userGuide}</h2>
                            </div>
                        </div>   
                    </div>
                </div> 
                <div className="flex justify-center  ">
                    <h2>If you already have an account, click here to <Link to="/login" className="text-lg text-indigo-700">Log in!</Link></h2>
                </div>   
            </div>
        </div>















       
    )
}

const mapDispatchToProps = {
    logInUser: usersActions.logInUser
}


export default connect(null, mapDispatchToProps)(UserLogIn)







// <div 
// style={{backgroundImage: `url("https://i.imgur.com/zJKyzjj.jpg")`}} 
// alt="background plane" 
// className="w-full h-screen bg-top bg-cover bg-opacity-70 ">
//     <div className="w-full h-full bg-indigo-200 bg-opacity-40">
//         <Header />
//         <div className="flex flex-col justify-center items-center">
//             <div className="flex flex-col h-20">
//                 <h2 className="text-center text-4xl">Create an account!</h2>
//             </div>
//             <input 
//                 type="email" 
//                 pattern=".+@" 
//                 required
//                 name="userEmail"
//                 /* value={inputValue} */
//                 placeholder="Enter your email" 
//                 className="inputBox"
//                 onChange={inputHandler} /> 
//             <input 
//                 type="password" 
//                 name="userPassword"
//                 /* value={inputValue} */
//                 placeholder="Enter your password" 
//                 className="inputBox" 
//                 onChange={inputHandler} /> 
//             <div className="flex flex-col h-8">
//                 <h2 className={`${logInData === {} ? "hidden" : "block"} text-red-500`}>{messageToUser}</h2>
//             </div>
//             <button
//                 onClick={clickLogInHandler} 
//                 disabled={disabledBtn}
//                 className={` text-xl ${disabledBtn ? "btnDisabled" : "btn"}`}>Log in!</button>
//             <div>
//                 <h2>If you don´t have an account, click here to <Link to="/signup" className="text-lg text-indigo-700">Sign up!</Link></h2>
//             </div>
//         </div> 
//     </div>
// </div>