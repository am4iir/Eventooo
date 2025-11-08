import React, { useState, useEffect } from "react";
import whiteLogo from '../assets/whitelogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Set active section based on current path
    const path = window.location.pathname;
    if (path === "/") setActiveSection("home");
    else if (path.includes("/events")) setActiveSection("events");
    else if (path.includes("/about")) setActiveSection("about");
    else if (path.includes("/contact")) setActiveSection("contact");
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-36 py-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="max-md:flex-1" onClick={() => handleNavClick("home")}>
          <img src={whiteLogo} alt="Meetly Logo" className="w-36 h-auto" />
        </a>

        {/* Navigation Links */}
        <div
          className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
            isOpen ? "max-md:w-full" : "max-md:w-0"
          }`}
        >
          {/* Close Button for Mobile */}
          <button
            className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            ✕
          </button>

          <a
            href="/"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === "home"
                ? "bg-gray-500/50 text-white"
                : "text-white hover:bg-gray-500/30"
            }`}
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>
          <a
            href="/events"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === "events"
                ? "bg-gray-500/50 text-white"
                : "text-white hover:bg-gray-500/30"
            }`}
            onClick={() => handleNavClick("events")}
          >
            Events
          </a>
          <a
            href="/about"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === "about"
                ? "bg-gray-500/50 text-white"
                : "text-white hover:bg-gray-500/30"
            }`}
            onClick={() => handleNavClick("about")}
          >
            About
          </a>
          <a
            href="/contact"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === "contact"
                ? "bg-gray-500/50 text-white"
                : "text-white hover:bg-gray-500/30"
            }`}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 sm:px-7 sm:py-2 backdrop-blur bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 rounded-full font-medium text-white cursor-pointer">
            Create Event
          </button>
          <button className="px-4 py-2 sm:px-7 sm:py-2 backdrop-blur bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 rounded-full font-medium text-white cursor-pointer">
            Login
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-8 h-8 cursor-pointer text-white flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
