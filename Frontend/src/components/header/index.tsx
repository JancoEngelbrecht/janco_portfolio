import React from "react";
import "./styles.css";
import faceimage from "../../assets/janco_closeup.png";

const Header: React.FC = () => {
  return (
    <>
      {/* Include SVG Filter */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <filter id="static-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>

      <div className="relative w-full h-auto  bg-olivegreen opacity-85 z-0 rounded-b-2xl">
       

        {/* Header Content */}
        <header className="relative z-10 flex flex-col items-center w-full bg-transparent ">
          {/* Main Header Section */}
          <div className="flex items-center justify-between border-t border-b border-white w-5/6 px-4 py-4 mt-10">
            <div className="text-white text-3xl font-porter text-shadow-md tracking-wide">
              TRIUMPH
            </div>
            <nav className="flex space-x-8">
              <a href="/projects" className="text-white text-sm uppercase tracking-widest hover:opacity-80">
                Projects
              </a>
              <a href="/about" className="text-white text-sm uppercase tracking-widest hover:opacity-80">
                About
              </a>
              <a href="/contact" className="text-white text-sm uppercase tracking-widest hover:opacity-80">
                Contact
              </a>
              <a href="/showcase" className="text-white text-sm uppercase tracking-widest hover:opacity-80">
                Showcase
              </a>
            </nav>
          </div>

          {/* Sub Row for "HOME/" */}
          <div className="w-5/6 border-white px-4 py-6">
            <a href="/" className="text-white text-sm uppercase tracking-wide">
              HOME /
            </a>
          </div>

          {/* Two-Column Row */}
          <div className="w-5/6 pb-20 flex justify-center space-x-64 items-center border-b-2">
            {/* Left Column */}
            <div className="text-white text-5xl font-bold text-left pl-12">
              <h1 className="space-y-4">
                <div>FRONTEND</div>
                <div>DEVELOPER</div>
              </h1>
            </div>

            {/* Right Column */}
            <div className="flex text-white text-sm justify-center items-center">
              <img
                src={faceimage}
                alt="Image of a man's Face"
                className="w-1/2 h-auto object-contain rounded-b-[130px]"
              />
            </div>
          </div>

          {/* Footer Row */}
          <div className="w-5/6 border-white px-4 py-6">
            <a href="/" className="text-white text-sm uppercase tracking-wide">
              2024
            </a>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;