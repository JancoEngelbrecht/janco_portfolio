// components/HorizontalScroller/ScrollButton.tsx
import React from 'react';

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => (
  <button
    className="scroll-button"
    onClick={onClick}
    aria-label={`Scroll ${direction}`}
  >
    {direction === 'left' ? '<' : '>'}
  </button>
);

export default ScrollButton;