import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'



const TopPandit = () => {

    const navigate = useNavigate()
    const { pandits } = useContext(AppContext)
  return (

    <div className='flex flex-col items-center gap-10 my-20 px-40 text-gray-900 md:mx-10 sd:px-10'>
        <h1 className='text-3xl font-medium'>Top Pandit Ji</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through the top pandit ji list to get best pandit ji for pujas.</p>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 px-3 sm:px-0'>
        {pandits.slice(0, 9).map((item, index) => (
            <div 
                onClick={() => navigate(`/PoojaBooking/${item._id}`)} 
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
    <button onClick={()=>{ navigate ('/Panditji'); scrollTo(0,0) }} className='flex items-center justify-center gap-2 bg-orange-400 px-40 py-3 rounded-full text-white font-bold text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>More</button>
    </div>



    // <div className='flex flex-col items-center gap-10 my-20  text-gray-900 md:mx-10'>
    //     <h1 className='text-3xl font-medium'>Top Pandit Ji</h1>
    //     <p className='sm:w-1/3 text-center text-sm'>Simply browse through the top pandit ji list to get best pandit ji for pujas.</p>
    //     <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
    //         {pandits.slice(0,9).map((item,index)=>(
    //             <div onClick={()=>navigate(`/PoojaBooking/${item._id}`)} className='border-black border-2 rounded-xl overflow-hidden cursor-pointer hover:translate-[-10px] transition-all duration-500 ' key={index}>
    //                 <img className='bg-orange-300' src={item.image} alt="" />
    //                 <div className='p-4'>
    //                     <div className='flex items-center gap-2 text-sm text-center text-green-500'>
    //                         <p className='w-2 h-2 bg-green-500 rounded-full'></p>
    //                         <p>Available</p>
    //                     </div>
    //                     <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
    //                     <p className='text-gray-600 text-sm'>{item.categories}</p>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    //     <button className='bg-orange-300 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
    // </div>
  )
}

export default TopPandit