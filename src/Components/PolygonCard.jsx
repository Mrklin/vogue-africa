import React,{useState} from 'react'
import { polyCard } from '../constants'
import { carouselLeft, carouselRight } from '../assets/images'

const PolygonCard = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? polyCard.length - 1 : prevIndex -1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === polyCard.length - 1 ? 0 : prevIndex + 1 ));
      };
    
      const visibleCards =[];
      for (let i = -1; i <= 1; i++){
        let index = (currentIndex + i + polyCard.length) % polyCard.length;
        visibleCards.push({index, image:polyCard[index]});
      }

  return (
    <div className=' relative flex justify-center items-center  overflow-hidden '>
    <div className='flex  justify-center items-center md:w-full'>
    <div className='flex justify-center transition-transform duration-500 ease-in-out'>
      {visibleCards.map(({image, index}) => (

          <div key={index}
              className= {`flex shrink-0 w-1/4 min-w-[180px] md:min-w-[200px] h-[180px] lg:w-[260px] lg:h-[260px] ml-5 transition-transform duration-300 ease-in-out
            ${index === currentIndex ? 'scale-100': 'scale-75'}`}> 
          <img  
            src={image.name}
            className='w-full hover:opacity-80'
            alt={`Carousel Image ${image}`}
          />
         </div>

      ))}


      </div>
    </div>
      

      <button onClick={handlePrev} className='absolute hover:opacity-50 cursor-pointer top-1/3 left-0 transform translate-y-1/2 
        bg-gray-800 text-white p-2 rounded-full w-8 lg:w-15'>
            <img src={carouselLeft}  />
        </button>

        <button onClick={handleNext} className='absolute hover:opacity-50 cursor-pointer top-1/3 right-0 transform translate-y-1/2 
        bg-gray-800 text-white p-2 rounded-full w-8 lg:w-15'>
            <img src={carouselRight}  />
        </button>


    </div>
  )
}

// w-[60%] flex items-center justify-center 

// flex flex-row space-x-4 overflow-x-scroll scrollbar-hide max-w-max scroll-smooth
// min-w-[270px] h-[280px]

export default PolygonCard