import React from 'react'
import { categoriesData } from '../assets/assets'
import { Link } from 'react-router-dom'

const CategoriesMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='categories'>
        <h1 className='text-3xl font-medium'>Find Pandit For Any Puja By Categories</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our categoris list in which  you can find the proper puja pandit</p>



        <div className="flex flex-wrap justify-center gap-10 py-10 w-full overflow-scroll">
            {categoriesData.map((item, index) => (
            <Link
                onClick={()=>scrollTo(0,0)}
                key={index}
                to={`Panditji/${item.categories}`}
                className="relative group w-[30%] sm:w-[25%] md:w-[22%] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                <div className="overflow-hidden">
                    <img
                    className="w-full h-80 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    src={item.image}
                    alt={item.categories}
                    />
                </div>
                <p className="text-center py-2 text-sm font-medium transition-all duration-300 group-hover:text-lg">
                    {item.categories}
                </p>
                </Link>
                ))}
        </div>


        {/* <div className='flex flex-col items-center sm:justify-center gap-20 w-full overflow-scroll '>
            {categoriesData.map((item,index)=>(
                <Link key={index} to={`Panditji/${item.categories}`}>
                    <img className='w-70 mb-20' src={item.image} alt="" />
                    <p>{item.categories}</p>
                </Link>
            ))}
        </div> */}
    </div>
  )
}

export default CategoriesMenu