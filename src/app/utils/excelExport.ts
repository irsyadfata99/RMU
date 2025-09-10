// utils/excelExport.ts
import { Member } from "../types/member";

export const exportMembersToExcel = (members: Member[], fileName: string = "data-anggota.xlsx") => {
  // Prepare data for export
  const exportData = members.map((member, index) => ({
    No: index + 1,
    "NIK KTP": member.nikKtp,
    "Nama Lengkap": member.namaLengkap,
    "Alamat Lengkap": member.alamatLengkap,
    Wilayah: member.wilayahName,
    "Nomor WhatsApp": member.nomorWhatsapp,
    "Tanggal Daftar": new Date(member.registrationDate).toLocaleDateString("id-ID"),
    Status: member.status === "active" ? "Aktif" : "Tidak Aktif",
  }));

  // Create CSV content (as fallback if XLSX library is not available)
  const csvContent = convertToCSV(exportData);

  // Download as CSV file
  downloadFile(csvContent, fileName.replace(".xlsx", ".csv"), "text/csv");
};

const convertToCSV = (data: any[]): string => {
  if (data.length === 0) return "";

  const headers = Object.keys(data[0]);
  const csvRows = [];

  // Add headers
  csvRows.push(headers.join(","));

  // Add data rows
  for (const row of data) {
    const values = headers.map((header) => {
      const value = row[header];
      // Handle values that contain commas or quotes
      if (typeof value === "string" && (value.includes(",") || value.includes('"'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    });
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
};

const downloadFile = (content: string, fileName: string, mimeType: string) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up
  URL.revokeObjectURL(url);
};

// Alternative: If you want to use XLSX library, uncomment the following
// Note: You would need to install xlsx library: npm install xlsx
/*
import * as XLSX from 'xlsx';

export const exportMembersToExcelXLSX = (members: Member[], fileName: string = 'data-anggota.xlsx') => {
  const exportData = members.map((member, index) => ({
    'No': index + 1,
    'ID Anggota': member.id,
    'NIK KTP': member.nikKtp,
    'Nama Lengkap': member.namaLengkap,
    'Alamat Lengkap': member.alamatLengkap,
    'Wilayah': member.wilayahName,
    'Nomor WhatsApp': member.nomorWhatsapp,
    'Tanggal Daftar': new Date(member.registrationDate).toLocaleDateString('id-ID'),
    'Status': member.status === 'active' ? 'Aktif' : 'Tidak Aktif'
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Data Anggota');
  
  // Auto-width columns
  const maxWidth = exportData.reduce((w, r) => Math.max(w, r['Nama Lengkap']?.length || 0), 10);
  const wscols = [
    { wch: 5 },   // No
    { wch: 12 },  // ID Anggota
    { wch: 18 },  // NIK KTP
    { wch: Math.max(maxWidth, 15) },  // Nama Lengkap
    { wch: 30 },  // Alamat Lengkap
    { wch: 20 },  // Wilayah
    { wch: 15 },  // Nomor WhatsApp
    { wch: 12 },  // Tanggal Daftar
    { wch: 10 }   // Status
  ];
  worksheet['!cols'] = wscols;

  XLSX.writeFile(workbook, fileName);
};
*/
