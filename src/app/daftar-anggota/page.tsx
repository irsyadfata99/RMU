"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface FormData {
  nik: string;
  namaLengkap: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: string;
  golonganDarah: string;
  alamat: string;
  rtRw: string;
  kelurahanDesa: string;
  kecamatan: string;
  kabupatenKota: string;
  provinsi: string;
  agama: string;
  statusPerkawinan: string;
  pekerjaan: string;
  kewarganegaraan: string;
  berlakuHingga: string;
  email: string;
  nomorTelepon: string;
  fotoKTP: File | null;
  fotoProfile: File | null;
}

const provinces = [
  "Aceh",
  "Sumatera Utara",
  "Sumatera Barat",
  "Riau",
  "Jambi",
  "Sumatera Selatan",
  "Bengkulu",
  "Lampung",
  "Kepulauan Bangka Belitung",
  "Kepulauan Riau",
  "DKI Jakarta",
  "Jawa Barat",
  "Jawa Tengah",
  "DI Yogyakarta",
  "Jawa Timur",
  "Banten",
  "Bali",
  "Nusa Tenggara Barat",
  "Nusa Tenggara Timur",
  "Kalimantan Barat",
  "Kalimantan Tengah",
  "Kalimantan Selatan",
  "Kalimantan Timur",
  "Kalimantan Utara",
  "Sulawesi Utara",
  "Sulawesi Tengah",
  "Sulawesi Selatan",
  "Sulawesi Tenggara",
  "Gorontalo",
  "Sulawesi Barat",
  "Maluku",
  "Maluku Utara",
  "Papua",
  "Papua Barat",
  "Papua Selatan",
  "Papua Tengah",
  "Papua Pegunungan",
  "Papua Barat Daya",
];

const religions = ["Islam", "Kristen", "Katolik", "Hindu", "Buddha", "Khonghucu"];
const bloodTypes = ["A", "B", "AB", "O", "Tidak Tahu"];
const maritalStatus = ["Belum Kawin", "Kawin", "Cerai Hidup", "Cerai Mati"];

const MemberRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nik: "",
    namaLengkap: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    golonganDarah: "",
    alamat: "",
    rtRw: "",
    kelurahanDesa: "",
    kecamatan: "",
    kabupatenKota: "",
    provinsi: "",
    agama: "",
    statusPerkawinan: "",
    pekerjaan: "",
    kewarganegaraan: "WNI",
    berlakuHingga: "",
    email: "",
    nomorTelepon: "",
    fotoKTP: null,
    fotoProfile: null,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: "fotoKTP" | "fotoProfile") => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, [fieldName]: file }));

    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // Required field validations
    if (!formData.nik || formData.nik.length !== 16) {
      newErrors.nik = "NIK harus 16 digit";
    }
    if (!formData.namaLengkap.trim()) {
      newErrors.namaLengkap = "Nama lengkap wajib diisi";
    }
    if (!formData.tempatLahir.trim()) {
      newErrors.tempatLahir = "Tempat lahir wajib diisi";
    }
    if (!formData.tanggalLahir) {
      newErrors.tanggalLahir = "Tanggal lahir wajib diisi";
    }
    if (!formData.jenisKelamin) {
      newErrors.jenisKelamin = "Jenis kelamin wajib dipilih";
    }
    if (!formData.alamat.trim()) {
      newErrors.alamat = "Alamat wajib diisi";
    }
    if (!formData.provinsi) {
      newErrors.provinsi = "Provinsi wajib dipilih";
    }
    if (!formData.agama) {
      newErrors.agama = "Agama wajib dipilih";
    }
    if (!formData.statusPerkawinan) {
      newErrors.statusPerkawinan = "Status perkawinan wajib dipilih";
    }
    if (!formData.pekerjaan.trim()) {
      newErrors.pekerjaan = "Pekerjaan wajib diisi";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email valid wajib diisi";
    }
    if (!formData.nomorTelepon.trim() || !/^(\+62|62|0)[0-9]{9,13}$/.test(formData.nomorTelepon)) {
      newErrors.nomorTelepon = "Nomor telepon Indonesia valid wajib diisi";
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);
      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData({
          nik: "",
          namaLengkap: "",
          tempatLahir: "",
          tanggalLahir: "",
          jenisKelamin: "",
          golonganDarah: "",
          alamat: "",
          rtRw: "",
          kelurahanDesa: "",
          kecamatan: "",
          kabupatenKota: "",
          provinsi: "",
          agama: "",
          statusPerkawinan: "",
          pekerjaan: "",
          kewarganegaraan: "WNI",
          berlakuHingga: "",
          email: "",
          nomorTelepon: "",
          fotoKTP: null,
          fotoProfile: null,
        });
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({
    label,
    name,
    type = "text",
    required = false,
    placeholder,
    options,
    textarea = false,
  }: {
    label: string;
    name: keyof FormData;
    type?: string;
    required?: boolean;
    placeholder?: string;
    options?: string[];
    textarea?: boolean;
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {options ? (
        <select
          name={name}
          value={formData[name] as string}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${errors[name] ? "border-red-500 bg-red-50" : "border-gray-300"}`}
        >
          <option value="">Pilih {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : textarea ? (
        <textarea
          name={name}
          value={formData[name] as string}
          onChange={handleInputChange}
          placeholder={placeholder}
          rows={3}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none ${errors[name] ? "border-red-500 bg-red-50" : "border-gray-300"}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name] as string}
          onChange={handleInputChange}
          placeholder={placeholder}
          maxLength={name === "nik" ? 16 : undefined}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${errors[name] ? "border-red-500 bg-red-50" : "border-gray-300"}`}
        />
      )}

      {errors[name] && <p className="text-red-500 text-sm flex items-center gap-1">⚠️ {errors[name]}</p>}
    </div>
  );

  const FileUpload = ({ label, name, accept = "image/*" }: { label: string; name: "fotoKTP" | "fotoProfile"; accept?: string }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${errors[name] ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-500"}`}>
        <div className="mx-auto h-12 w-12 text-gray-400 mb-2 text-3xl">📁</div>
        <div className="mt-2">
          <label className="cursor-pointer">
            <span className="text-red-600 hover:text-red-500 font-medium">Upload file</span>
            <input type="file" accept={accept} onChange={(e) => handleFileChange(e, name)} className="hidden" />
          </label>
          <p className="text-sm text-gray-500">atau drag and drop</p>
        </div>
        <p className="text-xs text-gray-400 mt-1">PNG, JPG, JPEG maksimal 5MB</p>
        {formData[name] && <p className="text-sm text-green-600 mt-2 flex items-center justify-center gap-1">✅ {formData[name].name}</p>}
      </div>
      {errors[name] && <p className="text-red-500 text-sm flex items-center gap-1">⚠️ {errors[name]}</p>}
    </div>
  );

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 pt-24">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Pendaftaran Berhasil!</h2>
            <p className="text-gray-600 mb-6">Data keanggotaan Anda telah berhasil dikirim dan akan diproses dalam 1-2 hari kerja.</p>
            <div className="text-sm text-gray-500">Anda akan menerima email konfirmasi segera...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50 py-8 px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Daftar Anggota RMU</h1>
              <p className="text-gray-600">Silakan lengkapi formulir pendaftaran berdasarkan data KTP Anda</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
            {/* Data Identitas */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">👤 Data Identitas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="NIK" name="nik" required placeholder="Masukkan 16 digit NIK" />
                <InputField label="Nama Lengkap" name="namaLengkap" required placeholder="Sesuai KTP" />
                <InputField label="Tempat Lahir" name="tempatLahir" required placeholder="Kota/Kabupaten lahir" />
                <InputField label="Tanggal Lahir" name="tanggalLahir" type="date" required />
                <InputField label="Jenis Kelamin" name="jenisKelamin" required options={["Laki-laki", "Perempuan"]} />
                <InputField label="Golongan Darah" name="golonganDarah" options={bloodTypes} />
              </div>
            </div>

            {/* Data Alamat */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">📍 Data Alamat</h2>
              <div className="space-y-6">
                <InputField label="Alamat" name="alamat" required placeholder="Jalan, nomor rumah" textarea />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="RT/RW" name="rtRw" placeholder="001/002" />
                  <InputField label="Kelurahan/Desa" name="kelurahanDesa" placeholder="Nama kelurahan/desa" />
                  <InputField label="Kecamatan" name="kecamatan" placeholder="Nama kecamatan" />
                  <InputField label="Kabupaten/Kota" name="kabupatenKota" placeholder="Nama kabupaten/kota" />
                  <InputField label="Provinsi" name="provinsi" required options={provinces} />
                </div>
              </div>
            </div>

            {/* Data Lainnya */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">📋 Data Lainnya</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Agama" name="agama" required options={religions} />
                <InputField label="Status Perkawinan" name="statusPerkawinan" required options={maritalStatus} />
                <InputField label="Pekerjaan" name="pekerjaan" required placeholder="Pekerjaan utama" />
                <InputField label="Kewarganegaraan" name="kewarganegaraan" options={["WNI", "WNA"]} />
                <InputField label="Berlaku Hingga" name="berlakuHingga" type="date" placeholder="Tanggal berakhir KTP" />
              </div>
            </div>

            {/* Data Kontak */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">📞 Data Kontak</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Email" name="email" type="email" required placeholder="email@domain.com" />
                <InputField label="Nomor Telepon" name="nomorTelepon" required placeholder="08xxxxxxxxxx" />
              </div>
            </div>

            {/* Upload Files */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">📤 Upload Dokumen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUpload label="Foto KTP" name="fotoKTP" />
                <FileUpload label="Pas Foto" name="fotoProfile" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 active:transform active:scale-95"}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Memproses...
                  </div>
                ) : (
                  "Daftar Sekarang"
                )}
              </button>

              {submitStatus === "error" && <p className="text-red-500 text-center mt-4 flex items-center justify-center gap-1">⚠️ Terjadi kesalahan. Silakan coba lagi.</p>}
            </div>
          </div>

          {/* Footer Info */}
          <div className="bg-blue-50 rounded-2xl p-6 mt-8">
            <div className="flex items-start gap-3">
              <div className="text-blue-600 mt-1 flex-shrink-0 text-xl">ℹ️</div>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Informasi Penting:</p>
                <ul className="space-y-1 text-blue-700">
                  <li>• Pastikan semua data sesuai dengan KTP yang berlaku</li>
                  <li>• File foto KTP dan pas foto maksimal 5MB</li>
                  <li>• Proses verifikasi membutuhkan waktu 1-2 hari kerja</li>
                  <li>• Anda akan mendapat konfirmasi melalui email yang terdaftar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MemberRegistrationForm;
