"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const FrontHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        (ref) => ref && !ref.contains(event.target as Node)
      );
      if (clickedOutside) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const setDropdownRef = (key: string) => (el: HTMLElement | null) => {
    dropdownRefs.current[key] = el;
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="next.svg"
                alt="Telkom Indonesia Logo"
                width={180}
                height={40}
                priority
                className="object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-8">
                <li className="relative" ref={setDropdownRef("profil")}>
                  <button
                    onClick={() => handleDropdownToggle("profil")}
                    className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm font-medium py-2"
                  >
                    Profil RMU
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                        activeDropdown === "profil" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "profil" && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md border border-gray-100 py-2 z-50">
                      <a
                        href="#tentang-perusahaan"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Tentang Perkumpulan
                      </a>
                      <a
                        href="#visi-misi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        AD/ART
                      </a>
                      <a
                        href="#visi-misi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Visi & Misi
                      </a>
                      <a
                        href="#sejarah"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Sejarah
                      </a>
                      <a
                        href="#struktur-organisasi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Struktur Organisasi
                      </a>
                    </div>
                  )}
                </li>

                <li className="relative" ref={setDropdownRef("solusi")}>
                  <button
                    onClick={() => handleDropdownToggle("solusi")}
                    className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm font-medium py-2"
                  >
                    Program Kerja
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                        activeDropdown === "solusi" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "solusi" && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md border border-gray-100 py-2 z-50">
                      <a
                        href="#solusi-digital"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Pelatihan
                      </a>
                      <a
                        href="#solusi-digital"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Pemberdayaan
                      </a>
                      <a
                        href="#telekomunikasi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Sinergitas
                      </a>
                    </div>
                  )}
                </li>

                <li className="relative" ref={setDropdownRef("hubungan")}>
                  <button
                    onClick={() => handleDropdownToggle("hubungan")}
                    className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm font-medium py-2"
                  >
                    Publikasi
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                        activeDropdown === "hubungan" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "hubungan" && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md border border-gray-100 py-2 z-50">
                      <a
                        href="#laporan-keuangan"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Laporan Keuangan
                      </a>
                      <a
                        href="#saham"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Laporan Tahunan
                      </a>
                      <a
                        href="#dividen"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Akreditasi
                      </a>
                    </div>
                  )}
                </li>

                <li className="relative" ref={setDropdownRef("berita")}>
                  <button
                    onClick={() => handleDropdownToggle("berita")}
                    className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm font-medium py-2"
                  >
                    Berita
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                        activeDropdown === "berita" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "berita" && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md border border-gray-100 py-2 z-50">
                      <a
                        href="#berita-terbaru"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Berita Terbaru
                      </a>
                      <a
                        href="#media-kit"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Kegiatan Kami
                      </a>
                    </div>
                  )}
                </li>

                <li className="relative" ref={setDropdownRef("sustainability")}>
                  <button
                    onClick={() => handleDropdownToggle("sustainability")}
                    className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm font-medium py-2"
                  >
                    Sustainability
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                        activeDropdown === "sustainability" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "sustainability" && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md border border-gray-100 py-2 z-50">
                      <a
                        href="#lingkungan"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Lingkungan
                      </a>
                      <a
                        href="#sosial"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Sosial
                      </a>
                      <a
                        href="#tata-kelola"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        Tata Kelola
                      </a>
                    </div>
                  )}
                </li>

                <li>
                  <a
                    href="#ppid"
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm font-medium"
                  >
                    Daftar anggota
                  </a>
                </li>

                <li></li>
              </ul>
            </nav>

            {/* Right Side - Search, Language, Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button className="hidden lg:block p-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Language Selector */}
              <div
                className="hidden lg:block relative"
                ref={setDropdownRef("bahasa")}
              >
                <button
                  onClick={() => handleDropdownToggle("bahasa")}
                  className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm font-medium"
                >
                  Bahasa
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                      activeDropdown === "bahasa" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === "bahasa" && (
                  <div className="absolute top-full right-0 mt-1 w-32 bg-white shadow-lg rounded-md border border-gray-100 py-2 z-50">
                    <a
                      href="#id"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                    >
                      Indonesia
                    </a>
                    <a
                      href="#en"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                    >
                      English
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden fixed top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="flex flex-col px-4 py-4 space-y-2">
            <li>
              <button
                onClick={() => handleDropdownToggle("mobile-profil")}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm font-medium border-b border-gray-100"
              >
                Profil Telkom
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeDropdown === "mobile-profil" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-profil" && (
                <ul className="pl-4 py-2 space-y-1">
                  <li>
                    <a
                      href="#tentang-perusahaan"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Tentang Perusahaan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#visi-misi"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Visi & Misi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sejarah"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Sejarah
                    </a>
                  </li>
                  <li>
                    <a
                      href="#struktur-organisasi"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Struktur Organisasi
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => handleDropdownToggle("mobile-solusi")}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm font-medium border-b border-gray-100"
              >
                Solusi
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeDropdown === "mobile-solusi" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-solusi" && (
                <ul className="pl-4 py-2 space-y-1">
                  <li>
                    <a
                      href="#solusi-digital"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Solusi Digital
                    </a>
                  </li>
                  <li>
                    <a
                      href="#telekomunikasi"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Telekomunikasi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#internet"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Internet & Data
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => handleDropdownToggle("mobile-hubungan")}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm font-medium border-b border-gray-100"
              >
                Hubungan Investor
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeDropdown === "mobile-hubungan" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-hubungan" && (
                <ul className="pl-4 py-2 space-y-1">
                  <li>
                    <a
                      href="#laporan-keuangan"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Laporan Keuangan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#saham"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Informasi Saham
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dividen"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Dividen
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => handleDropdownToggle("mobile-berita")}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm font-medium border-b border-gray-100"
              >
                Berita
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeDropdown === "mobile-berita" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-berita" && (
                <ul className="pl-4 py-2 space-y-1">
                  <li>
                    <a
                      href="#berita-terbaru"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Berita Terbaru
                    </a>
                  </li>
                  <li>
                    <a
                      href="#siaran-pers"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Siaran Pers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#media-kit"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Media Kit
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => handleDropdownToggle("mobile-sustainability")}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm font-medium border-b border-gray-100"
              >
                Sustainability
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeDropdown === "mobile-sustainability"
                      ? "rotate-180"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-sustainability" && (
                <ul className="pl-4 py-2 space-y-1">
                  <li>
                    <a
                      href="#lingkungan"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Lingkungan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sosial"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Sosial
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tata-kelola"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Tata Kelola
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="#ppid"
                className="block py-3 text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm font-medium border-b border-gray-100"
              >
                PPID
              </a>
            </li>

            <li>
              <a
                href="#karir"
                className="block py-3 text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm font-medium border-b border-gray-100"
              >
                Karir
              </a>
            </li>

            <li className="pt-4">
              <button
                onClick={() => handleDropdownToggle("mobile-bahasa")}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm font-medium"
              >
                Bahasa
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeDropdown === "mobile-bahasa" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-bahasa" && (
                <ul className="pl-4 py-2 space-y-1">
                  <li>
                    <a
                      href="#id"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      Indonesia
                    </a>
                  </li>
                  <li>
                    <a
                      href="#en"
                      className="block py-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      English
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FrontHeader;
