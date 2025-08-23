"use client";

import React, { useState } from "react";
import FrontHeader from "../components/Navbar"; // Menggunakan Navbar yang sudah ada
import FrontFooter from "../components/Footer"; // Menggunakan Footer yang sudah ada

// Type definitions
interface FormData {
  nikKtp: string;
  namaLengkap: string;
  alamatLengkap: string;
  wilayah: string;
  nomorWhatsapp: string;
}

interface FormErrors {
  nikKtp?: string;
  namaLengkap?: string;
  alamatLengkap?: string;
  wilayah?: string;
  nomorWhatsapp?: string;
}

interface WilayahCounters {
  [key: string]: number;
}

type WilayahCode = "BDG" | "KBG" | "KBB" | "KBT" | "CMH" | "GRT" | "KGU" | "KGS" | "SMD" | "TSM" | "SMI" | "KSI" | "KSU" | "CJR" | "BGR" | "KBR" | "YMG" | "PMB";

export default function DaftarAnggota() {
  const [formData, setFormData] = useState<FormData>({
    nikKtp: "",
    namaLengkap: "",
    alamatLengkap: "",
    wilayah: "",
    nomorWhatsapp: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [uniqueId, setUniqueId] = useState<string>("");

  // Counter untuk setiap wilayah (dalam implementasi nyata, ini harus dari database)
  const [wilayahCounters, setWilayahCounters] = useState<WilayahCounters>({
    BDG: 0,
    KBG: 0,
    KBB: 0,
    KBT: 0,
    CMH: 0,
    GRT: 0,
    KGU: 0,
    KGS: 0,
    SMD: 0,
    TSM: 0,
    SMI: 0,
    KSI: 0,
    KSU: 0,
    CJR: 0,
    BGR: 0,
    KBR: 0,
    YMG: 0,
    PMB: 0,
  });

  const wilayahOptions = [
    { value: "", label: "Pilih Wilayah" },
    { value: "BDG", label: "Bandung (BDG)" },
    { value: "KBG", label: "Kabupaten Bandung (KBG)" },
    { value: "KBB", label: "Kabupaten Bandung Barat (KBB)" },
    { value: "KBT", label: "Kabupaten Bandung Timur (KBT)" },
    { value: "CMH", label: "Cimahi (CMH)" },
    { value: "GRT", label: "Garut (GRT)" },
    { value: "KGU", label: "Kuningan (KGU)" },
    { value: "KGS", label: "Kab. Kuningan Selatan (KGS)" },
    { value: "SMD", label: "Sumedang (SMD)" },
    { value: "TSM", label: "Tasikmalaya (TSM)" },
    { value: "SMI", label: "Subang Majalaya Indramayu (SMI)" },
    { value: "KSI", label: "Karawang Subang Indramayu (KSI)" },
    { value: "KSU", label: "Karawang Subang (KSU)" },
    { value: "CJR", label: "Cianjur (CJR)" },
    { value: "BGR", label: "Bogor (BGR)" },
    { value: "KBR", label: "Kabupaten Bogor (KBR)" },
    { value: "YMG", label: "Yogyakarta (YMG)" },
    { value: "PMB", label: "Palembang (PMB)" },
  ];

  const generateUniqueId = (wilayah: WilayahCode): string => {
    if (!wilayah) return "";
    const nextNumber = wilayahCounters[wilayah] + 1;
    return `${wilayah}-${nextNumber.toString().padStart(4, "0")}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Validasi NIK KTP - hanya angka
    if (name === "nikKtp") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    }
    // Validasi nomor WhatsApp - hanya angka
    else if (name === "nomorWhatsapp") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    }
    // Input lainnya
    else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Generate unique ID ketika wilayah dipilih
    if (name === "wilayah" && value) {
      const newUniqueId = generateUniqueId(value as WilayahCode);
      setUniqueId(newUniqueId);
    } else if (name === "wilayah" && !value) {
      setUniqueId("");
    }

    // Clear error untuk field yang sedang diisi
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Validasi NIK KTP
    if (!formData.nikKtp) {
      newErrors.nikKtp = "NIK KTP wajib diisi";
    } else if (formData.nikKtp.length !== 16) {
      newErrors.nikKtp = "NIK KTP harus 16 digit";
    }

    // Validasi Nama Lengkap
    if (!formData.namaLengkap.trim()) {
      newErrors.namaLengkap = "Nama lengkap wajib diisi";
    } else if (formData.namaLengkap.trim().length < 3) {
      newErrors.namaLengkap = "Nama lengkap minimal 3 karakter";
    }

    // Validasi Alamat Lengkap
    if (!formData.alamatLengkap.trim()) {
      newErrors.alamatLengkap = "Alamat lengkap wajib diisi";
    } else if (formData.alamatLengkap.trim().length < 10) {
      newErrors.alamatLengkap = "Alamat lengkap minimal 10 karakter";
    }

    // Validasi Wilayah
    if (!formData.wilayah) {
      newErrors.wilayah = "Wilayah wajib dipilih";
    }

    // Validasi Nomor WhatsApp
    if (!formData.nomorWhatsapp) {
      newErrors.nomorWhatsapp = "Nomor WhatsApp wajib diisi";
    } else if (formData.nomorWhatsapp.length < 10 || formData.nomorWhatsapp.length > 15) {
      newErrors.nomorWhatsapp = "Nomor WhatsApp harus 10-15 digit";
    }

    return newErrors;
  };

  const handleSubmit = async (): Promise<void> => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update counter untuk wilayah yang dipilih
      setWilayahCounters((prev) => ({
        ...prev,
        [formData.wilayah]: prev[formData.wilayah as WilayahCode] + 1,
      }));

      // Reset form
      setFormData({
        nikKtp: "",
        namaLengkap: "",
        alamatLengkap: "",
        wilayah: "",
        nomorWhatsapp: "",
      });
      setUniqueId("");
      setErrors({});

      alert(`Pendaftaran berhasil! ID Anggota: ${uniqueId}`);
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-gray-700 min-h-screen">
      <FrontHeader />

      <div className="container mx-auto px-4 py-16 max-w-2xl mt-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Pendaftaran Anggota Baru</h1>
          <p className="text-gray-600 text-center mb-8">Silakan lengkapi data diri Anda dengan benar sesuai KTP</p>

          {uniqueId && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 font-medium">
                ID Anggota yang akan diberikan: <span className="font-bold text-blue-900">{uniqueId}</span>
              </p>
            </div>
          )}

          <div className="space-y-6">
            {/* NIK KTP */}
            <div>
              <label htmlFor="nikKtp" className="block text-sm font-medium text-gray-800 mb-2">
                NIK KTP <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nikKtp"
                name="nikKtp"
                value={formData.nikKtp}
                onChange={handleInputChange}
                placeholder="Masukkan 16 digit NIK KTP"
                maxLength={16}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-white"
              />
              {errors.nikKtp && <p className="text-red-500 text-sm mt-1">{errors.nikKtp}</p>}
            </div>

            {/* Nama Lengkap */}
            <div>
              <label htmlFor="namaLengkap" className="block text-sm font-medium text-gray-800 mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="namaLengkap"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                placeholder="Nama lengkap sesuai KTP"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-white"
              />
              {errors.namaLengkap && <p className="text-red-500 text-sm mt-1">{errors.namaLengkap}</p>}
            </div>

            {/* Alamat Lengkap */}
            <div>
              <label htmlFor="alamatLengkap" className="block text-sm font-medium text-gray-800 mb-2">
                Alamat Lengkap <span className="text-red-500">*</span>
              </label>
              <textarea
                id="alamatLengkap"
                name="alamatLengkap"
                value={formData.alamatLengkap}
                onChange={handleInputChange}
                placeholder="Alamat lengkap sesuai KTP"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-white resize-vertical"
              />
              {errors.alamatLengkap && <p className="text-red-500 text-sm mt-1">{errors.alamatLengkap}</p>}
            </div>

            {/* Wilayah */}
            <div>
              <label htmlFor="wilayah" className="block text-sm font-medium text-gray-800 mb-2">
                Wilayah <span className="text-red-500">*</span>
              </label>
              <select
                id="wilayah"
                name="wilayah"
                value={formData.wilayah}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-white"
              >
                {wilayahOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.wilayah && <p className="text-red-500 text-sm mt-1">{errors.wilayah}</p>}
            </div>

            {/* Nomor WhatsApp */}
            <div>
              <label htmlFor="nomorWhatsapp" className="block text-sm font-medium text-gray-800 mb-2">
                Nomor WhatsApp Aktif <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nomorWhatsapp"
                name="nomorWhatsapp"
                value={formData.nomorWhatsapp}
                onChange={handleInputChange}
                placeholder="Contoh: 081234567890"
                maxLength={15}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-white"
              />
              {errors.nomorWhatsapp && <p className="text-red-500 text-sm mt-1">{errors.nomorWhatsapp}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-colors ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"}`}
              >
                {isSubmitting ? "Memproses..." : "Daftar Sekarang"}
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Pastikan semua data yang diisi sesuai dengan KTP Anda</p>
            <p>
              Tanda <span className="text-red-500">*</span> menunjukkan field wajib diisi
            </p>
          </div>
        </div>
      </div>

      <FrontFooter />
    </div>
  );
}
