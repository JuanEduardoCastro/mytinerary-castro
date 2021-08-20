import React, { useEffect, useState,  useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Error404 from "./Error404";
import Itinerary from "../components/Itinerary";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";

const City = (props) => {

    const [loader, setLoader] = useState(true)
    const [error, setError] = useState(null)

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    })

    useEffect(() => {
        props.getUniqCity(props.match.params.id)
        props.getItineraries()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (props.itineraries.length > 0) {
            setLoader(false)
        }
    },)
    
    if (loader) {
        return <div><Loader /></div>
    }

    return (
        <>
            {!error ? (
            <div className="">
                <div 
                style={{backgroundImage: `url("${props.uniqCity.imgSource}")`}}
                alt={props.uniqCity.cityName}
                key={props.uniqCity._id}
                className="w-full h-72 bg-center bg-cover"
                > 
                    <Header />
                    <div className="text-5xl pl-4 pt-2 heroText">
                        {props.uniqCity.textColorTag ? (<><h2 className="text-white">{props.uniqCity.cityName}</h2><h2 className="text-white">{props.uniqCity.countryName}</h2></>) : (<><h2 className="text-black">{props.uniqCity.cityName}</h2><h2 className="text-black">{props.uniqCity.countryName}</h2></>)}
                    </div>   
                </div>

                {((props.itineraries).length < 1) ? (
                    <div className=" w-full h-full fotoText">
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
                    </div>) : (props.itineraries.map((itinerary, index) => {
                        return <Itinerary key={index} itinerary={itinerary}/>
                    }))} 
            </div> ) : ( <Error404/> )} 
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        uniqCity: state.cities.cityStore,
        itineraries: state.itineraries.itinerariesStore
    }
}

const mapDispatchToProps = {
    getUniqCity: citiesActions.getUniqCity,
    getItineraries: itinerariesActions.getItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(City)









//api city by id
// useEffect(() => {
    // axios.get(`http://localhost:4000/api/information/city/${props.match.params.id}`)
        // .then((response) => {
        //     if (response.data.success) {
        //         setCity(response.data.response) 
        //     } else {           
        //         throw new Error("Couldn´t connect to the database")
        //     }
        // })
        // .catch((error) => { 
        //     setError(error.message) 
        //     console.error(error.message)
        // })
        
    //     axios.get("http://localhost:4000/api/itineraries")
    //     .then((response) => {
    //         if (response.data.success) {
    //             setItineraries(response.data.response) 
    //         } else {           
    //             throw new Error("Couldn´t connect to the database")
    //         }
    //     })
    //     .catch((error) => { 
    //         setError(error.message) 
    //         console.error(error.message)
    //     })
    //     .finally(() => setLoader(false)) 
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])                                