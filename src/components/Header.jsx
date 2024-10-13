import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToChatbot = () => {
    document.getElementById('chatbot-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Agriculture Logo"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <h1 className="text-2xl font-bold tracking-wide">AgriBot</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="/" 
            className="hover:text-gray-200 transition duration-300 ease-in-out">
            Home
          </a>
          <a 
            href="/services" 
            className="hover:text-gray-200 transition duration-300 ease-in-out">
            Services
          </a>
          <a 
            href="/aboutus" 
            className="hover:text-gray-200 transition duration-300 ease-in-out">
            About Us
          </a>
          <a 
            href="/contactus" 
            className="hover:text-gray-200 transition duration-300 ease-in-out">
            Contact
          </a>
        </nav>

        {/* Conditional "Start Chatting" Button */}
        {isHomePage && (
          <div className="hidden md:block">
            <button
              onClick={scrollToChatbot}
              className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-200 font-semibold"
            >
              Start Chatting
            </button>
          </div>
        )}

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
