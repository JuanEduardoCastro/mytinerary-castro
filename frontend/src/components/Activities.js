import React, { useState, useEffect } from "react";
import activitiesActions from "../redux/actions/activitiesActions";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";



const Activities = (props) => {

    const [activities, setActivities] = useState([])

    useEffect(() => {
        async function getAvtivitiesOfItinerary() {
            try {
                var response = await props.getActivitiesOfItinerary(props.itineraryId)   
                setActivities(response) 
            } catch (error) {
                console.log(error)
                return false
            }
        }
        getAvtivitiesOfItinerary()
    }, [])

    console.log(props)

    return (
        <div className="">
            <Swiper
                id="swiperActivites"
                grabCursor={true}
                navigation 
                pagination={{"clickable": true}}
                spaceBetween={10} 
                slidesPerView={1}
                loop={true}
                autoplay={{"dealy": 3500, "disableOnInteraction": false, pauseOnMouseEnter: true}}
                >
                {activities.map((activity, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                        <div className="">
                            <div 
                                style={{backgroundImage: `url("${activity.activityPhoto}")`}} 
                                alt={`slide ${activity.activityTitle}`} 
                                key={`slide-${index}`} 
                                className="flex items-end w-full h-80 bg-center bg-cover rounded-md " >
                                <div className="font-medium text-white text-xl md:text-xl p-2.5 text-justify bg-indigo-300 bg-opacity-80"> 
                                    <h2>{activity.activityTitle}</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    )
}

const mapDispatchToProps = {
    getActivitiesOfItinerary: activitiesActions.getActivitiesOfItinerary 
}

export default connect(null, mapDispatchToProps)(Activities)
