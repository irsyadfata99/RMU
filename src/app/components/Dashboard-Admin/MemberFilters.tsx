// components/MemberFilters.tsx
import React from "react";
import { MemberFilters, wilayahOptions } from "../../types/member";

interface MemberFiltersProps {
  filters: MemberFilters;
  onFilterChange: (filters: MemberFilters) => void;
  onExportExcel: () => void;
  onShowForm: () => void;
}

const MemberFiltersComponent: React.FC<MemberFiltersProps> = ({ filters, onFilterChange, onExportExcel, onShowForm }) => {
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

        {/* Wilayah Filter */}
        <div className="w-full lg:w-64">
          <select value={filters.wilayah} onChange={(e) => handleFilterChange("wilayah", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Semua Wilayah</option>
            {wilayahOptions.slice(1).map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="w-full lg:w-48">
          <select value={filters.status} onChange={(e) => handleFilterChange("status", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Semua Status</option>
            <option value="active">Aktif</option>
            <option value="inactive">Tidak Aktif</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        {/* Date Range */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
            <input type="date" value={filters.dateFrom} onChange={(e) => handleFilterChange("dateFrom", e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Akhir</label>
            <input type="date" value={filters.dateTo} onChange={(e) => handleFilterChange("dateTo", e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button onClick={clearFilters} className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            Reset Filter
          </button>
          <button onClick={onExportExcel} className="px-4 py-2 text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors flex items-center gap-2">
            📊 Export Excel
          </button>
          <button onClick={onShowForm} className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2">
            ➕ Tambah Anggota
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberFiltersComponent;
