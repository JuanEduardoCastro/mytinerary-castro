import React, { useLayoutEffect } from "react";

const Loader = () => {

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className="w-full h-screen bg-indigo-200 flex justify-center items-center gap-1 block overflow-hidden ">
            <div className="w-12 h-12 bg-red-400 animate-pulse"></div>
            <div className="w-12 h-12 bg-red-400 animate-pulse"></div>
            <div className="w-12 h-12 bg-red-400 animate-pulse"></div>
            <div className="w-12 h-12 bg-red-400 animate-pulse"></div>
            <div className="w-12 h-12 bg-red-400 animate-pulse"></div>
        </div>
    )
}

export default Loader