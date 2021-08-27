import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import useClickAwayListener from "use-click-away-listener";
import Aos from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";
import usersActions from '../redux/actions/usersActions';

const Header = (props) => {

    const [menuButton, setMenuButton] = useState(false)
    const [menuGuy, setMenuGuy] = useState(false)
    
    useEffect(() => {
        Aos.init({ offset: 120, duration: 600})
    }, [])

    const toggleMenuButton = () => {
        setMenuButton(!menuButton)
    }

    const toggleMenuGuy = () => {
        setMenuGuy(!menuGuy)
    }

    const handleClickAway = () => {
        setMenuButton(false)
    }

    const handleClickAwayGuy = () => {
        setMenuGuy(false)
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
    console.log(props)
    return (
        <header data-aos="fade-down" className="relative w-full h-28 md:h-28">
            {/* <div className="absolute w-full h-20 inset-x-0 top-20">
                <div className="flex justify-center items-center mx-auto w-1/3 h-28 mt-10 border border-indigo bg-indigo-200 bg-opacity-90">
                    <h2 className="text-2xl">{`Bienvenido ${props.userName}`}</h2>
                </div>
            </div> */}
            <nav className="h-full flex justify-between items-start md:items-center ">
                <div className="hidden md:flex md:items-center md:block py-2.5 px-8 gap-3 text-5xl tracking-wider permanentMarkerFont leading-10">
                    <img src="https://i.imgur.com/slgCIZZ.png" alt="logo mytinerary" className="w-24 h-24 m-1"/>
                    <h1 className={`${props.textColorTag && dinamicTextColor.white }`} >Mytinerary</h1>
                </div>
                <div className="w-full h-full flex justify-between md:justify-end items-start md:items-start pt-3 px-8 fotoText">
                    <div className=" flex flex-col items-start justify-center gap- pt-2">
                            <div ref={clickAwayRef} className="w-14 h-14 p-2 text-xl text-black block md:hidden cursor-pointer">
                                    <FontAwesomeIcon icon={menuButton ? faTimes : faBars} onClick={toggleMenuButton} size="2x" className="transform hover:scale-110" />
                                {(menuButton) && (
                                    <ul className=" flex flex-col md:flex md:flex-row text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-2 md:pt-4 overflow-visible text-bolder">
                                        <li>
                                            <NavLink exact={true} to="/" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                                <p> Home</p>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/cities" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                                <p>Cities</p>
                                            </NavLink>
                                        </li>
                                    </ul> 
                                )}
                            </div>
                            <div className="hidden md:block flex flex-col md:flex md:flex-row text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-2 md:pt-4 overflow-visible text-bolder">
                                
                                    <NavLink exact={true} to="/" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Home</p>
                                    </NavLink>
                                
                                
                                    <NavLink to="/cities" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Cities</p>
                                    </NavLink>
                                
          
                                {!props.token && 
                                    <Link to="/signup" className="hover:text-indigo-700">
                                        <p>Sign up</p>
                                    </Link>}
         
                                {!props.token &&
                                    <Link to="/login" className="hover:text-indigo-700">
                                        <p>Log in</p>
                                    </Link>}
     
                                {/* {props.token && 
                                    <h2>{props.userName}</h2>} */}
          
                                {props.token && 
                                    <h2 onClick={logOutClick} className="hover:text-indigo-700">Log out</h2>
                                }
                            </div>
                    
                    </div>
                    <div className="w-28 flex flex-col items-end md:items-end md:justify-end">
                        <div className="pt-2 pl-2 m-1 md:pl-0 md:m-0">
                            <div ref={clickAwayRefGuy}className="w-14 h-14 md:w-16 md:h-16 cursor-pointer">
                                {!props.token ? 
                                <FontAwesomeIcon icon={faUserCircle} onClick={toggleMenuGuy} size="4x" className="transform hover:scale-110"/>
                            : <div onClick={toggleMenuGuy} 
                            style={{backgroundImage: `url("${props.userPhoto}")`}}
                            className="w-14 h-14 transform hover:scale-110 bg-cover bg-center rounded-full cursor-pointer"></div>}
                            </div>
                        </div>
                        {menuGuy && (
                            <ul className="flex flex-col items-end text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-4 overflow-visible">
                                {/* <li>
                                    <NavLink to="/login" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Log in</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Sign up</p>
                                    </NavLink>
                                </li> */}
                                {!props.token && 
                                    <Link to="/signup" className="hover:text-indigo-700">
                                        <p>Sign up</p>
                                    </Link>}
         
                                {!props.token &&
                                    <Link to="/login" className="hover:text-indigo-700">
                                        <p>Log in</p>
                                    </Link>}
                                {props.token && <li><p>{props.userName}</p></li>}
                                {props.token && <li><p onClick={logOutClick} className="hover:text-indigo-700">Log out</p></li>}
                            </ul>
                        )}
                    </div>
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