import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'

const PoojaBooking = () => {

  const { panditId } = useParams()
  const{ pandits } = useContext(AppContext)

  const [PanditInfo, setPanditInfo] = useState(null)
  const fetchPanditInfo = async () => {
    const panditInfo = pandits.find(pandit => pandit._id === panditId)
    setPanditInfo(panditInfo)
    console.log(panditInfo);
  }

  useEffect(()=>{
    fetchPanditInfo()
  },[pandits,panditId] )

  return (
    <div>
        
    </div>
  )
}

export default PoojaBooking