import React from 'react'

export default function CategoryCard (props)  {

  return (
    <>
    
        <div className='card-category-mobile gap-5 mt-5 w-full lg:w-1/5 snap-center flex-shrink-0 rounded-lg lg:hover:h-[200px]' style={{backgroundColor: `${props.bg}`}}>
        <img src={props.img} alt="" />
        <h2 className='card-title-category-mobile'>{props.title}</h2>
        <span className='card-count-category-mobile'> {props.count}</span>
            
        </div>
    </>
  )
}

