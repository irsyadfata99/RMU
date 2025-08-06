"use client";

import React from "react";
import FrontHeader from "../../components/Navbar";
import FrontFooter from "../../components/Footer";

const LingkunganPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <FrontHeader />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Floating Nature Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-green-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-emerald-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-teal-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-green-300 rounded-full opacity-35 animate-pulse" style={{ animationDelay: "2s" }}></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <div className="mb-8">
            <span className="inline-block px-8 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
              🌱 <span className="text-emerald-300">Keberlanjutan Lingkungan</span>
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Menjaga Bumi untuk
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400">Generasi Mendatang</span>
          </h1>

          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12">Membangun masa depan yang berkelanjutan melalui inovasi lingkungan, konservasi alam, dan pemberdayaan masyarakat untuk hidup harmonis dengan alam</p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">Mulai Aksi Hijau</button>
            <button className="border-2 border-emerald-400 text-emerald-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 hover:text-green-900 transition-all duration-300">Pelajari Program</button>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dampak Nyata untuk Lingkungan</h2>
            <p className="text-lg text-gray-600">Pencapaian konkret dalam menjaga kelestarian alam</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌳</span>
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">50,000+</div>
              <div className="text-gray-600 font-medium">Pohon Ditanam</div>
              <div className="text-sm text-gray-500 mt-1">Dalam 3 tahun terakhir</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💧</span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200</div>
              <div className="text-gray-600 font-medium">Ton CO₂ Dikurangi</div>
              <div className="text-sm text-gray-500 mt-1">Emisi karbon per tahun</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">♻️</span>
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Daur Ulang</div>
              <div className="text-sm text-gray-500 mt-1">Dari total sampah komunitas</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏘️</span>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Komunitas Hijau</div>
              <div className="text-sm text-gray-500 mt-1">Tersebar di seluruh wilayah</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Programs */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Keberlanjutan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Inisiatif komprehensif untuk menciptakan ekosistem yang berkelanjutan dan ramah lingkungan</p>
          </div>

          <div className="space-y-20">
            {/* Program 1: Reforestation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">🌲</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Hutan Kembali Hijau</h3>
                    <p className="text-emerald-600 font-medium">Program Reforestasi Nasional</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">Mengembalikan tutupan hutan yang hilang melalui penanaman pohon massal, konservasi habitat, dan pemberdayaan masyarakat lokal sebagai penjaga hutan berkelanjutan.</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">2,500 Ha</div>
                    <div className="text-sm text-green-700">Lahan Direforestasi</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-600">95%</div>
                    <div className="text-sm text-emerald-700">Tingkat Keberhasilan</div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">Ikut Tanam Pohon</button>
                  <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">Lihat Lokasi</button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🌳</div>
                    <p className="text-green-700 font-medium">Visualisasi Program</p>
                    <p className="text-green-600 text-sm">Reforestasi & Konservasi</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🎯</span>
                </div>
              </div>
            </div>

            {/* Program 2: Waste Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">♻️</div>
                    <p className="text-blue-700 font-medium">Sistem Pengelolaan</p>
                    <p className="text-blue-600 text-sm">Sampah Terpadu</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">💧</span>
                </div>
              </div>

              <div className="space-y-6 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">🗂️</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Zero Waste Community</h3>
                    <p className="text-blue-600 font-medium">Pengelolaan Sampah Berkelanjutan</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">Membangun sistem pengelolaan sampah terintegrasi dari hulu ke hilir dengan fokus pada reduce, reuse, recycle, dan pengembangan ekonomi sirkular di tingkat komunitas.</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Bank sampah digital dengan reward system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700">Pusat daur ulang dan upcycling kreatif</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700">Edukasi dan pelatihan waste management</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">300 Ton</div>
                    <div className="text-sm text-blue-700">Sampah Didaur Ulang</div>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-600">75 Unit</div>
                    <div className="text-sm text-cyan-700">Bank Sampah Aktif</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program 3: Renewable Energy */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Energi Bersih Mandiri</h3>
                    <p className="text-orange-600 font-medium">Transisi Energi Terbarukan</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">Mengembangkan infrastruktur energi terbarukan skala komunitas dengan teknologi solar panel, biogas, dan mikro hidro untuk menciptakan kemandirian energi berkelanjutan.</p>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Target Energi Bersih 2025:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Solar Panel Installation</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-16 h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600">80%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Biogas Community</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-12 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600">60%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Micro Hydro Power</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-8 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600">40%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🔋</div>
                    <p className="text-orange-700 font-medium">Clean Energy</p>
                    <p className="text-orange-600 text-sm">Infrastructure</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">☀️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Impact */}
      <div className="py-16 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Testimoni Masyarakat</h2>
            <p className="text-lg text-emerald-200">Suara dari komunitas yang merasakan manfaat langsung</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RS</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Rina Sari</h4>
                  <p className="text-emerald-200 text-sm">Ketua RT 05, Bandung</p>
                </div>
              </div>
              <p className="text-emerald-100 leading-relaxed">"Program bank sampah mengubah mindset warga. Sekarang sampah bukan masalah, tapi sumber income. Lingkungan bersih, ekonomi juga naik!"</p>
              <div className="flex text-yellow-400 text-sm mt-4">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">BW</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Budi Wahyudi</h4>
                  <p className="text-emerald-200 text-sm">Petani, Sukabumi</p>
                </div>
              </div>
              <p className="text-emerald-100 leading-relaxed">"Biogas dari kotoran ternak jadi solusi energi rumah tangga. Hemat gas elpiji dan ramah lingkungan. Terima kasih programnya!"</p>
              <div className="flex text-yellow-400 text-sm mt-4">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SA</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Siti Aminah</h4>
                  <p className="text-emerald-200 text-sm">Ibu Rumah Tangga, Cimahi</p>
                </div>
              </div>
              <p className="text-emerald-100 leading-relaxed">"Urban farming di pekarangan rumah jadi hobi sekaligus sumber makanan sehat keluarga. Anak-anak juga jadi lebih cinta lingkungan."</p>
              <div className="flex text-yellow-400 text-sm mt-4">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bergabung Bersama Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Setiap langkah kecil menuju keberlanjutan adalah kontribusi besar untuk masa depan bumi</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600 text-sm mb-6">Jadilah relawan dalam berbagai kegiatan lingkungan</p>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">Daftar Volunteer</button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Donasi</h3>
              <p className="text-gray-600 text-sm mb-6">Dukung program dengan kontribusi finansial</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">Mulai Donasi</button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Spread Awareness</h3>
              <p className="text-gray-600 text-sm mb-6">Sebarkan kesadaran lingkungan di sekitar Anda</p>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">Share Campaign</button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600 text-sm mb-6">Kolaborasi untuk dampak yang lebih besar</p>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">Ajukan Kerjasama</button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Newsletter */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Tetap Terhubung</h2>
          <p className="text-lg text-gray-600 mb-8">Dapatkan update terbaru tentang program lingkungan dan tips sustainability</p>

          <div className="flex flex-col sm:flex-row max-w-md mx-auto mb-8">
            <input type="email" placeholder="Masukkan email Anda" className="flex-1 px-6 py-4 rounded-l-full sm:rounded-r-none rounded-r-full border border-gray-300 focus:outline-none focus:border-emerald-500" />
            <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-r-full sm:rounded-l-none rounded-l-full font-medium hover:shadow-lg transition-shadow mt-4 sm:mt-0">Subscribe</button>
          </div>

          <div className="flex justify-center space-x-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-200 transition-colors">
              <span className="text-emerald-600 text-xl">📧</span>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-200 transition-colors">
              <span className="text-emerald-600 text-xl">📱</span>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-200 transition-colors">
              <span className="text-emerald-600 text-xl">🌐</span>
            </div>
          </div>
        </div>
      </div>
      <FrontFooter />
    </div>
  );
};

export default LingkunganPage;
