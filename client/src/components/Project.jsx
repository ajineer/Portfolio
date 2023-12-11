import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

function Project({proj, idx}){

    return (
        <motion.section className={`border-black border-2 bg-gradient-radial from-secondary to-accent3`}
            initial={{translateX: 1000}}
            animate={{translateX: 0}}
            transition={{duration: 0.5, delay: 0.5*(idx+1)}}
        >
            <span>
                {proj.name}
            </span>
            <svg className='border-red-500 border-2'>
                <image width='100%' height='100%' href={proj.image}/>
            </svg>
            <div className='flex flex-row'>
            {proj.stack.map((url, idx) =>
                <img width='10%' height='10%' key={idx} src={url}/>
                )}
            </div>
        </motion.section>
    )
}

export default Project