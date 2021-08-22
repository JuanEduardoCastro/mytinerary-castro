import React, { useEffect, useState,  useLayoutEffect} from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Error404 from "./Error404";
import Itinerary from "../components/Itinerary";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faLanguage, faSortDown } from '@fortawesome/free-solid-svg-icons';
import ItinerariesNotFound from "../components/ItinerariesNotFound";
import { Link } from "react-router-dom";

const City = (props) => {

    const [loader, setLoader] = useState(true)
    const [error, setError] = useState(null)

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    })

    useEffect(() => {
        props.getUniqCity(props.match.params.id)
        async function getItineraries() {
            try {
                await props.getItinerariesOfACity(props.match.params.id)
                setLoader(false)
            } catch (error) {
                setLoader(false)
                setError(error)
                return false
            }
        } 
        getItineraries()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    if (error) {
        return <div><Error404 /></div>
    }
    
    if (loader) {
        return <div><Loader /></div>
    }

    const dinamicTextColor = {
        white: "text-white",
        black: "text-black"
    }

    return (
        <>
            {!error ? (
            <div className="">
                <div 
                style={{backgroundImage: `url("${props.uniqCity.imgSource}")`}}
                alt={props.uniqCity.cityName}
                key={props.uniqCity._id}
                className="w-full h-96 bg-center bg-cover border-b-8 border-indigo-700 rounded-b-sm"
                > 
                    <Header />
                    <div className="text-6xl py-2 heroText bg-indigo-300 bg-opacity-90 mt-8 md:mt-0 text-center">
                        {props.uniqCity.textColorTag}
                        <h2 className={`${props.uniqCity.textColotTag ? dinamicTextColor.black : dinamicTextColor.white}`} >{props.uniqCity.cityName}</h2>
                    </div>   
                </div>
                <div className="w-full h-40 flex justify-between md:justify-around items-center px-2.5 md:px-12 bg-indigo-100 border-b-4 border-gray-100">
                    <div 
                    style={{backgroundImage: `url("${props.uniqCity.flag}")`}} 
                    className="w-16 h-10 md:w-32 md:h-20 bg-center bg-cover rounded-md shadow-md"></div>
                    <div className="w-auto h-20 flex items-center justify-center gap-2.5 p-2.5">
                        <FontAwesomeIcon icon={faCoins} size="2x" className="transform scale-90 md:scale-100"/>
                        <div className="text-lg">
                            <h2><span className="text-xl font-medium">{props.uniqCity.currencySymbol}</span> {props.uniqCity.codeISO}</h2>
                            <h2 className="hidden">({props.uniqCity.currency})</h2>
                        </div>
                    </div>
                    <div className="w-auto h-20 flex items-center justify-center gap-2.5 p-2.5"> 
                        <FontAwesomeIcon icon={faLanguage} size="3x" className="transform scale-90 md:scale-100"/>  
                        <div className="text-md md:text-lg">
                            {(props.uniqCity.language).map((language, index) => (
                                <h2 key={index}>{language}</h2>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center gap-12 py-3 px-2 md:px-0 ">
                    <FontAwesomeIcon icon={faSortDown} size="4x" className="animate-bounce transform scale-75 md:scale-100"/>
                    <h2 className="text-3xl md:text-4xl permanentMarkerFont">Mytineraries</h2>
                    <FontAwesomeIcon icon={faSortDown} size="4x" className="animate-bounce transform scale-75 md:scale-100"/>
                </div>

                                
                {((props.itineraries).length < 1) ? (<ItinerariesNotFound />) : 
                (props.itineraries.map((itinerary, index) => {
                        return <Itinerary key={index} itinerary={itinerary}/>
                    }))} 
            <div className={`${(props.itineraries).length < 1 && "hidden"} flex justify-center gap-4`}>
                <Link exact to="/" >
                    <button className="btn">Back to home</button>
                </Link>
                <Link to="/cities" >
                    <button className="btn">Back to cities</button>
                </Link>
            </div>
            </div> 

            ) : ( <Error404/> )} 
            
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        uniqCity: state.cities.cityStore,
        itineraries: state.itineraries.itinerariesOfACityStore
    }
}

const mapDispatchToProps = {
    getUniqCity: citiesActions.getUniqCity,
    getItinerariesOfACity: itinerariesActions.getItinerariesOfACity
}

export default connect(mapStateToProps, mapDispatchToProps)(City)