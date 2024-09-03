import React from 'react'
import { FaReact } from 'react-icons/fa'
import Tech from './Tech'
import { SiLaravel, SiMongodb, SiMysql, SiPhp, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { RiNextjsFill, RiNodejsFill } from 'react-icons/ri'

const TechStack = () => {
  return (
    <div className='flex flex-col gap-8 text-white px-3 tb:px-20 mb-10'>
          <div className='text-[2rem] font-bold underline underline-offset-8 decoration-lime-400'>
              Technology Stack
          </div>
          <div className=' flex flex-col px-10 gap-10'>
            <div className='flex items-center'>
              <div className='text-3xl font-bold w-[20%]'>Front end:</div>
              <div className=' tb:flex m-auto gap-x-12 grid-cols-2 grid items-center'>
                <Tech icon={<FaReact className=' text-4xl tb:text-6xl text-lime-400'/>} name='React.jx'/>
                <Tech icon={<SiTypescript className=' text-4xl tb:text-6xl text-lime-400'/>} name='Typescript'/>
                <Tech icon={<RiNextjsFill className=' text-4xl tb:text-6xl text-lime-400'/>} name='Next.js'/>
                <Tech icon={<SiRedux className=' text-4xl tb:text-6xl text-lime-400'/>} name='Redux'/>
                <Tech icon={<SiTailwindcss className=' text-4xl tb:text-6xl text-lime-400'/>} name='Tailwind CSS'/>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='text-3xl font-bold w-[20%]'>Back end:</div>
                <div className=' tb:flex m-auto gap-x-12 grid-cols-2 grid'>
                  <Tech icon={<SiMongodb className=' text-4xl tb:text-6xl text-red-700'/>} name='MongoDB'/>
                  <Tech icon={<RiNodejsFill className=' text-4xl tb:text-6xl text-red-700'/>} name='Node.js'/>
                  <Tech icon={<SiPhp className=' text-4xl tb:text-6xl text-red-700'/>} name='PHP'/>
                  <Tech icon={<SiLaravel className=' text-4xl tb:text-6xl text-red-700'/>} name='Laravel'/>
                  <Tech icon={<SiMysql className=' text-4xl tb:text-6xl text-red-700'/>} name='MySQL'/>
              </div>
            </div>
          </div>

       

    </div>
  )
}

export default TechStack