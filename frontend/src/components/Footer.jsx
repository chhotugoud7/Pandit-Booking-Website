import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className=' mt-10 md:mt-40'>
            <div>


                <video width="105%" height="100%" autoPlay muted playsInline loop disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"  >
                    <source src="./src/assets/footer-animaton.mp4" type="video/mp4" />
                </video>

            </div>
            <div className="bg-cover bg-center bg-[url('./src/assets/om-backgroung.jpg')] py-5 md:py-20 px-5 md:px-20 flex flex-col
         items-center justify-center gap-10 md:gap-20 sm:grid grid-cols-[3fr_1fr_1fr]">
                <div>
                    {/* ---------------left section ------------------- */}
                    <img className='mb-5 w-20 md:w-40' src={assets.logo} alt="" />
                    {/* <p className='text-lg text-white font-bold'>Jai Shree Ram</p> */}

                </div>
                <div>
                    {/* ---------------MIDDLE section ------------------- */}
                    <p className='text-xl font-medium mb-5 text-black underline text-center'>Site Links</p>
                    <ul className='flex flex-col gap-2 font-bold text-back justify-center items-center'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    {/* ---------------right section ------------------- */}
                    <p className='text-xl font-medium mb-5 text-black underline text-center' >Get In Touch</p>
                    <ul className='flex flex-col gap-2 font-bold text-back' >
                        <li className='text-center'>+91 9988778899</li>
                        <li className='text-center'>panditbooking@gmial.com</li>
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