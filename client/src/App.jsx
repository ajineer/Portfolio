import Project from './components/Project';
import data from './projectStore';
import Profile from './components/Profile';
import Summary from './components/Summary';
import { motion } from 'framer-motion';

function App() {
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent1', 'bg-accent2', 'bg-accent3'];
  const lastName = ['P', 'i', 'e', 'r', 'c', 'e']

  return (
    <main className='grid md:grid-cols-2 md:grid-rows-3 bg-gradient-radial from-accent1 to-accent2 h-screen gap-2'>
      <div className='absolute flex w-fit h-[1ch]'>
      {colors.map((color ,idx)=>
        <div key={idx} className={`${color}`}>
          {color}
        </div>
      )}
      </div>
      <section className='md:row-start-2 m-[1rem] sm:row-start-2'>
      <h1 className={`flex p-2 ml-[0.20%] text-2xl w-[100%]`}>
                <span className="flex w-[100%]">
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
        {data.summary}
      </section>
      <div className="flex items-center justify-center rounded-full w-[300px] h-[300px] mb-[10rem] mr-auto ml-auto md:col-start-2 sm:col-start-1 sm:row-start-1">
            <div className='z-10 absolute flex overflow-clip items-center border-2 border-white rounded-full h-[190px] w-[190px]'>
                <img className='h-full w-full' src={data.profile}/>
            </div>
            {data.techURL.map((url, idx) => {
                return (
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
      {/* <section className='flex flex-col-reverse flex-shrink bg-secondary w-[80%] h-[36%] m-auto border-4 border-accent2 round sm:flex sm:flex-row'>
        <Summary />
        <Profile />
      </section>
      <h2 className='text-4xl'>My Projects</h2>
      <section className={`grid grid-cols-1 sm:grid-cols-3 mt-auto mb-[5%] gap-1`}>
        {data.projects.length > 0 &&
          data.projects.map((proj, idx) => (
            <Project key={proj.id} proj={proj} idx={idx} className={`h-[200px] ${colors[idx % colors.length]}`} />
          ))}
      </section> */}
    </main>
  );
}

export default App;

