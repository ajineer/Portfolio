import classNames from 'classnames'
import { motion } from 'framer-motion'

function Project({proj, id}){

    return (
        <section className={`border-black border-2 bg-gradient-radial from-secondary to-accent3`}>
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
        </section>
    )
}

export default Project