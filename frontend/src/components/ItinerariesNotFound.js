import React from 'react'
import { Link } from 'react-router-dom'

const ItinerariesNotFound = () => {
    return (
        <div>
            <div className=" w-full h-full fotoText">
                <div className="w-full py-4 pb-6 flex flex-col items-center justify-around bg-gradient-to-t from-red-200 tracking-wide text-center">
                    <img src="https://i.imgur.com/l8bw9NJ.png" alt="Not found logo" className="w-32 h-32" />
                    <h2 className="text-4xl text-black">We don´t have itineraries at this moment!</h2>
                    <h2 className="text-3xl text-black">Please select another city.</h2>
                    <div className="flex flex-col items-center mt-4 gap-4 text-indigo-900">
                        <Link to="/cities">
                            <button className="btn">Try with another city!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItinerariesNotFound
