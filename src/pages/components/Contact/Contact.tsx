"use client"

import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { useState } from 'react';
// import sendEmail from '@/pages/api/sendEmail.js';

type EmailType = `${string}@${string}`;

const Contact = () => {

 
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');


    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {


        
        e.preventDefault();
        if (message === '' || !(email.indexOf('@') > -1)){
            alert('Enter valid email');
            throw new Error('Enter valid email');
        }
        const formData = {
            message: message,
            email: email
        }
        
        console.log(formData)
        try {
            
            const response = await fetch('/api/test/route', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            setMessage('');
            setEmail('');
            
    
            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };
   

  return (

    <div id='contact' className='flex flex-col gap-8 text-white px-3 tb:px-20'>
          <div className='text-[2rem] font-bold underline underline-offset-8 decoration-lime-400'>
              Contact Me
          </div>

        <div className=' text-gray-700 text-4xl flex gap-6'>
            <a href="https://github.com/atryknaav" target='_blank' className=' hover:text-lime-400 transition-colors'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/arsenii-bilyi-46820a284/" target='_blank' className=' hover:text-lime-400 transition-colors'><FaLinkedin /></a>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='flex flex-col gap-8 w-full tb:w-[60%]'>
            <label htmlFor="email" className=' font-medium text-xl'>Your email</label>
            <input type="text" placeholder='friend@yay.com' className=' placeholder:font-medium focus:placeholder:text-transparent placeholder:text-gray-600 px-4 py-1 bg-transparent border-b-[1px] border-gray-800 mb-2 focus:border-b-lime-400 outline-none transition-colors' onChange={(e) => setEmail(e.target.value)} value={email}/>

            <label htmlFor="body" className=' font-medium text-xl mb-2'>Message</label>
            <textarea name="body" id="body_text" placeholder='Tell me something interesting...' className=' h-[15vw] focus:placeholder:text-transparent placeholder:font-medium placeholder:text-gray-600 px-4 py-1 bg-transparent resize-none border-y-[1px] border-gray-800 focus:border-y-lime-400 outline-none transition-colors' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

            <button type='submit' className=' border-y-[3px] transition-colors border-gray-800 hover:border-lime-400 text-white font-bold text-3xl w-[90%] tb:w-[30%] m-auto p-3 mb-20 hover:text-[#ddd] active:text-[#ccc] active:text-[1.775rem] '>
                Send
            </button>
          </div>
          </form>


          

    </div>
  )
}

export default Contact