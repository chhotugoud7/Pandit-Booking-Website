import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { categoriesData } from '../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'



const Panditji = () => {

  
  
const { categories } = useParams();
const [filterpand, setfilterpand] = useState([]);
const navigate = useNavigate()

const { pandits } = useContext(AppContext)


const applyFilter = () => {
    if(categories) {
      setfilterpand(pandits.filter(pandit => pandit.categories === categories)); // Correct filter function
    } else{
      setfilterpand(pandits)
    }
  }
  useEffect(()=>{
    applyFilter()
  },[pandits,categories])

  return (
    <div className='p-5'>

        <p className='text-orange-400 text-center text-lg font-medium bg-white p-3   hover:text-black hover:scale-105'>Browse through the best pandits accross website</p>
        <div className='flex flex-col gap-5 sm:flex-row items-start mt-5 '>
            <div className='flex flex-col gap-4 text-sm text-black m-2 w-[40vw]'>




        <div className='flex flex-col gap-4 text-sm text-black m-2 w-[40vw]'>
          {/* Categories list */}
          {['Prosperity Pujas', 'Grihasth Pujas', 'Vivah Sanskars', 'Festive Pujas', 'Astrological Services', 'Ancestral Pujas'].map(category => (
            <p
              key={category}
              onClick={() => navigate(`/Panditji/${category}`)} // Dynamic navigation to selected category
              className={`cursor-pointer w-full sm:w-auto pl-3 py-3 pr-16 border border-gray-300 text-center text-gray-600 text-lg font-medium bg-white p-3 rounded-lg shadow-md transition-all hover:bg-primary hover:text-white hover:scale-105 ${categories === category ? 'bg-indigo-100 text-black' : ''}`}
            >
              {category}
            </p>
          ))}
        </div>

            <p 
    onClick={() => {
      if ( categories === 'Prosperity Pujas') {
        navigate('/Login');
      } else {
        navigate('/Panditji/');
      }
    }}
    className={` cursor-pointer    `}
  >
    Prosperity Pujas
  </p>
  


            <p onClick={()=> categories === 'Prosperity Pujas' ? navigate('/Panditji') : navigate('/Panditji/')} className={`w-[100vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 transition-all cursor-pointer text-center text-gray-600 text-lg font-medium bg-white p-3 rounded-lg shadow-md hover:bg-primary hover:text-white hover:scale-105 ${categories === "Prosperity Pujas" ? "bg-indigo-100 text-black " : ""}`}>Prosperity Pujas</p>
            <p onClick={()=> categories === 'Grihasth Pujas' ? navigate('/Panditji') : navigate('/Panditji/')} className={`w-[100vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 text-center text-gray-600 text-lg font-medium bg-white p-3 rounded-lg shadow-md transition-all cursor-pointer hover:bg-primary hover:text-white hover:scale-105 ${categories === "Grihasth Pujas" ? "bg-indigo-100 text-black " : ""}`}>Grihasth Pujas</p>
            <p onClick={()=> categories === 'Vivah Sanskars' ? navigate('/Panditji') : navigate('/Panditji/')} className={`w-[100vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 text-center text-gray-600 text-lg font-medium bg-white p-3 rounded-lg shadow-md transition-all cursor-pointer hover:bg-primary hover:text-white hover:scale-105 ${categories === "Vivah Sanskars" ? "bg-indigo-100 text-black " : ""}`}>Vivah Sanskars</p>
            <p onClick={()=> categories === 'Festive Pujas' ? navigate('/Panditji') : navigate('/Panditji/')} className={`w-[100vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 text-center text-gray-600 text-lg font-medium bg-white p-3 rounded-lg shadow-md transition-all cursor-pointer hover:bg-primary hover:text-white hover:scale-105 ${categories === "Festive Pujas" ? "bg-indigo-100 text-black " : ""}`}>Festive Pujas</p>
            <p onClick={()=> categories === 'Astrological Services' ? navigate('/Panditji') : navigate('/Panditji/')} className={`w-[100vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 text-center text-gray-600 text-lg font-medium bg-white p-3 rounded-lg shadow-md transition-all cursor-pointer hover:bg-primary hover:text-white hover:scale-105 ${categories === "Astrological Services" ? "bg-indigo-100 text-black " : ""}`}>Astrological Services</p>
            <p onClick={()=> categories === 'Ancestral Pujas' ? navigate('/Panditji') : navigate('/Panditji/')} className={`w-[100vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 text-center text-gray-600 text-lg font-medium bg-white p-3 rounded-lg shadow-md transition-all cursor-pointer hover:bg-primary hover:text-white hover:scale-105 ${categories === "Ancestral Pujas" ? "bg-indigo-100 text-black " : ""}`}>Ancestral Pujas</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterpand.map((item, index) => (
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
                  )
                  )
                }





          </div>
        </div>
       
    </div>
  )
}

export default Panditji