import React from 'react';

import Dropdown from './dropdown';
import Sidebar from './sidebar';
import Searchbar from './searchbar';
import PlaneImage from '../../../assets/plane.jpg';

const Index: React.FC = () => {
  return (
    <>
      {/* Navigation Header */}
      <header className="w-full text-center py-4 text-gray text-lg sm:text-xl font-semibold">
        Navigation
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
            <Sidebar />
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