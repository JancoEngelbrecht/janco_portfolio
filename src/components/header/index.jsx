import React, { useState, useEffect } from "react";
import menuicon from "../../assets/menu_icon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu state
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#menu") && !event.target.closest("#menuicon")) {
        setMenuOpen(false); // Close the menu when clicking outside
      }
    };

    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Cleanup event listener when component unmounts or menu closes
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="fixed pl-6 w-full h-auto text-white text-6xl font-segoe z-50">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <span className="hover:animate-bounce"><b>J</b></span>
          <span className="hover:animate-bounce"><b>.</b></span>
          <span className="hover:animate-bounce"><b>E</b></span>
          <span className="hover:animate-bounce"><b>.</b></span>
        </div>

        {/* Menu Icon */}
        <div className="relative">
          <div 
            className={`transition-transform transform ${menuOpen ? "translate-x-64" : ""} duration-300 ease-in-out z-50`} // Move the icon 16rem (64 Tailwind units) to the right when open
            onClick={handleMenuClick}
            id="menuicon"
          >
            <img
              src={menuicon}
              alt="menu icon"
              className="w-28 h-auto cursor-pointer pt-4 pr-6"
            />
          </div>

          {/* Menu Items (responsive) */}
          <div
            id="menu"
            className={`absolute top-0 right-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-4 rounded-lg transition-transform ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} duration-500 ease-in-out z-40`} 
          >
            <a href="#contact" className="text-white text-2xl cursor-pointer">
              Contact
            </a>
            <a href="#projects" className="text-white text-2xl cursor-pointer">
              Projects
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;