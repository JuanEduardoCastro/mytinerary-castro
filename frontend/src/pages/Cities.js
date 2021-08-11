import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
/* import axios from "axios"; */

const Cities = () => {
    const citiesList = [
        {cityName: "Hong Kong", countryName: "Hong Kong", imgSource: "hong_kong_04.jpeg", },
        {cityName: "Bangkok", countryName: "Thailand", imgSource: "bangkok01.jpeg", },
        {cityName: "Lacau", countryName: "Macau", imgSource: "macau04.jpeg", },
        {cityName: "Singapore", countryName: "Singapore", imgSource: "singapore03.jpeg", },
        {cityName: "London", countryName: "England", imgSource: "london02.jpeg", },
    ]
    const [letter, setLetter] = useState("")

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
                {citiesList.filter(city => (city.cityName).toLowerCase().startsWith(letter)).map((filteredCity, index) => (
                    
                    <div 
                    style={{backgroundImage: `url("/assets/citiesImg/${filteredCity.imgSource}")`}} 
                    alt={filteredCity.cityName} 
                    key={index}
                    className="w-10/12 h-40 bg-cover bg-center mx-auto my-2.5 rounded-md"
                    >
                        <div className="text-white text-3xl">
                            <h2>{filteredCity.cityName}</h2>
                            <h2>{filteredCity.countryName}</h2>
                        </div>
                    </div>
                ))}

                
            </div>
            <Footer />
        </div>
    )
}

export default Cities









// const [amigos, setAmigos] = useState([])

    // useEffect(() => {
    //     axios.get("http://localhost:4000/prueba/datos")             //devuelve una promesa
    //     .then((res) => setAmigos(res.data.respuesta))               //no hace falta usar e metodo json() de fetch()
    // }, [])



    // {amigos.map(amigo => <h1>{amigo}</h1>)}

    // {citiesList.map((city, index) => (
    //                 <div 
    //                 style={{backgroundImage: `url("/assets/citiesImg/${city.imgSource}")`}} 
    //                 alt={city.cityName} 
    //                 key={index}
    //                 className="w-10/12 h-40 bg-cover bg-center mx-auto my-2.5 rounded-md"
    //                 >
    //                     <div className="text-white text-3xl">
    //                         <h2>{city.cityName}</h2>
    //                         <h2>{city.countryName}</h2>
    //                     </div>
    //                 </div>
    //             ))}