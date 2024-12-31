import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import RelatedPandits from '../components/RelatedPandits'

const PoojaBooking = () => {

  const { panditId } = useParams()
  const{ pandits, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [panditInfo, setPanditInfo] = useState(null)
  const [panditSlots, setPanditSlots ] = useState([])
  const [slotIndex, setSlotIndex ] = useState(0)
  const [slotTime, setSlotTime ] = useState('')



  const fetchPanditInfo = async () => {
    const panditInfo = pandits.find(pandit => pandit._id === panditId)
    setPanditInfo(panditInfo)
    // console.log(panditInfo);
  }

  const getAvailableSlots =async () => {
    setPanditSlots([])

    //getting current date
    let today = new Date()


    for (let i=0; i<7; i++){
      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      //setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      //setting hours
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
    
      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots =[]

      while (currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})
        

        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // Increment current time by 30 minutes 
        currentDate.setMinutes(currentDate.getMinutes() + 30)


      }

      setPanditSlots(prev => ([...prev,timeSlots]))
    }


  }

  useEffect(()=>{
    fetchPanditInfo()
  },[pandits,panditId] )


  useEffect(()=>{
    getAvailableSlots()
  },[panditInfo])

  useEffect(()=>{
    console.log(panditSlots)
  },[panditSlots])

  return panditInfo && (
    <div className=' mx-2 md:mx-10 mt-2'>
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

        {/* -------------Booking slots------------- */}

        <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
          <p>Booking Slots</p>
          <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
            {
              panditSlots.length && panditSlots.map((item,index)=>(
                <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white border border-secondary' : 'border border-primary '}`}  key={index}>
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))
            }
          </div>

          <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
            {panditSlots.length && panditSlots[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white border border-secondary' : 'border border-primary'}`}  key={index}>
                {item.time.toLowerCase()}
              </p>
            ))}
          </div>

            <button className='bg-primary text-white text-sm fonnt-light px-14 py-3 rounded-full my-6'>Book An Pooja</button>
        </div>

        {/* --------------Listing Related Pandits------------ */}
        <RelatedPandits panditId={panditId} categories={panditInfo.categories} />
        
    </div>
  )
}

export default PoojaBooking