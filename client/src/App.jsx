import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Summary from './components/Summary'
import Project from './components/Project'
import ProjectUI from './components/ProjectUI'
import useStore from './store'
import { useEffect, useState } from 'react'

function App() {

  const { user, setUser, projects, setProjects, skills, setSkills} = useStore()
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    async function fetchData(){
      const response = await fetch('/api/check_session')
      if (response.ok){
        const data = await response.json() 
        setUser(data)
        setProjects(data.projects)
        setSkills(data.skills)
      }else{
        navigate('/')
      }
    }
    fetchData()
  },[])

  useEffect(()=>{
    fetch('/api/project')
    .then(res => res.json())
    .then(data => setProjects(data))
  },[])

  function logout(){
    setUser(null)
    fetch('/api/logout', {
      method: 'DELETE'
    })
    navigate('/')
  }


  return (
    
    <main className='flex flex-col'>
      {show && <Login setShow={setShow}/>}
      <section className='flex'>
        <Summary />
        <div tabIndex={0} onKeyDown={(e) => {e.key==='Alt' && setShow(true)}}>
          <img width='30%' height='30%' src='../../public/profile_picture.jpeg'/>
        </div>
      </section>
      <section className={`grid grid-cols-3 grid-template-rows-[${projects.length%3}]`}>
        {projects.length > 0 && projects.map(proj => 
          <Project key={proj.id} proj={proj}/>)}
      </section>
      {user && 
        <section>
          <ProjectUI/>
          <button onClick={() => logout()}>Log out</button>
        </section>
        }
    </main>
  )
}

export default App
