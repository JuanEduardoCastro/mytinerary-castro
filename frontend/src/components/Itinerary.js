import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeart } from '@fortawesome/free-solid-svg-icons';

const Itinerary = (props) => {
    console.log(props)
    return (
        <div className="w-full mi-h-full flex justify-center items-center py-8 ">
            <div className="flex flex-col w-10/12 min-h-full border-2 border-black rounded-md">
                <div className="text-center">
                    <h2>{props.itinerary.itineraryName}</h2>
                </div>
                <div className="flex">
                    <div>
                        <div 
                        style={{backgroundImage: `url("${props.itinerary.itineraryPhoto}")`}} 
                        alt={`Photo ${props.itinerary.itineraryName}`}
                        className="w-40 h-52 bg-cover bg-center m-4 "></div>
                    </div>
                    <div className="bg-red-300 ">
                        <div className="flex justify-end items-center mt-4 pr-4 gap-8 text-2xl">
                            <h2>{props.itinerary.authorName}</h2>
                            <div 
                            style={{backgroundImage: `url("${props.itinerary.authorPhoto}")`}} 
                            alt={`Photo ${props.itinerary.authorName}`} 
                            className="w-16 h-16 bg-cover bg-center rounded-full"></div>
                        </div>
                        <div className="bg-blue-300">
                            <div className="bg-gray-300 text-justify px-5 text-sm">
                                <h2>{`"${props.itinerary.introSentence}"`}</h2>
                            </div> 
                            <div className="flex">
                                
                            <FontAwesomeIcon icon={faHeart} size="2x" className="transform hover:scale-110"/>
                            {/* {for (var i = 0; i < props.itinerary.duration; i++) {
                                <FontAwesomeIcon icon={faClock} size="2x" className="transform hover:scale-110"/>
                            }} */}
                                <h2>{props.itinerary.duration}</h2>
                                <h2>{props.itinerary.price}</h2>
                                <h2>{props.itinerary.likes}</h2>
                            </div>
                            <div className="flex">
                                {props.itinerary.hashtags.map((hashtag) => {
                                    return <h2>{`#${hashtag}`}</h2>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itinerary