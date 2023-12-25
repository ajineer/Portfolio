import { motion } from 'framer-motion'
import React from 'react'
import data from '../projectStore'
import { rotate } from 'mathjs'

function Profile(){

    const borderRadius = ['rounded-tl-full', 'rounded-tr-full', 'rounded-bl-full', 'rounded-br-full']
    
    return (
        <div className="parent flex items-center justify-center rounded-full w-[180px] h-[180px] m-auto border-2 border-orange-500 relative">
          {/* <div className='child absolute z-0 h-[100%] w-[100%] bg-gradient-radial from-primary to-accent3 rounded-full border-2 border-black'>
          </div> */}
          <div className='child absolute z-0 rounded-full grid grid-rows-2 grid-cols-2 w-[120%] h-[120%]'>
            {data.pageLinks.map((link, idx) => {
                return(
                    <div 
                        key={idx} 
                        className={`flex border-2 border-pink-500  ${20%(idx+4) === 0 ? 'items-start': 'items-end'}  ${3%(idx+1) === 0 ? 'justify-start': 'justify-end'} ${borderRadius[idx]}`}>
                        <span
                            style={{transform: (idx === 0 || idx === 3) ? `rotate(-45deg)`: `rotate(45deg)`}}
                            className='border-2 border-green-500'
                        >{link.link}</span></div>
                )
            })}
          </div>
          {/* <div className='child z-20 absolute flex overflow-clip items-center rounded-full h-[60%] w-[60%] border-2 border-purple-500'>
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
          })} */}
        </div>
    )
}

export default Profile