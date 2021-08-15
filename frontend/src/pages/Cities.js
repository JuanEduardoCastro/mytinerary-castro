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
            if (response.data.success) {
                setCitiesList(response.data.response) 
            } else {
                console.error(response.data.success)        //crear visual de error
            }
        })
        .catch((error) => console.error(error))             //crear visual de error
        .finally(() => setLoader(false))
    }, [])

    if (loader) {
        return <div className="w-full h-80 text-7xl flex justify-center items-center"><h2>Loading...</h2></div>
    }

    const inputHandler = (e) => {
        setLetter(((e.target.value).toLowerCase().trim()))
    } 

 
    var cityFiltered = citiesList.filter(city => (city.cityName).toLowerCase().startsWith(letter)).map((filteredCity, index) => (
        <Link to={`/city/${filteredCity._id}`} className="flex justify-center w-10/12 mx-auto">
            {console.log(filteredCity.imgSource)}
            {/* padre */} {/* intercambiar con el link */}
            <div className="relative group flex items-center justify-center my-3 overflow-hidden shadow-md w-full h-64 rounded-md">
                <div 
                style={{backgroundImage: `url("${filteredCity.imgSource}")`}}  
                alt={filteredCity.cityName} 
                key={filteredCity.index}
                className="absolute w-full h-full transition-all duration-1000 ease-in-out transform bg-center bg-cover group-hover:scale-125 delay-100"
                >
                </div>      
                <div className="absolute w-full h-full transition-border duration-700 ease-in-out transform border border-black border-4 group-hover:opacity-70 group-hover:scale-90 delay-200 opacity-60">
                    <div className="w-full h-full hover:bg-indigo-300">
                        <div className="absolute text-white opacity-100 text-white text-4xl transition-text duration-700 transform easy-in-out hover:text-6xl pl-4 pt-2 ">
                            <h2>{filteredCity.cityName}</h2>
                            <h2>{filteredCity.countryName}</h2>
                        </div> 
                    </div>
                </div>
            </div>
        </Link>
    )) 

    console.log(cityFiltered)

    return (
        <>
            <div style={{backgroundImage: `url("/assets/turismo04.jpeg")`}} alt="background living" className="w-full h-80 flex flex-col justify-between bg-top bg-cover">
                <Header />
                <div className="w-full h-48 flex justify-center items-center">
                    <input 
                    type="text" 
                    name="filterCity"
                    placeholder="Find a city to explore" 
                    className="border border-indigo-700 focus:indigo-700 rounded-lg bg-white text-black text-4xl px-4 py-2 text-center " 
                    onChange={inputHandler} />                
                </div>
            </div>
            <div className="pt-2">                
                {!cityFiltered.length < 1 ? cityFiltered : <h2>Sorry.. City found</h2> }
            </div>
        </>
    )
}

export default Cities
