import data from '../projectStore';
import { motion } from 'framer-motion';
import Project from './Project'
import Profile from './Profile';
import { SocialIcon } from 'react-social-icons';
import React from 'react';
import ProjectPage from './ProjectPage';
import { Link } from 'react-scroll'
import Nav from './Nav';
import Summary from './Summary';
import Insignia from './Insignia';

function Home() {
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent1', 'bg-accent2', 'bg-accent3'];

  return (
    <main className='parent p-2 m-0 items-center justify-center bg-gradient-radial from-accent1 to-accent2'>
        {/* Navigation */}
        <Nav/>

      {/* color pallette */}
      <div className='flex w-fit h-[1ch] sticky top-0 z-10'>
        {colors.map((color ,idx)=>
          <div key={idx} className={`${color}`}>
            {color}
          </div>
        )}
      </div>

      {/* Name, summary and links*/}
      {/* <Summary/> */}
      {/* <section className='flex border-2 border-white h-[66%]'>
        <section id='top' className='h-screen col-span-2 mt-4 col-start-1 w-[100ch]'>
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
        <Profile/>
      </section> */}

      
      {/* Project cards */}
      {/* <section className='flex space-x-4 ml-auto mr-auto'>
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
      </section> */}
      {/*Project pages */}
      {/* {data.projects.map((proj, idx) => {
        return (
          <section key={proj.id} id={`Project_${proj.id}`}>
            <ProjectPage proj={proj}/>
          </section>
        )
      })} */}
    </main>
  );
}

export default Home;

 