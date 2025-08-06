"use client";

import React from "react";
import FrontHeader from "../../components/Navbar";
import FrontFooter from "../../components/Footer";

const SinergitasPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <FrontHeader />
      {/* Hero Section with Split Design */}
      <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 mt-12">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
              🤝 <span className="text-cyan-300">Kolaborasi Lintas Divisi</span>
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Kekuatan dalam <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Sinergitas</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">Membangun program pemberdayaan yang berkelanjutan melalui kolaborasi strategis antar divisi untuk menciptakan dampak sosial yang maksimal</p>
        </div>

        {/* Floating connection nodes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-pink-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-purple-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-indigo-400 rounded-full opacity-60"></div>
      </div>

      {/* Simplified Division Overview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ekosistem Kolaborasi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Lima divisi utama yang bekerja sinergis dalam setiap program pemberdayaan</p>
          </div>

          {/* Simplified Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Center - Program Terintegrasi */}
            <div className="lg:col-start-2 lg:row-start-2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Program Terintegrasi</h3>
                <p className="text-sm opacity-90">Pusat kolaborasi semua divisi</p>
              </div>
            </div>

            {/* Top Row - Pendidikan & Teknologi */}
            <div className="lg:col-start-1 lg:row-start-1">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl">💻</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Divisi Teknologi</h3>
                </div>
                <p className="text-sm text-gray-600">Digitalisasi, sistem informasi, dan inovasi teknologi sosial</p>
              </div>
            </div>

            <div className="lg:col-start-3 lg:row-start-1">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">📚</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Divisi Pendidikan</h3>
                </div>
                <p className="text-sm text-gray-600">Kurikulum, pelatihan, dan capacity building untuk semua program</p>
              </div>
            </div>

            {/* Middle Row - Kesehatan & Ekonomi */}
            <div className="lg:col-start-1 lg:row-start-3">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">🏥</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Divisi Kesehatan</h3>
                </div>
                <p className="text-sm text-gray-600">Program kesehatan masyarakat dan akses layanan kesehatan dasar</p>
              </div>
            </div>

            <div className="lg:col-start-3 lg:row-start-3">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">💰</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Divisi Ekonomi</h3>
                </div>
                <p className="text-sm text-gray-600">UMKM, koperasi, dan program pemberdayaan ekonomi masyarakat</p>
              </div>
            </div>

            {/* Bottom - Lingkungan */}
            <div className="lg:col-start-2 lg:row-start-4 md:col-span-2 lg:col-span-1 mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-600 text-xl">🌱</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Divisi Lingkungan</h3>
                </div>
                <p className="text-sm text-gray-600">Konservasi, sustainability, dan program ramah lingkungan</p>
              </div>
            </div>
          </div>

          {/* Simple Connection Indicator */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-gray-600 font-medium">Kolaborasi Aktif</span>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Story - Program Integration */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kisah Sukses Kolaborasi</h2>
            <p className="text-lg text-gray-600">Program terintegrasi yang menunjukkan kekuatan sinergitas</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">🏆</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Program Desa Mandiri Berkelanjutan</h3>
                    <p className="text-purple-600 font-medium">Kolaborasi 5 Divisi • 2023-2024</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Program flagship yang mengintegrasikan seluruh kekuatan divisi untuk mentransformasi Desa Sukamaju menjadi model desa mandiri dengan pendekatan holistik pemberdayaan masyarakat.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Keluarga Terdampak</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-gray-600">Peningkatan Pendapatan</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">12</div>
                    <div className="text-sm text-gray-600">Bulan Implementasi</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600">Sustainability Rate</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Kontribusi Setiap Divisi:</h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm">📚</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Pendidikan</h5>
                      <p className="text-sm text-gray-600">Pelatihan literasi digital & kewirausahaan untuk 200 warga</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm">🏥</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Kesehatan</h5>
                      <p className="text-sm text-gray-600">Pusat kesehatan desa & program gizi balita terintegrasi</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-600 text-sm">💰</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Ekonomi</h5>
                      <p className="text-sm text-gray-600">15 UMKM baru & koperasi desa dengan omzet Rp 500 juta/bulan</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 text-sm">🌱</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Lingkungan</h5>
                      <p className="text-sm text-gray-600">Bank sampah, sistem biogas, & urban farming berkelanjutan</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 text-sm">💻</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Teknologi</h5>
                      <p className="text-sm text-gray-600">Sistem informasi desa & e-commerce platform untuk UMKM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Process */}
      <div className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proses Kolaborasi</h2>
            <p className="text-lg text-gray-300">Metodologi teruji untuk menciptakan sinergitas yang efektif</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">1. Identifikasi Masalah</h3>
              <p className="text-gray-300 text-sm">Assessment holistik untuk memahami kebutuhan masyarakat dari berbagai perspektif</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">2. Sinergi Planning</h3>
              <p className="text-gray-300 text-sm">Workshop lintas divisi untuk merancang program terintegrasi dengan timeline yang jelas</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">3. Implementasi Paralel</h3>
              <p className="text-gray-300 text-sm">Eksekusi program secara bersamaan dengan koordinasi ketat dan monitoring real-time</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">4. Evaluasi Impact</h3>
              <p className="text-gray-300 text-sm">Measurement dampak terintegrasi dan pembelajaran untuk perbaikan program berikutnya</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Bergabung dalam Sinergitas</h2>
          <p className="text-lg text-gray-600 mb-8">Jadilah bagian dari kolaborasi yang menciptakan perubahan nyata. Setiap keahlian memiliki peran penting dalam ekosistem pemberdayaan.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-shadow duration-300 cursor-pointer">Mulai Berkolaborasi</div>
            <div className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors duration-300 cursor-pointer">Pelajari Lebih Lanjut</div>
          </div>
        </div>
      </div>
      <FrontFooter />
    </div>
  );
};

export default SinergitasPage;
