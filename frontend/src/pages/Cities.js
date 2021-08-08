import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import bgImage from "../assets/background01.jpeg"
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";


export default class Home extends React.Component { 
    render() {
        return (
            <div>
            {/* <div style={{backgroundImage: `url("${bgImage}")`}} className="w-full min-h-screen flex flex-col justify-between bg-center bg-cover"> */}
                {/* <Header /> */}
                {/* <Hero /> */}
                <Carousel />
                {/* <Footer /> */}
            </div>
        )
    }
}