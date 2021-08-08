import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default class Home extends React.Component { 
    render() {
        return (
            <div style={{backgroundImage: `url("/assets/background01_edit.jpg")`}} alt="background living" className="w-full h-screen flex flex-col justify-between bg-top bg-cover">
                <Header />
                <div className="w-full h-full bg-indigo-300 bg-opacity-60">

                </div>
                <Footer />
            </div>
        )
    }
}