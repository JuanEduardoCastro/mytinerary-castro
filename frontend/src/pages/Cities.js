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
                    <Link to={`/city/${filteredCity._id}`} className="flex justify-center w-full">
                        <div className="relative flex items-center justify-center my-3 overflow-hidden shadow-xl w-10/12 h-80 rounded-md">
                            <span 
                            /* style={{backgroundImage: `url("/assets/citiesImg/${filteredCity.imgSource}")`}}  */
                            alt={filteredCity.cityName} 
                            key={filteredCity.index}
                            className="absolute w-full h-full transition-scale duration-1000 ease-in-out transform bg-center bg-cover hover:scale-110 delay-200"
                            /* className="w-10/12 h-40 bg-cover bg-center mx-auto my-2.5 rounded-md" */
                            >
                            <img 
                            {src=`("/assets/citiesImg/${filteredCity.imgSource}")`}
                            className="object-cover"
                            />
                            </span>
                                    
                            <span className="absolute w-full h-full transition-opacity duration-700 ease-in-out transform border border-black border-2 hover:opacity-60 hover:scale-75 delay-200">
                            
                            </span>
                            <span className="absolute text-white text-3xl pl-4 pt-2 ">
                                <h2>{filteredCity.cityName}</h2>
                                <h2>{filteredCity.countryName}</h2>
                            </span> 
                        </div>
                    </Link>
                )) 

    console.log(cityFiltered)

    return (
        <>
        <div style={{backgroundImage: `url("/assets/background03.jpeg")`}} alt="background living" className="w-full h-60 flex flex-col justify-between bg-top bg-cover">
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
            <div className="">                
                {!cityFiltered.length < 1 ? cityFiltered : <h2>Sorry.. City found</h2> }
            </div>
            {/* <div className="relative flex items-center justify-center m-3 overflow-hidden shadow-xl w-60 h-60 rounded-2xl">
                <div className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover hover:scale-150" 
                style={{backgroundImage: `url("/assets/background03.jpeg")`}}  ></div>
                <div className="absolute text-5xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-60 hover:scale-100">TEXT</div>
            </div>             */}
        </>
    )
}

export default Cities
