import { NavLink } from "react-router-dom"
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Hero = (props) => {

    const [welcome, setWelcome] = useState(false)

    useEffect(() => {
        if (props.userName) {
            setWelcome(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    setTimeout(() => {
        setWelcome(false)
    }, 3000);

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center gap-8 pb-48">
            {welcome &&
            <div className={`${props.userName ? "block" : "hidden" } absolute w-4/5 md:w-1/3 h-20 inset-x-0 top-20 mx-auto`}>
                <div className="flex justify-center items-center mx-auto w-full h-28 mt-10 border border-indigo bg-indigo-200 bg-opacity-90">
                    <h2 className="text-xl md:text-2xl text-center">{`Welcome ${props.userName}`}</h2>
                </div>
            </div>            }
            <div className="text-center text-5xl font-semibold tracking-wide mt-4 md:hidden permanentMarkerFont">
                <h1>Mytinerary</h1>
            </div>
            <div className="px-8 py-4 text-2xl md:text-4xl italic text-indigo-900  text-center">
                <h3>Find your perfect trip, designed by insiders who know and love their cities!</h3>
            </div>
            <NavLink to="/cities">
                    <button 
                    className="btn shadow-2xl text-2xl italic "                    
                    >Let´s find out together!</button>
            </NavLink>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userName: state.users.userNameStore,
    }
}

export default connect(mapStateToProps)(Hero)