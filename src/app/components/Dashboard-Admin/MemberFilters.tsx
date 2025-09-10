// components/MemberFilters.tsx
"use client";
import React, { useEffect, useState } from "react";
import { MemberFilters } from "../../types/member";
import axios from "axios";

interface MemberFiltersProps {
  filters: MemberFilters;
  onFilterChange: (filters: MemberFilters) => void;
  onExportExcel: () => void;
  onShowForm: () => void;
}

interface Region {
  regionId: number;
  code: string;
  name: string;
}

const MemberFiltersComponent: React.FC<MemberFiltersProps> = ({
  filters,
  onFilterChange,
  onShowForm,
}) => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [loadingRegions, setLoadingRegions] = useState(true);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/region`
        );
        if (res.data.success && res.data.data.region) {
          setRegions(res.data.data.region);
        }
      } catch (error) {
        console.error("Gagal ambil data region:", error);
      } finally {
        setLoadingRegions(false);
      }
    };

    fetchRegions();
  }, []);

  const handleFilterChange = (key: keyof MemberFilters, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    onFilterChange({
      search: "",
      wilayah: "",
      status: "",
      dateFrom: "",
      dateTo: "",
    });
  };

const handleExportCsv = async () => {
  try {
    const token = localStorage.getItem("admin_token");

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/people/member/csv`, {
      responseType: 'blob',  
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'members_export.csv');
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error exporting CSV:", error);
  }
};

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {/* Search */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Cari nama, NIK, atau nomor WhatsApp..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Wilayah Filter dari API */}
        <div className="w-full lg:w-64">
          <select
            value={filters.wilayah}
            onChange={(e) => handleFilterChange("wilayah", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Semua Wilayah</option>
            {loadingRegions ? (
              <option value="">Loading...</option>
            ) : (
              regions.map((region) => (
                <option key={region.regionId} value={region.regionId}>
                  {region.name} ({region.code})
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        {/* Date Range */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tanggal Mulai
            </label>
            <input
              type="date"
              value={filters.dateFrom}
              onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tanggal Akhir
            </label>
            <input
              type="date"
              value={filters.dateTo}
              onChange={(e) => handleFilterChange("dateTo", e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={clearFilters}
            className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Reset Filter
          </button>
          <button
            onClick={handleExportCsv}
            className="px-4 py-2 text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors flex items-center gap-2"
          >
            📊 Export Excel
          </button>
          <button
            onClick={onShowForm}
            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2"
          >
            ➕ Tambah Anggota
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberFiltersComponent;
