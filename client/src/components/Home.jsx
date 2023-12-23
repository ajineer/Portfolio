import data from '../projectStore';
import { motion } from 'framer-motion';
import Project from './Project'
import { SocialIcon } from 'react-social-icons';
import React from 'react';
import ProjectPage from './ProjectPage';
import { Link } from 'react-scroll'

function Home() {
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent1', 'bg-accent2', 'bg-accent3'];
  const lastName = ['P', 'i', 'e', 'r', 'c', 'e']

  return (
    <main className='flex flex-col items-center justify-center bg-gradient-radial from-accent1 to-accent2'>
      
      {/* color pallette*/}
      {/* <div className='absolute flex w-fit h-[1ch]'>
      {colors.map((color ,idx)=>
        <div key={idx} className={`${color}`}>
          {color}
        </div>
      )}
      </div> */}
      {/* Navigation */}
      <nav className='flex border-2 sticky top-0 w-screen'>
        <Link
          to='top'
          spy={true} smooth={true} offset={50} duration={500} 
        >Home</Link>
        <Link
          to='Project_1'
          spy={true} smooth={true} offset={50} duration={500} 
        >Project 1</Link>
        <Link
          to='Project_2'
          spy={true} smooth={true} offset={50} duration={500} 
        >Project 2</Link>
        <Link
          to='Project_3'
          spy={true} smooth={true} offset={50} duration={500} 
        >Project 3</Link>
      </nav>

      {/* Name, summary and links*/}
      <section id='top' className='mt-auto mb-[2rem]'>
        <h1 className={`flex p-2 ml-[0.20%] text-3xl w-[100%]`}>
          <span className="flex w-[100%] font-bold">
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
        {data.links.map((link, idx) => {
          return (
            <SocialIcon key={idx} url={link}/>
          )
        })}
        <p className='bg-primary p-2 rounded-md border-2 border-black'>
          {data.summary}
        </p>
        
      </section>

      {/* Profile picture */}
      <div className="flex items-center justify-center rounded-full w-[300px] h-[300px] m-auto">
            <div className='absolute z-0 h-[290px] w-[290px] bg-gradient-radial from-primary to-accent3 rounded-full border-2 border-black'>
            </div>
            <div className='z-20 absolute flex overflow-clip items-center rounded-full h-[190px] w-[190px]'>
                <img className='h-full w-full' src={data.profile}/>
            </div>
            {data.techURL.map((url, idx) => {
                return (
                    <motion.div key={idx} className='flex z-10 bg-opacity-0 absolute items-center w-[260px] h-[260px] rounded-full'
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
      {/* Project cards */}
      <section className='flex space-x-4 ml-auto mr-auto'>
        {data.projects.map((proj, idx) => {
          return (
            <motion.section 
            key={proj.id}
            className={`rounded self-center justify-self-center h-[100%] w-fit p-4 mt-auto mb-auto border-black border-2 bg-gradient-radial from-primary to-secondary hover:border-accent1`}
            
            initial={{translateX: 1500}}
            animate={{translateX: 0}}
            transition={{duration: 0.5, delay: 0.5*(idx+1)}}
            >
              <Project proj={proj}/>
              <Link 
                to={`Project_${proj.id}`}
                spy={true} smooth={true} offset={50} duration={500}  
              >Check it out</Link>
            </motion.section>
        )})}
      </section>
      {/*Project pages */}
      {data.projects.map((proj, idx) => {
        return (
          <section key={proj.id} id={`Project_${proj.id}`}>
            <ProjectPage proj={proj}/>
          </section>
        )
      })}
    </main>
  );
}

export default Home;

