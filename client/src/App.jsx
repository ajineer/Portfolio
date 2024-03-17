import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout/Layout.jsx'
import Home from  './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Projects from './components/Projects/Projects.jsx'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
          </Route>
      </Routes>
    </>
  )
}

export default App