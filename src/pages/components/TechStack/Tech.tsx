import React from 'react'
import { IconType } from 'react-icons'

const Tech = ({icon, name}: {icon: React.JSX.Element, name: string}) => {
  return (
    <div className=' flex flex-col gap-1'>
        <div className=' flex justify-center'>

                {icon}
        </div>

        <div className=' text-center flex font-semibold justify-center tb:text-base text-sm'>

                {name}
        </div>

    </div>
  )
}

export default Tech