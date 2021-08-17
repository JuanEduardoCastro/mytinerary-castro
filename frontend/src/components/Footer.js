import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {  faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import useClickAwayListener from "use-click-away-listener";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    const [menuGuy, setMenuGuy] = useState(false)

    const toggleMenuGuy = () => {
        setMenuGuy(!menuGuy)
    } 

    const handleClickAwayGuy = () => {
        setMenuGuy(false)
    }
    
    const clickAwayRefGuy = useClickAwayListener(handleClickAwayGuy)

    useEffect(() => {
        Aos.init({ offset: 120, duration: 600})
    }, [])

    return (
        <footer className="bg-indigo-500 gap-2 sm:gap-0 bg-opacity-90 w-full h-60 flex flex-col justify-between">
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
                    </div>
                    <div className="flex justify-end items-center w-48 md-flex md:items-center md:justify-end">
                        {menuGuy && (
                            <ul className="flex flex-col items-end gap-4 text-center list-none text-lg cursor-pointer py-2.5 px-4 overflow-visible">
                                <li to="" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Log in</p></li>
                                <li to="" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Sign up</p></li>
                            </ul>
                        )}
                        <div className="pt-2 pl-2 m-1 md:pl-0 md:m-0">
                            <div ref={clickAwayRefGuy} className="w-14 h-14 md:w-16 md:h-16 cursor-pointer">
                                <FontAwesomeIcon icon={faUserCircle} onClick={toggleMenuGuy} size="3x" className="transform hover:scale-110"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-start md:flex md:flex-col md:justify-center gap-8 md:gap-2 md:pt-10">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="transform hover:scale-110">
                            <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transform hover:scale-110">
                            <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
                        </a>
                        <a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer" className="transform hover:scale-110"> 
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

export default Footer