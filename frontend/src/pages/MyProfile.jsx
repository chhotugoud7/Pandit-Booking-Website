import React, { useState } from 'react'
import { assets } from '../assets/assets';


const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Raman Prajapati",
    image: assets.profile_pic,
    email: 'RamanP@gmail.com',
    phone: '+91 9999999999',
    address: {
      line1: "Delhi",
      line2: "DElhi, India"
    },
    gender: 'male',
    dob: '12-12-2000'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (

    // <div className='max-w-lg flex flex-col gap-2 text-sm '>
    //   <img className='w-36 rounded' src={userData.image} alt="" />

    //   {
    //     isEdit
    //       ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
    //       : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
    //   }


    //   <hr className='bg-zinc-400 h-[1px] border-none'/>

    //   <div>
    //     <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
    //     <div className='grid gird-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
    //       <p className='font-medium'>Email Id:</p>
    //       <p className='text-blue-500'>{userData.email}</p>
    //       <p className='font-medium'>Phone:</p>
    //       {
    //         isEdit
    //           ? <input className='bg-gray-100 max-w-52 ' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
    //           : <p className='text-blue-400'>{userData.phone}</p>
    //       }
    //       <p className='font-medium'>Address:</p>
    //       {
    //         isEdit
    //           ? <p>
    //             <input className='bg-gray-50 ' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
    //             <br />
    //             <input className='bg-gray-50 ' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
    //           </p>
    //           : <p className='text-gray-500'>
    //             {userData.address.line1}
    //             <br />
    //             {userData.address.line2}
    //           </p>
    //       }
    //     </div>
    //     <div>
    //       <p className='text-neutral-500 underline mt-3' >BASIC INFORMATION</p>
    //       <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700'>
    //         <p className='font-medium'>Gender:</p>
    //         {
    //           isEdit
    //             ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
    //               <option value="Male">Male</option>
    //               <option value="Female">Female</option>
    //             </select>
    //             : <p className='text-gray-400'>{userData.gender}</p>
    //         }
    //         <p className='font-medium'>Birthday</p>
    //         {
    //           isEdit 
    //           ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
    //           : <p className='text-gray-400'>{userData.dob}</p>
    //         }
    //       </div>
    //     </div>
    //     <div className='mt-10'>
    //       {
    //         isEdit
    //         ? <button className='border border-primary px-8 py-2 rounded-full hover:text-white hover:bg-primary transition-all ' onClick={()=>setIsEdit(false)}>Save Information</button>
    //         : <button className='border border-primary px-8 py-2 rounded-full hover:text-white hover:bg-primary transition-all ' onClick={()=>setIsEdit(true)}>Edit</button>
    //       }
    //     </div>
    //   </div>

    // </div>




    <div className="flex items-center justify-center min-h-screen px-2 sm:px-4 bg-gray-100">
      <div className="w-[700px] max-w-full bg-white shadow-lg rounded-lg p-2 sm:p-6 flex flex-col gap-4 text-sm">
        <img
          className="w-36 h-36 rounded-full mx-auto border-4 border-gray-200"
          src={userData.image}
          alt="Profile"
        />

        {isEdit ? (
          <input
            className="bg-gray-50 text-3xl font-medium w-full border border-gray-300 rounded-md px-4 py-2"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-3xl text-center text-gray-800">
            {userData.name}
          </p>
        )}

        <hr className="bg-gray-300 h-[1px] border-none" />

        <div className="bg-gray-50 rounded-md p-4 shadow">
          <p className="text-neutral-600 underline text-lg font-semibold">
            CONTACT INFORMATION
          </p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-700">
            <p className="font-medium">Email Id:</p>
            <p className="text-blue-500">{userData.email}</p>
            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 w-full border border-gray-300 rounded-md px-2 py-1"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-400">{userData.phone}</p>
            )}
            <p className="font-medium">Address:</p>
            {isEdit ? (
              <div className="space-y-2">
                <input
                  className="bg-gray-100 w-full border border-gray-300 rounded-md px-2 py-1"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={userData.address.line1}
                  type="text"
                />
                <input
                  className="bg-gray-100 w-full border border-gray-300 rounded-md px-2 py-1"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address.line2}
                  type="text"
                />
              </div>
            ) : (
              <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        <div className="bg-gray-50 rounded-md p-4 shadow">
          <p className="text-neutral-600 underline text-lg font-semibold">
            BASIC INFORMATION
          </p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-gray-700 mt-3">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-2 py-1"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400">{userData.gender}</p>
            )}
            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-2 py-1"
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              />
            ) : (
              <p className="text-gray-400">{userData.dob}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          {isEdit ? (
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition-all"
              onClick={() => setIsEdit(false)}
            >
              Save Information
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-8 sm:px-16 py-2 rounded-full shadow hover:bg-blue-700 transition-all"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>

  )
}

export default MyProfile