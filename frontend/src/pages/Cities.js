import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Error404 from "./Error404";
import Aos from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

const Cities = (props) => {

    const [citiesList, setCitiesList] = useState([])
    const [letter, setLetter] = useState("")
    const [loader, setLoader] = useState(true)
    const [reset, setReset] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState(null)
    
    useLayoutEffect(() => {
        window.scrollTo(0,0)
    })
  
    useEffect(() => {
        Aos.init({ offset: 120, duration: 600})
    }, [])
    
    useEffect(() => {
        props.getCitiesList()
    }, [])

    useEffect(() => {

        setCitiesList(props.allCitiesList)
        setLoader(false)
    })

    // useEffect(() => {
    //     setReset(false)
    //     setLoader(true)
    //     axios.get("http://localhost:4000/api/information/cities")
    //     .then((response) => {
    //         if (response.data.success) {
    //             setCitiesList(response.data.response) 
    //         } else {
    //             throw new Error ("Couldn´t connect to the database")
    //         }
    //     })
    //     .catch((error) => {
    //         setError(error.message)                         
    //         console.error(error.message)
    //     })             
    //     .finally(() => setLoader(false))
    // }, [])

    if (loader) {
        return <div><Loader /></div>
    }

    const inputHandler = (e) => {
        setLetter(((e.target.value).toLowerCase().trim()))
        setInputValue(e.target.value)
    } 

    const resetCities = () => {
        setReset(false)
        if (reset === false) {
            setReset(true)
            setLetter("")
            setInputValue("")
        }
    }

    var cityFiltered = citiesList.filter(city => (city.cityName).toLowerCase().startsWith(letter)).map((filteredCity, index) => (
        <Link to={`/city/${filteredCity._id}`} key={index} className="flex justify-center w-10/12 mx-auto">
            <div data-aos="fade-up" className="relative group flex items-center justify-center my-3 overflow-hidden shadow-md w-full h-64 rounded-md">
                <div 
                style={{backgroundImage: `url("${filteredCity.imgSource}")`}}  
                alt={filteredCity.cityName} 
                key={index}
                className="absolute w-full h-full transition-all duration-1000 ease-in-out transform bg-center bg-cover group-hover:scale-125 delay-100"
                >
                </div>      
                <div className="absolute w-full h-full transition-border duration-700 ease-in-out transform border border-black border-4 group-hover:opacity-70 group-hover:scale-90 delay-200 opacity-60">
                    <div className="w-full h-full hover:bg-indigo-300">
                        <div className="absolute text-5xl transition-text duration-700 transform easy-in-out hover:text-6xl pl-4 pt-2 heroText">
                            <h2>{filteredCity.cityName}</h2>
                            <h2>{filteredCity.countryName}</h2>
                        </div> 
                        <div className="w-full h-full text-transparent sm:hover:text-black ">
                            <div className="absolute w-8/12  bottom-3 right-3 sm:text-xl md:text-3xl text-justify fotoText" >
                                <h2>{filteredCity.description}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link> 
    )) 

    return (
        <>
            {!error ? (
            <>
                <div style={{backgroundImage: `url("https://i.imgur.com/6zHiJfR.jpg?1")`}} alt="background living" className="w-full h-72 flex flex-col justify-between bg-top bg-cover">
                    <Header />
                    <div className="w-full h-48 flex justify-center items-center">
                        <input 
                        type="text" 
                        name="filterCity"
                        value={inputValue}
                        placeholder="Find a city to explore" 
                        className="border border-indigo-700 focus:indigo-700 rounded-lg bg-white text-black text-2xl md:text-4xl mt-8 px-4 py-2 text-center " 
                        onChange={inputHandler} />                
                    </div>
                </div>
                <div className="pt-8 md:pt-8 pb-8 bg-gradient-to-t from-indigo-300 via-indigo-100">  
                    {!cityFiltered.length < 1 ? cityFiltered : (
                        <div className=" w-full h-full text-center">
                            <div className="w-full py-4 pb-6 flex flex-col items-center justify-around text-3xl text-black bg-gradient-to-t from-red-200 tracking-wide">
                                <img src="https://i.imgur.com/ZsCN2Qk.png" alt="Not found logo" className="w-32 h-32" />
                                <h2 className="text-4xl ">Sorry, we don´t have information about that city.</h2>
                                <div className="flex flex-col items-center mt-4 gap-4 text-indigo-900">
                                    <div className="rounded-md my-8 p-4 ring-1 ring-indigo-500 bg-opacity-90 shadow-2xl bg-gradient-to-t from-indigo-500 to-indigo-200 cursor-pointer text-2xl italic hover:bg-indigo-700 hover:text-black duration-300">
                                        <button onClick={resetCities}>Try again!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>          
            </> ) : <Error404/> }          
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        allCitiesList: state.cities.citiesListStore
        
    }
}

const mapDispatchToProps = {
    getCitiesList: citiesActions.getCitiesList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)