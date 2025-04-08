import React from 'react'
import { Model, MensShort, FemaleShorts, stars } from '../assets/images'
import MiniCard from './MiniCard'
import Button from './Button'
import { smallCard } from '../constants'
import { useRef } from 'react';


const Hero = () => {

    const sliderRef = useRef(null);
  
    const scrollLeft = () => {
      if (sliderRef.current){
        sliderRef.current.scrollLeft -=140;
      }
    };
    const scrollRight = () => {
      if(sliderRef.current){
        if(sliderRef.current){
          sliderRef.current.scrollLeft +=140;
        }
      }
    };


  return (
    <section id='home' className='w-full flex justify-center relative pb-0 lg:flex-row flex-col'>
      <div className='flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-bg top-0 pt-10 left-0 pl-0 lg:pl-10'>
      
        <img 
          src={stars}
          className='absolute left-0 top-0 w-[80%] lg:w-[43%]'
        />
      
        <MiniCard 
        img= {MensShort}
          title="Mens Shorts"
          amount="₦2,499.00"
          rating="⭐⭐⭐⭐"
        />
        <div className='flex items-center flex-col '>
        <p className='mt-12 lg:mt-[18rem] z-10 p-6 md:p-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam <br/> 
          numquam aut quo sint molestias hic, libero iste maiores reiciendis modi <br/> perferendis 
           quae totam sunt et aut quo sint molestias hic, libero iste maiores reiciendis?</p>


            <div className='lg:mt-[3.8rem] mt-[4rem] lg:w-full z-10 mb-4 lg:mb-0'>
              <Button />
            </div>

        </div>
         
       </div>
            <div className='z-10 flex justify-center relative lg:absolute top-0 lg:top-55'>
              <h1 className='text-purple-500 font-[400] italic text-center md:text-[128px] text-6xl'>New Fa<span className='text-purple-600 lg:text-white'>shion</span></h1>
            </div>
          
          
          <div className='flex justify-center items-center lg:absolute relative mt-0 w-full lg:w-[490px]'>
          <img src={Model} alt='model_image' className='object-contain w-[50%] lg:w-[100%] ' />
          </div>
          {/* <img src={Model} alt='model_image' className='flex justify-center items-center absolute object-contain
        w-[37%] mt-0' /> */}
         
        

        <div className='flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-sec top-0 right-0'>

        <div className='mt-10 lg:mt-[330px] lg:ml-40 flex sm:justify-center ml-0'>
        <MiniCard 
          img= {FemaleShorts}
          title="Female Shorts"
          amount="₦4,499.00"
          rating="⭐⭐⭐⭐"/>
        </div>

        <div className=' max-w-[45%] md:max-w-[50%] lg:max-w-[70%] flex justify-center lg:ml-50 flex-1 flex-col mt-20 right-0'>


        <div className=' flex justify-between items-center ml-0 md:ml-40 w-[100px]'>
        <button onClick={scrollLeft} className=' left-2 top-1/2 
        transform -translate-y-1/2 bg-purple-600 border-2 cursor-pointer text-white p-2 rounded-full
        drop-shadow-[0_0_20px_rgba(255,255,255,1)] hover:text-purple-600 hover:bg-white font-bold flex items-center pr-2 w-8 h-8'>
              &lt;
        </button>

        <button onClick={scrollRight} className=' right-2 top-1/2 
        transform -translate-y-1/2 bg-purple-600 border-2 cursor-pointer text-white p-2 rounded-full
        drop-shadow-[0_0_20px_rgba(255,255,255,1)] hover:text-purple-600 hover:bg-white font-bold flex items-center pl-2 w-8 h-8'>
              &gt;
        </button>
      </div>
      
        <div className='flex flex-row space-x-4 overflow-x-scroll scrollbar-hide max-w-max scroll-smooth' ref={sliderRef}>
          {smallCard.map((card, index) =>(
            <div className='relative smallCard mr-[2rem] min-w-[141px]' key={`gallery_images-${index + 1}`}>
                <img src={card.name} className='opacity-100 hover:opacity-75 w-[100%] h-[100%] transition-all duration-[500ms] ease-in-out' alt = 'small card'/>
            </div>
          ))}
        </div>

        </div>

       </div>

    </section>
    );
}

export default Hero;




// Export default Carousel;





// Import React from ‘react’;
// Import Carousel from ‘./components/Carousel’;

// Function App() {
//   Const images = [
//     ‘https://via.placeholder.com/800x400?text=Slide+1’,
//     ‘https://via.placeholder.com/800x400?text=Slide+2’,
//     ‘https://via.placeholder.com/800x400?text=Slide+3’,
//     ‘https://via.placeholder.com/800x400?text=Slide+4’,
//   ];

//   Return (
//     <div className=”App”>
//       <Carousel images={images} />
//     </div>
//   );
// }

// Export default App;

/* New Fashion */

// position: absolute;
// width: 909px;
// height: 185px;
// left: 163px;
// top: 243px;

// font-family: 'Lucida Calligraphy';
// font-style: italic;
// font-weight: 400;
// font-size: 128px;
// line-height: 174px;
// text-align: center;

// color: #D0A2F7;

