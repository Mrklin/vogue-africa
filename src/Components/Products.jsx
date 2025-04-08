import React from 'react'
import PolygonCard from './PolygonCard'
import { gridImages } from '../constants'
import { stars } from '../assets/images'

const Products = () => {
  return (
    <section id='products' className='flex items-center justify-center px-5 md:px-15 lg:px-20 pb-3' >
      <div className='flex flex-col w-full'> 
      <div className='flex flex-col justify-center items-center my-5'>
          <h2 className='font-bold text-[36px] italic mb-4'>Products Highlights</h2>
          <p className='text-[#11031D] lg:text-[20px]'>Lorem ipsum dolor sit amet consectetur. Amet sapien i</p>
      </div>

          <PolygonCard />

        <div className='relative'>

          <img 
            src={stars}
            className='absolute left-0 top-0 w-[80%] lg:w-[50%]'/>

            <div className='relative flex lg:w-[70%] flex-col items-end mt-10 lg:ml-[35%]'>
                <h2 className='italic text-[30px] z-10 lg:text-[36px] font-[400] text-[#11031D]'>New Collection</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-7 my-4'>
                {gridImages.map((image, index) => (
                  <div key={index}
                    className='grid-box h-[140px] w-[285px] lg:w-[305px] flex justify-center hover:opacity-80'>
                    <img 
                      src={image.name}
                      alt={image.name}
                      className='w[100%] h-[100%]'
                    />
                  </div>
                ))}

                </div>
                <button className='rounded-full text-xs border-1 w-[80px] lg:w-[140px] h-[30px] lg:h-[40px] cursor-pointer hover:text-white hover:bg-black'>
                  view more
                </button>
            </div>
        </div>
      </div>
        
    </section>
  )
}

export default Products




























































// import React, { useRef } from 'react'
// import { smallCard } from '../constants';




// const Products = () => {

//   const sliderRef = useRef(null);

//   const scrollLeft = () => {
//     if (sliderRef.current){
//       sliderRef.current.scrollLeft -=140;
//     }
//   };
//   const scrollRight = () => {
//     if(sliderRef.current){
//       if(sliderRef.current){
//         sliderRef.current.scrollLeft +=140;
//       }
//     }
//   };

//   return (
//     <div className='relative max-w-[50%] flex ml-10 flex-1 flex-col'>

//     <h1 className='font-bold text-3xl text-white'>mcsdcmsdkcsdklcmsdlkcmmsdklcmlsdmcklsmdklmsdklcklsdc</h1>

//     <div className=' flex justify-between items-center  w-[400px]'>
//         <button onClick={scrollLeft} className=' left-2 top-1/2 
//         transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer'>
//               &lt;
//         </button>

//         <button onClick={scrollRight} className=' right-2 top-1/2 
//         transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer'>
//               &gt;
//         </button>
//     </div>

//     <div ref={sliderRef} className='flex flex-row space-x-4 overflow-x-scroll scrollbar-hide max-w-max scroll-smooth '>

//       {smallCard.map((card, index) =>(

//         <div className='relative smallCard mr-[2rem] min-w-[301px] h-[300px]' key={index + 1}>
//         <img 
//           src={card.name}
//           alt={`Slide Image-${index}`}
//           className='opacity-100 hover:opacity-75 object-cover w-[100%] h-[100%] transition-all duration-[500ms] ease-in-out'
//         />
//         </div>
//       ))} 
      
//     </div>

    

    
    
//     </div>
//   )
// }

// export default Products