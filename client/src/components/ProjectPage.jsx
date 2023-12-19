import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import YouTube from "react-youtube"
import React from 'react';


// function ProjectPage({proj}){

//     return (
//         <section className='bg-gradient-radial from-accent1 to-accent2'>
//             <h1>{proj.name}</h1>
//             <p>{proj.description}</p>
//             <img src={proj.image}/>
//             <div className='flex'>
//                 {proj.stack.map(((tech, idx) => {
//                     return (
//                         <motion.img key={idx} src={tech}
//                         initial={{opacity: 0}}
//                         animate={{opacity: 1}}
//                         transition={{duration: 0.5, delay: 0.5*(idx+1)}}
//                     />
//                     )
//                 }))}
//             </div>
//         </section>

//     )

// }

// export default ProjectPage


function ProjectPage({ proj }) {
  return (
    <section className='bg-gradient-radial from-accent1 to-accent2 h-screen'>
      <div className='project-details'>
        <h1>{proj.name}</h1>
        <p>{proj.description}</p>
        <YouTube videoId={proj.youtube}/>
      </div>
      <div className='flex tech-stack'>
        {proj.stack.map((tech, idx) => (
          <motion.img
            key={idx}
            src={tech}
            alt={tech}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 * (idx + 1) }}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;
