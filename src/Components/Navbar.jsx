import React, { useState } from 'react'
import {navLinks} from '../constants'
import { menu, close } from '../assets/images'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-3 justify-between items-center'>
        <h2 className='--font-ephesis z-10 italic font-[500] lg:text-[2rem] text-[1.6rem]'>Vogue Africa</h2> 
        <ul className='list-none md:flex hidden lg:justify-end justify-between px-10 items-center flex-1'>
        {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-inter font-normal cursor-pointer text-[0.9em] lg:text-[1rem] hover:text-blue-500 text-purple-500 lg:mr-12`} >
                <a href={`#${nav.id}`} >{nav.title}</a>
            </li>
          ))}
          
        </ul>
        <form action='/search' method='get'>
          <input type='text' name='search' placeholder='Enter search Item' className='sm:w-[140px] w-[120px] h-auto px-1.5 border-1 rounded-l border-white outline-0'/>
          <button type='submit' className='outline-0 px-1 bg-white border-1 border-white text-purple-500 hover:text-blue-600 font-bold rounded-r cursor-pointer'>Search</button>
        </form>
        
        <div className=' md:hidden flex justify-end items-center bg-sec p-2 w-[35px] h-[35px] rounded-[30%]'>
        <img src={toggle ? close: menu} 
          className='w-[25px] h-[25px] flex justify-end item-end cusor-pointer mr-0'
          onClick={()=> setToggle( prev => !prev)} />

        <div className={`${toggle ? "flex" : "hidden"} bg-white top-25 right-0 absolute mx-2 p-4
        rounded-xl sidebar z-11`}>
        <ul className='list-none flex flex-col justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-sans font-normal cusor-pointer text-[1rem] text-purple-500 mb-4`} >
                <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          
        </ul>
        </div>
        </div>
        
    </nav>
  )
}

export default Navbar


