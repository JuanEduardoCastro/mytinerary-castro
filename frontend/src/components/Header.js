import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import useClickAwayListener from "use-click-away-listener";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = (props) => {
    console.log(props)

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

    const clickAwayRef = useClickAwayListener(handleClickAway)
    const clickAwayRefGuy = useClickAwayListener(handleClickAwayGuy)


    const dinamicTextColor = {
        white: "text-white",
        black: "text-black"
    }


    return (
        <header data-aos="fade-down" className="w-full h-28 md:h-28">
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
                            <ul className="hidden md:block flex flex-col md:flex md:flex-row text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-2 md:pt-4 overflow-visible text-bolder">
                                <li>
                                    <NavLink exact={true} to="/" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Home</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cities" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Cities</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Sign up</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Log in</p>
                                    </NavLink>
                                </li>
                            </ul>
                    </div>
                    <div className="w-28 flex flex-col items-end md:items-end md:justify-end">
                        <div className="pt-2 pl-2 m-1 md:pl-0 md:m-0">
                            <div ref={clickAwayRefGuy}className="w-14 h-14 md:w-16 md:h-16 cursor-pointer">
                                <FontAwesomeIcon icon={faUserCircle} onClick={toggleMenuGuy} size="4x" className="transform hover:scale-110"/>
                            </div>
                        </div>
                        {menuGuy && (
                            <ul className="flex flex-col items-end text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-4 overflow-visible">
                                <li>
                                    <NavLink to="/login" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Log in</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Sign up</p>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </header>             
    )
}

export default Header