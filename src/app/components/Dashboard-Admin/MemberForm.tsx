// components/MemberForm.tsx
import React, { useState, useEffect } from "react";
import { Member, MemberFormData, MemberFormErrors, wilayahOptions, WilayahCode } from "../../types/member";

interface MemberFormProps {
  editingMember: Member | null;
  onSave: (memberData: Partial<Member>) => void;
  onCancel: () => void;
  existingMembers: Member[];
}

const MemberForm: React.FC<MemberFormProps> = ({ editingMember, onSave, onCancel, existingMembers }) => {
  const [formData, setFormData] = useState<MemberFormData>({
    nikKtp: "",
    namaLengkap: "",
    alamatLengkap: "",
    wilayah: "",
    nomorWhatsapp: "",
  });

  const [errors, setErrors] = useState<MemberFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uniqueId, setUniqueId] = useState("");

  useEffect(() => {
    if (editingMember) {
      setFormData({
        nikKtp: editingMember.nikKtp,
        namaLengkap: editingMember.namaLengkap,
        alamatLengkap: editingMember.alamatLengkap,
        wilayah: editingMember.wilayah,
        nomorWhatsapp: editingMember.nomorWhatsapp,
      });
      setUniqueId(editingMember.id);
    } else {
      setFormData({
        nikKtp: "",
        namaLengkap: "",
        alamatLengkap: "",
        wilayah: "",
        nomorWhatsapp: "",
      });
      setUniqueId("");
    }
  }, [editingMember]);

  const generateUniqueId = (wilayah: WilayahCode): string => {
    if (!wilayah) return "";

    // Hitung jumlah anggota yang sudah ada untuk wilayah ini
    const existingCount = existingMembers.filter((member) => member.wilayah === wilayah && member.id !== editingMember?.id).length;

    const nextNumber = existingCount + 1;
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

    // Generate unique ID ketika wilayah dipilih (hanya untuk member baru)
    if (name === "wilayah" && value && !editingMember) {
      const newUniqueId = generateUniqueId(value as WilayahCode);
      setUniqueId(newUniqueId);
    } else if (name === "wilayah" && !value && !editingMember) {
      setUniqueId("");
    }

    // Clear error untuk field yang sedang diisi
    if (errors[name as keyof MemberFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): MemberFormErrors => {
    const newErrors: MemberFormErrors = {};

    // Validasi NIK KTP
    if (!formData.nikKtp) {
      newErrors.nikKtp = "NIK KTP wajib diisi";
    } else if (formData.nikKtp.length !== 16) {
      newErrors.nikKtp = "NIK KTP harus 16 digit";
    } else {
      // Check duplikasi NIK (kecuali saat edit member yang sama)
      const isDuplicate = existingMembers.some((member) => member.nikKtp === formData.nikKtp && member.id !== editingMember?.id);
      if (isDuplicate) {
        newErrors.nikKtp = "NIK KTP sudah terdaftar";
      }
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
    } else {
      // Check duplikasi WhatsApp (kecuali saat edit member yang sama)
      const isDuplicate = existingMembers.some((member) => member.nomorWhatsapp === formData.nomorWhatsapp && member.id !== editingMember?.id);
      if (isDuplicate) {
        newErrors.nomorWhatsapp = "Nomor WhatsApp sudah terdaftar";
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const wilayahOption = wilayahOptions.find((option) => option.value === formData.wilayah);

      const memberData: Partial<Member> = {
        ...formData,
        id: editingMember ? editingMember.id : uniqueId,
        wilayahName: wilayahOption?.label || "",
        registrationDate: editingMember ? editingMember.registrationDate : new Date().toISOString().split("T")[0],
        status: editingMember ? editingMember.status : "active",
      };

      onSave(memberData);
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{editingMember ? "Edit Anggota" : "Tambah Anggota Baru"}</h3>
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 text-xl font-bold">
          ×
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {uniqueId && !editingMember && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 font-medium">
              ID Anggota yang akan diberikan: <span className="font-bold text-blue-900">{uniqueId}</span>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* NIK KTP */}
          <div className="md:col-span-2">
            <label htmlFor="nikKtp" className="block text-sm font-medium text-gray-700 mb-2">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.nikKtp && <p className="text-red-500 text-sm mt-1">{errors.nikKtp}</p>}
          </div>

          {/* Nama Lengkap */}
          <div className="md:col-span-2">
            <label htmlFor="namaLengkap" className="block text-sm font-medium text-gray-700 mb-2">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="namaLengkap"
              name="namaLengkap"
              value={formData.namaLengkap}
              onChange={handleInputChange}
              placeholder="Nama lengkap sesuai KTP"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.namaLengkap && <p className="text-red-500 text-sm mt-1">{errors.namaLengkap}</p>}
          </div>

          {/* Alamat Lengkap */}
          <div className="md:col-span-2">
            <label htmlFor="alamatLengkap" className="block text-sm font-medium text-gray-700 mb-2">
              Alamat Lengkap <span className="text-red-500">*</span>
            </label>
            <textarea
              id="alamatLengkap"
              name="alamatLengkap"
              value={formData.alamatLengkap}
              onChange={handleInputChange}
              placeholder="Alamat lengkap sesuai KTP"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
            />
            {errors.alamatLengkap && <p className="text-red-500 text-sm mt-1">{errors.alamatLengkap}</p>}
          </div>

          {/* Wilayah */}
          <div>
            <label htmlFor="wilayah" className="block text-sm font-medium text-gray-700 mb-2">
              Wilayah <span className="text-red-500">*</span>
            </label>
            <select id="wilayah" name="wilayah" value={formData.wilayah} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
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
            <label htmlFor="nomorWhatsapp" className="block text-sm font-medium text-gray-700 mb-2">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.nomorWhatsapp && <p className="text-red-500 text-sm mt-1">{errors.nomorWhatsapp}</p>}
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button type="button" onClick={onCancel} className="flex-1 py-3 px-6 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors">
            Batal
          </button>
          <button type="submit" disabled={isSubmitting} className={`flex-1 py-3 px-6 rounded-lg font-medium text-white transition-colors ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}>
            {isSubmitting ? "Menyimpan..." : editingMember ? "Perbarui Data" : "Simpan Data"}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Pastikan semua data yang diisi sesuai dengan KTP</p>
          <p>
            Tanda <span className="text-red-500">*</span> menunjukkan field wajib diisi
          </p>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
