import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const City = (props) => {

    const [city, setCity] = useState({})
    const [loader, setLoader] = useState(true)

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
    }, [props.match.params.id])                 //pegar un comentario para sacar el alert del array de dependencia del useEffect

    if (loader) {
        return <div className="w-full h-80 text-7xl flex justify-center items-center"><h2>Loading...</h2></div>
    }
    
    return (
        <div className="">
            <div 
            style={{backgroundImage: `url("/assets/citiesImg/${city.imgSource}")`}}
            alt={city.cityName}
            key={city._id}
            className="w-full h-80 bg-center bg-cover"
            > 
                <Header />
                <div className="text-white text-5xl pl-4 pt-2 fotText">
                    <h2>{city.cityName}</h2>
                    <h2>{city.countryName}</h2>
                </div>   
            </div>
            <div className="w-ful h-80 flex justify-center text-7xl">
                <h2>Underconstruction...</h2>
            </div>
        </div>
    )
}

export default City