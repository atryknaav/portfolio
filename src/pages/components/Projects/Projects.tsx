'use client'

import React from 'react'
import Preview from './Preview'

const Projects = () => {
  return (
    <div>
      <div id='projects' className='flex flex-col gap-6 text-white  tb:px-20'>
          <div className='text-[2rem] font-bold underline underline-offset-8 decoration-lime-400'>
              Projects
          </div>

          <div className='flex flex-col justify-between m-auto gap-10'>
              <Preview name='Marrej Furniture Store' url='https://marrej-furniture.vercel.app/' img='/marrej.png' features='Typescript, Node.js, React, Tailwind, Redux, MongoDB, Stripe payments, Nodemailer, Multi-platform rendering, Product search and cart, Checkout' description='This project is an online store for furniture built using modern web technologies. The application allows customers to search for items, add them to their cart, view their balance, adjust the quantity of items, and checkout. Upon checkout, customers receive a receipt via email. The project leverages several technologies including Next.js, React, TypeScript, Redux for state management, MongoDB for the database, Tailwind CSS for styling, and Stripe for payment processing. This website uses the content of the Dangarden store.' github='https://github.com/atryknaav/furniture-shopify'/>  
              <Preview name='Business Analytics Web Application' url='https://atryknaav.github.io/salence-profile/' img='/salence.png' features='Typescript, React, Tailwind, D3.js, Redux, theme switch' description='Displays interactive grahps of sales and other business information taken from a database. Has the ability to change the theme from dark to light and vice versa by clicking one button. ' github='https://github.com/atryknaav/salence-profile'/>
              <Preview name='Portfolio' url='https://github.com/atryknaav/portfolio' img='/portfolio.png' features='Typescript, React, Tailwind, Nodemailer' description='Displays all pet projects created with information about them and the pictures of theirs. Has the ability to send emails right from the website.' github='https://github.com/atryknaav/portfolio'/>
          </div>
      </div>
      
    <hr className='my-20 w-[80%] border-gray-500 static border-[1px] m-auto'/>
    </div>
  )
}

export default Projects