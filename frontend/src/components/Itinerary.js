import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCoins, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Itinerary = (props) => {

    const [activitesButton, setActivitiesButton] = useState(false)

    // var clockCount = []
    // for (let i = 0; i < props.itinerary.duration; i++) {
    //     clockCount.push(<FontAwesomeIcon icon={faClock} key={i} size="2x" className="transform scale-75"/>)
    // }
    var moneyCount = []
    for (let i = 0; i < props.itinerary.price; i++) {
        // moneyCount.push(<div style={{backgroundImage: `url("https://i.imgur.com/i01tF8f.png")`}} 
        // key={i} 
        // className="w-10 h-10 bg-cover bg-center" ></div>)
        moneyCount.push(<div style={{backgroundImage: `url("https://i.imgur.com/kTtEuZP.png")`}} 
        key={i} 
        className="w-12 h-12 bg-cover bg-center" ></div>)

    }

    const activitiesButtonHandler = () => {
        setActivitiesButton(!activitesButton)
    }

    return (
        <div className="w-full mi-h-full flex justify-center items-center py-8 ">
            <div className="flex flex-col w-full mx-4 sm:w-9/12 md:w-3/5 min-h-full border-2 border-indigo-300 rounded-md shadow-lg bg-gradient-to-b from-indigo-100">  
                <div className="flex">
                    <div className="w-full">
                        <div 
                        style={{backgroundImage: `url("${props.itinerary.itineraryPhoto}")`}} 
                        alt={`Photo ${props.itinerary.itineraryName}`}
                        className="w-4/5 h-96 bg-cover bg-center m-4 hidden md:block "></div>
                    </div>
                    <div className="flex flex-col mx-2 md:m-4 md:ml-0"> 
                        <div className="flex flex-col md:flex-row justify-around items-center m-3 text-center text-2xl md:text-3xl  ">
                            <h2>{props.itinerary.itineraryName}</h2>
                            <div className="flex md:flex md:items-center gap-2 px-8 hidden md:block">
                                <FontAwesomeIcon icon={faHeart} size="2x" className="transform scale-50"/>
                                <h2 className="text-xl">0</h2>
                            </div>
                            <div 
                            style={{backgroundImage: `url("${props.itinerary.itineraryPhoto}")`}} 
                            alt={`Photo ${props.itinerary.itineraryName}`}
                            className="w-2/3 h-64 bg-cover bg-center m-4 block md:hidden "></div>
                        </div>
                        <div className="flex flex-col border-2 border-grey-500 rounded-md shadow-md ">
                            <div className="flex justify-start items-center p-4 gap-4 text-2xl">
                                <h2>{props.itinerary.authorName}</h2>
                                <div 
                                style={{backgroundImage: `url("${props.itinerary.authorPhoto}")`}} 
                                alt={`Photo ${props.itinerary.authorName}`} 
                                className="w-20 h-20 bg-cover bg-center rounded-full">
                            </div>
                            </div>
                            <div className="px-4 italic">
                                <h2>{`"${props.itinerary.introSentence}"`}</h2>
                            </div>
                            <div className="pt-2 pl-4">
                                <div className="w-2/5 flex justify-between gap-3 text-sm text-gray-500 pl-4">
                                    {props.itinerary.hashtags.map((hashtag, index) => {
                                        return <h2 key={index}>{`#${hashtag}`}</h2>
                                    })}
                                </div>
                                <div className="w-full justify-start gap-8 py-6 ">
                                    <div className="flex ">
                                        {/* <h2>Price: </h2> */}
                                        {moneyCount.map((coin) => coin)}
                                    </div>  
                                    <div className="flex items-center justify-between gap-4 pl-2">
                                        <div className="flex items-center gap-4 pl-2">
                                            <FontAwesomeIcon icon={faClock} size="2x" className="transform scale-75"/>  
                                            <h2>{props.itinerary.duration} hours</h2>
                                        </div>
                                        <div className="flex items-center gap-2 px-8 block md:hidden">
                                            <FontAwesomeIcon icon={faHeart} size="2x" className="transform scale-75"/>
                                            <h2 className="text-xl">0</h2>
                                        </div>

                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className={!activitesButton ? "block" : "hidden"} >
                            <button 
                            onClick={activitiesButtonHandler}
                            className="my-4 py-2 px-4 ring-1 ring-indigo-500 rounded-md bg-gradient-to-t from-indigo-500 to-indigo-200 shadow-lg text-center text-black hover:bg-indigo-700 hover:text-indigo-900 transform hover:scale-105 active:scale-95 ">Activities</button>
                    </div>
                    <div className="w-full h-full fotoText">
                        <div className={activitesButton ? "block" : "hidden"} >
                            <div className="w-full py-4 pb-6 flex flex-col items-center justify-around bg-gradient-to-t from-red-200 tracking-wide">
                                <img src="https://i.imgur.com/LmKOcmk.png" alt="Not found logo" className="w-32 h-32" />
                                <h2 className="text-center text-4xl text-black">We are under construction!</h2>
                                <h2 className="text-center text-3xl text-black">Please come back later!</h2>
                                <div className="flex flex-col items-center mt-4 gap-4 text-indigo-900">
                                </div>
                                <button 
                                onClick={activitiesButtonHandler}
                                className="my-4 py-2 px-4 ring-1 ring-indigo-500 rounded-md bg-gradient-to-t from-indigo-500 to-indigo-200 shadow-lg text-center text-black hover:bg-indigo-700 hover:text-indigo-900 transform hover:scale-105 active:scale-95 ">Activities</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itinerary