import { NavLink } from "react-router-dom"

const Hero = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center gap-8 pb-48">
            <div className="text-center text-5xl font-semibold tracking-wide mt-4 md:hidden permanentMarkerFont">
                <h1>Mytinerary</h1>
            </div>
            <div className="px-8 py-4 text-2xl md:text-4xl italic text-indigo-900 carouselText text-center">
                <h3>Find your perfect trip, designed by insiders who know and love their cities!</h3>
            </div>
            <NavLink to="/cities">
                    <button 
                    className="btn shadow-2xl text-2xl italic "                    
                    >Let´s find out together!</button>
            </NavLink>
        </div>
    )
}

export default Hero