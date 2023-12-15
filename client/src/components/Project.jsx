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
      <section onClick={() => Nav(proj.id)}>
        <span>
          {proj.name}
        </span>
        <svg className='border-red-500 border-2'>
          <image width='100%' height='100%' href={proj.image}/>
        </svg>
        {/* <div className='flex flex-row'>
          {proj.stack.map((url, idx) =>
          <img width='10%' height='10%' key={idx} src={url}/>
          )}
        </div> */}
      </section>
  )
}

export default Project