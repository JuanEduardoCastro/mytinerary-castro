import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCoins, faHeart } from '@fortawesome/free-solid-svg-icons';

const Itinerary = (props) => {

    var clockCount = []
    for (let i = 0; i < props.itinerary.duration; i++) {
        clockCount.push(<FontAwesomeIcon icon={faClock} size="2x" className="transform scale-75"/>)
    }
    var moneyCount = []
    for (let i = 0; i < props.itinerary.price; i++) {
        moneyCount.push(<FontAwesomeIcon icon={faCoins} size="2x" className="transform scale-75"/>)
    }

    return (
        <div className="w-full mi-h-full flex justify-center items-center py-8 ">
            <div className="flex flex-col w-3/5 min-h-full border-2 border-indigo-300 rounded-md shadow-lg bg-gradient-to-b from-indigo-100">  
                <div className="flex">
                    <div className="">
                        <div 
                        style={{backgroundImage: `url("${props.itinerary.itineraryPhoto}")`}} 
                        alt={`Photo ${props.itinerary.itineraryName}`}
                        className="w-64 h-96 bg-cover bg-center m-4 "></div>
                    </div>
                    <div className="flex flex-col  m-4 ml-0"> 
                        <div className="flex justify-around items-center m-3 text-center text-3xl  ">
                            <h2>{props.itinerary.itineraryName}</h2>
                            <div className="px-8">
                                <FontAwesomeIcon icon={faHeart} size="2x" className="transform scale-75"/>
                            </div>
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
                                    {props.itinerary.hashtags.map((hashtag) => {
                                        return <h2>{`#${hashtag}`}</h2>
                                    })}
                                </div>
                                <div className="w-full flex justify-start gap-8 py-6 ">
                                    <div>
                                        {clockCount.map((clock) => clock)}
                                    </div>
                                    <div>
                                        {moneyCount.map((coin) => coin)}
                                    </div>  
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Itinerary