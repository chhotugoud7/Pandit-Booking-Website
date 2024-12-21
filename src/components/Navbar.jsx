import React, {useState} from 'react'


import { assets } from '../assets/assets'
import { NavLink, useNavigate, useNavigation } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)


  return (
    <div className='flex items-center justify-between text-sm py-4 shadow-lg  px-10 ' >
        <img onClick={()=>navigate('/')} className='w-20 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
          
          <NavLink to='/' >
            <li className='py-1'>
              HOME
            </li>
            <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden '/> 
            </NavLink >

            <NavLink to='/Panditji' >
            <li className='py-1'>
              PANDITS
            </li>
            <hr className='border-none outline-none h-0.5 bg-primary  m-auto hidden '/>
            </NavLink>

            <NavLink to='/mantra'>
            <li className='py-1'>
              MANTRA
            </li>
            <hr className='border-none outline-none h-0.5 bg-primary  m-auto hidden '/>
            </NavLink >

            <NavLink to='/about'>
            <li className='py-1'>
              ABOUT
            </li>
            <hr className='border-none outline-none h-0.5 bg-primary  m-auto hidden '/>
            </NavLink >
            
            {/* <NavLink to='/contact'>
            <li className='py-1'>
              CONTACT
            </li>
            <hr className='border-none outline-none h-0.5 bg-primary  m-auto hidden '/>

          </NavLink> */}
        </ul>
        <div className='flex items-center gap-4' >
          {
            token
            ? <div className="flex items-center gap-2 cursor-pointer group relative ">
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile pic" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('MyPoojaBooking')} className='hover:text-black cursor-pointer'>My Booking</p>
                  <p onClick={()=>setToken(false)} className='hover:text-red-600 cursor-pointer'>Log Out</p>
                </div>
              </div>
            </div>
            :<button onClick={()=> navigate('/login')} className='bg-primary text-block px-8 py-3 rounded-full font-bold hidden md:block'>Create Account</button>

          }
        </div>
    </div>
  
  )
}

export default Navbar