import React,{useState} from 'react'
import { PolygonFine, polyStar } from '../assets/images'
import { arrowDown, arrowUp } from '../assets/images'
import { chooseUS } from '../constants'

const ChooseUs = () => {
    const [toggle, setToggle] = useState(false);

    const handlerId = (id) => {
       setToggle((prev) => (prev === id ? null : id));
    }

  return (
    <section id='choose-us' className='bg-[#312B2B] px-5 md:px-15 lg:px-20 w-full py-5'>

        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-[#F1EAFF] italic font-[400] text-[36px]'>Why Choose Us</h1>
            <div className='relative flex justify-between w-full md:flex-row flex-col sm:items-center items-start mt-10'>
                <div className='relative md:w-1/2 w-full'>
                {chooseUS.map((choose, index) => (
                    <div className='relative flex justify-between items-center  md:pr-15 flex-col'>
                
                    <div className=' relative flex justify-between items-center w-full mb-2'>
                         <p className='text-white font-inter font-[500] lg:text-[18px] text-[16px]'>{choose.title}</p>
                        <img src={toggle === choose.id ? arrowUp: arrowDown} className='w-[15px] h-[15px] flex justify-end item-end cursor-pointer mr-0'
                              onClick={()=> handlerId(choose.id)}
                              key={index} 
                              id={choose.id}
                              />
                     </div> 
                     <span className={`${toggle === choose.id ? "flex" : "hidden"}`} >
                        <p className='text-white font-light lg:text-[18px] text-[14px]'>{choose.text}</p>
                    </span>
                    <div className='w-full pb-3 border-b-2 border-[#F1EAFF]'/>
                </div> 
                ))}
                
                    
                </div>
                <div className='relative w-full md:w-1/2 flex justify-end items-start mt-10 md:mt-0'>
                    <img 
                        src={polyStar}
                        className='absolute top-0 right-0 w-[80%]'
                    />
                    <img src={PolygonFine} 
                        className='lg:h-[65%] lg:w-[65%] '
                    />
                </div>

            </div>
        </div>

    </section>
  )
}

export default ChooseUs

