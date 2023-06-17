import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import FooterLogo from '../Footer-Logo.png'
import {AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'

export default function Footer ()  {
    
  return (
    <footer className='my-7 container mx-auto px-5 py-5'>
        {/* Mobile Footer */}
        
    <section className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 lg:hidden">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
            <button type="button" className="inline-flex flex-col gap-1 items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <GiHamburgerMenu size={20}/>
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
            </button>

            <button type="button" className="inline-flex flex-col gap-1 items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <GiHamburgerMenu size={20}/>
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Promotions</span>
            </button>

            <button type="button" className="inline-flex flex-col gap-1 items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <GiHamburgerMenu size={20}/>
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Others</span>
            </button>
            
        </div>
    </section>

    {/* Footer */}
    <section className='hidden lg:grid sm:grid-cols-4 gap-4 '>

        <div className='flex flex-col gap-3 w-full'>
            <div className='flex flex-col items-start px-3 py-3 gap-5'>
                <img src={FooterLogo} alt="" />
                <span className='text-footer leading-5 '>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
                Kecamatan Setiabudi, Kota Jakarta Selatan, 
                Daerah Khusus Ibukota Jakarta 12950</span>
            </div>

            {/* Icons */}
            <div className='flex flex-row gap-5 px-3 py-3'>

            <div className=' hover:w-8 hover:h-8 group hover:rounded-full hover:bg-primary-1 flex justify-center items-center '>
            <AiOutlineMail size={18} className='text-primary-1 group-hover:text-white'/>
            </div>

            <div className=' hover:w-8 hover:h-8 group hover:rounded-full hover:bg-primary-1 flex justify-center items-center '>
            <BsTelephone size={17} className='text-primary-1 group-hover:text-white'/>
            </div>

            <div className=' hover:w-8 hover:h-8 group hover:rounded-full hover:bg-primary-1 flex justify-center items-center '>
            <AiOutlineInstagram size={18} className='text-primary-1 group-hover:text-white'/>
            </div>

            </div>
        </div>

        <div className='flex flex-col gap-6'>
        <h3 className='title-footer'>Categories</h3>

        <div className='flex flex-col gap-4'>
            <a href="" className='text-footer'>Cupcake</a>
            <a href="" className='text-footer'>Pizza</a>
            <a href="" className='text-footer'>Kebab</a>
            <a href="" className='text-footer'>Salmon</a>
            <a href="" className='text-footer'>Dougnut</a>
        </div>
        </div>

        <div className='flex flex-col gap-6'>
        <h3 className='title-footer'>About Us</h3>

        <div className='flex flex-col gap-4'>
            <a href="" className='text-footer'>About Us</a>
            <a href="" className='text-footer'>FAQ</a>
            <a href="" className='text-footer'>Report Problem</a>
        </div>
        </div>

        <div className='flex flex-col gap-6'>
        <h3 className='title-footer'>Newsletter</h3>
        <div className='flex flex-col gap-4'> 
        <span> Get now free 50% discount for alll products on your first order</span>
        
        <div className='flex flex-row '>
            <input type="email" className='w-full rounded-l-lg font-normal text-sm leading-6 text-black focus:border-none focus:border-black border-solid border-black border-2' placeholder='Your email address'/>
            <button className='font-medium text-sm leading-6 flex justify-center items-center bg-primary-1 text-white rounded-r-lg px-5 '>SEND</button>
        </div>

        <div className='flex flex-col gap-3'> 
        <div className='flex flex-row gap-2 items-center'>
        <AiOutlineMail size={18} className='text-primary-1'/>
        <span className='font-medium text-sm leading-6 text-black'>  elemesid@gmail.com</span>
        </div>
        <div className='flex flex-row gap-2 items-center'>
        <BsTelephone size={17} className='text-primary-1'/>
        <span className='font-medium text-sm leading-6 text-black'>  0888 1111 2222 </span>
        </div>
        </div>

        </div>
        </div>

    </section>

    <section className='lg:flex lg:flex-row justify-center hidden mb-5 mt-10'>
        <span className='text-footer'>© 2021 Elemes id. All rights reserved</span>
    </section>
    
    </footer>
  )
}
