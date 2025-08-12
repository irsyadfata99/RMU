"use client";

import React, { useState, useEffect } from "react";
import FrontHeader from "../../components/Navbar";
import FrontFooter from "../../components/Footer";

// Types for Financial Data
interface FinancialData {
  id: number;
  periode: string;
  tahun: number;
  bulan: number;
  pendapatan: number;
  pengeluaran: number;
  laba_bersih: number;
  aset: number;
  liabilitas: number;
  ekuitas: number;
  created_at: string;
  updated_at: string;
}

interface FinancialSummary {
  total_pendapatan: number;
  total_pengeluaran: number;
  total_laba: number;
  growth_rate: number;
}

const LaporanKeuanganPage = () => {
  const [financialData, setFinancialData] = useState<FinancialData[]>([]);
  const [summary, setSummary] = useState<FinancialSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // API Configuration - Sesuaikan dengan URL API Laravel Anda
  const API_BASE_URL = process.env.NEXT_PUBLIC_FINANCE_API_URL || "http://localhost:8001/api";
  const API_KEY = process.env.NEXT_PUBLIC_FINANCE_API_KEY || "";

  // Fetch Financial Data
  const fetchFinancialData = async (year: number) => {
    setLoading(true);
    setError(null);

    try {
      const headers: HeadersInit = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      // Add API Key if available
      if (API_KEY) {
        headers["Authorization"] = `Bearer ${API_KEY}`;
        // or headers['X-API-Key'] = API_KEY;
      }

      // Fetch monthly financial data
      const response = await fetch(`${API_BASE_URL}/laporan-keuangan?year=${year}`, {
        method: "GET",
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFinancialData(data.data || []);
      setSummary(data.summary || null);
    } catch (err) {
      console.error("Error fetching financial data:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch financial data");

      // Fallback to mock data for development
      setFinancialData(mockFinancialData);
      setSummary(mockSummary);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFinancialData(selectedYear);
  }, [selectedYear]);

  // Mock data for development/testing
  const mockFinancialData: FinancialData[] = [
    {
      id: 1,
      periode: "2024-01",
      tahun: 2024,
      bulan: 1,
      pendapatan: 850000000,
      pengeluaran: 680000000,
      laba_bersih: 170000000,
      aset: 2500000000,
      liabilitas: 800000000,
      ekuitas: 1700000000,
      created_at: "2024-01-31",
      updated_at: "2024-01-31",
    },
    {
      id: 2,
      periode: "2024-02",
      tahun: 2024,
      bulan: 2,
      pendapatan: 920000000,
      pengeluaran: 720000000,
      laba_bersih: 200000000,
      aset: 2650000000,
      liabilitas: 820000000,
      ekuitas: 1830000000,
      created_at: "2024-02-29",
      updated_at: "2024-02-29",
    },
    // Add more months as needed
  ];

  const mockSummary: FinancialSummary = {
    total_pendapatan: 10200000000,
    total_pengeluaran: 8400000000,
    total_laba: 1800000000,
    growth_rate: 15.5,
  };

  // Helper functions
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getMonthName = (month: number) => {
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return months[month - 1];
  };

  const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= currentYear - 5; i--) {
      years.push(i);
    }
    return years;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <FrontHeader />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Memuat data keuangan...</span>
        </div>
        <FrontFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <FrontHeader />

      {/* Header Section */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Laporan Keuangan</h1>

            {/* Year Selection */}
            <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              {getYearOptions().map((year) => (
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
            <p>Laporan keuangan perusahaan menyajikan informasi komprehensif mengenai kinerja finansial dan posisi keuangan perusahaan. Data yang disajikan mencakup pendapatan, pengeluaran, laba bersih, serta posisi aset dan liabilitas.</p>
          </div>
        </div>
      </div>

      {/* Financial Summary Cards */}
      {summary && (
        <div className="bg-white px-6 py-8 mt-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Keuangan {selectedYear}</h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-2xl mb-3">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Total Pendapatan</h3>
                <p className="text-2xl font-bold text-blue-600">{formatCurrency(summary.total_pendapatan)}</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                <div className="text-red-600 text-2xl mb-3">📊</div>
                <h3 className="font-bold text-gray-900 mb-2">Total Pengeluaran</h3>
                <p className="text-2xl font-bold text-red-600">{formatCurrency(summary.total_pengeluaran)}</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <div className="text-green-600 text-2xl mb-3">📈</div>
                <h3 className="font-bold text-gray-900 mb-2">Laba Bersih</h3>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(summary.total_laba)}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-3">🚀</div>
                <h3 className="font-bold text-gray-900 mb-2">Growth Rate</h3>
                <p className="text-2xl font-bold text-purple-600">{summary.growth_rate}%</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Monthly Financial Data Table */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Detail Bulanan</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Periode</th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">Pendapatan</th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">Pengeluaran</th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">Laba Bersih</th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">Total Aset</th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">Ekuitas</th>
                </tr>
              </thead>
              <tbody>
                {financialData.map((data) => (
                  <tr key={data.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 text-gray-600 px-4 py-3">
                      {getMonthName(data.bulan)} {data.tahun}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-right text-blue-600">{formatCurrency(data.pendapatan)}</td>
                    <td className="border border-gray-200 px-4 py-3 text-right text-red-600">{formatCurrency(data.pengeluaran)}</td>
                    <td className="border border-gray-200 px-4 py-3 text-right text-green-600 font-semibold">{formatCurrency(data.laba_bersih)}</td>
                    <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">{formatCurrency(data.aset)}</td>
                    <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">{formatCurrency(data.ekuitas)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {financialData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>Belum ada data keuangan untuk tahun {selectedYear}</p>
            </div>
          )}
        </div>
      </div>

      {/* Financial Ratios Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Analisis Rasio Keuangan</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Profitabilitas</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Margin Laba Kotor:</span>
                  <span className="text-gray-600 font-semibold">18.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Margin Laba Bersih:</span>
                  <span className="text-gray-600 font-semibold">15.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROA:</span>
                  <span className="text-gray-600 font-semibold">12.8%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Likuiditas</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Ratio:</span>
                  <span className="text-gray-600 font-semibold">2.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quick Ratio:</span>
                  <span className="text-gray-600 font-semibold">1.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cash Ratio:</span>
                  <span className="text-gray-600 font-semibold">0.9</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Solvabilitas</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Debt to Equity:</span>
                  <span className="text-gray-600 font-semibold">0.47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Debt Ratio:</span>
                  <span className="text-gray-600 font-semibold">32%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Coverage:</span>
                  <span className="text-gray-600 font-semibold">8.2</span>
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

export default LaporanKeuanganPage;
