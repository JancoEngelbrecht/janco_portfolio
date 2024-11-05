import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaCog, FaFolder, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false); // Controls main sidebar visibility on hover
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null); // Tracks which main menu item is being hovered
  const [isMobile, setIsMobile] = useState(false); // Tracks if screen is mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle for sidebar on mobile

  const menuItems = [
    { icon: <FaHome />, label: "Home", subMenu: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"] },
    { icon: <FaUser />, label: "Profile", subMenu: ["Option 1", "Option 2", "Option 3"] },
    { icon: <FaCog />, label: "Settings", subMenu: ["Option 1", "Option 2", "Option 3", "Option 4"] },
    { icon: <FaFolder />, label: "Projects", subMenu: ["Option 1", "Option 2"] },
  ];

  // Update `isMobile` state based on screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex relative">
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-3 text-gray-800 bg-gray-200 focus:outline-none"
        >
          <FaBars />
        </button>
      )}

      {/* Main Sidebar */}
      <div
        className={`${
          isMobile ? (isSidebarOpen ? "absolute z-20" : "hidden") : ""
        } flex flex-col h-auto bg-gray-50 text-gray-800 shadow-lg`}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => {
          !isMobile && setIsHovered(false);
          setHoveredItemIndex(null);
        }}
      >
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative flex items-center p-4 hover:bg-gray-200 cursor-pointer text-gray-700"
              onMouseEnter={() => setHoveredItemIndex(index)}
              onMouseLeave={() => setHoveredItemIndex(null)}
              onClick={() => isMobile && setHoveredItemIndex(index)} // Toggle submenu on mobile
            >
              <span className="m-3">{item.icon}</span>
              <span className={`${isHovered || isMobile ? "" : "hidden"}`}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sub-menu Backdrop */}
      {(hoveredItemIndex !== null && !isMobile) || (isMobile && hoveredItemIndex !== null) ? (
        <div
          className={`${
            isMobile ? "absolute left-full z-20" : ""
          } flex flex-col w-32 bg-gray-50 shadow-lg`}
          onMouseEnter={() => setHoveredItemIndex(hoveredItemIndex)}
          onMouseLeave={() => setHoveredItemIndex(null)}
        >
          <ul>
            {menuItems[hoveredItemIndex].subMenu.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className="p-2 px-4 whitespace-nowrap hover:bg-gray-300 cursor-pointer text-gray-700"
              >
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;