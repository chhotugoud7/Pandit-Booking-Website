import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const MyPoojaBooking = () => {

  const { pandits } = useContext(AppContext)
  


  return (
    <div className="w-full max-w-full sm:max-w-[1200px] mx-auto px-4">
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Booking</p>
      <div>

        {pandits.slice(0,3).map((item,index) => (

          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>

            <div>
              <img className='w-32 bg-primary' src={item.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.name}</p>
              <p>{item.categories}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 25, November, 2024 | 9:30 AM</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end ' >
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointments</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default MyPoojaBooking