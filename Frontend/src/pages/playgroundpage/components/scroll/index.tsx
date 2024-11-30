import React, { useState } from 'react';

import Watch1 from '../../../../assets/watch1.jpg'
import Watch2 from '../../../../assets/watch2.jpg'
import Watch3 from '../../../../assets/watch3.jpg'
import Watch4 from '../../../../assets/watch4.jpg'
import HorizontalScroller from './components/HorizontalScroller';

const Index: React.FC = () => {
  const [animateDiscover, setAnimateDiscover] = useState(false);

  const triggerDiscoverAnimation = () => {
    setAnimateDiscover(true);
    setTimeout(() => setAnimateDiscover(false), 300); // Match duration with animation
  };

    const products = [
        { id: 1, name: 'Option 1', imageUrl: Watch1 },
        { id: 2, name: 'Option 2', imageUrl: Watch2 },
        { id: 3, name: 'Option 3', imageUrl: Watch3 },
        { id: 4, name: 'Option 4', imageUrl: Watch4 },
        { id: 5, name: 'Option 5', imageUrl: Watch1 },
        { id: 6, name: 'Option 6', imageUrl: Watch2 },
    
      ];

  return (
    <>
      {/* Navigation Header */}
      <header className=" text-center py-4 text-gray text-lg sm:text-xl font-semibold">
        SCROLLER
      </header>


      {/* Main Component */}
      <div className="relative flex justify-center h-screen">
        <div className="relative flex flex-col w-full h-full sm:w-3/4 sm:h-4/5 bg-slate-100 border border-gray-300 shadow-md rounded-xl">
        <div className="bg-gradient-to-tr from-gray-900 from-0%  to-gray-950 to-70% w-full h-full flex-col flex items-center justify-center rounded-xl">

            <h3 className={`"mt-4 text-xl text-white font-semibold z-30 sm:mt-0 sm:absolute sm:top-4 lg:top-[25%] lg:left-[25%] ${animateDiscover ? 'animate-fadeIn' : ''}`}>Discover</h3>

            {/* Horizontal Scroller */}
            <HorizontalScroller products={products} onScroll={triggerDiscoverAnimation} />

             {/* Horizontal Gray Line */}
            <div className="absolute w-full border-t border-gray-500 my-4 z-0" />
            
        </div>
        </div>
      </div>
    </>
  );
};

export default Index;