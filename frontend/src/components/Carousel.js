// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import SwiperCore, { Navigation, Pagination, Autoplay, EffectCube }from "swiper";

// SwiperCore.use([Navigation, Pagination, Autoplay, EffectCube]); 

// const fotos = [
//     [ {ubicacion: "hong_kong_01.jpeg", nombre: "Hong Kong"},
//     {ubicacion: "bangkok02.jpeg", nombre: "Bangkok"},
//     {ubicacion: "macau05.jpeg", nombre: "Macau"},
//     {ubicacion: "singapore05.jpeg", nombre: "Singapore"} ],  
//     [ {ubicacion: "london01.jpeg", nombre: "London"},  
//     {ubicacion: "paris01.jpeg", nombre: "Paris"},  
//     {ubicacion: "dubai04.jpeg", nombre: "Dubai"},  
//     {ubicacion: "delhi05.jpeg", nombre: "Delhi"} ],
//     [ {ubicacion: "istambul01.jpeg", nombre: "Istambul"},  
//     {ubicacion: "kualalumpur01.jpeg", nombre: "Kuala Lumpur"},  
//     {ubicacion: "new_york02.jpeg", nombre: "New York"},  
//     {ubicacion: "shenzhen01.jpeg", nombre: "Shenzhen"} ]
// ]

// const Carousel = () => {
    
//     var slides = []

//     slides = fotos.map((foto, index) => (
//         <SwiperSlide key={`slide-${index}`} >
//             <div className="w-full h-full grid grid-cols-2 gap-3">
//                 {foto.map((ciudad) => (
//                     <div style={{backgroundImage: `url("/assets/cities/${ciudad.ubicacion}")`}} alt={`slide ${ciudad.nombre}`} className="text-black font-2xl bg-center bg-cover rounded-md flex justify-center items-end pb-8" >
//                             {/* <img className="" src={`assets/cities/${ciudad.ubicacion}`} alt={`slide ${ciudad.nombre}`} /> */}
//                             <h2>{ciudad.nombre}</h2>
//                     </div>
//                 ))}
//             </div>
//         </SwiperSlide>
//     ))
    
    
//     console.log(slides)

//     return (
//         <React.Fragment>
//             <Swiper 
//             id="main" 
//             effect={"cube"}
//             grabCursor={true}
//             cubeEffect={{"shadow": true, "slideShadows": true, "shadowOffset": 20, "shadowScale": 0.94}}
//             navigation 
//             pagination={{"clickable": true}}
//             spaceBetween={30} 
//             slidesPerView={3}
//             loop={true}
//             autoplay={{"dealy": 3000, "disableOnInteraction": true}}
//             /* onInit={(swiper) => console.log("swiper initialize", swiper)}
//             onSliderChange={(swiper) => console.log("slide index change to: ", swiper.activeIndex)}
//             onReachEnd={() => console.log("swiper en reached")} */
//             className=""
//             >
//                 {slides}
//             </Swiper>
//         </React.Fragment>
//     )
// }

// export default Carousel



