import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='py-2'>

        <div class="bg-cover bg-center bg-[url('./src/assets/om-backgroung.jpg')] py-40 flex flex-wrap items-center justify-center gap-80">
            <div className=''>
                <img className=' w-60 ' src="./src/assets/om.png" alt="" />
            </div>
            <div className=' '>
                <p className='text-3xl pb-5 md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight animate-zoom-in-out' >
                    Book A Puja Now</p>

                <a href="#categories" className='flex items-center justify-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>

                Book Now < img className='w-3' src={assets.arrow_icon} alt=" "/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header