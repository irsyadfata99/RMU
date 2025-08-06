"use client";

import React from "react";
import FrontHeader from "../../components/Navbar";
import FrontFooter from "../../components/Footer";

const AkreditasiPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      <FrontHeader />

      {/* Hero Section with Side-by-Side Layout */}
      <div className="relative overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">🏆 Certification Excellence Program</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Standar <span className="text-emerald-600">Kualitas</span> untuk
                <span className="text-teal-600"> Organisasi Terdepan</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sistem akreditasi komprehensif yang memastikan standar kualitas tertinggi dalam setiap aspek organisasi, dari governance hingga impact measurement untuk keberlanjutan jangka panjang.
              </p>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">ISO 9001</div>
                  <div className="text-sm text-gray-500">Quality Standard</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">98%</div>
                  <div className="text-sm text-gray-500">Compliance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">A+</div>
                  <div className="text-sm text-gray-500">Accreditation Grade</div>
                </div>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">📋</div>
                    <div className="text-sm font-medium text-gray-700">Quality Assurance</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🔍</div>
                    <div className="text-sm font-medium text-gray-700">Audit Process</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm font-medium text-gray-700">Performance Metrics</div>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🎖️</div>
                    <div className="text-sm font-medium text-gray-700">Certification</div>
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation Standards Cards */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standar Akreditasi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Lima pilar utama dalam menjamin kualitas dan kredibilitas organisasi sesuai standar internasional</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Standard Card 1 */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="text-3xl mb-3">🏛️</div>
                  <h3 className="font-bold text-lg mb-2">Governance</h3>
                </div>
                <p className="text-emerald-100 text-sm">Tata kelola organisasi yang transparan dan akuntabel</p>
              </div>
            </div>

            {/* Standard Card 2 */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="text-3xl mb-3">💼</div>
                  <h3 className="font-bold text-lg mb-2">Financial Management</h3>
                </div>
                <p className="text-teal-100 text-sm">Pengelolaan keuangan sesuai standar audit internasional</p>
              </div>
            </div>

            {/* Standard Card 3 */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="font-bold text-lg mb-2">Impact Measurement</h3>
                </div>
                <p className="text-cyan-100 text-sm">Sistem monitoring dan evaluasi berbasis data</p>
              </div>
            </div>

            {/* Standard Card 4 */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="text-3xl mb-3">🔐</div>
                  <h3 className="font-bold text-lg mb-2">Risk Management</h3>
                </div>
                <p className="text-green-100 text-sm">Identifikasi dan mitigasi risiko operasional</p>
              </div>
            </div>

            {/* Standard Card 5 */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="text-3xl mb-3">🌍</div>
                  <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                </div>
                <p className="text-blue-100 text-sm">Keberlanjutan program dan dampak jangka panjang</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Results & Recognition */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pencapaian dan Pengakuan</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Featured Achievement */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">🏆</div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-gray-900">ISO 9001:2015 Certification</h3>
                    <p className="text-emerald-600 font-medium">Quality Management System</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  "Organisasi menunjukkan komitmen luar biasa terhadap kualitas dan continuous improvement. Sistem manajemen yang terintegrasi dengan baik."
                </blockquote>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="text-sm text-emerald-800 font-medium">Audit Highlights:</div>
                  <div className="text-sm text-emerald-600 mt-1">• Zero non-conformities • 98% process efficiency • Excellent documentation</div>
                </div>
              </div>
            </div>

            {/* Other Recognitions */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">🌟</div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">GuideStar Platinum Seal</h4>
                    <p className="text-sm text-gray-600">Transparency & Accountability</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">"Outstanding transparency in financial reporting and program outcomes. A model for other organizations."</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">📊</div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">Impact Measurement Certification</h4>
                    <p className="text-sm text-gray-600">Social Value UK</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">"Robust impact measurement framework with clear theory of change and outcome indicators."</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">🛡️</div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">Charity Navigator 4-Star</h4>
                    <p className="text-sm text-gray-600">Financial Health & Accountability</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">"Exceptional financial health with 89% program expense ratio. Highly recommended for donors."</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation Process Timeline */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proses Akreditasi</h2>
            <p className="text-gray-600">Tahapan komprehensif untuk mencapai standar kualitas tertinggi</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* Stage 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">1</div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-3xl mb-3">📋</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Pre-Assessment</h3>
                  <p className="text-gray-600 text-sm mb-4">Gap analysis, dokumentasi sistem, dan persiapan internal audit</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                      <span>60 hari persiapan</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                      <span>System documentation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">2</div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">External Audit</h3>
                  <p className="text-gray-600 text-sm mb-4">Audit eksternal oleh badan sertifikasi terakreditasi internasional</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      <span>5 hari audit intensif</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      <span>Multi-stakeholder review</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">3</div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-3xl mb-3">🎖️</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Certification</h3>
                  <p className="text-gray-600 text-sm mb-4">Pemberian sertifikat dan surveillance audit berkelanjutan</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>3 tahun validitas</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>Annual surveillance</span>
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

export default AkreditasiPage;
