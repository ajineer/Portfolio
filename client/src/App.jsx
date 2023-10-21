import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import useStore from './store'
import { useEffect } from 'react'

function App() {

  const { user, setUser, projects, setProjects, skills, setSkills} = useStore()
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

  function logout(){
    setUser(null)
    fetch('/api/logout', {
      method: 'DELETE'
    })
    navigate('/')
  }


  return (
    <div>
    </div>
  )
}

export default App
