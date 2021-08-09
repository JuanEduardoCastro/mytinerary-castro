import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay, }from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay, ]); 

const citiesImg = [
    [ {ubicacion: "hong_kong_06.jpeg", nombre: "Hong Kong"},
    {ubicacion: "bangkok02.jpeg", nombre: "Bangkok"},
    {ubicacion: "macau05.jpeg", nombre: "Macau"},
    {ubicacion: "singapore05.jpeg", nombre: "Singapore"} ],  
    [ {ubicacion: "london01.jpeg", nombre: "London"},  
    {ubicacion: "paris01.jpeg", nombre: "Paris"},  
    {ubicacion: "dubai04.jpeg", nombre: "Dubai"},  
    {ubicacion: "delhi05.jpeg", nombre: "Delhi"} ],
    [ {ubicacion: "istambul01.jpeg", nombre: "Istambul"},  
    {ubicacion: "kualalumpur01.jpeg", nombre: "Kuala Lumpur"},  
    {ubicacion: "new_york02.jpeg", nombre: "New York"},  
    {ubicacion: "shenzhen01.jpeg", nombre: "Shenzhen"} ]
]

export default class Home extends React.Component {
    render() {
        return (
            <>
                <div style={{backgroundImage: `url("/assets/background02_edit.jpeg")`}} alt="background plane" className="bg-top bg-cover bg-opacity-70">
                    <Header />
                    <Hero />    
                </div>
                <div className="m-2 md:m-20">
                    <div className="carouselText text-center text-6xl mb-6 mt-6 md:mb-12 md:mr-8">
                        <h2>Popular Mytineraries</h2>
                    </div>
                    <React.Fragment>
                        <Swiper 
                        id="main" 
                        grabCursor={true}
                        navigation 
                        pagination={{"clickable": true}}
                        spaceBetween={20} 
                        slidesPerView={1}
                        loop={true}
                        autoplay={{"dealy": 4000, "disableOnInteraction": false}}
                        >
                            {citiesImg.map((cities, index) => (
                                <SwiperSlide key={`slide-${index}`} >
                                    <div className="w-full h-full p-12 grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {cities.map((city, index) => (
                                            <div style={{backgroundImage: `url("/assets/cities/${city.ubicacion}")`}} alt={`slide ${city.nombre}`} key={`slide-${index}`} className="text-white font-medium text-3xl md:text-5xl backdrop-filter backdrop-opacity-80  bg-center bg-cover rounded-md flex justify-start items-end px-8 pb-8 fotoText hover:opacity-50" >
                                                <h2>{city.nombre}</h2>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </React.Fragment>
                </div>
                <Footer />
            </>
        )
    }
}