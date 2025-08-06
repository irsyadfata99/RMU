"use client";

import FrontHeader from "@/app/components/Navbar";
import FrontFooter from "@/app/components/Footer";
import React, { useState } from "react";

const SosialPage = () => {
  const [donationAmount, setDonationAmount] = useState(100000);

  const calculateImpact = (amount: number) => {
    return {
      scholarships: Math.floor(amount / 50000),
      healthServices: Math.floor(amount / 25000),
      businessSupport: Math.floor(amount / 100000),
    };
  };

  const impact = calculateImpact(donationAmount);

  return (
    <div className="min-h-screen bg-white">
      <FrontHeader />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-rose-900 via-pink-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Floating Hearts and Community Icons */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-rose-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-pink-300 rounded-full opacity-35 animate-bounce" style={{ animationDelay: "2s" }}></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <div className="mb-8">
            <span className="inline-block px-8 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
              ❤️ <span className="text-pink-300">Dampak Sosial Berkelanjutan</span>
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Membangun Masyarakat
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400">yang Berdaya</span>
          </h1>

          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Menciptakan perubahan sosial yang berkelanjutan melalui pemberdayaan masyarakat, program kesejahteraan, dan pengembangan kapasitas untuk kehidupan yang lebih baik
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">Mulai Membantu</button>
            <button className="border-2 border-gray-200 text-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 hover:text-purple-900 transition-all duration-300">Lihat Program</button>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dampak Nyata di Masyarakat</h2>
            <p className="text-lg text-gray-600">Pencapaian konkret dalam meningkatkan kesejahteraan sosial</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <div className="text-4xl font-bold text-rose-600 mb-2">25,000+</div>
              <div className="text-gray-600 font-medium">Orang Terbantu</div>
              <div className="text-sm text-gray-500 mt-1">Across all programs</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">3,500</div>
              <div className="text-gray-600 font-medium">Keluarga Sejahtera</div>
              <div className="text-sm text-gray-500 mt-1">Improved living conditions</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">8,200</div>
              <div className="text-gray-600 font-medium">Beasiswa Pendidikan</div>
              <div className="text-sm text-gray-500 mt-1">From elementary to university</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Program Kesehatan</div>
              <div className="text-sm text-gray-500 mt-1">Community health initiatives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Social Programs */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Pemberdayaan Sosial</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Inisiatif komprehensif untuk menciptakan masyarakat yang mandiri, sejahtera, dan berdaya</p>
          </div>

          <div className="space-y-20">
            {/* Program 1: Education & Scholarship */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Akses Pendidikan untuk Semua</h3>
                    <p className="text-blue-600 font-medium">Program Beasiswa & Pemberdayaan Pendidikan</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Memberikan akses pendidikan berkualitas bagi anak-anak kurang mampu melalui beasiswa, fasilitas belajar, dan program pengembangan karakter untuk masa depan yang lebih cerah.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Beasiswa penuh SD hingga Perguruan Tinggi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700">Fasilitas belajar dan perpustakaan komunitas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Program mentoring dan bimbingan karir</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">2,800</div>
                    <div className="text-sm text-blue-700">Penerima Beasiswa Aktif</div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-600">98%</div>
                    <div className="text-sm text-indigo-700">Tingkat Kelulusan</div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">Daftar Beasiswa</button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">Lihat Syarat</button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🎓</div>
                    <p className="text-blue-700 font-medium">Education First</p>
                    <p className="text-blue-600 text-sm">Building Future Leaders</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">📖</span>
                </div>
              </div>
            </div>

            {/* Program 2: Healthcare Access */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏥</div>
                    <p className="text-emerald-700 font-medium">Healthcare for All</p>
                    <p className="text-emerald-600 text-sm">Accessible Medical Services</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">💊</span>
                </div>
              </div>

              <div className="space-y-6 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">🩺</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Kesehatan Masyarakat</h3>
                    <p className="text-emerald-600 font-medium">Layanan Kesehatan Terjangkau</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">Menyediakan akses layanan kesehatan dasar yang terjangkau dan berkualitas melalui klinik komunitas, program imunisasi, dan edukasi kesehatan preventif.</p>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Layanan Kesehatan Tersedia:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Pemeriksaan Umum</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Program Imunisasi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Kesehatan Ibu & Anak</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>Kesehatan Mental</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span>Gizi & Nutrisi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span>Edukasi Preventif</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-600">45 Unit</div>
                    <div className="text-sm text-emerald-700">Klinik Komunitas</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">12,500</div>
                    <div className="text-sm text-green-700">Pasien Terlayani/bulan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program 3: Economic Empowerment */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">💼</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Pemberdayaan Ekonomi</h3>
                    <p className="text-amber-600 font-medium">Program Kewirausahaan & Kemandirian</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">Mengembangkan kemampuan ekonomi masyarakat melalui pelatihan keterampilan, modal usaha mikro, dan pembinaan kewirausahaan untuk kemandirian finansial.</p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-gray-900">Usaha Mikro Berkembang</h5>
                      <span className="text-2xl font-bold text-amber-600">1,250+</span>
                    </div>
                    <p className="text-sm text-gray-600">UMKM yang berhasil berkembang dengan bantuan modal dan pembinaan</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-gray-900">Program Pelatihan</h5>
                      <span className="text-2xl font-bold text-orange-600">85</span>
                    </div>
                    <p className="text-sm text-gray-600">Jenis pelatihan keterampilan dan kewirausahaan tersedia</p>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-gray-900">Peningkatan Income</h5>
                      <span className="text-2xl font-bold text-pink-600">180%</span>
                    </div>
                    <p className="text-sm text-gray-600">Rata-rata peningkatan pendapatan peserta program</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">Daftar Pelatihan</button>
                  <button className="border border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors">Info Modal Usaha</button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🚀</div>
                    <p className="text-amber-700 font-medium">Economic Growth</p>
                    <p className="text-amber-600 text-sm">Empowering Communities</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">💰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Kisah Inspiratif</h2>
            <p className="text-lg text-gray-200">Perubahan nyata dari program pemberdayaan sosial</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">DW</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Dewi Wijayanti</h4>
                  <p className="text-gray-200 text-sm">Penerima Beasiswa, Bandung</p>
                </div>
              </div>
              <p className="text-gray-100 leading-relaxed mb-4">"Berkat beasiswa ini, saya bisa kuliah kedokteran. Sekarang saya dokter muda yang siap mengabdi untuk masyarakat. Mimpi jadi kenyataan!"</p>
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-200 text-xs">Graduate Success Story</span>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">HS</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Hadi Santoso</h4>
                  <p className="text-gray-200 text-sm">Pengusaha UMKM, Cimahi</p>
                </div>
              </div>
              <p className="text-gray-100 leading-relaxed mb-4">"Dari usaha keripik rumahan, sekarang punya 15 karyawan! Program pelatihan dan modal usaha benar-benar mengubah hidup keluarga saya."</p>
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-200 text-xs">Business Growth Story</span>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Sari Mulyani</h4>
                  <p className="text-gray-200 text-sm">Ibu Rumah Tangga, Sukabumi</p>
                </div>
              </div>
              <p className="text-gray-100 leading-relaxed mb-4">"Klinik komunitas menyelamatkan anak saya. Pelayanan bagus dan terjangkau. Sekarang keluarga lebih tenang soal kesehatan."</p>
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-200 text-xs">Healthcare Impact Story</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">Lihat Semua Kisah Inspiratif</button>
          </div>
        </div>
      </div>

      {/* How to Get Involved */}
      <div className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bergabung Membuat Perubahan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Setiap kontribusi Anda, sekecil apapun, memiliki kekuatan untuk mengubah hidup seseorang</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-500">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600 text-sm mb-6">Berikan waktu dan tenaga untuk kegiatan sosial</p>
              <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors">Join Volunteer</button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Donasi</h3>
              <p className="text-gray-600 text-sm mb-6">Dukung program dengan kontribusi dana</p>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">Mulai Donasi</button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Share Impact</h3>
              <p className="text-gray-600 text-sm mb-6">Sebarkan awareness ke lingkungan sekitar</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">Share Now</button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Partnership</h3>
              <p className="text-gray-600 text-sm mb-6">Kerjasama CSR untuk dampak lebih besar</p>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">Partner With Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Calculator */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Hitung Dampak Kontribusi Anda</h2>
            <p className="text-gray-100 mb-8">Lihat berapa banyak orang yang bisa Anda bantu dengan kontribusi Anda</p>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="mb-6">
                <label className="block text-gray-100 text-sm font-medium mb-4">Jumlah Donasi (Rp)</label>
                <div className="relative">
                  <input
                    type="range"
                    min="25000"
                    max="1000000"
                    step="25000"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-pink-300 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-200 mt-2">
                    <span>25K</span>
                    <span className="text-2xl font-bold text-white">{donationAmount.toLocaleString("id-ID")}</span>
                    <span>1M</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎓</div>
                  <div className="text-3xl font-bold text-white mb-1">{impact.scholarships}</div>
                  <div className="text-gray-200 text-sm">Anak Bersekolah</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-2">🏥</div>
                  <div className="text-3xl font-bold text-white mb-1">{impact.healthServices}</div>
                  <div className="text-gray-200 text-sm">Layanan Kesehatan</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-2">💼</div>
                  <div className="text-3xl font-bold text-white mb-1">{impact.businessSupport}</div>
                  <div className="text-gray-200 text-sm">UMKM Terbantu</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">Donasi Sekarang</button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">Pelajari Lebih Lanjut</button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Mari Bersama Membangun Masa Depan yang Lebih Baik</h2>
          <p className="text-xl text-gray-100 mb-12 leading-relaxed">
            Bergabunglah dengan ribuan orang yang telah mempercayai kami untuk menciptakan dampak sosial yang berkelanjutan. Setiap langkah kecil Anda adalah bagian dari perubahan besar.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4">Mulai Hari Ini</h3>
              <p className="text-gray-100 mb-6">Tidak perlu menunggu besok untuk memulai kebaikan. Setiap hari adalah kesempatan untuk membuat perbedaan.</p>
              <button className="bg-white text-rose-600 px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300">Mulai Berkontribusi</button>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-2xl font-bold mb-4">Dampak Berkelanjutan</h3>
              <p className="text-gray-100 mb-6">Investasi Anda hari ini akan terus memberikan manfaat untuk generasi mendatang. Itulah kekuatan perubahan sosial.</p>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-rose-600 transition-all duration-300">Lihat Dampak Kami</button>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-lg font-medium mb-6">"Kebahagiaan terbesar dalam hidup adalah ketika kita bisa membuat orang lain bahagia"</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>
              <span className="text-gray-200">25,000+ orang terbantu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pink-400">Sosial Impact</h3>
              <p className="text-gray-300 leading-relaxed">Menciptakan perubahan sosial yang berkelanjutan melalui program pemberdayaan masyarakat.</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                  <span className="text-white">📧</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-white">📱</span>
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                  <span className="text-white">💬</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gray-200">Program</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Beasiswa Pendidikan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Kesehatan Masyarakat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Pemberdayaan Ekonomi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Program Volunteer
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gray-200">Tentang Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Visi & Misi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Tim Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Laporan Keuangan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Karir
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gray-200">Hubungi</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <span className="text-pink-400">📍</span>
                  <span>Jl. Kebaikan No. 123, Bandung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-400">📞</span>
                  <span>+62 22 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-400">✉️</span>
                  <span>info@sosialimpact.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">© 2024 Sosial Impact. Semua hak dilindungi.</p>
              <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Kebijakan Privasi
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Syarat & Ketentuan
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrontFooter />
    </div>
  );
};

export default SosialPage;
