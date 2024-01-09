import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout.jsx'
import Home from  './components/Home.jsx'
import About from './components/About.jsx'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>
      </Routes>
    </>
  )
}

export default App