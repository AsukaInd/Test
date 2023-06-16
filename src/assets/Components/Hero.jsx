import React from 'react'
import HeroMobile from '../Hero-Mobile.png'

export default function Hero  ()  {

  return (
    <header className='container mx-auto px-5 py-5 flex flex-col gap-5'>
        <span className='title-hero text-5xl'>
        Good Food Us Good Mood
        </span>

        <img src={HeroMobile} alt="" />
        <span className='text-hero text-gray-Gray2'>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</span>
    </header>
  )
}

