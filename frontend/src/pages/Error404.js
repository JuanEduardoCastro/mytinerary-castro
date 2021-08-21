import Header from "../components/Header";
import { Link } from "react-router-dom";
import React, { useLayoutEffect } from "react";


const Error404 = () => {

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <>
            <div>
                <Header />
                <div className="w-full h-screen flex flex-col items-center justify-start text-center">
                    <img src="https://i.imgur.com/bjeuiBg.png?1" alt="error 404" className="py-4"/>
                    <div className="flex flex-col items-center justify-center gap-4 text-2xl">
                        <h2>Sorry, this page doesn´t exist or is no longer available.</h2>
                        <h2>Go back to <Link exact to="/"><span className="hover:text-indigo-700 transition-all hover:scale-110 py-2 permanentMarkerFont text-5xl"> Mytinerary </span></Link> home page.</h2>
                    </div>
                </div> 


                {/* prueba de diseños */}
                {/* <div 
                className="w-full h-screen flex justify-center items-center text-5xl
                bg-blue-300 filter drop-shadow-lg
                ">
                    <h2>HOLA</h2>
                </div> */}

            </div>
        </>    
    )   
}

export default Error404