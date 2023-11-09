'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeadingBorder from './HeadingBorder'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const AgentHeroSection = ({
  img,
    name,
    contacts,
    address,
    languages,
    slug
    

}) => {

  const [mMode, setMMode] = useState('');
  const router = useRouter();

  const handleContactClick = (value) => {
    console.log(mMode)
    setMMode(value)
  }
  const handleGetIntoTouch = (value) => {
    router.push(`/meetings/schedule?mode=${mMode}`)
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 bg-[#334257] rounded-3xl shadow '>
      
      <div className='text-white  col-span-2'>
        <div className='py-8 px-6 flex flex-col justify-between h-full gap-8'>
            <div className='text-center sm:text-left'>
            <h2 className='inline-flex  flex-col text-4xl font-bold   '>
                {name}
                <div className='flex justify-center sm:justify-start' >
            <HeadingBorder/>

                </div>
            </h2>
            <p className='text-lg'>
                {contacts.map((contact, index) => (<span key={index}>{contact}</span>))}
            </p>
            <p className='font-bold text-lg'>
            {languages.map((language, index) => (<span key={index}>
                {language + ' '}</span>))}
            </p>

            <p className='text-lg py-4'>
                {address}
            </p>
            </div>

            <div className='flex flex-col gap-4 items-center sm:items-start '>
                <p className='text-lg font-bold'>
                    Meet with <span className='capitalize m-0'>
                      {slug.replaceAll('-', ' ')}
                    </span>
                </p>
                <div className='flex flex-row gap-8 accent-green-500'>
                  <div className='flex flex-row gap-2'> 
                  <input type="radio" id='inperson' name='mode' value={'inPerson'}  onClick={() => handleContactClick('inPerson')}/>
                  <label htmlFor="inperson">
                    In Person
                  </label>
                  </div>
                  <div className='accent-green-500 flex flex-row gap-2'> 
                  <input type="radio" id='video' name='mode' value={'videoChat'}
                  onClick={() => handleContactClick('videoChat')}/>
                  <label htmlFor="video">
                    Video Call
                  </label>
                  </div>
                </div>
                <span className='py-2 px-4 bg-blue-600 text-white font-bold text-xl cursor-pointer' onClick={() => handleGetIntoTouch()}>
                    Get In Touch
                </span>

            </div>

        </div>

       
      </div>

      <div className='-order-1   sm:order-2 sm:relative rounded-3xl w-full sm:h-[95%] col-span-1 sm:after:absolute after:w-[100%] after:h-[101%] after:bg-white after:right-2 after:rounded-3xl after:top-1 py-4 md:py-0'>
                <Image src={`${img}`} className='rounded-3xl mx-auto sm:mx-0 h-[500px] w-auto sm:w-full sm:h-full  object-cover sm:absolute  z-10' width={300} height={300}/>
        </div>
    </div>
  )
}

export default AgentHeroSection
