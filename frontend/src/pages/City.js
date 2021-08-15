import React, { useEffect, useState,  useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import axios from "axios";

const City = (props) => {

    const [city, setCity] = useState({})
    const [loader, setLoader] = useState(true)

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    })

    useEffect(() => {
        setLoader(true)
        axios.get(`http://localhost:4000/api/information/city/${props.match.params.id}`)
        .then((response) => {
            console.log(response)
            if (response.data.success) {
                setCity(response.data.response) 
                setLoader(false)
            } else {
                console.error(response.data.success)            
            }
        })
        .catch((error) => console.error(error))         //redireccionar a pagina de error depende de que error tira y boton a home
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.id])                 

    if (loader) {
        return <div /* className="w-full h-80 text-7xl flex justify-center items-center" */><Loader /></div>
    }
    
    return (
        <div className="">
            <div 
            style={{backgroundImage: `url("${city.imgSource}")`}}
            alt={city.cityName}
            key={city._id}
            className="w-full h-72 bg-center bg-cover"
            > 
                <Header />
                <div className="text-white text-5xl pl-4 pt-2 fotText">
                    <h2>{city.cityName}</h2>
                    <h2>{city.countryName}</h2>
                </div>   
            </div>
            <div className=" w-full h-full ">
                <div className="w-full py-4 pb-6 flex flex-col items-center justify-around text-3xl text-black bg-gradient-to-t from-red-200 tracking-wide">
                    <img src="https://i.imgur.com/LmKOcmk.png" alt="Not found logo" className="w-32 h-32" />
                    <h2 className="text-4xl text-black">We are underconstruction!</h2>
                    <h2 className="text-3xl ">Please select another city.</h2>
                    <div className="flex flex-col items-center mt-4 gap-4 text-indigo-900">
                        <div className="rounded-md mt-4 mb-8 p-4 bg-indigo-500 ring-1 ring-indigo-500 bg-opacity-90 shadow-2xl cursor-pointer text-2xl italic hover:bg-indigo-700 hover:text-black duration-300">
                            <Link to="/cities"><button>Try again!</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-ful h-80 flex justify-center text-7xl">
                <h2>Underconstruction...</h2>
            </div> */}
        </div>
    )
}

export default City