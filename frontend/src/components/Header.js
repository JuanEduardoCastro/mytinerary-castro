import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import useClickAwayListener from "use-click-away-listener";
import Aos from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";
import usersActions from '../redux/actions/usersActions';
import { motion } from "framer-motion";


const Header = (props) => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isOpenMenuGuy, setIsOpenMenuGuy] = useState(false)
    
    useEffect(() => {
        Aos.init({ offset: 120, duration: 600})
    }, [])

    const handleClickAway = () => {
        setIsOpenMenu(false)
    }

    const handleClickAwayGuy = () => {
        setIsOpenMenuGuy(false)
    }

    const logOutClick = () => {
        props.logOutUser()
    }

    const clickAwayRef = useClickAwayListener(handleClickAway)
    const clickAwayRefGuy = useClickAwayListener(handleClickAwayGuy)

    const dinamicTextColor = {
        white: "text-white",
        black: "text-black"
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
        <header data-aos="fade-down" className="relative w-full h-28 md:h-28">
            <nav className="h-full flex justify-between items-start md:items-center ">
                <div className="hidden md:flex md:items-center md:block py-2.5 px-8 gap-3 text-5xl tracking-wider permanentMarkerFont leading-10">
                    <img src="https://i.imgur.com/slgCIZZ.png" alt="logo mytinerary" className="w-24 h-24 m-1"/>
                    <h1 className={`${props.textColorTag && dinamicTextColor.white }`} >Mytinerary</h1>
                </div>
                <div className="w-full h-full flex justify-between md:justify-end items-start md:items-start md:gap-4 pt-3 px-8 fotoText">
                    <div className=" flex flex-col items-start justify-center pt-4">
                        <motion.div    
                            ref={clickAwayRef}                     
                            className=" block md:hidden flex flex-col items-end gap-2">   
                            <motion.div
                                whileHover={{scale: 1.1}}
                                onClick={() => setIsOpenMenu(!isOpenMenu )}
                                className=""
                                >
                                <FontAwesomeIcon icon={isOpenMenu ? faTimes : faBars} size="2x" className="text-indigo-900" />
                            </motion.div>
                            <motion.div
                                initial={isOpenMenu ? "hidden" : "visible"}
                                animate={isOpenMenu ? "visible" : "hidden"}
                                variants={list}
                                className="flex flex-col items-end gap-2"
                                >
                                <motion.div
                                    variants={item}>
                                    <NavLink exact to="/" activeClassName="text-indigo-700" className="text-xl hover:text-indigo-700"><p>Home</p></NavLink>
                                </motion.div>
                                <motion.div
                                    variants={item}>
                                    <NavLink to="/cities" activeClassName="text-indigo-700" className="text-xl hover:text-indigo-700"><p>Cities</p></NavLink>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <div className="hidden md:block flex flex-col md:flex md:flex-row text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-2 md:pt-4 overflow-visible text-bolder">
                            <NavLink exact={true} to="/" activeClassName="text-indigo-700" className="hover:text-indigo-700"><p>Home</p></NavLink>                      
                            <NavLink to="/cities" activeClassName="text-indigo-700" className="hover:text-indigo-700"><p>Cities</p></NavLink>
                        </div>
                    </div>
                    <motion.div 
                        ref={clickAwayRefGuy}                        
                        className="flex flex-col items-center gap-2">
                        <motion.div
                            whileHover={{scale: 1.1}}
                            onClick={() => setIsOpenMenuGuy(!isOpenMenuGuy )}
                            className=""
                            >
                            {!props.token ? 
                            <FontAwesomeIcon icon={faUserCircle} size="4x" className="text-indigo-900 cursor-pointer"/>
                            : <div style={{backgroundImage: `url("${props.userPhoto}")`}}
                            className="w-16 h-16 bg-cover bg-center rounded-full cursor-pointer"></div>}
                        </motion.div>
                        <motion.div
                            initial={isOpenMenuGuy ? "hidden" : "visible"}
                            animate={isOpenMenuGuy ? "visible" : "hidden"}
                            variants={list}
                            className="flex flex-col items-end gap-2"
                            >
                            <motion.div
                                variants={item}>
                                {!props.token && <NavLink to="/signup" activeClassName="text-indigo-700" className="text-xl hover:text-indigo-700"><p>Sign up</p></NavLink>}
                            </motion.div>
                            <motion.div
                                variants={item}>
                                {!props.token && <NavLink to="/login" activeClassName="text-indigo-700" className="text-xl hover:text-indigo-700"><p>Log in</p></NavLink>}
                            </motion.div>
                            <motion.div
                                variants={item}>
                                {props.token && <p className="text-xl cursor-pointer hover:text-indigo-700">{props.userName}</p>}
                            </motion.div>
                            <motion.div
                                variants={item}>
                                {props.token && <p onClick={logOutClick} className="text-xl cursor-pointer hover:text-indigo-700">Log out</p>}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </nav>
        </header>             
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
export default connect(mapStateToProps, mapDispatchToProps)(Header)