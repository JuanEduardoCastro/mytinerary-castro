import { NavLink } from "react-router-dom"

const Hero = () => {
    return (
        <div className="bg-indigo-300 bg-opacity-60 w-full min-h-screen flex flex-col justify-center items-center gap-8 pb-36">
            <div className="text-3xl italic text-indigo-900">
                <h3>"Find your perfect trip, designed by insiders who know and love their cities!"</h3>
            </div>
            <NavLink to="/cities">
                <div className="shadow-xl">
                    <button className="rounded-md p-4 bg-indigo-700 ring-1 ring-indigo-600 bg-opacity-90 shadow-2xl cursor-pointer text-xl active:bg-indigo-900">Let´s find out together!</button>
                </div>
            </NavLink>
        </div>

    )
}

export default Hero