import React, { useEffect, useState,  useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Error404 from "./Error404";
import axios from "axios";

const City = (props) => {

    const [city, setCity] = useState({})
    const [loader, setLoader] = useState(true)
    const [error, setError] = useState(null)

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    })

    useEffect(() => {
        setLoader(true)
        axios.get(`http://localhost:4000/api/information/city/${props.match.params.id}`)
        .then((response) => {
            if (response.data.success) {
                setCity(response.data.response) 
                setLoader(false)
            } else {           
                throw new Error("Couldn´t connect to the database")
            }
        })
        .catch((error) => { 
            setError(error.message) 
            console.error(error.message)
        })
        .finally(() => setLoader(false)) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])                 

    if (loader) {
        return <div><Loader /></div>
    }
    
    return (
        <>
            {!error ? (
            <div className="">
                <div 
                style={{backgroundImage: `url("${city.imgSource}")`}}
                alt={city.cityName}
                key={city._id}
                className="w-full h-72 bg-center bg-cover"
                > 
                    <Header />
                    <div className="text-5xl pl-4 pt-2 fotText">
                        {city.textColorTag ? (<><h2 className="text-white">{city.cityName}</h2><h2 className="text-white">{city.countryName}</h2></>) : (<><h2 className="text-black">{city.cityName}</h2><h2 className="text-black">{city.countryName}</h2></>)}
                    </div>   
                </div>
                <div className=" w-full h-full ">
                    <div className="w-full py-4 pb-6 flex flex-col items-center justify-around text-3xl text-black bg-gradient-to-t from-red-200 tracking-wide text-center">
                        <img src="https://i.imgur.com/LmKOcmk.png" alt="Not found logo" className="w-32 h-32" />
                        <h2 className="text-4xl text-black">We are under construction!</h2>
                        <h2 className="text-3xl ">Please select another city.</h2>
                        <div className="flex flex-col items-center mt-4 gap-4 text-indigo-900">
                            <div className="rounded-md mt-4 mb-8 p-4 bg-gradient-to-t from-indigo-500 to-indigo-200 ring-1 ring-indigo-500 bg-opacity-90 shadow-2xl cursor-pointer text-2xl italic hover:bg-indigo-700 hover:text-black duration-300">
                                <Link to="/cities"><button>Try with another city!</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> ) : (<Error404/> )}
        </>
    )
}

export default City