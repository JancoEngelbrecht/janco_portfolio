import React, { useState, useEffect } from 'react';

import Dropdown from './components/dropdown';
import Sidebar from './components/sidebar';
import Searchbar from './components/searchbar';
import PlaneImage from '../../../../assets/plane.jpg';

const Index: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // Toggle sidebar visibility on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { 
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    };

    handleResize(); // Set initial state based on screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Navigation Header */}
      <header className="w-full text-center py-4 text-gray text-lg sm:text-xl font-semibold">
        NAVIGATION
      </header>

      {/* Main Component */}
      <div className="relative flex justify-center h-screen">
        <div className="relative flex flex-col w-full h-full sm:w-3/4 sm:h-4/5 bg-slate-100 border border-gray-300 shadow-md rounded-xl overflow-hidden">

          {/* Background image with responsive styling */}
          <img src={PlaneImage} alt="Plane window" className="absolute inset-0 w-full h-full object-cover z-0" />

          <div className="flex w-full z-20">
            <Dropdown />
          </div>

          <div className="flex h-full">
            {/* Render Sidebar conditionally based on isSidebarVisible */}
            {isSidebarVisible && <Sidebar />}
            <div className="flex w-full justify-center items-center z-10">
              <Searchbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;