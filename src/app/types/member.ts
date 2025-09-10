// types/member.ts
export interface Member {
  id: number; 
  memberCode: string; 
  nikKtp: string;
  namaLengkap: string;
  alamatLengkap: string;
  wilayah: string;
  wilayahName: string;
  nomorWhatsapp: string;
  registrationDate: string;
  status: "active" | "inactive";
}

export interface MemberFormData {
  nikKtp: string;
  namaLengkap: string;
  alamatLengkap: string;
  wilayah: string;
  nomorWhatsapp: string;
}

export interface MemberFormErrors {
  nikKtp?: string;
  namaLengkap?: string;
  alamatLengkap?: string;
  wilayah?: string;
  nomorWhatsapp?: string;
}

export interface WilayahCounters {
  [key: string]: number;
}

export type WilayahCode = "BDG" | "KBG" | "KBB" | "KBT" | "CMH" | "GRT" | "KGU" | "KGS" | "SMD" | "TSM" | "SMI" | "KSI" | "KSU" | "CJR" | "BGR" | "KBR" | "YMG" | "PMB";

export const wilayahOptions = [
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

export interface MemberFilters {
  search: string;
  wilayah: string;
  status: string;
  dateFrom: string;
  dateTo: string;
}

export interface MemberStats {
  totalMembers: number;
  activeMembers: number;
  inactiveMembers: number;
  membersByWilayah: { [key: string]: number };
  recentRegistrations: number;
}
