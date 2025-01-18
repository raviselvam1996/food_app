import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoIosSearch } from 'react-icons/io'

export const TopNavBar = () => {
  return (
         <div className="px-4 py-2 flex justify-between items-center">
             <h1 className="text-lg font-bold">Dashboard</h1>
         
             {/* <button className="text-sm text-gray-700">Profile</button> */}
             <div className='flex justify-evenly items-center gap-5'>
             <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
           <span className="text-lg font-bold"><IoIosSearch />
           </span> {/* You can replace this with an actual avatar */}
         </div>
             <div className="flex items-center gap-2 bg-white py-1 px-4 rounded-full">
         {/* Profile Icon */}
         <div className="flex items-center justify-center">
           <CgProfile className='text-xl text-2xl font-bold'/>
        {/* You can replace this with an actual avatar */}
         </div>
   
         {/* Profile Info */}
         <div className="">
           <h3 className="text-sm font-semibold">Raviselvam</h3>
           <p className="text-xs text-gray-400">Super Admin</p>
         </div>
       </div>
             </div>
    
           </div>
  )
}
