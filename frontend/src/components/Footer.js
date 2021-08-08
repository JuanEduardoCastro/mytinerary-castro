import { NavLink, Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer className="bg-indigo-600 bg-opacity-90 w-full h-96 flex flex-col justify-between">
            <div className="flex justify-around items-centerw-5/6 h3/5 pt-12">
                <div className="flex flex-col justify-center gap-8 text-center">
                    {/* menu */}
                    <div className="text-3xl">
                        <h2>Menu</h2>
                    </div>
                    <div className="flex flex-col justify-center gap-16 text-xl">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                        <NavLink to="/cities">
                            Cities
                        </NavLink>
                    </div>

                </div>
                <div>
                    {/* top 3 ciudades */}

                </div>
                <div>
                    {/* redes sociales */}
                    <div className="flex flex-col gap-16">
                        <Link>
                            <img src="/assets/fb_icon.png" className="w-10 h-10"/>
                        </Link>
                        <Link>
                            <img src="/assets/ig_icon.png" className="w-10 h-10"/>
                        </Link>
                        <Link>
                            <img src="/assets/twt_icon.png" className="w-10 h-10"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center p-4">
                Juan Eduardo Castro Trujillo - MYtinerarie proyect 2021 - All rights reserved
            </div>
        </footer>
    )
}

export default Footer