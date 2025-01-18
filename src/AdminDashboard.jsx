import React, { useState } from 'react';
// import { FormControlLabel, Switch } from '@mui/material';
import { FaHome, FaUser, FaCog, FaChartBar } from 'react-icons/fa';
import { Link, Outlet } from 'react-router';
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";




const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  const menuItems = [
    { icon: <FaHome />, label: 'Home', path: '/dashboard' },
    { icon: <FaUser />, label: 'Profile', path: '/dashboard/profile' },
    { icon: <FaCog />, label: 'Settings', path: '/dashboard/settings' },
    { icon: <FaChartBar />, label: 'Reports', path: '/dashboard/reports' },
  ];

  return (
    <div className="flex h-screen bg-gray-300">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? 'w-52' : 'w-16'
          } bg-white duration-300 flex flex-col `}
      >
         <div className="px-4 py-2 flex items-center justify-between relative">

      <img src="/images/logo_icon.png" alt="My Image" />

    <div className="absolute top-1/2 transform -translate-y-1/2 -right-2.5 cursor-pointer">
  {/* Arrow icon container */}
  {isSidebarOpen ? (
    <div className="w-5 h-5 bg-white rounded-full border border-gray-300 shadow shadow-red-300 hover:shadow-lg flex items-center justify-center">
      <span className="text-md font-bold">
        <IoIosArrowForward
          onClick={() => setIsSidebarOpen(false)}
          className="cursor-pointer text-md"
        />
      </span> {/* You can replace this with an actual avatar */}
    </div>
  ) : (
    <div className="w-5 h-5 bg-white rounded-full border border-gray-300 shadow shadow-red-300 hover:shadow-lg flex items-center justify-center">
      <span className="text-md font-bold">
        <IoIosArrowBack
          onClick={() => setIsSidebarOpen(true)}
          className="cursor-pointer text-md"
        />
      </span> {/* You can replace this with an actual avatar */}
    </div>
  )}
</div>

  </div>

        {/* Sidebar Menu */}
        <ul className="flex-1 overflow-y-auto space-y-2 px-4 hide-scrollbar">
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center hover:bg-red-300 hover:rounded-md hover:text-red-700">
              <Link
                to={item.path}
                className="flex items-center p-2  rounded"
              >
                <span className="text-md">{item.icon}</span>
                <span
                  className={`ml-4 ${isSidebarOpen ? 'block' : 'hidden'
                    } whitespace-nowrap text-sm font-normal`}
                >
                  {item.label}
                </span>
              </Link>
            </li>))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
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

        {/* Dashboard Content */}
        <div className="flex-1 px-4 overflow-y-auto">
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>
            <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>    <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>    <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>    <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>    <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>    <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>    <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>    <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>    <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>
            <h2 className="text-xl font-semibold">Welcome to the Admin Panel!</h2>
            <p className="text-gray-600 mt-2">
              This is your dashboard where you can manage your application
              content.
            </p>

            <Outlet /> {/* Renders child components here */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
