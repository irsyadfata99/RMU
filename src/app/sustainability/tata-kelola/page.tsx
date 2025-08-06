"use client";

import FrontHeader from "@/app/components/Navbar";
import FrontFooter from "@/app/components/Footer";
import React, { useState } from "react";

type FinancialData = {
  revenue: string;
  programs: string;
  operations: string;
  fundraising: string;
  transparency: string;
};

type FinancialReports = {
  [key: string]: FinancialData;
};

const TataKelolaPage = () => {
  const [activeReport, setActiveReport] = useState<keyof FinancialReports>("2024");
  const [activeGovernanceTab, setActiveGovernanceTab] = useState("structure");

  const financialReports: FinancialReports = {
    "2024": {
      revenue: "Rp 15.2 M",
      programs: "78%",
      operations: "15%",
      fundraising: "7%",
      transparency: "95%",
    },
    "2023": {
      revenue: "Rp 12.8 M",
      programs: "75%",
      operations: "18%",
      fundraising: "7%",
      transparency: "92%",
    },
    "2022": {
      revenue: "Rp 10.1 M",
      programs: "73%",
      operations: "20%",
      fundraising: "7%",
      transparency: "89%",
    },
  };

  const boardMembers = [
    {
      name: "Dr. Sari Wijayanti",
      position: "Ketua Dewan Pengurus",
      background: "Mantan Direktur Kementerian Sosial",
      experience: "25+ tahun",
      expertise: "Kebijakan Sosial & Pembangunan Masyarakat",
    },
    {
      name: "Prof. Ahmad Sutrisno",
      position: "Wakil Ketua",
      background: "Akademisi Universitas Indonesia",
      experience: "30+ tahun",
      expertise: "Ekonomi Pembangunan & CSR",
    },
    {
      name: "Dra. Maya Indrawati",
      position: "Sekretaris",
      background: "Mantan Kepala Dinas Pendidikan",
      experience: "20+ tahun",
      expertise: "Manajemen Pendidikan & Program Sosial",
    },
    {
      name: "Ir. Bambang Hartono",
      position: "Bendahara",
      background: "Certified Public Accountant",
      experience: "22+ tahun",
      expertise: "Audit & Manajemen Keuangan",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <FrontHeader />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-indigo-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-blue-300 rounded-full opacity-35 animate-bounce" style={{ animationDelay: "2s" }}></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <div className="mb-8">
            <span className="inline-block px-8 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
              🏛️ <span className="text-blue-300">Transparansi & Akuntabilitas</span>
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Tata Kelola
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Organisasi</span>
          </h1>

          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-12">Komitmen kami terhadap transparansi, akuntabilitas, dan tata kelola yang baik dalam setiap aspek operasional untuk kepercayaan publik</p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">Lihat Laporan</button>
            <button className="border-2 border-gray-200 text-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 hover:text-purple-900 transition-all duration-300">Struktur Organisasi</button>
          </div>
        </div>
      </div>

      {/* Governance Principles */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Prinsip Tata Kelola</h2>
            <p className="text-lg text-gray-600">Fondasi utama dalam menjalankan misi sosial kami</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparansi</h3>
              <p className="text-gray-600">Keterbukaan informasi dalam setiap kegiatan dan penggunaan dana</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Akuntabilitas</h3>
              <p className="text-gray-600">Pertanggungjawaban penuh atas setiap program dan penggunaan sumber daya</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integritas</h3>
              <p className="text-gray-600">Konsistensi dalam menjalankan nilai-nilai dan komitmen organisasi</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partisipatif</h3>
              <p className="text-gray-600">Melibatkan stakeholder dalam pengambilan keputusan strategis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Governance Tabs */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Struktur Tata Kelola</h2>
            <p className="text-lg text-gray-600">Sistem pengawasan dan pengendalian organisasi</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b">
            <button
              className={`px-8 py-4 font-medium transition-colors ${activeGovernanceTab === "structure" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => setActiveGovernanceTab("structure")}
            >
              Struktur Organisasi
            </button>
            <button className={`px-8 py-4 font-medium transition-colors ${activeGovernanceTab === "board" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`} onClick={() => setActiveGovernanceTab("board")}>
              Dewan Pengurus
            </button>
            <button
              className={`px-8 py-4 font-medium transition-colors ${activeGovernanceTab === "oversight" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => setActiveGovernanceTab("oversight")}
            >
              Pengawasan
            </button>
          </div>

          {/* Tab Content */}
          {activeGovernanceTab === "structure" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Struktur Organisasi Terpadu</h3>
                <p className="text-gray-700 leading-relaxed text-lg">Sistem tata kelola yang terstruktur dengan pemisahan fungsi yang jelas antara pengawasan, pengarahan strategis, dan operasional harian.</p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">🏛️ Dewan Pengawas</h4>
                    <p className="text-gray-700">Pengawasan strategis dan compliance</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">👥 Dewan Pengurus</h4>
                    <p className="text-gray-700">Pengarahan kebijakan dan strategi</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">⚙️ Manajemen Eksekutif</h4>
                    <p className="text-gray-700">Implementasi operasional harian</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">🔍 Unit Audit Internal</h4>
                    <p className="text-gray-700">Monitoring dan evaluasi internal</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏛️</div>
                    <p className="text-blue-700 font-medium">Good Governance</p>
                    <p className="text-blue-600 text-sm">Structured Organization</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">📋</span>
                </div>
              </div>
            </div>
          )}

          {activeGovernanceTab === "board" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Dewan Pengurus</h3>
                <p className="text-lg text-gray-600">Profil lengkap anggota dewan pengurus organisasi</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {boardMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl font-bold">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                        <p className="text-blue-600 font-medium mb-3">{member.position}</p>

                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-500">🏢</span>
                            <span>{member.background}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-green-500">⏰</span>
                            <span>Pengalaman: {member.experience}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-purple-500">🎯</span>
                            <span>{member.expertise}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeGovernanceTab === "oversight" && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Sistem Pengawasan</h3>
                <p className="text-gray-700 leading-relaxed text-lg">Mekanisme pengawasan berlapis untuk memastikan compliance dan efektivitas program</p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-900 mb-2">📊 Audit Eksternal</h4>
                    <p className="text-gray-600">Audit tahunan oleh KAP independen terakreditasi</p>
                    <div className="mt-3 text-sm text-blue-600">✓ Dilaksanakan setiap tahun</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                    <h4 className="font-bold text-gray-900 mb-2">🔍 Audit Internal</h4>
                    <p className="text-gray-600">Pemeriksaan rutin proses dan prosedur internal</p>
                    <div className="mt-3 text-sm text-green-600">✓ Monitoring berkelanjutan</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                    <h4 className="font-bold text-gray-900 mb-2">👥 Komite Audit</h4>
                    <p className="text-gray-600">Komite independen untuk pengawasan keuangan</p>
                    <div className="mt-3 text-sm text-purple-600">✓ Rapat triwulan</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
                    <h4 className="font-bold text-gray-900 mb-2">🎯 Evaluasi Kinerja</h4>
                    <p className="text-gray-600">Assessment berkala terhadap pencapaian program</p>
                    <div className="mt-3 text-sm text-orange-600">✓ Review bulanan</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Compliance & Risk Management</h3>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Kepatuhan Regulasi</h4>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Izin Operasional</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Aktif</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">NPWP & PKP</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Terdaftar</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Laporan SPT</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Up to Date</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Audit Compliance</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Excellent</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Risk Mitigation</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Risk Assessment Framework</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Crisis Management Protocol</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Insurance Coverage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Business Continuity Plan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Financial Transparency */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparansi Keuangan</h2>
            <p className="text-lg text-gray-600">Akuntabilitas penggunaan dana untuk program sosial</p>
          </div>

          {/* Year Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg">
              {(Object.keys(financialReports) as Array<keyof FinancialReports>).map((year) => (
                <button key={year} className={`px-6 py-3 rounded-full font-medium transition-all ${activeReport === year ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-blue-600"}`} onClick={() => setActiveReport(year)}>
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Financial Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold text-gray-900">{financialReports[activeReport].revenue}</div>
                <div className="text-gray-600">Total Pendapatan</div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-blue-600">{financialReports[activeReport].programs}</div>
                <div className="text-gray-600">Dana Program</div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-2">⚙️</div>
                <div className="text-2xl font-bold text-green-600">{financialReports[activeReport].operations}</div>
                <div className="text-gray-600">Operasional</div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-2">📢</div>
                <div className="text-2xl font-bold text-purple-600">{financialReports[activeReport].fundraising}</div>
                <div className="text-gray-600">Fundraising</div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-2">🔍</div>
                <div className="text-2xl font-bold text-orange-600">{financialReports[activeReport].transparency}</div>
                <div className="text-gray-600">Skor Transparansi</div>
              </div>
            </div>
          </div>

          {/* Detailed Financial Breakdown */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Alokasi Dana {activeReport}</h3>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">Program Sosial</span>
                      <span className="font-bold text-blue-600">{financialReports[activeReport].programs}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: financialReports[activeReport].programs }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">Operasional</span>
                      <span className="font-bold text-green-600">{financialReports[activeReport].operations}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{ width: financialReports[activeReport].operations }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">Fundraising</span>
                      <span className="font-bold text-purple-600">{financialReports[activeReport].fundraising}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{ width: financialReports[activeReport].fundraising }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">📊 Highlights {activeReport}</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Efisiensi penggunaan dana program mencapai {financialReports[activeReport].programs}</li>
                    <li>• Biaya operasional terkendali di {financialReports[activeReport].operations}</li>
                    <li>• Transparansi keuangan mencapai skor {financialReports[activeReport].transparency}</li>
                    <li>• Audit eksternal tanpa temuan material</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="w-64 h-64 relative mb-6">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeDasharray={`${parseInt(financialReports[activeReport].programs)} ${100 - parseInt(financialReports[activeReport].programs)}`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{financialReports[activeReport].programs}</div>
                      <div className="text-sm text-gray-600">ke Program</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-bold text-gray-900 mb-2">Komitmen Transparansi</h4>
                  <p className="text-gray-600 text-sm">Setiap rupiah donasi dikelola dengan akuntabilitas tinggi untuk dampak maksimal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Document Downloads */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dokumen Publik</h2>
            <p className="text-lg text-gray-600">Akses dokumen resmi untuk transparansi penuh</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Laporan Keuangan</h3>
              <p className="text-gray-600 mb-6">Laporan keuangan audited tahunan 2020-2024</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">Download PDF</button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Laporan Tahunan</h3>
              <p className="text-gray-600 mb-6">Annual report komprehensif program dan dampak</p>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">Download PDF</button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AD/ART</h3>
              <p className="text-gray-600 mb-6">Anggaran Dasar & Anggaran Rumah Tangga</p>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">Download PDF</button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kode Etik</h3>
              <p className="text-gray-600 mb-6">Pedoman etika dan integritas organisasi</p>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">Download PDF</button>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Laporan Audit</h3>
              <p className="text-gray-600 mb-6">Hasil audit eksternal dan internal</p>
              <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors">Download PDF</button>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📜</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legalitas</h3>
              <p className="text-gray-600 mb-6">Dokumen izin dan legalitas organisasi</p>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">Download PDF</button>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="py-16 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Penghargaan & Pengakuan</h2>
            <p className="text-lg text-gray-200">Apresiasi atas komitmen transparansi dan dampak sosial</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Best NGO Transparency</h3>
              <p className="text-gray-200 text-sm mb-2">Indonesia Philanthropy Awards 2024</p>
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-5xl mb-4">🥇</div>
              <h3 className="text-xl font-bold mb-2">Excellence in Governance</h3>
              <p className="text-gray-200 text-sm mb-2">CSR Awards Indonesia 2023</p>
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">Social Impact Champion</h3>
              <p className="text-gray-200 text-sm mb-2">United Nations Recognition 2023</p>
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2">Platinum Certification</h3>
              <p className="text-gray-200 text-sm mb-2">GuideStar Transparency Seal 2024</p>
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">Lihat Semua Penghargaan</button>
          </div>
        </div>
      </div>

      {/* Stakeholder Feedback */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Feedback Stakeholder</h2>
            <p className="text-lg text-gray-600">Suara dari berbagai pihak yang berkolaborasi dengan kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AP</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ahmad Priyadi</h4>
                  <p className="text-gray-600 text-sm">Direktur Kementerian Sosial</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">"Transparansi dan akuntabilitas organisasi ini sangat menginspirasi. Tata kelola yang baik terlihat dari setiap aspek operasional mereka."</p>
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-500 text-xs">Government Partnership</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Maria Santoso</h4>
                  <p className="text-gray-600 text-sm">CSR Director PT. Indonesia Tbk</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">"Kerjasama dengan organisasi ini memberikan kepercayaan penuh. Laporan yang detail dan transparan membuat partnership kami sangat nyaman."</p>
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-500 text-xs">Corporate Partner</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">DR</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Ratna</h4>
                  <p className="text-gray-600 text-sm">Independent Auditor</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">"Standar tata kelola organisasi ini setara dengan korporasi terbaik. Sistem internal control dan compliance sangat baik."</p>
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-500 text-xs">External Auditor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Whistleblowing */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Saluran Komunikasi & Whistleblowing</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">Kami berkomitmen pada transparansi penuh. Jika Anda memiliki pertanyaan, saran, atau ingin melaporkan sesuatu, jangan ragu untuk menghubungi kami.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-4">Hotline Transparansi</h3>
              <p className="text-blue-100 mb-6">Layanan 24/7 untuk pertanyaan seputar transparansi dan akuntabilitas organisasi.</p>
              <div className="space-y-2 text-blue-100">
                <div>📞 +62 21 1234-5678</div>
                <div>✉️ transparansi@sosialimpact.org</div>
                <div>💬 WhatsApp: +62 812-3456-7890</div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Whistleblowing System</h3>
              <p className="text-blue-100 mb-6">Saluran aman dan rahasia untuk melaporkan dugaan pelanggaran atau misconduct.</p>
              <div className="space-y-2 text-blue-100">
                <div>🔐 Portal Online Anonim</div>
                <div>📧 whistleblow@sosialimpact.org</div>
                <div>📮 P.O. Box 12345 Jakarta</div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Komitmen Perlindungan</h3>
            <div className="grid md:grid-cols-3 gap-6 text-blue-100">
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="font-medium">Identitas Terlindungi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-medium">Respon Cepat</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔍</div>
                <div className="font-medium">Investigasi Menyeluruh</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FrontFooter />
    </div>
  );
};

export default TataKelolaPage;
