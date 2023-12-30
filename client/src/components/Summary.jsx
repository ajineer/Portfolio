import Profile from "./Profile"
import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons';
import data from "../projectStore"
import React from "react"

function Summary(){

    return (
        <section className='flex border-2 border-white h-[66%]'>
            <section id='top' className='h-screen col-span-2 mt-4 col-start-1 w-[100ch]'>
                <h1 className={`flex p-2 ml-[0.20%] text-3xl w-[100%]`}>
                    <span className="flex w-[100%] font-bold">
                        <motion.span 
                            className="text-accent3"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.75, delay:0.5}}
                            >{data.firstName} &nbsp;</motion.span> {data.lastName.split("").map((letter, idx) => 
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
                {data.links.map((link, idx) => {
                    return (
                        <SocialIcon key={idx} url={link}/>
                        )
                    })}
                <p className='bg-primary p-2 rounded-md border-2 border-black'>
                    {data.summary}
                </p>
            </section>
            <Profile/>
        </section>
    )
}

export default Summary