import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Activities from './Activities';
import Comments from './Comments';


const Itinerary = (props) => {

    const [activitesButton, setActivitiesButton] = useState(false)

    useEffect(() => {
        Aos.init({ offset: 120, duration: 600 })
    })

    var moneyCount = []
    for (let i = 0; i < props.itinerary.price; i++) {
        moneyCount.push(<div style={{backgroundImage: `url("https://i.imgur.com/i01tF8f.png")`}} 
        key={i} 
        className="w-12 h-12 bg-cover bg-center" ></div>)
    }

    const activitiesButtonHandler = () => {
        setActivitiesButton(!activitesButton)
        
    }

    return (
        <div className="w-full h-full mb-14 ">
            <div className="w-9/12 border mx-auto shadow-md bg-gradient-to-b from-indigo-200">
                <div className="text-2xl text-center p-2.5 sm:p-3">
                    <h2 className="carouselText">{props.itinerary.itineraryName}</h2>                    
                </div>
                <div className="flex flex-col md:flex-row m-2.5 justify-center ">
                    {/* IMAGEN */}
                    <div className="w-auto md:w-2/5 h-auto p-4 md:p-2.5 ">
                        <div 
                        style={{backgroundImage: `url("${props.itinerary.itineraryPhoto}")`}} 
                        alt={`Photo ${props.itinerary.itineraryName}`}
                        className="w-full h-80 bg-cover bg-center rounded-md shadow-md"></div>
                    </div>
                    {/* ESCRITO */}
                    <div className="flex flex-col w-auto md:w-3/5 h-auto border-2 border-grey-500 rounded-md shadow-md ">
                        <div className="flex items-center justify-between pr-12">
                            <div className="flex justify-start items-center p-4 gap-4 ">
                                <h2 className="hidden md:block">{props.itinerary.authorName}</h2>
                                <div 
                                style={{backgroundImage: `url("${props.itinerary.authorPhoto}")`}} 
                                alt={`Photo ${props.itinerary.authorName}`} 
                                className="w-20 h-20 bg-cover bg-center rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div 
                                style={{backgroundImage: `url("https://i.imgur.com/DK0P6fj.png")`}}
                                className="w-10 h-10 bg-center bg-cover cursor-pointer"
                                ></div>
                                <h2 className="text-xl">0</h2>
                            </div>
                        </div>
                        <h2 className="block md:hidden text-2xl px-4 pb-3">{props.itinerary.authorName}</h2>
                        <div className="px-4 italic text-justify">
                            <h2 className="text-lg">{`"${props.itinerary.introSentence}"`}</h2>
                        </div>
                        <div className="pt-2 pl-4">
                            <div className="w-full flex justify-start gap-3 text-sm text-gray-500 pl-4 flex-wrap">
                                {props.itinerary.hashtags.map((hashtag, index) => {
                                    return <h2 key={index}>{`#${hashtag}`}</h2>
                                })}
                            </div>
                            <div className="flex w-full justify-start gap-4 py-6 flex-wrap">
                                <div className="flex items-center flex-wrap">
                                    <h2>Price: </h2>
                                    {moneyCount.map((coin) => coin)}
                                </div>  
                                <div className="flex items-center gap-4 pl-2">
                                    <FontAwesomeIcon icon={faClock} size="2x" className="transform scale-75"/>  
                                    <h2>{props.itinerary.duration} hours</h2>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center m-2.5">
                    <div className={!activitesButton ? "block" : "hidden"} >
                        <button onClick={activitiesButtonHandler} className="btn" >View more</button>
                    </div>
                    <div className="w-full h-full fotoText">
                        <div className={`${activitesButton ? "block" : "hidden"}`} >
                            <div className="w-full h-full py-4 pb- flex flex-col items-center justify-around tracking-wide ">
                                <div className="w-full h-full flex flex-col md:flex-row m-2.5 justify-center ">
                                    <div className="flex flex-col w-auto md:w-3/5 h-auto border-2 border-grey-500 rounded-md shadow-md " >
                                        <Comments />
                                    </div>
                                    <div className="w-auto md:w-2/5 h-80 p-4 md:p-2 " >
                                        {activitesButton && <Activities itineraryId={props.itinerary._id} className=""/>}
                                    </div>
                                </div>                           
                                <button onClick={activitiesButtonHandler} className="btn">View less</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itinerary





                                {/* <img src="https://i.imgur.com/LmKOcmk.png" alt="Not found logo" className="w-32 h-32" />
                                <h2 className="text-center text-4xl text-black">We are under construction!</h2>
                                <h2 className="text-center text-3xl text-black">Please come back later!</h2>
                                <div className="flex flex-col items-center mt-4 gap-4 text-indigo-900">
                                </div> */}