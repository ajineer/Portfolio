import Project from './components/Project'
import projects from './projectStore'
import Profile from './components/Profile'
import Summary from './components/Summary'
import { useEffect, useState} from 'react'

function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    setLoaded(true)
  },[])

  return (
    
    <main className='flex flex-col bg-gradient-radial from-accent1 to-primary h-screen'>
      <Profile />
      <section className='flex bg-secondary w-[80%] h-[50%] m-auto'>
        <Summary/>
      </section>
      <h2 className='text-4xl'>My Projects</h2>
      <section className={`grid grid-cols-3 grid-template-rows-[${projects.length%3}] mt-auto mb-[5%]`}>
        {projects.length > 0 && projects.map((proj) => 
          <Project key={proj.id} proj={proj} loaded={loaded}/>)}
      </section>
    </main>
  )
}

export default App
