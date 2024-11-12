import React, { useRef, useEffect } from 'react';
import { useDrag } from '@use-gesture/react';
import { Product } from '../interfaces/Product';
import { SCROLL_OFFSET } from '../constants';
import ScrollButton from './ScrollButton';
import ProductCard from './ProductCard';
import './styles.css';

interface HorizontalScrollerProps {
  products: Product[];
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({ products }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handles smooth scrolling when scroll buttons are clicked
  const handleScroll = (offset: number) => {
    scrollContainerRef.current?.scrollBy({ left: offset, behavior: 'smooth' });
  };

  // Binds dragging functionality for horizontal scroll
  const bindDragScroll = useDrag(
    ({ movement: [mx], memo = scrollContainerRef.current?.scrollLeft || 0 }) => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = memo - mx;
      }
      return scrollContainerRef.current?.scrollLeft || 0;
    },
    { axis: 'x', pointer: { touch: true } }
  );

  useEffect(() => {
    const container = scrollContainerRef.current;

    const updateScrollPosition = () => {
      // Any additional scroll-related side-effects can be handled here
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
          {...bindDragScroll()}
          style={{ userSelect: 'none', cursor: 'grab' }}
          onDragStart={(e) => e.preventDefault()}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Spacer div for end alignment */}
          <div className="flex-shrink-0 w-auto sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/4"></div>
        </div>
      </div>

      {/* Scroll buttons */}
      <div className="absolute justify-center space-x-32 bottom-0">
        <ScrollButton direction="left" onClick={() => handleScroll(-SCROLL_OFFSET)} />
        <ScrollButton direction="right" onClick={() => handleScroll(SCROLL_OFFSET)} />
      </div>
    </div>
  );
};

export default HorizontalScroller;