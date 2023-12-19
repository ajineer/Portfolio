import data from '../projectStore';
import { motion } from 'framer-motion';
import Project from './Project'
import { SocialIcon } from 'react-social-icons';

function Home() {
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent1', 'bg-accent2', 'bg-accent3'];
  const lastName = ['P', 'i', 'e', 'r', 'c', 'e']

  return (
    <main className='grid p-4 md:grid-cols-3 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-5 bg-gradient-radial from-accent1 to-accent2 md:h-screen gap-2'>
      {/* color pallette*/}
      <div className='absolute flex w-fit h-[1ch]'>
      {colors.map((color ,idx)=>
        <div key={idx} className={`${color}`}>
          {color}
        </div>
      )}
      </div>
      {/* Name, summary and links*/}
      <section className='m-[1rem] md:col-span-2 mt-auto mb-[2rem] md:row-start-1 md:col-start-1 sm:row-start-2'>
        {data.links.map((link, idx) => {
          return (
            <SocialIcon url={link}/>
          )
        })}
        <h1 className={`flex p-2 ml-[0.20%] text-2xl w-[100%]`}>
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
        <p className='bg-primary p-2 rounded-md border-2 border-black md:w-[100%] sm:w-[]'>
          {data.summary}
        </p>
        
      </section>

      {/* Profile picture */}
      <div className="flex items-center justify-center rounded-full w-[300px] h-[300px] m-auto md:col-start-3 row-start-1">
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
      {/* Projects */}
      {data.projects.map((proj, idx) => {
        return (
          <motion.section 
            key={proj.id}
            className={`rounded self-center justify-self-center md:h-[80%] sm:h-fit w-fit p-4 mt-auto mb-auto border-black border-2 bg-gradient-radial from-primary to-secondary md:row-start-2 md:col-start-${idx+1} sm:row-start-${idx+2} hover:border-accent1`}
            initial={{translateX: 1500}}
            animate={{translateX: 0}}
            transition={{duration: 0.5, delay: 0.5*(idx+1)}}
          >
            <Project proj={proj}/>
          </motion.section>
      )})}
    </main>
  );
}

export default Home;

