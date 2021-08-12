import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

const Cities = () => {

    const [citiesList, setCitiesList] = useState([])
    const [letter, setLetter] = useState("")
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setLoader(true)
        axios.get("http://localhost:4000/api/information/cities")
        .then((response) => {
            console.log(response)
            setLoader(false)
            setCitiesList(response.data.response)
            })
    }, [])

    if (loader) {
        return <h2>Loading...</h2>
    }

    const inputHandler = (e) => {
        setLetter(((e.target.value).toLowerCase().trim()))
    } 

    return (
        <div /* style={{backgroundImage: `url("/assets/background01_edit.jpg")`}} */ alt="background living" className="w-full  flex flex-col justify-between bg-top bg-cover">
            <Header />
            <div className="w-full h-full bg-indigo-300 bg-opacity-60 flex justify-center items-center">
                <input 
                type="text" 
                name="filterCity"
                placeholder="Find a city to explore" 
                className="border rounded-lg bg-white text-black text-4xl px-4 py-2 text-center" 
                onChange={inputHandler} />                
            </div>
            <div>
                {citiesList.map((city) => console.log(city))}
                
                {citiesList.filter(city => (city.cityName).toLowerCase().startsWith(letter)).map((filteredCity, index) => (
                    <Link to={`/city/${filteredCity._id}`} >
                        <div 
                        style={{backgroundImage: `url("/assets/citiesImg/${filteredCity.imgSource}")`}} 
                        alt={filteredCity.cityName} 
                        key={filteredCity._id}
                        className="w-10/12 h-40 bg-cover bg-center mx-auto my-2.5 rounded-md"
                        >
                            <div className="text-white text-3xl">
                                <h2>{filteredCity.cityName}</h2>
                                <h2>{filteredCity.countryName}</h2>
                            </div> 
                        </div>
                    </Link>
                ))} 
            </div>
        </div>
    )
}

export default Cities
