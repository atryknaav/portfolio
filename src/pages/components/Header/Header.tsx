'use client'

import React from 'react'
import Option from './Option'

const Header = () => {
  return (
    <div className='flex w-screen bg-zinc-950 h-fit fixed left-0 top-0 text-white justify-between py-5 px-5 tb:px-[10%] shadow-xl text-lg tb:text-xl z-50'>
        <div className='flex gap-6 w-[60%] tb:w-[30%]'>
            <div>
                <Option name='About Me'/>
            </div>
            <div>
            <Option name='Projects'/>
            </div>
        </div>

        <div>
        <Option name='Contact'/>
        </div>
    </div>
  )
}

export default Header