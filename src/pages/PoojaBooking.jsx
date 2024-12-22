import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'

const PoojaBooking = () => {

  const { panditId } = useParams()
  const{ pandits, currencySymbol } = useContext(AppContext)

  const [panditInfo, setPanditInfo] = useState(null)
  const fetchPanditInfo = async () => {
    const panditInfo = pandits.find(pandit => pandit._id === panditId)
    setPanditInfo(panditInfo)
    console.log(panditInfo);
  }

  useEffect(()=>{
    fetchPanditInfo()
  },[pandits,panditId] )

  return panditInfo && (
    <div className='mx-10 mt-2'>
        {/* ---------------Pandit Details-------------------- */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <div>
            <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={panditInfo.image} alt="" />
          </div>

          <div className='flex-1 border-orange-400 border rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            {/* ----------------pandit info: name, experience etc.------------ */}
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              {panditInfo.name} 
              <img className='w-5 ' src={assets.verified_icon} alt="" />
            </p>
            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>
                {panditInfo.categories}
              </p>
              <button className='py-0 px-2 border text-xs rounded-full'>{panditInfo.experience}</button>

            </div>

            {/* --------------Pandit About----------------- */}
            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className='text-sm text-gray-800 max-w-[700px] mt-1'>
                {panditInfo.about}
              </p>
            </div>
            <p>
              Booking Fee: <span>{currencySymbol}{panditInfo.fees}</span>
            </p>


          </div>
        </div>
        
    </div>
  )
}

export default PoojaBooking