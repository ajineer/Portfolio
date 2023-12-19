import Circle from './Circle'
import { motion } from 'framer-motion'
import React from 'react'

function Profile(){
    
    const techURL = [
        '/Javascript.png',
        '/React.png',
        '/Tailwind.png',
        '/Python.jpeg', 
        '/Flask.png',  
        '/JSON.jpeg',  
        '/github.png', 
        '/CSS.png',       
        '/HTML.png'
    ]
    
    return(
        <div className="flex items-center justify-center rounded-full w-[300px] h-[300px] mb-[10rem] mr-auto ml-auto sm:m-auto">
            <div className='z-10 absolute flex overflow-clip items-center border-2 border-white rounded-full h-[190px] w-[190px]'>
                <img className='h-full w-full' src='../../public/profile_picture.jpeg'/>
            </div>
            {techURL.map((url, idx) => {
                return (
                    // <Circle key={idx} url={url} idx={idx} />
                    <motion.div key={idx} className='flex z-0 bg-opacity-0 absolute items-center w-[260px] h-[260px] rounded-full'
                        initial={{rotate: 0, opacity: 0}}
                        animate={{rotate: -12*idx, opacity: 1}}
                        transition={{duration: 0.5, delay: (idx+1)*0.5}}
                    >
                        <motion.img className='z-10 rounded-full' width={'23px'} height={'23px'} src={url}
                            initial={{rotate: 0}}
                            animate={{rotate: 12*idx}}
                            transition={{duration: 0.5, delay: (idx+1)*0.5}}
                        />
                    </motion.div>
                )
            })}
        </div>
    )
}

export default Profile