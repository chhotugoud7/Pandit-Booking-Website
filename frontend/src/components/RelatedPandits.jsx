import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedPandits = ({categories, panditId}) => {

    const {pandits} = useContext(AppContext)
    const navigate = useNavigate()

    const [relPandits, setRelPandits] = useState([])

    useEffect(()=>{
        if(pandits.length > 0 && categories){
            const panditsData = pandits.filter((pandit)=> pandit.categories === categories && pandit._id !== panditId)
            setRelPandits(panditsData)
        }
        

    },[pandits,categories,panditId])


  return (
    <div className='flex flex-col items-center gap-4 md:gap-10 my-10 md:my-20 px-2 text-gray-900 md:mx-10 sd:px-10'>
    <h1 className='text-3xl font-medium'>Related Pandit Ji</h1>
    <p className='sm:w-1/3 text-center text-sm'>Simply browse through the Related Top Pandit ji list to get best pandit ji for this category pujas.</p>
<div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 px-3 sm:px-0'>
    {relPandits.slice(0, 3).map((item, index) => (
        <div 
            onClick={() => {navigate(`/PoojaBooking/${item._id}`); scrollTo(0,0)}} 
            className='border-black border-2 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all duration-500 group' 
            key={index}
          
        >
            <div className='relative w-full h-45 overflow-hidden'>
                <img 

                    className='w-full h-80 bg-orange-200 object-cover object-top transition-transform duration-300 group-hover:scale-105 group-hover:animation-zoom-in-out' 
                    src={item.image} 
                    alt={item.name} 
                />
            </div>
            <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                    <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.categories}</p>
            </div>
        </div>
    ))}
</div>
<button onClick={()=>{ navigate ('/Panditji'); scrollTo(0,0) }} className='flex items-center justify-center gap-2 bg-orange-400 px-10 md:px-40 py-3 rounded-full text-white font-bold text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>More</button>
</div>

  )
}

export default RelatedPandits