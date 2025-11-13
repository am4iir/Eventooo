import React, { useState, useEffect } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";
import whiteLogo from '../assets/whitelogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveSection("home");
    else if (path.includes("/events")) setActiveSection("events");
    else if (path.includes("/about")) setActiveSection("about");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - only hide after scrolling past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
    if (section === "home") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 lg:px-16 xl:px-24 py-4 md:py-5 transition-transform duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" className="max-md:flex-1" onClick={() => handleNavClick("home")}>
          <img src={whiteLogo} alt="Meetly Logo" className="w-32 md:w-36 h-auto" />
        </Link>

        {/* Navigation Links */}
        <div
          className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-6 md:gap-2 lg:gap-3 md:px-6 lg:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
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

          <Link
            to="/"
            className={`px-4 md:px-4 lg:px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
              activeSection === "home"
                ? "bg-gray-500/50 text-white"
                : "text-white hover:bg-gray-500/30"
                
            }`}
            onClick={() => handleNavClick("home")}
          >
            Home
          </Link>
          <Link
            to="/events"
            className={`px-4 md:px-4 lg:px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
              activeSection === "events"
                ? "bg-gray-500/50 text-white"
                : "text-white hover:bg-gray-500/30"
            }`}
            onClick={() => handleNavClick("events")}
          >
            Events
          </Link>
          <Link
            to="/about"
            className={`px-4 md:px-4 lg:px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
              activeSection === "about"
                ? "bg-gray-500/50 text-white"
                : "text-white hover:bg-gray-500/30"
            }`}
            onClick={() => handleNavClick("about")}
          >
            About
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <button className="px-3 py-2 md:px-5 lg:px-6 md:py-2 backdrop-blur bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 rounded-full font-medium text-white cursor-pointer text-sm md:text-base">
            Create Event
          </button>
          
          {/* Clerk Authentication */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-3 py-2 md:px-5 lg:px-6 md:py-2 backdrop-blur bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 rounded-full font-medium text-white cursor-pointer text-sm md:text-base">
                Login
              </button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 md:w-10 md:h-10"
                }
              }}
            />
          </SignedIn>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full cursor-pointer text-white flex items-center justify-center transition-all duration-300 shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
