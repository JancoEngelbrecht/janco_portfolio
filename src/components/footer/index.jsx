import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com/janco_engelbrecht/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/JancoEngelbrecht" aria-label="Github" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/janco-engelbrecht-032968171/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Footer Info */}
        <p className="text-gray-400 mb-4">Copyright © 2024 Janco Engelbrecht</p>

        {/* Footer Links */}
        <div className="flex justify-center space-x-4 text-sm">
          <a href="/" className="text-gray-400 hover:text-white">Home</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
          <a href="/projects" className="text-gray-400 hover:text-white">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;