'use client'

import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='aboutme' className='mt-20 flex-col w-full h-fit'>
    <div className='text-white flex  w-full h-fit justify-between'>
        <div className='flex flex-col text-[5vw] max-w-[50%]'>
            <p>Nice to meet you!</p>
            <p className=' underline decoration-lime-400'>I'm Arsenii</p>

            <p className=' text-[2vw] mb-4 ml-10 text-gray-500'>
              I specialize in creating dynamic web applications with React and Node.js. 
            </p>

            <p className=' text-[2vw] ml-10 text-lime-400'>
            Let's build something amazing together!
            </p>
        </div>
        
        <div>
          <Image 
            src="/hero.png"
            width={500}
            height={500}
            alt="Picture of the author"
            
          />
        </div>
    </div>
    <hr className='my-20 w-[80%] border-gray-500 static border-[1px] m-auto'/>
    </div>
  )
}

export default Hero