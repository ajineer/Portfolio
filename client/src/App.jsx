import { Routes, Route, useNavigate } from 'react-router-dom'
import Summary from './components/Summary'
import Project from './components/Project'
import { useState } from 'react'

function App() {

  const projects = [
    {
      name: 'Task Master',
      date_started: 'June, 2023',
      date_finished: 'October, 2023',
      description: 'A user-friendly to-do list tracker for efficient task management.',
      image: '../../public/TaskMasterimage.png',
      github: 'https://github.com/ajineer/phase-1-project',
      demo: 'https://youtu.be/DqRZbit4Yfw',
      stack: [
        '../../public/Javascript.png',
        '../../public/HTML.png',
        '../../public/CSS.png',
        '../../public/JSON.jpeg',
        ]
    },
    {
      name: 'Prackr',
      date_started: 'July, 2023',
      date_finished: 'October, 2023',
      description: 'helps users track their pantry items and create gorcery lists.',
      image: '../../public/Prackrimage.png',
      github: 'https://github.com/ajineer/Phase-2-Project',
      demo: 'https://youtu.be/M2iw366dyro',
      stack: [
        '../../public/Javascript.png',
        '../../public/React.png',
        '../../public/Tailwind.png',
        '../../public/JSON.jpeg',
        ]
    },
    {
      name: 'Planly',
      date_started: 'September, 2023',
      date_finished: 'October, 2023',
      description: 'An app that tracks and schedules a users events with an interactive calendar and to-do lists.',
      image: '../../public/Planlyimage.png',
      github: 'https://github.com/ajineer/phase-5-project',
      demo: 'https://youtu.be/p5V-HUNbyqU',
      stack: [
        '../../public/React.png',
        '../../public/Tailwind.png',
        '../../public/Flask.png',
        '../../public/Python.jpeg',
        ]
    },
  ]

  return (
    
    <main className='flex flex-col bg-gradient-radial from-primary to-secondary h-screen'>
      <section className='flex bg-secondary w-[80%] h-[50%] m-auto'>
        <Summary />
        <div >
          <img width='100%' height='100%' src='../../public/profile_picture.jpeg'/>
        </div>
      </section>
      <section className={`grid grid-cols-3 grid-template-rows-[${projects.length%3}] mt-auto mb-[5%]`}>
        {projects.length > 0 && projects.map(proj => 
          <Project key={proj.id} proj={proj}/>)}
      </section>
    </main>
  )
}

export default App
