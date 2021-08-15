import { Link, NavLink } from "react-router-dom"
import React, { useState, useEffect } from "react"

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
    console.log(menuGuy)
    console.log(menuButton)

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

        <header className="w-full h-28 md:h-28 sticky top-0">
            <nav className="h-full flex justify-between items-start md:items-center  ">
                <div className="hidden md:flex md:items-center md:block py-2.5 px-8 gap-3 text-5xl tracking-wider permanentMarkerFont leading-10">
                    <img src="https://i.imgur.com/slgCIZZ.png" alt="logo mytinerary" className="w-24 h-24 m-1"/>
                    <h1 className="">Mytinerary</h1>
                </div>
                <div className="w-full h-full flex justify-between md:justify-end items-start md:items-start pt-4 px-8">

                    <div className=" flex flex-col items-start justify-center gap-2 pt-2">
                        <button className="p-2 text-xl text-black border border-black rounded-md block md:hidden" 
                        onClick={toggleMenuButton}
                        >BTN</button>
                        {(menuButton || screenWidth > 768) && (
                            <ul className=" flex flex-col md:flex md:flex-row text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-2 md:pt-4 overflow-visible text-bolder">
                                <li to="/" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Home</p></li>
                                <li to="/cities" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Cities</p></li>
                            </ul>
                        )}
                    </div>
                    <div className="w-28 flex flex-col items-end md:items-end md:justify-end">
                        <div className="pl-2 m-1 md:pl-0 md:m-0">
                            <button ><img src="/assets/login-icon-01.png" alt="logo icon" 
                            onClick={toggleMenuGuy} className="w-14 h-14 md:w-16 md:h-16"/></button>
                        </div>
                        {menuGuy && (
                            <ul className="flex flex-col items-end text-center list-none gap-4 text-xl cursor-pointer py-2.5 px-4 overflow-visible bg-indigo-200 bg-opacity-50">
                                <li to="" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Log in</p></li>
                                <li to="" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Sign up</p></li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* <ul className="list-none flex">
                    <li className="mr-2 text-2xl text-black cursor-pointer">Home</li>
                    <li className="mr-2 text-2xl text-black cursor-pointer">Cities</li>
                    <li className="mr-2 text-2xl text-black cursor-pointer">Other</li>   
                </ul> */}
            </nav>
        </header>             
    )
}

export default Header

/* 
x icon <i class="fas fa-times"></i>
3 bars icon <i class="fas fa-bars"></i>
 */


{/* <header className=" w-full ">
                    <nav className="flex md:justify-between px-8 gap-4 text-xl "> 
                <div className="md:flex md:items-center hidden md:block py-2.5 px-8 gap-3 text-6xl tracking-wider permanentMarkerFont leading-10">
                    <img src="https://i.imgur.com/slgCIZZ.png" alt="logo mytinerary" className="w-24 h-24 m-1"/>
                    <h1 className="">Mytinerary</h1>
                </div>
                <div className="flex justify-between md:justify-end items-center w-full py-3 px-1 md:px-4 gap-4">
                    <div className="flex gap-4">
                        <NavLink exact to="/" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Home</p></NavLink>
                        <NavLink to="/cities" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Cities</p></NavLink>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-3">
                            <Link to="" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Log in</p></Link>
                            <Link to="" activeclassname="text-indigo-700" className="hover:text-indigo-700"><p>Sign up</p></Link>
                        </div>
                        <div className="pl-2 m-1">
                            <Link to=""><img src="/assets/login-icon-01.png" alt="logo icon" className="w-12 h-12"/></Link>
                        </div>
                    </div>
                </div> 
            </nav>
        </header>*/}