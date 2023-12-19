import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Project({proj}){

  const navigate = useNavigate()

  function Nav(id){
    navigate(`/project_${id}`)
  }

  return (
      <section className='flex flex-col justify-center items-center' onClick={() => Nav(proj.id)}>
          <svg classname='w-[80%] h-[40%]'>
            <image height='100%' width='100%' href={proj.image}/>
          </svg>
        <span className='text-xl font-bold mt-2'>
          {proj.name}
        </span>
        <p className='mt-1 w-[28ch] text-center'>{proj.description}</p>
      </section>
  )
}

export default Project