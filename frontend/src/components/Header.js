import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-indigo-300 bg-opacity-60 w-full ">
            <nav className="flex md:justify-between px-8 gap-4 text-xl ">
                <div className="md:flex md:items-center hidden md:block py-2.5 px-8 gap-3 text-6xl tracking-wider permanentMarkerFont leading-10">
                    <img src="/assets/logo_mytinerary.png" alt="logo mytinerary" className="w-28 h-28 m-1"/>
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
        </header>
    )
}

export default Header

