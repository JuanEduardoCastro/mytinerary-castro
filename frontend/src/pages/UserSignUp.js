import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { connect } from "react-redux";
import usersActions from '../redux/actions/usersActions';
import { Link } from 'react-router-dom';
import GoogleLogin from "react-google-login";
import Loader from '../components/Loader';



// 1086726256498-432u6e7a0ukbsfj0lnkqqf3bli5u3c5a.apps.googleusercontent.com

const UserSignUp = (props) => {

    document.title="Sign up"

    const [messageToUser, setMessageToUser] = useState("")
    const [userGuide, setUserGuide] = useState("")
    const [userData, setUserData] = useState({})
    const [errorJoi, setErrorJoi] = useState({})
    const [disabledBtn, setDisabledBtn] = useState(true) 
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        async function getCountries() {
            try {
                await props.getCountriesList()
                setLoader(false)
            } catch (error) {
                setLoader(false)
                return false
            }
        }
        getCountries()
        console.log("hola")
    }, [])

    if (loader) {
        return <div><Loader /></div>
    }

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
                } else {
                    setUserGuide("")
                }
            } 
            setMessageToUser("")
            setUserData({
                ...userData,
                [e.target.name]: e.target.value 
            })
            if (Object.entries(userData).length === 5 ) {
                return setDisabledBtn(false)
            }
        } else { 
            return setMessageToUser("There are empty fields")   
        }
    }

    const clickSignUpHandler = async (e) => {
        e.preventDefault()
        if (Object.entries(userData).length > 0) {
            let response = await props.addNewUser(userData)
            if (!response.data.success) {
                setErrorJoi({})
                if (response.data.errors) {
                    response.data.errors.map((error) => {
                        return setErrorJoi(errorJoi => {
                            return {
                                ...errorJoi,
                                [error.path]: error.message
                            }
                        })
                    })
                }                        
                if (response.data.error) {
                    setUserGuide(response.data.error)
                }
            }
        } else {
            setMessageToUser("All fields are required")
        }
    }

    const responseGoogle = async (info) => {
        console.log(info)
        let googleUser = {
            userEmail: info.profileObj.email,
            userPassword: info.profileObj.googleId,
            userName: info.profileObj.givenName,
            userLastName: info.profileObj.familyName,
            userPhoto: info.profileObj.imageUrl,
            userCountry: "Argentina",
            google: true
        }
        let response = await props.addNewUser(googleUser)
        console.log(response)
        if (!response.data.success) {
            setUserGuide(response.data.error)           //ver impresion de errores
        }
    }

    console.log(userData)
    // const inputCheck = {
    //     ok: "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ring-2 ring-green-500",
    //     notOk: "focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ring-2 ring-red-500",
    // }

    return (
        <div 
        style={{backgroundImage: `url("https://i.imgur.com/zJKyzjj.jpg")`}} 
        alt="background plane" 
        className="w-full h-full bg-top bg-cover bg-fixed bg-opacity-70 ">
            <div className="w-full h-full bg-indigo-200 bg-opacity-40">
                <Header />
                <div className="flex w-11/12 mx-auto">
                    <div className="w-1/3 pt-12 px-4 ">
                        
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <div className="flex flex-col py-2">
                            <h2 className="text-center text-4xl">Create an account!</h2>
                        </div>
                        <div className="w-full">
                            <input 
                                type="email"                //cambiar type a email ?? revisar
                                name="userEmail"
                                placeholder="* Enter your email" 
                                className={`inputBox w-full `}
                                onChange={inputHandler} /> 
                            <div className="w-full h-5 mb-1">{errorJoi.userEmail && <h2 className="text-sm text-red-700">{errorJoi.userEmail}</h2>}</div>
                        </div>
                        <div className="w-full">
                            <input 
                                type="password" 
                                name="userPassword"
                                placeholder="* Enter your password" 
                                className="inputBox w-full" 
                                onChange={inputHandler} /> 
                            <div className="w-full h-5 mb-1">{errorJoi.userPassword && <h2 className="text-sm text-red-700">{errorJoi.userPassword}</h2>}</div>
                        </div>
                        <div className="w-full">
                            <input 
                                type="text" 
                                name="userName"
                                placeholder="* Enter your name" 
                                className="inputBox w-full" 
                                onChange={inputHandler} />
                            <div className="w-full h-5 mb-1">{errorJoi.userName && <h2 className="text-sm text-red-700">{errorJoi.userName}</h2>}</div> 
                        </div>
                        <div className="w-full"> 
                            <input 
                                type="text" 
                                name="userLastName"
                                placeholder="* Enter your last name" 
                                className="inputBox w-full" 
                                onChange={inputHandler} /> 
                            <div className="w-full h-5 mb-1">{errorJoi.userLastName && <h2 className="text-sm text-red-700">{errorJoi.userLastName}</h2>}</div>
                        </div>
                        <div className="w-full">
                            <input 
                                type="text" 
                                name="userPhoto"
                                placeholder="* Enter your photo" 
                                className="inputBox w-full" 
                                onChange={inputHandler} />
                            <div className="w-full h-5 mb-1">{errorJoi.userPhoto && <h2 className="text-sm text-red-700">{errorJoi.userPhoto}</h2>}</div> 
                        </div>
                        <div className="">
                            <select 
                                name="userCountry"
                                className="bg-gradient-to-t from-indigo-500 to-indigo-200 px-4 py-2 text-lg ring-0 border rounded-md "
                                onChange={inputHandler}>
                                <option>* Select a country</option>
                                {props.countriesList.map((country, index) => {
                                    return <option value={country.name} key={index}>{country.name}</option>
                                })}
                            </select>
                            <div className="w-full h-5 mb-1">{errorJoi.userCountry && <h2 className="text-sm text-red-700">{errorJoi.userCountry}</h2>}</div>
                        </div>
                        <div className="w-full flex justify-center items-center gap-4">
                            <button
                            onClick={clickSignUpHandler} 
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
                    <div className="w-1/3 ">
                        <div className="flex flex-col py-2">
                            <div className="h-10"></div>
                            <div className={`flex flex-col w-30 px-2.5 py-2 ml-1.5 mt-4 text-justify bg-indigo-200 bg-opacity-80 rounded-sm shadow-md border border-gray-400 ${userGuide === "" ? "hidden" : "block"}`}>
                                <h2 className={`${userGuide === "" ? "hidden" : "block"} text-black`}>{userGuide}</h2>
                            </div>
                            <div className={`flex flex-col w-30 px-2.5 py-2 ml-1.5 mt-4 text-justify bg-indigo-200 bg-opacity-80 rounded-sm shadow-md border border-gray-400 ${!userData === "" ? "block" : "hidden"}`}>
                                <h2 className={`${userData === "" ? "hidden" : "block"} text-black`}>{messageToUser}</h2>
                            </div>
                        </div>   
                    </div>
                </div> 
                <div className="flex justify-center pb-12">
                    <h2>If you already have an account, click here to <Link to="/login" className="text-lg text-indigo-700">Log in!</Link></h2>
                </div>   
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        countriesList: state.users.countriesList
    }
}
const mapDispatchToProps = {
    addNewUser: usersActions.addNewUser,
    getCountriesList: usersActions.getCountriesList,

}

export default connect(mapStateToProps, mapDispatchToProps) (UserSignUp)