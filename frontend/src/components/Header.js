import logo from "./assetsComponents/logo_mytinerary.png"
import { NavLink } from "react-router-dom"



const Header = () => {
    return (
        <header className="flex justify-between bg-indigo-600 bg-opacity-90 w-full ">
            <div className="flex items-center px-8 gap-3 text-4xl font-bold tracking-wide">
                <img src= {logo} className="w-24 h-24 m-1"/>
                <h1>Mytinerary</h1>
            </div>
            <nav className="flex items-center px-8 gap-4 text-xl">
                <NavLink exact to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cities">
                    <p>Ciudades</p>
                </NavLink>
                {/* <NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </NavLink> */}
            </nav>
        </header>
    )
}

export default Header