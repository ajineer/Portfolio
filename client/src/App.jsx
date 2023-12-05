import Project from './components/Project'
import projects from './projectStore'
import Profile from './components/Profile'
import Summary from './components/Summary'
import { useEffect, useState} from 'react'

function App() {

  // const colors = ['#405CC2', '#4C5A8F', '#204EF5', '#43485C', '#2C2E33']
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent1', 'bg-accent2', 'bg-accent3']

  return (
    
    <main className='flex flex-col bg-gradient-radial from-accent1 to-primary h-screen'>
      <div className='flex  w-fit absolute z-0 border-2 border-black w-[50%] m-2 bg-white'>
      {colors.map((color, idx) => 
        <div key={idx} className={`flex w-[150px] h-[50px] ${color}`}>
          <span className='text-white'>
            {color}
          </span>
        </div>
        )}
      </div>
      <section className='flex bg-secondary w-[80%] h-[36%] m-auto border-4 border-accent2 round'>
          <Summary/>
          <Profile />
      </section>
      <h2 className='text-4xl'>My Projects</h2>
      <section className={`grid grid-cols-3 grid-template-rows-[${projects.length%3}] mt-auto mb-[5%] gap-1`}>
        {projects.length > 0 && projects.map((proj) => 
          <Project key={proj.id} proj={proj}/>)}
      </section>
    </main>
  )
}

export default App
