"use client";

import { useState } from "react";
import Image from "next/image";

const FrontFooter = () => {
  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup");
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Section - Organization Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="mb-8">
              <Image src="next.svg" alt="RMU Logo" width={200} height={60} className="object-contain filter brightness-0 invert" />
              <p className="text-sm text-gray-400 mt-2">Rumah Masyarakat Unggul</p>
            </div>

            {/* Organization Description */}
            <div className="space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                Perkumpulan yang bergerak dalam bidang pemberdayaan masyarakat melalui program pelatihan, pemberdayaan, dan sinergitas untuk menciptakan masyarakat yang unggul dan mandiri.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Bandung, Jawa Barat, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836L6.473 4.55A1 1 0 016.447 5.5l-.67 1.34a1 1 0 00.113 1.123l3.012 3.012a1 1 0 001.123.113l1.34-.67a1 1 0 01.95.026l1.714.334a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+62 (21) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="hover:text-red-400 transition-colors duration-200 cursor-pointer">info@rmu.org</span>
              </div>
            </div>
          </div>

          {/* Center Section - Quick Links & Resources */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Akses Cepat</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>Pendaftaran Anggota</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Hubungi Kami</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Dokumen Penting</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span>AD/ART Perkumpulan</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span>SOP & Prosedur</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span>Kode Etik</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Newsletter & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-sm text-gray-300 mb-4">Dapatkan informasi terbaru tentang program dan kegiatan RMU</p>
              <form onSubmit={handleEmailSubmit} className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-200"
                />
                <button type="submit" className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm4.624 7.162c.013.13.013.26.013.39 0 3.99-3.036 8.59-8.59 8.59A8.54 8.54 0 013.4 15.23c.286.034.572.046.87.046a6.052 6.052 0 003.751-1.296 3.02 3.02 0 002.821-2.094 3.016 3.016 0 01-1.371-.052 3.02 3.02 0 01-2.416-2.958v-.039a3.008 3.008 0 001.371.377 3.02 3.02 0 01-.934-4.028 8.563 8.563 0 006.218 3.15 3.02 3.02 0 015.146-2.75 6.041 6.041 0 001.914-.728 3.036 3.036 0 01-1.327 1.67A6.037 6.037 0 0020.64 6.4a6.523 6.523 0 01-1.623 1.562z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Jam Operasional</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span>09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span>Tutup</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-sm text-gray-400">© 2024 Rumah Masyarakat Unggul. Seluruh hak cipta dilindungi.</p>

            <div className="flex flex-wrap gap-6 text-sm">
              <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Kebijakan Privasi</span>
              <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Syarat & Ketentuan</span>
              <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Disclaimer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleScrollToTop}
          className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
          aria-label="Kembali ke Atas"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default FrontFooter;
