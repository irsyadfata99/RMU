"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FrontHeader from "../components/Navbar";
import FrontFooter from "../components/Footer";
import toast from "react-hot-toast";

// ================== Types ==================
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

interface Region {
  regionId: number;
  code: string;
  name: string;
}

type WilayahCode = string;

// ================== Component ==================
export default function DaftarAnggota() {
  const router = useRouter();

  // ----- State -----
  const [formData, setFormData] = useState<FormData>({
    nikKtp: "",
    namaLengkap: "",
    alamatLengkap: "",
    wilayah: "",
    nomorWhatsapp: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [wilayahCounters, setWilayahCounters] = useState<WilayahCounters>({});
  const [regions, setRegions] = useState<Region[]>([]);
  const [loadingRegions, setLoadingRegions] = useState(true);

  // ----- Fetch Regions -----
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/region`);

        if (res.data.success && res.data.data.region) {
          setRegions(res.data.data.region);

          // siapkan counter awal (semua 0)
          const counters: WilayahCounters = {};
          res.data.data.region.forEach((r: Region) => {
            counters[r.code] = 0;
          });
          setWilayahCounters(counters);
        }
      } catch (error) {
        console.error("Gagal ambil data region", error);
      } finally {
        setLoadingRegions(false);
      }
    };

    fetchRegions();
  }, []);

  // ----- Helpers -----
  const generateUniqueId = (regionCode: WilayahCode): string => {
    if (!regionCode) return "";
    const nextNumber = (wilayahCounters[regionCode] || 0) + 1;
    return `${regionCode}-${nextNumber.toString().padStart(4, "0")}`;
  };

  // ----- Handlers -----
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // pastikan hanya angka untuk nik & whatsapp
    if (name === "nikKtp" || name === "nomorWhatsapp") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // generate uniqueId berdasarkan wilayah
    if (name === "wilayah" && value) {
      const selectedRegion = regions.find(
        (r) => r.regionId.toString() === value
      );
      if (selectedRegion) {
        const newUniqueId = generateUniqueId(selectedRegion.code);
        setUniqueId(newUniqueId);
      }
    } else if (name === "wilayah" && !value) {
      setUniqueId("");
    }

    // reset error field saat user mengetik ulang
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.nikKtp) {
      newErrors.nikKtp = "NIK KTP wajib diisi";
    } else if (formData.nikKtp.length !== 16) {
      newErrors.nikKtp = "NIK KTP harus 16 digit";
    }

    if (!formData.namaLengkap.trim()) {
      newErrors.namaLengkap = "Nama lengkap wajib diisi";
    } else if (formData.namaLengkap.trim().length < 3) {
      newErrors.namaLengkap = "Nama lengkap minimal 3 karakter";
    }

    if (!formData.alamatLengkap.trim()) {
      newErrors.alamatLengkap = "Alamat lengkap wajib diisi";
    } else if (formData.alamatLengkap.trim().length < 10) {
      newErrors.alamatLengkap = "Alamat lengkap minimal 10 karakter";
    }

    if (!formData.wilayah) {
      newErrors.wilayah = "Wilayah wajib dipilih";
    }

    if (!formData.nomorWhatsapp) {
      newErrors.nomorWhatsapp = "Nomor WhatsApp wajib diisi";
    } else if (
      formData.nomorWhatsapp.length < 10 ||
      formData.nomorWhatsapp.length > 15
    ) {
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
      const payload = {
        region_id: formData.wilayah,
        name: formData.namaLengkap,
        nik: formData.nikKtp,
        phone: formData.nomorWhatsapp,
        address: formData.alamatLengkap,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        payload
      );

      if (res.data.success) {
        setFormData({
          nikKtp: "",
          namaLengkap: "",
          alamatLengkap: "",
          wilayah: "",
          nomorWhatsapp: "",
        });
        setUniqueId("");
        setErrors({});

        sessionStorage.setItem("registerSuccess", "true");

        router.push("/");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        const serverErrors = error.response.data.errors;

        const fieldMap: Record<string, keyof FormErrors> = {
          nik: "nikKtp",
          phone: "nomorWhatsapp",
          region_id: "wilayah",
          name: "namaLengkap",
          address: "alamatLengkap",
        };

        const newErrors: FormErrors = {};
        Object.keys(serverErrors).forEach((key) => {
          const mappedKey = fieldMap[key];
          if (mappedKey) {
            newErrors[mappedKey] = serverErrors[key][0];
          }
        });

        setErrors(newErrors);
      } else {
        toast.error("Terjadi kesalahan. Silakan coba lagi.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-gray-700 min-h-screen">
      <FrontHeader />

      <div className="container mx-auto px-4 py-16 max-w-2xl mt-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Pendaftaran Anggota Baru
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Silakan lengkapi data diri Anda dengan benar sesuai KTP
          </p>

          {/* Form */}
          <div className="space-y-6">
            {/* NIK KTP */}
            <div>
              <label
                htmlFor="nikKtp"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
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
              {errors.nikKtp && (
                <p className="text-red-500 text-sm mt-1">{errors.nikKtp}</p>
              )}
            </div>

            {/* Nama Lengkap */}
            <div>
              <label
                htmlFor="namaLengkap"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
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
              {errors.namaLengkap && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.namaLengkap}
                </p>
              )}
            </div>

            {/* Alamat Lengkap */}
            <div>
              <label
                htmlFor="alamatLengkap"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
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
              {errors.alamatLengkap && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.alamatLengkap}
                </p>
              )}
            </div>

            {/* Wilayah */}
            <div>
              <label
                htmlFor="wilayah"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Wilayah <span className="text-red-500">*</span>
              </label>
              <select
                id="wilayah"
                name="wilayah"
                value={formData.wilayah}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-white"
              >
                <option value="">Pilih Wilayah</option>
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
              {errors.wilayah && (
                <p className="text-red-500 text-sm mt-1">{errors.wilayah}</p>
              )}
            </div>

            {/* Nomor WhatsApp */}
            <div>
              <label
                htmlFor="nomorWhatsapp"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
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
              {errors.nomorWhatsapp && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nomorWhatsapp}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                }`}
              >
                {isSubmitting ? "Memproses..." : "Daftar Sekarang"}
              </button>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Pastikan semua data yang diisi sesuai dengan KTP Anda</p>
            <p>
              Tanda <span className="text-red-500">*</span> menunjukkan field
              wajib diisi
            </p>
          </div>
        </div>
      </div>

      <FrontFooter />
    </div>
  );
}
