import React, { useEffect, useState } from "react";
import axios from "axios";

const City = (props) => {

    const [city, setCity] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:4000/api/information/city/${props.match.params.id}`)
        .then((response) => setCity(response.data.response))
    }, [props.match.params.id])
    console.log(city)
    
    return (
        <>
            <div 
            style={{backgroundImage: `url("/assets/citiesImg/${city.imgSource}")`}}
            alt={city.cityName}
            key={city.id}
            className="w-full h-60 bg-center bg-cover"
            > 
                <div className="text-white text-3xl">
                    <h2>{city.cityName}</h2>
                    <h2>{city.countryName}</h2>
                </div>   
            </div>
            <div>
                <h2>Underconstruction...</h2>
            </div>
        </>
    )
}

export default City