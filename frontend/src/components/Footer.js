import { NavLink, Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {

    const [menuGuy, setMenuGuy] = useState(false)

    const toggleMenuGuy = () => {
        setMenuGuy(!menuGuy)
    } 


    return (
        <footer className="bg-indigo-500 bg-opacity-90 w-full h-60 md:h-96 flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center w-full gap-8 md:flex md:flex-row md:justify-around md:items-center md:w-5/6 md:h3/5 pt-12">
                <div className=" justify-center items-center px-8 gap-3 text-5xl font-semibold tracking-wider hidden md:block permanentMarkerFont">
                    <img src="/assets/logo_mytinerary.png" alt="logo mytinenrary" className="w-28 h-28 m-1"/>
                    <h1>Mytinerary</h1>
                </div>

                <div className="flex flex-row items-end gap-6 md:gap-6 md:flex md:flex-col md:items-start md:gap-6 text-lg md:text-xl bg-blue-300">
                    <NavLink exact to="/" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                        <h2>Home</h2>
                    </NavLink>
                    <NavLink to="/cities" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                        <h2>Cities</h2>
                    </NavLink>
                    
                    <div className="w-28 flex flex-col items-end md:items-end md:justify-end bg-pink-300">
                        {menuGuy && (
                            <ul className="flex flex-col items-end text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-4 overflow-visible">
                                <li to="" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Log in</p></li>
                                <li to="" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Sign up</p></li>
                            </ul>
                        )}
                        <div className="pt-2 pl-2 m-1 md:pl-0 md:m-0">
                            <div className="w-14 h-14 md:w-16 md:h-16">
                                <FontAwesomeIcon icon={faUserCircle} onClick={toggleMenuGuy} size="3x" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* redes sociales */}
                    <div className="flex flex-row md:flex md:flex-col md:justify-center gap-8">
                        <Link to="">
                            <img src="/assets/fb_icon.png" alt="facebook" className="w-14 h-14"/>
                        </Link>
                        <Link to="">
                            <img src="/assets/ig_icon.png" alt="instagram" className="w-14 h-14"/>
                        </Link>
                        <Link to="">
                            <img src="/assets/twt_icon.png" alt="tweeter" className="w-14 h-14"/>
                        </Link>
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




                {/* <div className="flex flex-row justify-center me:flex md:flex-col md:justify-start gap-6 md:gap-6 text-center">
                    <div className=" text-2xl md:text-3xl">
                        <h2>Menu</h2>
                    </div> */}