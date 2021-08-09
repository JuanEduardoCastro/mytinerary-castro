import { NavLink } from "react-router-dom"

const Hero = () => {
    return (
        <div className="bg-indigo-300 bg-opacity-60 w-full min-h-screen flex flex-col justify-center items-center gap-8 pb-48">
            <div className="text-center text-4xl font-semibold tracking-wide mt-4 md:hidden">
                <h1>Mytinerary</h1>
            </div>
            <div className="text-2xl md:text-4xl italic text-indigo-900 heroText text-center">
                <h3>"Find your perfect trip, designed by insiders who know and love their cities!"</h3>
            </div>
            <NavLink to="/cities">
                <div className="shadow-xl">
                    <button className="rounded-md p-4 bg-indigo-700 ring-1 ring-indigo-600 bg-opacity-90 shadow-2xl cursor-pointer text-xl hover:bg-indigo-900 animate-pulse duration-1000">Let´s find out together!</button>
                </div>
            </NavLink>
        </div>

    )
}

export default Hero