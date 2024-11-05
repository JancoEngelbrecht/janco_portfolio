import React from 'react';

import Dropdown from './dropdown';
import Sidebar from './sidebar';
import Searchbar from './searchbar';
import PlaneImage from '../../../assets/plane.jpg'

const Index: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      <div className="relative flex flex-col h-4/5 w-2/3 bg-slate-100 border border-gray-300 shadow-md rounded-xl overflow-hidden">

      {/* Background image with responsive styling */}
      <img src={PlaneImage} className='absolute inset-0 w-full h-full object-cover z-0'></img>
     

        <div className='flex w-full z-20'>
          <Dropdown />
        </div>
        <div className='flex h-full'>
          <Sidebar />
          <div className='flex w-full justify-center items-center z-10'><Searchbar /></div>
        </div>
      </div>
    </div>
  );
};

export default Index;