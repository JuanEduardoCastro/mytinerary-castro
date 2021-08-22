import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <motion.div 
        inital={{x: -900}}
        animate={{x: 0}}
        transition={{duration: 1, ease: "easeIn"}}
        className="w-full h-screen bg-indigo-200 flex justify-center items-center gap-1 block overflow-hidden ">
            <motion.div 
            initial={{x: -900}}
            animate={{x: 0}}
            transition={{duration: 0.5, delay: 0.5}}
            className="w-12 h-12 bg-red-500 animate-pulse"></motion.div>
            <motion.div 
            initial={{x: -900}}
            animate={{x: 0}}
            transition={{duration: 0.5, delay: 0.4}}
            className="w-12 h-12 bg-red-500 animate-pulse"></motion.div>
            <motion.div 
            initial={{x: -900}}
            animate={{x: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            className="w-12 h-12 bg-red-500 animate-pulse"></motion.div>
            <motion.div 
            initial={{x: -900}}
            animate={{x: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="w-12 h-12 bg-red-500 animate-pulse"></motion.div>
            <motion.div 
            initial={{x: -900}}
            animate={{x: 0}}
            transition={{duration: 0.5, delay: 0.1}}
            className="w-12 h-12 bg-red-500 animate-pulse"></motion.div>
        </motion.div>
    )
}

export default Loader