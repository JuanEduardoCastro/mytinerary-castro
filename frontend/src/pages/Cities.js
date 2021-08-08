import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default class Home extends React.Component { 
    render() {
        return (
            <div style={{backgroundImage: `url("/assets/background01_edit.jpg")`}} className="w-full h-screen flex flex-col justify-between bg-top bg-cover">
                <Header />

                <Footer />
            </div>
        )
    }
}