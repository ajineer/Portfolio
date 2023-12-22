import classNames from 'classnames'
import React from 'react'

function Project({proj}){

  function Nav(id){
    return 1
  }

  return (
      <section className='flex flex-col justify-center items-center' onClick={() => Nav(proj.id)}>
          <svg className='w-[80%] h-[40%]'>
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