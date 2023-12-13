import data from '../projectStore'
import { motion } from 'framer-motion'


function Project1(){

    return (
        <section className='bg-gradient-radial from-accent1 to-accent2'>
            <h1>{data.projects[0].name}</h1>
            <p>{data.projects[0].description}</p>
            <img src={data.projects[0].image}/>
            <div className='flex'>
                {data.projects[0].stack.map(((tech, idx) => {
                    return (
                        <motion.img src={tech}
                        initial={{translateX: 1000}}
                        animate={{translateX: 0}}
                        transition={{duration: 0.5, delay: 0.5*idx}}
                    />
                    )
                }))}
            </div>
        </section>

    )

}

export default Project1