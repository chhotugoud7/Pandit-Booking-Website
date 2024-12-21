
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import pandit1 from './pandit1.png'
import pandit2 from './pandit2.png'
import pandit3 from './pandit3.png'
import pandit4 from './pandit4.png'
import pandit5 from './pandit5.png'
import pandit6 from './pandit6.jpg'
import FestivePujas from './FestivePujas.jpg'
import satyanarayan from './satyanarayan.jpg'
import GrihasthPujas from './Grihasth (Household) Pujas.jpg'
import VivahSnaskars from './VivahSnaskars.jpg'
import ProsperityPujas from './ProsperityPujas.jpg'
import pindDan from './pindDan.jpg'


export const assets = {
    
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const categoriesData = [
    {
        categories: 'Prosperity Pujas',
        image: satyanarayan
    },
    {
        categories: 'Grihasth Pujas',
        image: GrihasthPujas
    },
    {
        categories: 'Vivah Sanskars',
        image: VivahSnaskars
    },
    {
        categories: 'Festive Pujas',
        image: ProsperityPujas
    },
    {
        categories: 'Astrological Services',
        image: FestivePujas
    },

    {
        categories: 'Ancestral Pujas',
        image: pindDan
    },

]

export const pandits = [
    
        {
            _id: 'P1',
            name: 'Pandit Rajesh Sharma',
            image: pandit1,
            categories: 'Prosperity Pujas',
            experience: '10 Years',
            about: 'Pandit Rajesh Sharma is well-versed in performing Satyanarayan Katha and Dhanvantri Puja, helping families achieve prosperity and health. He is highly regarded for his deep understanding of Vedic rituals.',
            fees: 5000,
            address: {
                line1: '17th Cross, Karol Bagh',
                line2: 'New Delhi, India'
            }
        },
        {
            _id: 'P2',
            name: 'Pandit Mohan Tiwari',
            image: pandit2,
            categories: 'Grihasth Pujas',
            experience: '8 Years',
            about: 'Pandit Mohan Tiwari specializes in Griha Pravesh Puja and Vastu Shanti rituals. His expertise ensures harmonious beginnings for households and businesses.',
            fees: 4500,
            address: {
                line1: '27th Lane, Baner Road',
                line2: 'Pune, Maharashtra'
            }
        },
        {
            _id: 'P3',
            name: 'Pandit Suresh Vyas',
            image: pandit3,
            categories: 'Vivah Sanskars',
            experience: '12 Years',
            about: 'Pandit Suresh Vyas is renowned for conducting traditional Hindu weddings and engagement ceremonies. His attention to detail makes every ritual spiritually fulfilling.',
            fees: 6000,
            address: {
                line1: '37th Cross, MG Road',
                line2: 'Bengaluru, Karnataka'
            }
        },
        {
            _id: 'P4',
            name: 'Pandit Anil Shukla',
            image: pandit4,
            categories: 'Astrological Services',
            experience: '15 Years',
            about: 'Pandit Anil Shukla is an expert in Kundli matching and Muhurta calculations. His astrological insights are highly sought after for major life events.',
            fees: 4000,
            address: {
                line1: '47th Cross, Park Street',
                line2: 'Kolkata, West Bengal'
            }
        },
        {
            _id: 'P5',
            name: 'Pandit Ravi Chaturvedi',
            image: pandit5,
            categories: 'Ancestral Pujas',
            experience: '18 Years',
            about: 'Pandit Ravi Chaturvedi performs Shraddha and Pind Daan ceremonies with utmost devotion. He helps families honor their ancestors in the most traditional manner.',
            fees: 5500,
            address: {
                line1: '57th Cross, Civil Lines',
                line2: 'Varanasi, Uttar Pradesh'
            }
        },
        {
            _id: 'P6',
            name: 'Pandit Deepak Pandey',
            image: pandit6,
            categories: 'Festive Pujas',
            experience: '1 Years',
            about: 'Pandit Vishnu Joshi is known for performing grand festive ceremonies like Diwali Laxmi Puja and Navratri Durga Puja with precision and devotion.',
            fees: 5000,
            address: {
                line1: '67th Cross, Rajajinagar',
                line2: 'Jaipur, Rajasthan'
            }
        }
    
]