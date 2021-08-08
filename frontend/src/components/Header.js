import { Link, NavLink } from "react-router-dom"



const Header = () => {
    return (
        <header className="bg-indigo-300 bg-opacity-60 flex justify-between w-full ">
            <div className="flex items-center px-8 gap-3 text-4xl font-bold tracking-wider">
                <img src="/assets/logo_mytinerary.png" className="w-24 h-24 m-1"/>
                <h1>Mytinerary</h1>
            </div>
            <nav className="flex items-center px-8 gap-4 text-xl">
                <NavLink exact to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cities">
                    <p>Cities</p>
                </NavLink>
          {      <Link>
                    <img src="/assets/login-icon-01.png" className="w-12 h-12 m-1"/>
                </Link>}
            
            </nav>
        </header>
    )
}

export default Header