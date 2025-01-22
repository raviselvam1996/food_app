import React, { useState } from 'react';
// import { FormControlLabel, Switch } from '@mui/material';
import { FaHome, FaUser, FaCog, FaChartBar } from 'react-icons/fa';
import {  Outlet } from 'react-router';
import { SideNavBar } from './SideNavBar';
import { TopNavBar } from './TopNavBar';
import { useGetSupplierCategoryQuery } from '../../services/menu';



const MainContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data: categoriesData, isLoading: loadingCategories, error: categoriesError } = useGetSupplierCategoryQuery()
const datas = categoriesData;
console.log(datas);

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
  
      <SideNavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
   
        <TopNavBar/>

        {/* Dashboard Content */}
        <div className="flex-1 px-4 overflow-y-auto">
          <div className="bg-white p-6 shadow rounded">
          

            <Outlet /> {/* Renders child components here */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
