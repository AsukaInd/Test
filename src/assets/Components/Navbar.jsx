import React from 'react'
import Logo from "../Logo.png"

export default function Navbar  () {

  return (
    <nav className='container mx-auto flex flex-row justify-between px-5 py-5'>
        {/* Logo */}
      <img src={Logo} alt="Logo" className='w-[150px] h-[36px]' />

        {/* Link Navigation */}
      <div className='hidden  md:flex flex-row items-center lg:gap-6 gap-2'>
      <a href="#" className='nav-navigation text-gray-Gray2'>Home</a>   
      <a href="#" className='nav-navigation text-gray-Gray2'>About</a>   
      <a href="#" className='nav-navigation text-gray-Gray2'>Promotion</a>   
      <a href="#" className='nav-navigation text-gray-Gray2'>Blogs</a>   
      <a href="#" className='nav-navigation text-gray-Gray2'>Contact Us</a>   
      </div>

      {/* Login OR Register */}
      <div className='flex flex-row gap-2'>
      <a href="#" className='nav-text text-Gray hidden sm:flex'>Masuk</a>
      <button className='button '> <span className='text-white font-medium text-sm leading-[22px]'>Daftar Sekarang</span></button>
      </div>
    </nav>
  )
}

