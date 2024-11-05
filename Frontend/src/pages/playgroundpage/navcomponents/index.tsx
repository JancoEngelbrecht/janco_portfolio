import React from 'react';
import Dropdown from './dropdown';
import Sidebar from './sidebar';

const Index: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      <div className="relative flex flex-col h-4/5 w-2/3 bg-slate-100 border border-gray-300 shadow-md rounded-xl overflow-hidden">
        <div className='flex w-full'>
          <Dropdown />
        </div>
        <div className='flex h-full'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;