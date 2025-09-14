import React, { useState, useEffect } from "react";
import { Member, MemberFormData, MemberFormErrors, WilayahCode } from "../../types/member";
import axios from "axios";

interface MemberFormProps {
  editingMember: Member | null;
  onSave: (memberData: Partial<Member>) => void;
  onCancel: () => void;
  existingMembers: Member[];
}

interface Region {
  regionId: number;
  code: string;
  name: string;
}

const MemberForm: React.FC<MemberFormProps> = ({
  editingMember,
  onSave,
  onCancel,
  existingMembers,
}) => {
  const [formData, setFormData] = useState<MemberFormData>({
    nikKtp: "",
    namaLengkap: "",
    alamatLengkap: "",
    wilayah: "",
    nomorWhatsapp: "",
    gender: 1, 
  });

  const [regions, setRegions] = useState<Region[]>([]);
  const [loadingRegions, setLoadingRegions] = useState(true);
  const [errors, setErrors] = useState<MemberFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uniqueId, setUniqueId] = useState("");

  // Fetch region dari API
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/region`);
        if (res.data.success && res.data.data.region) {
          setRegions(res.data.data.region);
        }
      } catch (error) {
        console.error("Gagal ambil data region", error);
      } finally {
        setLoadingRegions(false);
      }
    };
    fetchRegions();
  }, []);

  useEffect(() => {
    if (editingMember) {
      setFormData({
        nikKtp: editingMember.nikKtp,
        namaLengkap: editingMember.namaLengkap,
        alamatLengkap: editingMember.alamatLengkap,
        wilayah: editingMember.wilayah,
        nomorWhatsapp: editingMember.nomorWhatsapp,
        gender: editingMember.gender ?? 1, 
      });
    } else {
      setFormData({
        nikKtp: "",
        namaLengkap: "",
        alamatLengkap: "",
        wilayah: "",
        nomorWhatsapp: "",
        gender: 1, 
      });
    }
  }, [editingMember]);

useEffect(() => {
  if (!editingMember && regions.length > 0 && formData.wilayah) {
    const newUniqueId = generateUniqueId(formData.wilayah);
    setUniqueId(newUniqueId);
  }
}, [regions, formData.wilayah, editingMember]);


  const generateUniqueId = (wilayahId: string): string => {
    if (!wilayahId) return "";
    const region = regions.find((r) => String(r.regionId) === wilayahId); 
    if (!region) return "";

    const existingCount = existingMembers.filter(
      (member) => member.wilayah === wilayahId && member.id !== editingMember?.id
    ).length;
    const nextNumber = existingCount + 1;
    return `${region.code}-${nextNumber.toString().padStart(4, "0")}`; 
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "nikKtp" || name === "nomorWhatsapp") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else if (name === "gender") {
      setFormData((prev) => ({ ...prev, gender: parseInt(value, 10) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (name === "wilayah" && value && !editingMember) {
      const newUniqueId = generateUniqueId(value);
      setUniqueId(newUniqueId);
    } else if (name === "wilayah" && !value && !editingMember) {
      setUniqueId("");
    }

    if (errors[name as keyof MemberFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };


  const validateForm = (): MemberFormErrors => {
    const newErrors: MemberFormErrors = {};
    if (!formData.nikKtp) {
      newErrors.nikKtp = "NIK KTP wajib diisi";
    } else if (formData.nikKtp.length !== 16) {
      newErrors.nikKtp = "NIK KTP harus 16 digit";
    } else {
      const isDuplicate = existingMembers.some(
        (member) => member.nikKtp === formData.nikKtp && member.id !== editingMember?.id
      );
      if (isDuplicate) {
        newErrors.nikKtp = "NIK KTP sudah terdaftar";
      }
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
    } else if (formData.nomorWhatsapp.length < 10 || formData.nomorWhatsapp.length > 15) {
      newErrors.nomorWhatsapp = "Nomor WhatsApp harus 10-15 digit";
    } else {
      const isDuplicate = existingMembers.some(
        (member) => member.nomorWhatsapp === formData.nomorWhatsapp && member.id !== editingMember?.id
      );
      if (isDuplicate) {
        newErrors.nomorWhatsapp = "Nomor WhatsApp sudah terdaftar";
      }
    }
    if (formData.gender !== 1 && formData.gender !== 2) {
      newErrors.gender = "Pilih jenis kelamin yang valid";
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
  const token = localStorage.getItem("admin_token");

  if (!token) {
    alert("Token tidak ditemukan. Silakan login ulang.");
    return;
  }

  const payload = {
    region_id: Number(formData.wilayah),
    nik: formData.nikKtp,
    name: formData.namaLengkap,
    phone: formData.nomorWhatsapp,
    address: formData.alamatLengkap,
    gender: formData.gender ?? null,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let res;

  if (editingMember) {
    // UPDATE
    res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/people/member/update/${editingMember.id}`,
      payload,
      config
    );
  } else {
    // CREATE
    res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/people/member/store`,
      payload,
      config
    );
  }

  // Simpan ke state parent
  const region = regions.find((r) => String(r.regionId) === formData.wilayah);
  const memberData: Partial<Member> = {
    ...formData,
    id: res.data.data.member.memberId, // <- ID asli dari DB
    memberCode: uniqueId,        // <- simpan code buat display
    wilayahName: region?.name || "",
    registrationDate: editingMember
      ? editingMember.registrationDate
      : new Date().toISOString().split("T")[0],
  };

  onSave(memberData);
} catch (error) {
  console.error("Gagal menyimpan member:", error);
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
              <option value="">Pilih Wilayah</option>
              {loadingRegions ? (
                <option value="">Loading...</option>
              ) : (
                regions.map((region) => (
                  <option key={region.regionId} value={String(region.regionId)}>
                    {region.name} ({region.code})
                  </option>
                ))
              )}
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

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
              Jenis Kelamin
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
            >
              <option value={1}>Laki-laki</option>
              <option value={2}>Perempuan</option>
            </select>
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
