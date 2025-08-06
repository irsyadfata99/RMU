"use client";

import React from "react";
import FrontHeader from "../../components/Navbar";
import FrontFooter from "../../components/Footer";

const PemberdayaanPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <FrontHeader />

      {/* Hero Section with Side-by-Side Layout */}
      <div className="relative overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">🚀 Member Empowerment Program</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Membangun <span className="text-blue-600">Talenta</span> untuk
                <span className="text-indigo-600"> Perubahan Sosial</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sistem pemberdayaan anggota yang komprehensif untuk mengoptimalkan potensi setiap individu dalam menciptakan dampak sosial yang berkelanjutan melalui pengembangan skill dan leadership.
              </p>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-500">Anggota Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">150+</div>
                  <div className="text-sm text-gray-500">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">💡</div>
                    <div className="text-sm font-medium text-gray-700">Skill Development</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm font-medium text-gray-700">Project Leadership</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🤝</div>
                    <div className="text-sm font-medium text-gray-700">Mentoring</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm font-medium text-gray-700">Career Growth</div>
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Cards in Horizontal Scroll */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Unggulan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Lima pilar utama dalam mengembangkan kompetensi anggota untuk menciptakan pemimpin perubahan sosial</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Program Card 1 */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="text-3xl mb-3">🗺️</div>
                  <h3 className="font-bold text-lg mb-2">Skill Mapping</h3>
                </div>
                <p className="text-blue-100 text-sm">Pemetaan komprehensif kompetensi dan potensi setiap anggota</p>
              </div>
            </div>

            {/* Program Card 2 */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="text-3xl mb-3">🧭</div>
                  <h3 className="font-bold text-lg mb-2">Mentoring Hub</h3>
                </div>
                <p className="text-green-100 text-sm">Sistem pendampingan berkelanjutan dari senior ke junior</p>
              </div>
            </div>

            {/* Program Card 3 */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="text-3xl mb-3">🛠️</div>
                  <h3 className="font-bold text-lg mb-2">Project Lab</h3>
                </div>
                <p className="text-purple-100 text-sm">Learning by doing melalui proyek pemberdayaan nyata</p>
              </div>
            </div>

            {/* Program Card 4 */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="font-bold text-lg mb-2">Leadership Academy</h3>
                </div>
                <p className="text-orange-100 text-sm">Pengembangan kepemimpinan untuk dampak sosial</p>
              </div>
            </div>

            {/* Program Card 5 */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="text-3xl mb-3">💻</div>
                  <h3 className="font-bold text-lg mb-2">Digital Impact</h3>
                </div>
                <p className="text-red-100 text-sm">Teknologi digital untuk pemberdayaan masyarakat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials in Magazine Style */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cerita Transformasi Anggota</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Featured Testimonial */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">D</div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-gray-900">Dinda Maharani</h3>
                    <p className="text-blue-600 font-medium">Koordinator Program Pemberdayaan Perempuan</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  "Melalui program skill mapping, saya menemukan passion dalam pemberdayaan perempuan. Sekarang saya memimpin 3 program UMKM untuk ibu-ibu di desa binaan."
                </blockquote>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-800 font-medium">Achievement Highlights:</div>
                  <div className="text-sm text-blue-600 mt-1">• 150+ perempuan terdampak • 3 program UMKM aktif • Volunteer → Coordinator</div>
                </div>
              </div>
            </div>

            {/* Other Testimonials */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">R</div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">Rizki Pratama</h4>
                    <p className="text-sm text-gray-600">Digital Coordinator</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">"Mengembangkan aplikasi monitoring bantuan sosial yang digunakan di 15 desa. Tech for social good is my calling now!"</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">Ayu Lestari</h4>
                    <p className="text-sm text-gray-600">Community Mobilizer</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">"Project-based learning memberikan pengalaman mengelola beasiswa 200 anak. Real impact yang measurable!"</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">F</div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">Fajar Nugroho</h4>
                    <p className="text-sm text-gray-600">Regional Manager</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">"Career path jelas dari fresh member ke regional manager. Sekarang mengelola program kesehatan di 5 provinsi."</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Path Timeline */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jalur Pertumbuhan Anggota</h2>
            <p className="text-gray-600">Perjalanan transformasi dari volunteer hingga leader</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* Stage 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">1</div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-3xl mb-3">🌱</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Fresh Member</h3>
                  <p className="text-gray-600 text-sm mb-4">Orientasi mendalam, skill assessment, dan penempatan program sesuai passion</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>30 hari onboarding</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>Mentor assignment</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">2</div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Active Contributor</h3>
                  <p className="text-gray-600 text-sm mb-4">Leadership dalam proyek, specialized training, dan peer mentoring</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      <span>Project leadership</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      <span>Advanced certifications</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">3</div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-3xl mb-3">👑</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Senior Leader</h3>
                  <p className="text-gray-600 text-sm mb-4">Strategic planning, organizational development, dan ecosystem building</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      <span>Regional management</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      <span>Next-gen mentoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FrontFooter />
    </div>
  );
};

export default PemberdayaanPage;
