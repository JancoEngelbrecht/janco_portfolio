import React from 'react'
import UsePlaygroundEffects from './playgroundEffects'

const dropdown = () => {
  const { isDropdownVisible, toggleDropdown } = UsePlaygroundEffects();
  
  return (
    <div className='relative flex justify-center items-center w-screen h-screen'>
        <div className='relative flex items-start h-64 w-96 bg-slate-400 border-2 border-black'>
            <div className='relative flex justify-end items-center h-11 w-full border-2 border-slate-600 bg-slate-600'>
                {/* Dropdown Button */}
                <div 
                    id='dropdownButton' 
                    onClick={toggleDropdown} 
                    className='relative flex justify-center items-center w-11 h-full border-2 cursor-pointer'
                >
                    <h1 className='relative text-white'>TEST</h1>
                </div>
            </div>

            {/* Dropdown Content */}
            {isDropdownVisible && (
                <div 
                    id='dropdownContent' 
                    className='absolute top-12 right-0 w-48 p-2 bg-white border-2 border-gray-300 shadow-md'
                >
                    <ul>
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Option 1</li>
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Option 2</li>
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Option 3</li>
                    </ul>
                </div>
            )}
        </div>
    </div>
);
};

export default dropdown;