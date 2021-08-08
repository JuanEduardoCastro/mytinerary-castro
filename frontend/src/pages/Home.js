import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import bgImage from "../assets/background02.jpeg"
/* import Carousel from "../components/Carousel"; */


export default class Home extends React.Component {
    render() {
        return (
            <div style={{backgroundImage: `url("${bgImage}")`}} className="w-full h-screen flex flex-col justify-between bg-center bg-cover bg-opacity-70">
                <Header />
                <Hero />
                {/* <Carousel /> */}
                <Footer />
            </div>
        )
    }
}