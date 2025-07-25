"use client";

import { useState } from "react";
import Image from "next/image";

const FrontFooter = () => {
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="mb-8">
              <Image src="next.svg" alt="Telkom Indonesia Logo" width={200} height={60} className="object-contain filter brightness-0 invert" />
              <p className="text-sm text-gray-400 mt-2">the world in your hand</p>
            </div>

            {/* Address and Contact */}
            <div className="space-y-4">
              <div className="text-sm text-gray-300 leading-6">
                <p>Kawasan The Telkom Hub, Gedung Telkom Landmark Tower II, lantai.39, Jl. Jenderal</p>
                <p>Gatot Subroto Kav. 52, Kuningan Barat, Mampang Prapatan, Jakarta Selatan, Jakarta,</p>
                <p>Indonesia 12710, Indonesia.</p>
              </div>

              <div className="space-y-2 text-sm text-gray-300">
                <p>Phone: (6221)521 5109</p>
                <p>Fax: (6221)5220500</p>
              </div>

              <div className="text-sm text-gray-300">
                <p>
                  Email:{" "}
                  <a href="mailto:investor@telkom.co.id" className="text-white hover:text-red-400 transition-colors duration-200">
                    investor@telkom.co.id
                  </a>
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#facebook" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#instagram" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.488 8.535l4.938-2.05L12.017 4l3.591 2.485l4.938 2.05l-1.638 7.156c-.875.807-2.026 1.297-3.323 1.297H8.449z" />
                </svg>
              </a>
              <a href="#twitter" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href="#linkedin" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#youtube" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* First Column */}
            <div className="space-y-6">
              <nav className="space-y-4">
                <a href="#profil-telkom" className="block text-white hover:text-red-400 transition-colors duration-200 font-medium">
                  Profil Telkom
                </a>
                <a href="#solusi" className="block text-white hover:text-red-400 transition-colors duration-200 font-medium">
                  Solusi
                </a>
                <a href="#hubungan-investor" className="block text-white hover:text-red-400 transition-colors duration-200 font-medium">
                  Hubungan Investor
                </a>
                <a href="#berita" className="block text-white hover:text-red-400 transition-colors duration-200 font-medium">
                  Berita
                </a>
                <a href="#sustainability" className="block text-white hover:text-red-400 transition-colors duration-200 font-medium">
                  Sustainability
                </a>
              </nav>
            </div>

            {/* Second Column */}
            <div className="space-y-6">
              <nav className="space-y-4">
                <a href="#ppid" className="block text-white hover:text-red-400 transition-colors duration-200 font-medium">
                  PPID
                </a>
                <a href="#karir" className="block text-white hover:text-red-400 transition-colors duration-200 font-medium">
                  Karir
                </a>
                <a href="#hubungi-kami" className="block text-white hover:text-red-400 transition-colors duration-200 font-medium">
                  Hubungi Kami
                </a>
                <a href="#peta-situs" className="block text-white hover:text-red-400 transition-colors duration-200 font-medium">
                  Peta Situs
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">© 2024 PT Telkom Indonesia. All Rights Reserved.</p>

            {/* Additional Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-gray-400 hover:text-white transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Accessibility and Back to Top Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        {/* Accessibility Button */}
        <button
          onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
          className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-200"
          aria-label="Accessibility Options"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-10.5L19 8l-3.5-3.5M8 19l-3.5-3.5L8 12" />
          </svg>
        </button>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-200"
          aria-label="Back to Top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Accessibility Panel */}
      {isAccessibilityOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Accessibility Options</h3>
            <button onClick={() => setIsAccessibilityOpen(false)} className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <button className="w-full text-left p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-gray-900">Increase Text Size</button>
            <button className="w-full text-left p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-gray-900">High Contrast Mode</button>
            <button className="w-full text-left p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-gray-900">Screen Reader Mode</button>
            <button className="w-full text-left p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-gray-900">Keyboard Navigation</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default FrontFooter;
