import React, { useRef, useEffect } from 'react';
import { useDrag } from '@use-gesture/react';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

interface HorizontalScrollerProps {
  products: Product[];
}

const SCROLL_OFFSET = 300; // Adjustable scroll offset

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({ products }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Bind dragging functionality to update scroll position
  const bind = useDrag(({ movement: [mx], memo = 0 }) => {
    if (scrollContainerRef.current) {
      const newScrollLeft = memo - mx;
      scrollContainerRef.current.scrollLeft = newScrollLeft;
    }
    return scrollContainerRef.current?.scrollLeft || 0;
  });

  useEffect(() => {
    const container = scrollContainerRef.current;
    const updateScrollPosition = () => {
      // Any additional side-effects related to scroll can be handled here if needed
    };

    container?.addEventListener('scroll', updateScrollPosition);
    return () => container?.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return (
    <div className="flex w-full items-center justify-center text-white relative z-10">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex h-max overflow-x-auto space-x-[25%] scrollbar-hide snap-both snap-mandatory scroll-smooth"
          ref={scrollContainerRef}
          {...bind()}
          style={{ userSelect: 'none' }}
          onDragStart={(e) => e.preventDefault()}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 ml-[50%] snap-center w-full sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/4"
            >
              <div className="flex flex-col items-center">
                <img src={product.imageUrl} alt={product.name} className="rounded-lg" draggable="false" />
                <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 w-auto sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/4"></div>
        </div>
      </div>

      <div className="absolute justify-center space-x-32 bottom-0">
        <ScrollButton direction="left" onClick={() => handleScroll(-SCROLL_OFFSET)} />
        <ScrollButton direction="right" onClick={() => handleScroll(SCROLL_OFFSET)} />
      </div>
    </div>
  );
};

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => (
  <button
    className="w-10 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-transparent"
    onClick={onClick}
    aria-label={`Scroll ${direction}`}
  >
    {direction === 'left' ? '<' : '>'}
  </button>
);

export default HorizontalScroller;