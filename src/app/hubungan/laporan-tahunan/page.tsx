"use client";

import React, { useState, useEffect } from "react";
import FrontHeader from "../../components/Navbar";
import FrontFooter from "../../components/Footer";

// Types for Annual Report Data
interface AnnualReportData {
  id: number;
  tahun: number;
  total_pendapatan: number;
  total_pengeluaran: number;
  laba_bersih: number;
  total_aset: number;
  total_liabilitas: number;
  ekuitas: number;
  dividen: number;
  jumlah_karyawan: number;
  jumlah_cabang: number;
  market_share: number;
  created_at: string;
  updated_at: string;
}

interface BusinessHighlight {
  title: string;
  description: string;
  achievement: string;
  icon: string;
}

interface CompanyMilestone {
  year: number;
  title: string;
  description: string;
}

const LaporanTahunanPage = () => {
  const [annualData, setAnnualData] = useState<AnnualReportData[]>([]);
  const [selectedReport, setSelectedReport] = useState<AnnualReportData | null>(null);
  const [highlights, setHighlights] = useState<BusinessHighlight[]>([]);
  const [milestones, setMilestones] = useState<CompanyMilestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear() - 1);

  // API Configuration
  const API_BASE_URL = process.env.NEXT_PUBLIC_FINANCE_API_URL || "http://localhost:8001/api";
  const API_KEY = process.env.NEXT_PUBLIC_FINANCE_API_KEY || "";

  // Fetch Annual Report Data
  const fetchAnnualData = async () => {
    setLoading(true);
    setError(null);

    try {
      const headers: HeadersInit = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      if (API_KEY) {
        headers["Authorization"] = `Bearer ${API_KEY}`;
      }

      // Fetch annual reports list
      const response = await fetch(`${API_BASE_URL}/laporan-tahunan`, {
        method: "GET",
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAnnualData(data.data || []);

      // Set selected report to latest year or selected year
      const targetReport = data.data?.find((report: AnnualReportData) => report.tahun === selectedYear) || data.data?.[0];
      setSelectedReport(targetReport || null);

      // Fetch highlights and milestones if available
      if (data.highlights) setHighlights(data.highlights);
      if (data.milestones) setMilestones(data.milestones);
    } catch (err) {
      console.error("Error fetching annual data:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch annual report data");

      // Fallback to mock data
      setAnnualData(mockAnnualData);
      setSelectedReport(mockAnnualData.find((report) => report.tahun === selectedYear) || mockAnnualData[0]);
      setHighlights(mockHighlights);
      setMilestones(mockMilestones);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnualData();
  }, []);

  useEffect(() => {
    if (annualData.length > 0) {
      const targetReport = annualData.find((report) => report.tahun === selectedYear);
      setSelectedReport(targetReport || annualData[0]);
    }
  }, [selectedYear, annualData]);

  // Mock data
  const mockAnnualData: AnnualReportData[] = [
    {
      id: 1,
      tahun: 2023,
      total_pendapatan: 12500000000,
      total_pengeluaran: 10200000000,
      laba_bersih: 2300000000,
      total_aset: 15600000000,
      total_liabilitas: 6800000000,
      ekuitas: 8800000000,
      dividen: 920000000,
      jumlah_karyawan: 1250,
      jumlah_cabang: 28,
      market_share: 8.5,
      created_at: "2024-01-15",
      updated_at: "2024-01-15",
    },
    {
      id: 2,
      tahun: 2022,
      total_pendapatan: 11200000000,
      total_pengeluaran: 9100000000,
      laba_bersih: 2100000000,
      total_aset: 14200000000,
      total_liabilitas: 6200000000,
      ekuitas: 8000000000,
      dividen: 840000000,
      jumlah_karyawan: 1180,
      jumlah_cabang: 25,
      market_share: 7.8,
      created_at: "2023-01-15",
      updated_at: "2023-01-15",
    },
  ];

  const mockHighlights: BusinessHighlight[] = [
    {
      title: "Ekspansi Digital",
      description: "Transformasi digital menyeluruh dengan platform teknologi terdepan",
      achievement: "95% sistem ter-digitalisasi",
      icon: "💻",
    },
    {
      title: "Pertumbuhan Berkelanjutan",
      description: "Pertumbuhan konsisten dalam semua lini bisnis utama",
      achievement: "+12% YoY Revenue Growth",
      icon: "📈",
    },
    {
      title: "Komitmen Lingkungan",
      description: "Implementasi program ESG dan sustainability",
      achievement: "Carbon Neutral 2025",
      icon: "🌱",
    },
    {
      title: "Inovasi Produk",
      description: "Peluncuran 15 produk dan layanan inovatif",
      achievement: "15 New Products",
      icon: "🚀",
    },
  ];

  const mockMilestones: CompanyMilestone[] = [
    {
      year: 2023,
      title: "Ekspansi Regional",
      description: "Membuka 3 cabang baru di wilayah strategis dan meluncurkan layanan digital terpadu",
    },
    {
      year: 2022,
      title: "Sertifikasi ISO",
      description: "Memperoleh sertifikasi ISO 27001 untuk keamanan informasi dan ISO 14001 untuk manajemen lingkungan",
    },
    {
      year: 2021,
      title: "Transformasi Digital",
      description: "Implementasi sistem ERP terintegrasi dan platform e-commerce B2B",
    },
    {
      year: 2020,
      title: "Adaptasi Pandemi",
      description: "Berhasil mempertahankan operasional dengan work from home dan digitalisasi proses bisnis",
    },
  ];

  // Helper functions
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("id-ID").format(number);
  };

  const calculateGrowth = (current: number, previous: number) => {
    if (previous === 0) return 0;
    return (((current - previous) / previous) * 100).toFixed(1);
  };

  const getAvailableYears = () => {
    return annualData.map((report) => report.tahun).sort((a, b) => b - a);
  };

  const getPreviousYearData = () => {
    if (!selectedReport) return null;
    return annualData.find((report) => report.tahun === selectedReport.tahun - 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <FrontHeader />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Memuat laporan tahunan...</span>
        </div>
        <FrontFooter />
      </div>
    );
  }

  const previousYearData = getPreviousYearData();

  return (
    <div className="min-h-screen bg-gray-50">
      <FrontHeader />

      {/* Header Section */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Laporan Tahunan</h1>

            <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              {getAvailableYears().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-700">
                <strong>Perhatian:</strong> {error}. Menampilkan data contoh.
              </p>
            </div>
          )}

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Laporan tahunan ini menyajikan kinerja komprehensif perusahaan selama tahun {selectedYear}, termasuk pencapaian finansial, milestone bisnis, dan outlook strategis untuk masa depan.</p>
            <p>Dokumen ini memberikan transparansi kepada stakeholder mengenai pertumbuhan perusahaan, inovasi yang dilakukan, serta komitmen terhadap sustainability dan corporate governance.</p>
          </div>
        </div>
      </div>

      {/* Key Financial Metrics */}
      {selectedReport && (
        <div className="bg-white px-6 py-8 mt-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Keuangan {selectedReport.tahun}</h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-2xl mb-3">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Pendapatan</h3>
                <p className="text-xl font-bold text-blue-600">{formatCurrency(selectedReport.total_pendapatan)}</p>
                {previousYearData && <p className="text-sm text-gray-600 mt-1">+{calculateGrowth(selectedReport.total_pendapatan, previousYearData.total_pendapatan)}% YoY</p>}
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <div className="text-green-600 text-2xl mb-3">📊</div>
                <h3 className="font-bold text-gray-900 mb-2">Laba Bersih</h3>
                <p className="text-xl font-bold text-green-600">{formatCurrency(selectedReport.laba_bersih)}</p>
                {previousYearData && <p className="text-sm text-gray-600 mt-1">+{calculateGrowth(selectedReport.laba_bersih, previousYearData.laba_bersih)}% YoY</p>}
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-3">🏢</div>
                <h3 className="font-bold text-gray-900 mb-2">Total Aset</h3>
                <p className="text-xl font-bold text-purple-600">{formatCurrency(selectedReport.total_aset)}</p>
                {previousYearData && <p className="text-sm text-gray-600 mt-1">+{calculateGrowth(selectedReport.total_aset, previousYearData.total_aset)}% YoY</p>}
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <div className="text-orange-600 text-2xl mb-3">📈</div>
                <h3 className="font-bold text-gray-900 mb-2">Market Share</h3>
                <p className="text-xl font-bold text-orange-600">{selectedReport.market_share}%</p>
                {previousYearData && <p className="text-sm text-gray-600 mt-1">+{(selectedReport.market_share - previousYearData.market_share).toFixed(1)}% points</p>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Business Highlights */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Highlights Bisnis {selectedYear}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{highlight.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-700 text-sm mb-3">{highlight.description}</p>
                    <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 inline-block">
                      <span className="text-blue-600 font-semibold text-sm">{highlight.achievement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operational Metrics */}
      {selectedReport && (
        <div className="bg-white px-6 py-8 mt-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Metrik Operasional</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">Sumber Daya Manusia</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Karyawan:</span>
                    <span className="font-semibold text-blue-600">{formatNumber(selectedReport.jumlah_karyawan)}</span>
                  </div>
                  {previousYearData && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Pertumbuhan:</span>
                      <span className="text-sm text-green-600">+{calculateGrowth(selectedReport.jumlah_karyawan, previousYearData.jumlah_karyawan)}%</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">Jaringan Bisnis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Jumlah Cabang:</span>
                    <span className="font-semibold text-blue-600">{selectedReport.jumlah_cabang}</span>
                  </div>
                  {previousYearData && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Penambahan:</span>
                      <span className="text-sm text-green-600">+{selectedReport.jumlah_cabang - previousYearData.jumlah_cabang} cabang</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">Dividen</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Dividen:</span>
                    <span className="font-semibold text-blue-600">{formatCurrency(selectedReport.dividen)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Payout Ratio:</span>
                    <span className="text-sm text-purple-600">{((selectedReport.dividen / selectedReport.laba_bersih) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Financial Position Analysis */}
      {selectedReport && (
        <div className="bg-white px-6 py-8 mt-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Analisis Posisi Keuangan</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Balance Sheet Summary */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-4">Neraca Ringkas</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Total Aset</span>
                      <span className="font-semibold text-gray-600">{formatCurrency(selectedReport.total_aset)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Total Liabilitas</span>
                      <span className="font-semibold text-gray-600">{formatCurrency(selectedReport.total_liabilitas)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Total Ekuitas</span>
                      <span className="font-semibold text-blue-600">{formatCurrency(selectedReport.ekuitas)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Ratios */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-4">Rasio Keuangan Utama</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">ROA</span>
                      <span className="font-semibold text-gray-600">{((selectedReport.laba_bersih / selectedReport.total_aset) * 100).toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">ROE</span>
                      <span className="font-semibold text-gray-600">{((selectedReport.laba_bersih / selectedReport.ekuitas) * 100).toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Debt to Equity</span>
                      <span className="font-semibold text-gray-600">{(selectedReport.total_liabilitas / selectedReport.ekuitas).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Net Profit Margin</span>
                      <span className="font-semibold text-gray-600">{((selectedReport.laba_bersih / selectedReport.total_pendapatan) * 100).toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Company Milestones Timeline */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Milestone Perusahaan</h2>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{milestone.year}</div>
                </div>
                <div className="flex-1 ml-6 pb-6 border-l-2 border-gray-200 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-2 top-2"></div>
                  <h3 className="font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Unduh Laporan</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-red-600 text-3xl mb-3">📄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Laporan Tahunan PDF</h3>
              <p className="text-gray-600 text-sm mb-4">Laporan lengkap dalam format PDF</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">Download PDF</button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-green-600 text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Excel</h3>
              <p className="text-gray-600 text-sm mb-4">Data finansial dalam format Excel</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">Download Excel</button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-3xl mb-3">📋</div>
              <h3 className="font-semibold text-gray-900 mb-2">Executive Summary</h3>
              <p className="text-gray-600 text-sm mb-4">Ringkasan eksekutif untuk stakeholder</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">Download Summary</button>
            </div>
          </div>
        </div>
      </div>

      <FrontFooter />
    </div>
  );
};

export default LaporanTahunanPage;
