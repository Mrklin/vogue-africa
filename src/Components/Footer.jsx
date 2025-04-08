import React from 'react'
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section className='py-6 px-10 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-4'>
    <div className='relative flex flex-col col-span-1'>
      <h2 className='font-[500] italic text-[2rem] w-full'>Vogue Africa</h2>
      <div className='flex flex-row md:flex-col lg:flex-row w-[200px] justify-between pt-4'> 
      {socialMedia.map((social, index)=> (
        <ul>
          <li ><a href={social.link}> 
          <img  src={social.icon}
            key={social.id}
            alt={social.id}
            className='h-[24px] w-[24px] mb-5'
          /> 
          </a>
          </li>
        </ul>
   
      ))}
      </div>

    </div>

     <div className='flex-[1.5] w-full flex flex-row justify-between col-span-3 flex-wrap'>
            {footerLinks.map((footerlink)=>(
              <div key={footerlink.key} className='flex flex-col flex-wrap ss:my-0 min-w-[140px]'>
                <h4 className={`font-inter font-medium text-[17px] leading-[27px] text-black mb-3`}>
                    {footerlink.title}
                </h4>
                <ul>
                  {footerlink.links.map((link, index)=>(
                    <li key={link.key} className={`font-inter font-normal
                    text-[16px] leading-[24px] text-[#585858] hover:text-secondary
                    cursor-pointer ${index !== link.length-1 ? "mb-4" : "mb-0"}`}>
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

    {/* <div className='w-full flex justify-between'>
      {footerLinks.map((footerlink) => (
        <div key={footerlink.key}>
        <h4 >{footerlink.title}</h4>
          <ul>
            {footerLinks.links.map((li, index) =>(
              <li key={li.key} className={`font-poppins font-normal
                text-[16px] leading-[24px] text-dimWhite hover:text-secondary
                cursor-pointer ${index !== link.length-1 ? "mb-4" : "mb-0"}`}>{li.name} </li>
            ))}
          </ul>
        </div>
      ))}
    </div> */}

    <div></div>

    <div></div>

    </section>
  )
}

export default Footer


