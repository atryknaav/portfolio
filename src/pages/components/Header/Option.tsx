import React from 'react'

const Option = ({name}:{name: string}) => {
  const sanitizedName = name ? name.toLowerCase().replace(/\s/g, "") : '';

  return (
    <div className=' hover:cursor-pointer select-none hover:text-gray-100 active:text-gray-300 hover:underline underline-offset-8 decoration-lime-400'>
        <a href={`#${sanitizedName}`}>{name}</a>
    </div>
  )
}

export default Option