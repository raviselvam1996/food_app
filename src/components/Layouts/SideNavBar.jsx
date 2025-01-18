import React from 'react'
import { FaChartBar, FaCog, FaHome, FaUser } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router';

export const SideNavBar = ({isSidebarOpen, setIsSidebarOpen}) => {
      const menuItems = [
        { icon: <FaHome />, label: 'Home', path: '/dashboard' },
        { icon: <FaUser />, label: 'Profile', path: '/dashboard/profile' },
        { icon: <FaCog />, label: 'Settings', path: '/dashboard/settings' },
        { icon: <FaChartBar />, label: 'Reports', path: '/dashboard/reports' },
      ];
  return (
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
  )
}
