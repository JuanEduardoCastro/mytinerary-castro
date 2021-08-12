import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const City = (props) => {

    const [city, setCity] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:4000/api/information/city/${props.match.params.id}`)
        .then((response) => setCity(response.data.response))
    }, [props.match.params.id])
    console.log(props)
    
    return (
        <div className="h-screen">
            <div 
            style={{backgroundImage: `url("/assets/citiesImg/${city.imgSource}")`}}
            alt={city.cityName}
            key={city._id}
            className="w-full h-full bg-center bg-cover"
            > 
                <Header />
                <div className="text-white text-3xl">
                    <h2>{city.cityName}</h2>
                    <h2>{city.countryName}</h2>
                </div>   
            </div>
            <div>
                <h2>Underconstruction...</h2>
            </div>
        </div>
    )
}

export default City