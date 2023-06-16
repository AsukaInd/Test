import React from 'react'
import HeroMobile from '../Hero-Mobile.png'
import HeroLaptop from '../Hero-Laptop.png'

export default function Hero  ()  {

  return (
    <header className='container mx-auto px-5 py-5 flex flex-col gap-5 lg:flex-row'>
        <div className='lg:flex flex-col flex gap-5 lg:justify-center'>
        <span className='title-hero text-5xl lg:text-[64px]'>
        Good Food Us Good Mood
        </span>

        <img src={HeroMobile} alt="" className='lg:hidden'/>
        <span className='text-hero text-gray-Gray2'>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</span>

        <div className='flex flex-row gap-3'>
        <a href="" className='button flex items-center justify-center text-white font-medium text-sm leading-[22px]'> Daftar Sekarang </a>
        <a href="" className='white-button'> About Us</a>
        </div>
        </div>
        <img src={HeroLaptop} alt="" className='lg:block hidden w-[50%]' />

        
    </header>
  )
}

