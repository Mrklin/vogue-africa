import React from 'react'
import { Navbar, Hero, Sponsors, Products, Footer, ChooseUs } from './Components'



const App= () => {
  return (
    <div className='bg-bg w-full overflow-visible '>
      <div className='bg-bg sm:px-16 px-6 flex justify-center items-center z-20 top-0 sticky'>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>
      <Hero />
      <Sponsors/>
      <Products />
      <ChooseUs />
      <Footer />
    </div>
  )
}

export default App

