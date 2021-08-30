import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {  faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import useClickAwayListener from "use-click-away-listener";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";


const Footer = (props) => {
    
    const [isOpenMenuGuy, setIsOpenMenuGuy] = useState(false)

    const handleClickAwayGuy = () => {
        setIsOpenMenuGuy(false)
    }
    
    const clickAwayRefGuy = useClickAwayListener(handleClickAwayGuy)

    useEffect(() => {
        Aos.init({ offset: 120, duration: 600})
    }, [])

    const logOutClick = () => {
        props.logOutUser()
    }

    const list = {
        visible: { opacity: 1},
        hidden: {opacity: 0}
    }

    const item = {
        visible: { opacity: 1, x: 0},
        hidden: {opacity: 0, x: -100}
    }

    return (
        <footer className="bg-indigo-500 gap-2 sm:gap-0 bg-opacity-90 w-full h-60 flex flex-col justify-between fotoText">
            <div data-aos="fade-up" className="flex flex-col items-center justify-center w-full px-12 gap-2 md:flex md:flex-row md:justify-center  md:items-center md:w-full md:h-3/5 pt-4 lg:px-40">
                <div className=" justify-center items-center  gap-3 text-4xl pt-8 font-semibold tracking-wider hidden md:block permanentMarkerFont">
                    <img src="https://i.imgur.com/slgCIZZ.png" alt="logo mytinenrary" className="w-24 h-24"/>
                    <h1>Mytinerary</h1>
                </div>
                <div className="flex justify-between md:justify-around w-full h-24 gap-6 md:gap-2 md:flex md:flex-row md:items-center md:justify-center text-lg md:text-2xl lg:gap-10">
                    <div className="flex items-center gap-4 md:text-2xl pl-2 md:pl-0">
                        <NavLink exact to="/" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                            <h2>Home</h2>
                        </NavLink>
                        <NavLink to="/cities" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                            <h2>Cities</h2>
                        </NavLink>
                        <div className="hidden md:block ml-12 text-2xl text-center">
                            <h2>{props.userName && `Welcome ${props.userName}`}</h2>
                        </div>
                    </div>
                    <motion.div 
                        ref={clickAwayRefGuy}                        
                        className="flex items-center gap-2">  
                        <motion.div
                            initial={isOpenMenuGuy ? "hidden" : "visible"}
                            animate={isOpenMenuGuy ? "visible" : "hidden"}
                            variants={list}
                            className="flex flex-col items-end pt-0 md:pt-3 gap-2 "
                            >
                            <motion.div
                                variants={item}>
                                {!props.token && <NavLink to="/signup" activeClassName="text-indigo-700" className="text-xl md:text-2xl hover:text-indigo-700"><p>Sign up</p></NavLink>}
                            </motion.div>
                            <motion.div
                                variants={item}>
                                {!props.token && <NavLink to="/login" activeClassName="text-indigo-700" className="text-xl md:text-2xl hover:text-indigo-700"><p>Log in</p></NavLink>}
                            </motion.div>
                            <motion.div
                                variants={item}>
                                {props.token && <p className="text-xl md:text-2xl cursor-pointer hover:text-indigo-700">{props.userName}</p>}
                            </motion.div>
                            <motion.div
                                variants={item}>
                                {props.token && <p onClick={logOutClick} className="text-xl md:text-2xl cursor-pointer hover:text-indigo-700">Log out</p>}
                            </motion.div>
                        </motion.div>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            onClick={() => setIsOpenMenuGuy(!isOpenMenuGuy )}
                            className=""
                            >
                            {!props.token ? 
                            <FontAwesomeIcon icon={faUserCircle} size="4x" className="text-indigo-900 cursor-pointer transform scale-90"/>
                            : <div style={{backgroundImage: `url("${props.userPhoto}")`}}
                            className="w-20 h-20 bg-cover bg-center rounded-full cursor-pointer"></div>}
                        </motion.div>
                    </motion.div>
                </div>
                <div>
                    <div className="flex flex-row items-start md:flex md:flex-col md:justify-center gap-8 md:gap-2 md:pt-10">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="transform scale-90 hover:scale-110">
                            <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transform scale-90 hover:scale-110">
                            <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
                        </a>
                        <a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer" className="transform scale-90 hover:scale-110"> 
                            <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center pb-4 text-indigo-700">
                <h2>Juan Eduardo Castro Trujillo - Mytinerary project 2021 - All rights reserved</h2>
            </div>
        </footer>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        userName: state.users.userNameStore,
        userPhoto: state.users.userPhotoStore
    }
} 

const mapDispatchToProps = {
    logOutUser: usersActions.logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)