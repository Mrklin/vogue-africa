import React  from 'react'
import { sponsors } from '../constants';


const Sponsors = () => {

 

  return (
    <div className ='bg-[#0A0909] w-full h-auto py-6 px-20 ' id='sponsors'> 
    <div className='relative flex fex-1 flex-col lg:flex-row flex-wrap justify-center items-center'>
          {sponsors.map((image, index) => (
            <div key={`sponsor-images-${index + 1}`} className='relative flex flex-1 justify-center items-center
             w-full h-[80px] py-6'>            
            <img 
              src={image.name}
              alt={`Sponsors Image ${index}`}
              className='relative w-[30%] object-contain lg:ml-10'
            />
             </div>
            
          ))}
    </div>
    </div>
  );
};

export default Sponsors