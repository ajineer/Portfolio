import { motion } from 'framer-motion'
import React from 'react'
import data from '../projectStore'
import { rotate } from 'mathjs'

function Profile(){

    
    return (
        <div className="m-6 relative parent flex items-center justify-center rounded-full w-[300px] h-[300px]">
          <div className='child absolute z-0 h-[100%] w-[100%] bg-gradient-radial from-primary to-accent3 rounded-full border-2 border-black'>
          </div>
          <div className='child z-20 absolute flex overflow-clip items-center rounded-full h-[60%] w-[60%]'>
            <img className='child w-[100%] h-[100%]' src={data.profile} alt="Profile"/>
          </div>
          {data.techURL.map((url, idx) => {
              return (
                  <motion.div key={idx} className='child flex z-10 bg-opacity-0 absolute items-center w-[90%] h-[90%] rounded-full'
                      initial={{rotate: 0, opacity: 0}}
                      animate={{rotate: -40*idx, opacity: 1}}
                      transition={{duration: 0.5, delay: (idx+1)*0.5}}
                  >
                      <motion.img className='child z-10 rounded-full' width={'10%'} height={'10%'} src={url}
                          initial={{rotate: 0}}
                          animate={{rotate: 40*idx}}
                          transition={{duration: 0.5, delay: (idx+1)*0.5}}
                      />
                  </motion.div>
              )
          })}
        </div>
    )
}

export default Profile