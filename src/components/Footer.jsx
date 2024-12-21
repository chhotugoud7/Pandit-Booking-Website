import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-40'>
        <div>
            {/* <video 
            class="w-[105%] h-full object-cover -mb-1.25" 
            autoplay 
            muted 
            playsinline 
            loop
        >
            <source src="./src/assets/footer-animaton.mp4" type="video/mp4" />
             </video> */}

            <video width="105%" height="100%" autoPlay muted playsInline loop  >
                <source src="./src/assets/footer-animaton.mp4" type="video/mp4" />
            </video>

        </div>
        <div className="bg-cover bg-center bg-[url('./src/assets/om-backgroung.jpg')] py-20 px-20 flex flex-col
         items-center justify-center gap-20 sm:grid grid-cols-[3fr_1fr_1fr]">
            <div>
                 {/* ---------------left section ------------------- */}
                 <img className='mb-5 w-40' src={assets.logo} alt="" />
                 {/* <p className='text-lg text-white font-bold'>Jai Shree Ram</p> */}

            </div>
            <div>
                 {/* ---------------MIDDLE section ------------------- */}
                <p className='text-xl font-medium mb-5 text-black underline'>Site Links</p>
                <ul className='flex flex-col gap-2 font-bold text-back'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                     {/* ---------------right section ------------------- */}
                    <p className='text-xl font-medium mb-5 text-black underline'>Get In Touch</p>
                     <ul className='flex flex-col gap-2 font-bold text-back' >
                        <li>+91 9988778899</li>
                        <li>panditbooking@gmial.com</li>
                     </ul>
            </div>
        </div>
        <div>
            {/* ------------------copyright text------------------ */}
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Puja Pandit Booking Site - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer