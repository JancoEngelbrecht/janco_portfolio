import React, { useState, useEffect } from 'react';
import UseDropdownEffects from './dropdownEffects';
import { FaEllipsisV } from 'react-icons/fa';

// Define Option Types
interface Option {
  label: string;
  subOptions: string[];
}

const Dropdown:React.FC = () => {
  const { isDropdownVisible, toggleDropdown } = UseDropdownEffects();
  
  const [activeOption, setActiveOption] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  // Use Option Types
  const mainOptions: Option[] = [
    { label: 'Option 1', subOptions: ['Sub-option 1.1', 'Sub-option 1.2'] },
    { label: 'Option 2', subOptions: ['Sub-option 2.1', 'Sub-option 2.2'] },
    { label: 'Option 3', subOptions: ['Sub-option 3.1', 'Sub-option 3.2'] }
  ];

  // Detect screen resize and update isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close submenu on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest("#dropdownContent")) {
        setActiveOption(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleOptionClick = (index: number) => {
    setActiveOption(activeOption === index ? null : index);
  };

  return (
    <>
        {/* Top bar with dropdown button */}
        <div className="relative flex justify-end items-center h-10 w-full bg-white border-b border-gray-200 shadow-sm">
          <div
            id="dropdownButton"
            onClick={toggleDropdown}
            className="flex justify-center items-center w-10 h-full cursor-pointer hover:bg-gray-100 transition-all rounded-bl-lg"
          >
            <FaEllipsisV className="text-gray-600" />
          </div>
        </div>

        {/* Dropdown Content */}
        {isDropdownVisible && (
          <div
            id="dropdownContent"
            className="absolute top-10 right-3 mt-2 min-w-[10rem] w-auto bg-white border border-gray-200 rounded-lg shadow-lg backdrop-blur-md bg-opacity-80 transition-transform duration-300 ease-out transform scale-95"
          >
            <ul className="divide-y divide-gray-100">
              {mainOptions.map((option, index) => (
                <li
                  key={index}
                  className="relative p-3 hover:bg-gray-200 cursor-pointer text-gray-700"
                  onMouseEnter={() => !isMobile && setActiveOption(index)}
                  onMouseLeave={() => !isMobile && setActiveOption(null)}
                  onClick={() => handleOptionClick(index)}
                >
                  {option.label}

                  {/* Submenu for each option */}
                  {activeOption === index && (
                    <div
                      className={`${
                        isMobile
                          ? "relative mt-2 w-full" // For mobile: stack submenu below
                          : "absolute top-0 right-full mr-1 w-40" // For desktop: show to the right
                      } bg-white border border-gray-200 rounded-lg shadow-lg transition-opacity duration-200 ease-in-out`}
                      style={isMobile ? {} : { transform: 'translateX(-5px)', zIndex: 10 }}
                      onMouseEnter={() => setActiveOption(index)}
                      onMouseLeave={() => setActiveOption(null)}
                    >
                      <ul>
                        {option.subOptions.map((subOption, subIndex) => (
                          <li
                            key={subIndex}
                            className="p-3 hover:bg-gray-200 cursor-pointer text-gray-700"
                          >
                            {subOption}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        </>
  );
};

export default Dropdown;