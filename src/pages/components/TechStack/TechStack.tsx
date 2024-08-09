import React from 'react'
import { FaReact } from 'react-icons/fa'
import Tech from './Tech'
import { SiMongodb, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { RiNextjsFill, RiNodejsFill } from 'react-icons/ri'

const TechStack = () => {
  return (
    <div className='flex flex-col gap-8 text-white px-3 tb:px-20 mb-10'>
          <div className='text-[2rem] font-bold underline underline-offset-8 decoration-lime-400'>
              Technology Stack
          </div>

          <div className=' tb:flex m-auto gap-x-12 grid-cols-4 grid'>
            <Tech icon={<FaReact className=' text-4xl tb:text-6xl text-lime-400'/>} name='React.jx'/>
            <Tech icon={<SiTypescript className=' text-4xl tb:text-6xl text-lime-400'/>} name='Typescript'/>
            <Tech icon={<RiNodejsFill className=' text-4xl tb:text-6xl text-lime-400'/>} name='Node.js'/>
            <Tech icon={<RiNextjsFill className=' text-4xl tb:text-6xl text-lime-400'/>} name='Next.js'/>
            <Tech icon={<SiMongodb className=' text-4xl tb:text-6xl text-lime-400'/>} name='MongoDB'/>
            <Tech icon={<SiRedux className=' text-4xl tb:text-6xl text-lime-400'/>} name='Redux'/>
            <Tech icon={<SiTailwindcss className=' text-4xl tb:text-6xl text-lime-400'/>} name='Tailwind CSS'/>
          </div>

       

    </div>
  )
}

export default TechStack