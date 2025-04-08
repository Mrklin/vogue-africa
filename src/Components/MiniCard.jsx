import React from 'react'

const MiniCard = ({img, title, amount, rating }) => {
  return (
    <div className='flex justify-between items-end bg-amber-50 z-10 p-3 w-[300px] h-[90px]'>
        <div className='flex w-1/3'><img  src={img} alt={img} className='h-[100%] object-fit'/></div>
        <div className= ' w-auto'>
          <p className='font-semibold '>{title}</p>
          <p className='font-semibold'>{amount}</p>
          <p>{rating}</p>
        </div>
        <div className='h-7 w-7 rounded-full cursor-pointer border-2 flex justify-center items-end text-2xl 
        font-semibold hover:bg-purple-500 hover:border-0 hover:text-white'>+</div>
    </div>
  )
}

export default MiniCard