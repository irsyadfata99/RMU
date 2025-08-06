"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface FormData {
  nik: string;
  namaLengkap: string;
  alamatLengkap: string;
  email: string;
  nomorWhatsapp: string;
}

const MemberRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nik: "",
    namaLengkap: "",
    alamatLengkap: "",
    email: "",
    nomorWhatsapp: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // NIK validation
    if (!formData.nik || formData.nik.length !== 16) {
      newErrors.nik = "NIK harus 16 digit";
    } else if (!/^\d{16}$/.test(formData.nik)) {
      newErrors.nik = "NIK harus berupa angka";
    }

    // Nama lengkap validation
    if (!formData.namaLengkap.trim()) {
      newErrors.namaLengkap = "Nama lengkap wajib diisi";
    } else if (formData.namaLengkap.trim().length < 2) {
      newErrors.namaLengkap = "Nama lengkap minimal 2 karakter";
    }

    // Alamat lengkap validation
    if (!formData.alamatLengkap.trim()) {
      newErrors.alamatLengkap = "Alamat lengkap wajib diisi";
    } else if (formData.alamatLengkap.trim().length < 10) {
      newErrors.alamatLengkap = "Alamat lengkap minimal 10 karakter";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    // WhatsApp number validation
    if (!formData.nomorWhatsapp.trim()) {
      newErrors.nomorWhatsapp = "Nomor WhatsApp wajib diisi";
    } else if (!/^(\+62|62|0)[0-9]{9,13}$/.test(formData.nomorWhatsapp.replace(/\s/g, ""))) {
      newErrors.nomorWhatsapp = "Nomor WhatsApp Indonesia tidak valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace this with actual Laravel API endpoint
      // Example: const response = await fetch('/api/member-registration', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // });

      // Temporary simulation - REMOVE when integrating with Laravel
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form data ready for Laravel API:", formData);
      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData({
          nik: "",
          namaLengkap: "",
          alamatLengkap: "",
          email: "",
          nomorWhatsapp: "",
        });
      }, 3000);
    } catch (error) {
      console.error("API Error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ label, name, type = "text", placeholder, textarea = false, maxLength }: { label: string; name: keyof FormData; type?: string; placeholder?: string; textarea?: boolean; maxLength?: number }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>

      {textarea ? (
        <textarea
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          placeholder={placeholder}
          rows={4}
          maxLength={maxLength}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none ${errors[name] ? "border-red-500 bg-red-50" : "border-gray-300"}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${errors[name] ? "border-red-500 bg-red-50" : "border-gray-300"}`}
        />
      )}

      {errors[name] && <p className="text-red-500 text-sm flex items-center gap-1">⚠️ {errors[name]}</p>}
    </div>
  );

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4 pt-24">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Pendaftaran Berhasil!</h2>
            <p className="text-gray-600 mb-6">Data keanggotaan Anda telah berhasil dikirim dan akan diproses dalam 1-2 hari kerja.</p>
            <div className="text-sm text-gray-500">Anda akan menerima konfirmasi melalui WhatsApp dan email...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 pt-24">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Daftar Anggota RMU</h1>
              <p className="text-gray-600">Bergabunglah dengan komunitas untuk membuat perubahan positif</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Data Pribadi</h2>
              <p className="text-sm text-gray-600">Silakan isi data diri Anda dengan lengkap dan benar</p>
            </div>

            <div className="space-y-6">
              <InputField label="NIK (Nomor Induk Kependudukan)" name="nik" placeholder="Masukkan 16 digit NIK sesuai KTP" maxLength={16} />

              <InputField label="Nama Lengkap" name="namaLengkap" placeholder="Masukkan nama lengkap sesuai KTP" />

              <InputField label="Alamat Lengkap" name="alamatLengkap" placeholder="Masukkan alamat lengkap (Jalan, RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten, Provinsi)" textarea maxLength={500} />

              <InputField label="Email" name="email" type="email" placeholder="contoh@email.com" />

              <InputField label="Nomor WhatsApp" name="nomorWhatsapp" placeholder="08xxxxxxxxxx atau +62xxxxxxxxx" />
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:transform active:scale-95 shadow-lg hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Memproses Pendaftaran...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>🚀</span>
                    Daftar Sekarang
                  </div>
                )}
              </button>

              {submitStatus === "error" && <p className="text-red-500 text-center mt-4 flex items-center justify-center gap-1">⚠️ Terjadi kesalahan. Silakan coba lagi.</p>}
            </div>
          </div>

          {/* Footer Info */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8 border border-blue-100">
            <div className="flex items-start gap-3">
              <div className="text-blue-600 mt-1 flex-shrink-0 text-xl">ℹ️</div>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-2">Informasi Penting:</p>
                <ul className="space-y-1 text-blue-700">
                  <li>• Pastikan NIK sesuai dengan KTP yang berlaku</li>
                  <li>• Alamat ditulis lengkap untuk keperluan administrasi</li>
                  <li>• Nomor WhatsApp akan digunakan untuk komunikasi resmi</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Butuh bantuan? Hubungi kami di{" "}
              <a href="https://wa.me/6281234567890" className="text-blue-600 hover:text-blue-700 font-medium">
                WhatsApp Support
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MemberRegistrationForm;
