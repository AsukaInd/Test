import React from 'react'
import Paperoni from '../Trending/Pizza-Paperoni.png'
import PizzaMeat from '../Trending/Pizza-Meats.png'
import DonerKebab from '../Trending/Doner-Kebab.png'
import SalmonRoll from '../Trending/Salmon-Roll.png'
import CupcakeChoco from '../Trending/Cupcake-Choco.png'
import DoughnutMilk from '../Trending/Doughnut-Milk.png'
import DoughnutUnicorn from '../Trending/Doughnut-Unicorn.png'
import KathiKebab from '../Trending/Kathi-Kebab.png'
import TrendingCard from './Part/TrendingCard'

export default function Trending ()  {

  return (
   <section className='container mx-auto px-5 py-5 flex flex-col gap-10 '>
    
    <div>
    <span className='text-trending'> Browser Our Trending 
    <p className='text-primary-1'>Receipt</p> </span>
    </div>

    {/* CARD */}

    <div className='flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-4 gap-5'>

    
    <TrendingCard img={Paperoni} bg="#E6F3F5" R1="#FF8412" R2="#FF8412" R3="#FF8412" R4="#FF8412" R5="#C9C9C9"/>
    <TrendingCard img={PizzaMeat} bg="#E6F3F5" R1="#FF8412" R2="#FF8412" R3="#FF8412" R4="#C9C9C9" R5="#C9C9C9"/>
    <TrendingCard img={DonerKebab} bg="#EAEEFA" R1="#FF8412" R2="#FF8412" R3="#FF8412" R4="#FF8412" R5="#FF8412"/>
    <TrendingCard img={SalmonRoll} bg="#F9EEF3" R1="#FF8412" R2="#FF8412" R3="#FF8412" R4="#FF8412" R5="#C9C9C9"/>
    <TrendingCard img={CupcakeChoco} bg="#F0FEEB" R1="#FF8412" R2="#FF8412" R3="#FF8412" R4="#FF8412" R5="#C9C9C9"/>
    <TrendingCard img={DoughnutMilk} bg="#F3F7D9" R1="#FF8412" R2="#FF8412" R3="#FF8412" R4="#FF8412" R5="#FF8412"/>
    <TrendingCard img={DoughnutUnicorn} bg="#F3F7D9" R1="#FF8412" R2="#FF8412" R3="#FF8412" R4="#FF8412" R5="#C9C9C9"/>
    <TrendingCard img={KathiKebab} bg="#EAEEFA" R1="#FF8412" R2="#FF8412" R3="#FF8412" R4="#FF8412" R5="#C9C9C9"/>
    {/* <div className='card-trending-mobile sm:max-h-screen sm:px-10 sm:py-7 lg:card-trending-laptop bg-water-1 lg:flex flex-col lg:flex-wrap px-5 py-5 rounded-lg'>
    <img src={Paperoni} alt="" className='card-image'/>
    <span className='trending-text-title'>Pizza Paperoni</span>
    <span className='trending-text-desc'>Pizza</span>

    
    <div class="flex items-center my-3 ">
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    </div>

    </div> */}

    
    </div>

    <a href="" className='hidden button lg:flex items-center justify-center text-white font-medium text-base leading-[19px]'> ALL Receipt</a>

   </section>
  )
}

