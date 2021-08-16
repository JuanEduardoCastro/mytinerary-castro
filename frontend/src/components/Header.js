import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {

    const [menuButton, setMenuButton] = useState(false)
    const [menuGuy, setMenuGuy] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleMenuButton = () => {
        setMenuButton(!menuButton)
    }

    const toggleMenuGuy = () => {
        setMenuGuy(!menuGuy)
    }

    useEffect(() => {
        Aos.init({ offset: 120, duration: 600})
    }, [])

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", changeWidth)
        
        return () => {
            window.removeEventListener("resize", changeWidth)
        }
    }, [])

    return (
        <header data-aos="fade-down" className="w-full h-28 md:h-28 ">
            <nav className="h-full flex justify-between items-start md:items-center  ">
                <div className="hidden md:flex md:items-center md:block py-2.5 px-8 gap-3 text-5xl tracking-wider permanentMarkerFont leading-10">
                    <img src="https://i.imgur.com/slgCIZZ.png" alt="logo mytinerary" className="w-24 h-24 m-1"/>
                    <h1 className="">Mytinerary</h1>
                </div>
                <div className="w-full h-full flex justify-between md:justify-end items-start md:items-start pt-4 px-8">
                    <div className=" flex flex-col items-start justify-center gap- pt-2">
                        <div className="w-14 h-14 p-2 text-xl text-black block md:hidden">
                            <FontAwesomeIcon icon={menuButton ? faTimes : faBars} onClick={toggleMenuButton} size="2x" />
                        </div>
                        {(menuButton || screenWidth > 768) && (
                            <ul className=" flex flex-col md:flex md:flex-row text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-2 md:pt-4 overflow-visible text-bolder">
                                <li>
                                    <NavLink exact to="/" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                                        <p>Home</p>
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
                    <div className="w-28 flex flex-col items-end md:items-end md:justify-end">
                        <div className="pt-2 pl-2 m-1 md:pl-0 md:m-0">
                            <div className="w-14 h-14 md:w-16 md:h-16">
                                <FontAwesomeIcon icon={faUserCircle} onClick={toggleMenuGuy} size="4x" />
                            </div>
                        </div>
                        {menuGuy && (
                            <ul className="flex flex-col items-end text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-4 overflow-visible">
                                <li to="" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Log in</p></li>
                                <li to="" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Sign up</p></li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </header>             
    )
}

export default Header