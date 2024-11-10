import React, { useRef, useEffect, useState } from 'react';
import { useDrag } from '@use-gesture/react';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

interface HorizontalScrollerProps {
  products: Product[];
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({ products }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false); // Track scroll state for UX
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position

  // Dragging gesture handling
  const bind = useDrag(({ movement: [mx], memo = 0 }) => {
    if (scrollContainerRef.current) {
      const newScrollLeft = memo - mx;
      scrollContainerRef.current.scrollLeft = newScrollLeft;
      setScrollPosition(newScrollLeft);
    }
    return scrollContainerRef.current ? scrollContainerRef.current.scrollLeft : 0;
  });

  // Scroll left function
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust this value as needed
        behavior: 'smooth',
      });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust this value as needed
        behavior: 'smooth',
      });
    }
  };

  // Update scroll position on manual scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener to update position
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex w-full items-center justify-center text-white relative z-10">

      {/* Scrollable Content Wrapper */}
      <div className="relative w-full overflow-hidden">

        {/* Products */}
        <div
          className="flex h-max overflow-x-auto space-x-[25%] scrollbar-hide snap-both snap-mandatory scroll-smooth"
          ref={scrollContainerRef}
          {...bind()}
          style={{ userSelect: 'none' }}
          onDragStart={(e) => e.preventDefault()}
        >
          {/* Rendering Each Product */}
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 ml-[50%] snap-center w-full sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/4"
            >
              {/* Product Content */}
              <div className="flex flex-col items-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="rounded-lg"
                  draggable="false"
                />
                <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              </div>
            </div>
          ))}
          {/* Phantom Item */}
          <div className="flex-shrink-0 w-auto sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/4"></div>
        </div>

        
      </div>

      {/* Navigation Buttons */}

      <div className="absolute justify-center space-x-32 bottom-0">
        <button
            className="w-10 text-white rounded-lg  hover:bg-gray-700 focus:outline-none focus:bg-transparent"
            onClick={scrollLeft} // Call scrollLeft function here
            aria-label="Scroll left"
          >
            &lt;
          </button>

          <button
            className="w-10 text-white  rounded-lg  hover:bg-gray-700 focus:outline-none focus:bg-transparent"
            onClick={scrollRight} // Call scrollRight function here
            aria-label="Scroll right"
          >
            &gt;
          </button>
        </div>
    </div>
  );
};

export default HorizontalScroller;