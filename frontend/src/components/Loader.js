
const Loader = () => {
    return (

        <div className="w-full h-screen bg-indigo-200 flex justify-center items-center gap-1">
            {/* <div className="w-12 h-12 bg-gradient-to-r from-red-400 "></div> */}
            <div className="w-12 h-12 bg-red-400 animate-pulse delay-100"></div>
            <div className="w-12 h-12 bg-red-400 animate-pulse delay-200"></div>
            <div className="w-12 h-12 bg-red-400 animate-pulse delay-300"></div>
            <div className="w-12 h-12 bg-red-400 animate-pulse"></div>
            <div className="w-12 h-12 bg-red-400 animate-pulse"></div>


        </div>

    )
}

export default Loader