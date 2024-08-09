'use client'

import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='aboutme' className='mt-20 flex-col w-full h-fit'>
    <div className='text-white flex  w-full h-fit justify-between p-3 '>
        <div className='flex flex-col text-[5vw] max-w-full'>
            <p>Nice to meet you!</p>
            <p className=' underline decoration-lime-400'>I'm Arsenii</p>

            

            <p className=' text-base tb:text-[2vw] ml-10 text-lime-400 mt-3'>
            Let's build something amazing together!
            </p>
        </div>
        
        <div>
  
        </div>
    </div>
    <hr className='tb:my-20 my-8 w-[80%] border-gray-500 static border-[1px] m-auto'/>
    </div>
  )
}

export default Hero