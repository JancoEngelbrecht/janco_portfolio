import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import faceimage from "../../assets/janco_closeup.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-10 ">
      <div className="w-5/6 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-top">

        {/* Column 1 - Website Map */}
        <div className=" flex justify-center items-top">
          <div className=' text-center md:text-left w-auto'>
            <h4 className="text-3xl flex justify-center font-bold mb-8 text-[#3C3C3C]">Website map</h4>
            <div className="grid grid-row-2 gap-8">
              <div className="flex justify-left gap-x-11 text-[#636363]">
                <span className="font-medium">Projects</span>
                <span className="font-medium">Contact</span>
              </div>
              <div className="flex justify-left gap-x-14 text-[#636363]">
                <span className="font-medium">About</span>
                <span className="font-medium">Showcase</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 - Image and Description */}
        <div className="pl-[20%] pr-[20%] text-center border-r-2 border-l-2 text-[#636363] ">
          <h4 className="text-xs font-bold mb-2 ">
            Janco Engelbrecht - Web & Mobile Application Developer
          </h4>
          <img
            src={faceimage} // Replace with your image URL
            alt="Databest Profile"
            className="mx-auto h-32 rounded-full mb-16 mt-16 "
          />
          <p className="text-xs ">Rise Higher, Anchor Vision, Triumph Always</p>
        </div>

        {/* Column 3 - Contact Information */}
        <div className="flex justify-center items-top">
          <div className=' text-center md:text-left w-auto'>
            <h4 className="text-3xl font-bold  mb-8 text-[#3C3C3C]">Contact</h4>
            <div className="grid grid-row-2 gap-8">
              <div className="flex justify-left gap-x-11 text-[#636363]">
                <span className="font-medium">EU: +27 637 312 556</span>
                <span className="font-medium">Amersfoort, NL</span>
              </div>
              <div className="flex justify-left gap-x-14 text-[#636363]">
                <span className="font-medium">www.jancoengelbrecht.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;