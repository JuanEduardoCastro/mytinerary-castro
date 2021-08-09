import { Link, NavLink } from "react-router-dom"



const Header = () => {
    return (
        <header className="bg-indigo-300 bg-opacity-60 w-full ">
            <nav className="flex md:justify-between px-8 gap-4 text-xl ">
                <div className="md:flex md:items-center hidden md:block px-8 gap-3 text-5xl font-semibold tracking-wide">
                    <img src="/assets/logo_mytinerary.png" alt="logo mytinerary" className="w-28 h-28 m-1"/>
                    <h1>Mytinerary</h1>
                </div>
                <div className="flex justify-between md:justify-end items-center w-full py-3 px-1 md:px-4 gap-4">
                    <div className="flex gap-4">
                        <NavLink exact to="/" activeClassName="text-indigo-700" className="hover:text-indigo-700"><p>Home</p></NavLink>
                        <NavLink to="/cities" activeClassName="text-indigo-700" className="hover:text-indigo-700"><p>Cities</p></NavLink>
                    </div>
                    <div>
                        <Link to=""><img src="/assets/login-icon-01.png" alt="logo icon" className="w-12 h-12 m-1"/></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header

