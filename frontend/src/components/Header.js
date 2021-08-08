import { Link, NavLink } from "react-router-dom"



const Header = () => {
    return (
        <header className="bg-indigo-300 bg-opacity-60 flex flex-col md:flex md:flex-row md:justify-between w-full ">
            <div className="flex items-center px-8 gap-3 text-5xl font-semibold tracking-wide">
                <img src="/assets/logo_mytinerary.png" alt="logo mytinerary" className="w-28 h-28 m-1"/>
                <h1>Mytinerary</h1>
            </div>
            <nav className="flex justify-end items-center md:flex md:items-center  px-8 gap-4 text-xl ">
                <NavLink exact to="/" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cities" activeClassName="text-indigo-700" className="hover:text-indigo-700">
                    <p>Cities</p>
                </NavLink>
                <Link to="">
                    <img src="/assets/login-icon-01.png" alt="logo icon" className="w-12 h-12 m-1"/>
                </Link>
            </nav>
        </header>
    )
}

export default Header