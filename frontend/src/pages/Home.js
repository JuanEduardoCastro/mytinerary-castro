import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay }from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay ]); 

const citiesImg = [
    [ {ubicacion: "hong_kong_06.jpeg", nombre: "Hong Kong"},
    {ubicacion: "bangkok02.jpeg", nombre: "Bangkok"},
    {ubicacion: "macau05.jpeg", nombre: "Macau"},
    {ubicacion: "singapore05.jpeg", nombre: "Singapore"} ],  
    [ {ubicacion: "london01.jpeg", nombre: "London"},  
    {ubicacion: "paris01.jpeg", nombre: "Paris"},  
    {ubicacion: "dubai04.jpeg", nombre: "Dubai"},  
    {ubicacion: "delhi05.jpeg", nombre: "Delhi"} ],
    [ {ubicacion: "istambul01.jpeg", nombre: "Istanbul"},  
    {ubicacion: "kualalumpur01.jpeg", nombre: "Kuala Lumpur"},  
    {ubicacion: "new_york02.jpeg", nombre: "New York"},  
    {ubicacion: "shenzhen01.jpeg", nombre: "Shenzhen"} ]
]

var carousel = <Swiper 
                    id="main" 
                    grabCursor={true}
                    navigation 
                    pagination={{"clickable": true}}
                    spaceBetween={10} 
                    slidesPerView={1}
                    loop={true}
                    autoplay={{"dealy": 5000, "disableOnInteraction": false, pauseOnMouseEnter: true}}>
                        {citiesImg.map((cities, index) => (
                            <SwiperSlide key={`slide-${index}`} >
                                <div className="w-full h-full p-12 grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {cities.map((city, index) => (
                                        <div 
                                        style={{backgroundImage: `url("/assets/cities/${city.ubicacion}")`}} 
                                        alt={`slide ${city.nombre}`} 
                                        key={`slide-${index}`} 
                                        className="text-white font-medium text-3xl hover:text-7xl md:text-5xl backdrop-filter backdrop-opacity-80  bg-center bg-cover rounded-md flex justify-start items-end px-8 pb-8 fotoText hover:opacity-50 duration-300" >
                                            <div className="hover:text-7xl"> 
                                                <h2>{city.nombre}</h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

export default class Home extends React.Component {
    render() {
        return (
            <div className="bg-gradient-to-b from-indigo-300">
                <div style={{backgroundImage: `url("/assets/background02_edit.jpeg")`}} alt="background plane" className="bg-top bg-cover bg-opacity-70 ">
                    <div className="bg-indigo-200 bg-opacity-40">
                        <Header />
                        <Hero />    
                    </div>
                </div>
                <div className="m-2 md:m-20">
                    <div className="carouselText text-center text-6xl mb-6 mt-6 md:mb-12 md:mr-8 permanentMarkerFont tracking-wider">
                        <h2>Popular Mytineraries</h2>
                    </div>
                    {carousel}
                </div>
            </div>
        )
    }
}