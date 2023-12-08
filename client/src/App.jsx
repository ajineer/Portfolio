import Project from './components/Project';
import projects from './projectStore';
import Profile from './components/Profile';
import Summary from './components/Summary';
import { useEffect, useState } from 'react';

function App() {
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent1', 'bg-accent2', 'bg-accent3'];

  return (
    <main className='flex flex-col bg-gradient-radial from-accent1 to-primary h-screen overflow-y-hidden'>
      {/* ... (other code) ... */}
      <section className='flex flex-col-reverse flex-shrink bg-secondary w-[80%] h-[36%] m-auto border-4 border-accent2 round sm:flex sm:flex-row'>
        <Summary />
        <Profile />
      </section>
      <h2 className='text-4xl'>My Projects</h2>
      <section className={`grid grid-cols-1 sm:grid-cols-3 mt-auto mb-[5%] gap-1`}>
        {projects.length > 0 &&
          projects.map((proj, idx) => (
            <Project key={proj.id} proj={proj} idx={idx} className={`h-[200px] ${colors[idx % colors.length]}`} />
          ))}
      </section>
    </main>
  );
}

export default App;

