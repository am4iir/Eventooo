import React from 'react';
import whiteLogo from '../assets/whitelogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-black via-purple-900/20 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left">
            <img src={whiteLogo} alt="Eventooo Logo" className="w-28 sm:w-32 md:w-36 h-auto mx-auto sm:mx-0" />
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Discover and create amazing campus events. Connect with fellow students and make unforgettable memories.
            </p>
            {/* Social Media */}
            <div className="flex gap-3 sm:gap-4 pt-2 justify-center sm:justify-start">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full backdrop-blur bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-400 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full backdrop-blur bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-400 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full backdrop-blur bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-400 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full backdrop-blur bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-400 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors duration-300 text-sm sm:text-sm inline-flex items-center gap-2 py-1">
                  <span className="text-purple-400">→</span> Home
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors duration-300 text-sm sm:text-sm inline-flex items-center gap-2 py-1">
                  <span className="text-purple-400">→</span> Browse Events
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors duration-300 text-sm sm:text-sm inline-flex items-center gap-2 py-1">
                  <span className="text-purple-400">→</span> About Us
                </a>
              </li>
              <li>
                <a href="/create-event" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors duration-300 text-sm sm:text-sm inline-flex items-center gap-2 py-1">
                  <span className="text-purple-400">→</span> Create Event
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors duration-300 text-sm sm:text-sm inline-flex items-center gap-2 py-1">
                  <span className="text-purple-400">→</span> Contact Us
                </a>
              </li>
            </ul>
          </div>

          

          {/* Contact & Support */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/help" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors duration-300 text-sm sm:text-sm inline-flex items-center gap-2 py-1">
                  <span>❓</span> Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors duration-300 text-sm sm:text-sm inline-flex items-center gap-2 py-1">
                  <span>📋</span> FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors duration-300 text-sm sm:text-sm inline-flex items-center gap-2 py-1">
                  <span>🔒</span> Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors duration-300 text-sm sm:text-sm inline-flex items-center gap-2 py-1">
                  <span>📄</span> Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:support@eventooo.com" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors duration-300 text-sm sm:text-sm inline-flex items-center gap-2 py-1 break-all">
                  <span>📧</span> support@Meetly.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 pb-6 sm:pb-8">
          <div className="max-w-2xl mx-auto text-center px-2 sm:px-4">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5">Subscribe to our newsletter for the latest campus events and updates.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full sm:flex-1 sm:max-w-md px-4 py-3 sm:py-3 bg-white/5 backdrop-blur border border-white/20 rounded-full text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
              />
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 active:scale-95 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-purple-500/50 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Meetly. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors text-xs sm:text-sm py-1">
              Privacy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors text-xs sm:text-sm py-1">
              Terms
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-purple-400 active:text-purple-300 transition-colors text-xs sm:text-sm py-1">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
