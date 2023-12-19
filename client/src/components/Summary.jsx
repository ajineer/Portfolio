import Profile from "./Profile"
import { motion } from "framer-motion"
import data from "../projectStore"
import React from "react"

function Summary(){

    const lastName = ['P', 'i', 'e', 'r', 'c', 'e']

    return (
        <div className={`flex flex-col w-[80%] h-[90%]`}>
            <h1 className={`flex p-2 ml-[0.20%] text-2xl w-[100%]`}>
                <span className="flex w-[100%]">
                    <motion.span 
                        className="text-accent3"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.75, delay:0.5}}
                    >Mark &nbsp;</motion.span> {lastName.map((letter, idx) => 
                    <motion.span key = {idx}
                        initial={{translateX: 1500}}
                        animate={{translateX: 0}}
                        transition={{duration: 0.65, delay: (idx+1)*0.5}}
                    >
                        {letter}
                    </motion.span>
                    )}
                </span>
            </h1>
            <p className={`w-[90%] border-2 border-orange-500 ml-[0.20%]`}>
                {data.summary}
            </p>
        </div>
    )
}

export default Summary