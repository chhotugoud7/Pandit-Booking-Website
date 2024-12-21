import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Panditji from './pages/Panditji'
import Login from './pages/Login'
import About from './pages/About'
import Mantra from './pages/mantra'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyPoojaBooking from './pages/MyPoojaBooking'
import PoojaBooking from './pages/PoojaBooking'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' sm:max-[10%]'>
      
      <Navbar />
    <Routes>
        <Route path='/' element={<Home />}   />
        <Route path='/Panditji' element={<Panditji />} />
        <Route path='/Panditji/:categories' element={<Panditji />} />
           

        <Route path='/mantra' element={<Mantra/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/MyPoojaBooking' element={<MyPoojaBooking />} />
        <Route path='/PoojaBooking/:panditId' element={<PoojaBooking />} />
    </Routes>
      <Footer/>
    </div>
  )
}

export default App