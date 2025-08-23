// components/MemberManagement.tsx
import React, { useState, useEffect, useMemo } from "react";
import { Member, MemberFilters, wilayahOptions } from "../../types/member";
import MemberStatsCards from "./MemberStatsCards";
import MemberFiltersComponent from "./MemberFilters";
import MemberTable from "./MemberTable";
import MemberForm from "./MemberForm";
import { exportMembersToExcel } from "../../utils/excelExport";

interface MemberManagementProps {
  currentUser: any;
}

const MemberManagement: React.FC<MemberManagementProps> = ({ currentUser }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [filters, setFilters] = useState<MemberFilters>({
    search: "",
    wilayah: "",
    status: "",
    dateFrom: "",
    dateTo: "",
  });

  // Sample member data
  const sampleMembers: Member[] = [
    {
      id: "BDG-0001",
      nikKtp: "3273010101900001",
      namaLengkap: "Ahmad Rizki Pratama",
      alamatLengkap: "Jl. Sudirman No. 123, Bandung, Jawa Barat",
      wilayah: "BDG",
      wilayahName: "Bandung (BDG)",
      nomorWhatsapp: "081234567890",
      registrationDate: "2024-01-15",
      status: "active",
    },
    {
      id: "KBG-0001",
      nikKtp: "3204010202850002",
      namaLengkap: "Siti Nurhaliza",
      alamatLengkap: "Jl. Raya Soreang KM 10, Kabupaten Bandung, Jawa Barat",
      wilayah: "KBG",
      wilayahName: "Kabupaten Bandung (KBG)",
      nomorWhatsapp: "082345678901",
      registrationDate: "2024-01-20",
      status: "active",
    },
    {
      id: "CMH-0001",
      nikKtp: "3277030303920003",
      namaLengkap: "Budi Santoso",
      alamatLengkap: "Jl. Baros No. 45, Cimahi, Jawa Barat",
      wilayah: "CMH",
      wilayahName: "Cimahi (CMH)",
      nomorWhatsapp: "083456789012",
      registrationDate: "2024-02-01",
      status: "inactive",
    },
    {
      id: "GRT-0001",
      nikKtp: "3205040404880004",
      namaLengkap: "Dewi Sartika",
      alamatLengkap: "Jl. Otto Iskandardinata No. 67, Garut, Jawa Barat",
      wilayah: "GRT",
      wilayahName: "Garut (GRT)",
      nomorWhatsapp: "084567890123",
      registrationDate: "2024-02-05",
      status: "active",
    },
    {
      id: "TSM-0001",
      nikKtp: "3206050505910005",
      namaLengkap: "Andi Firmansyah",
      alamatLengkap: "Jl. HZ Mustofa No. 89, Tasikmalaya, Jawa Barat",
      wilayah: "TSM",
      wilayahName: "Tasikmalaya (TSM)",
      nomorWhatsapp: "085678901234",
      registrationDate: "2024-02-10",
      status: "active",
    },
  ];

  useEffect(() => {
    // Load members from localStorage or use sample data
    const loadMembers = () => {
      const savedMembers = localStorage.getItem("admin_members");
      if (savedMembers) {
        setMembers(JSON.parse(savedMembers));
      } else {
        setMembers(sampleMembers);
        localStorage.setItem("admin_members", JSON.stringify(sampleMembers));
      }
    };

    loadMembers();
    setIsLoading(false);
  }, []);

  // Save members to localStorage whenever members state changes
  useEffect(() => {
    if (members.length > 0) {
      localStorage.setItem("admin_members", JSON.stringify(members));
    }
  }, [members]);

  // Filtered members based on current filters
  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch = member.namaLengkap.toLowerCase().includes(searchTerm) || member.nikKtp.includes(searchTerm) || member.nomorWhatsapp.includes(searchTerm) || member.id.toLowerCase().includes(searchTerm);

        if (!matchesSearch) return false;
      }

      // Wilayah filter
      if (filters.wilayah && member.wilayah !== filters.wilayah) {
        return false;
      }

      // Status filter
      if (filters.status && member.status !== filters.status) {
        return false;
      }

      // Date range filter
      if (filters.dateFrom) {
        const memberDate = new Date(member.registrationDate);
        const fromDate = new Date(filters.dateFrom);
        if (memberDate < fromDate) return false;
      }

      if (filters.dateTo) {
        const memberDate = new Date(member.registrationDate);
        const toDate = new Date(filters.dateTo);
        if (memberDate > toDate) return false;
      }

      return true;
    });
  }, [members, filters]);

  const handleSaveMember = (memberData: Partial<Member>) => {
    const newMember: Member = {
      id: editingMember ? editingMember.id : memberData.id || "",
      nikKtp: memberData.nikKtp || "",
      namaLengkap: memberData.namaLengkap || "",
      alamatLengkap: memberData.alamatLengkap || "",
      wilayah: memberData.wilayah || "",
      wilayahName: memberData.wilayahName || "",
      nomorWhatsapp: memberData.nomorWhatsapp || "",
      registrationDate: memberData.registrationDate || new Date().toISOString().split("T")[0],
      status: memberData.status || "active",
    };

    let updatedMembers;
    if (editingMember) {
      updatedMembers = members.map((member) => (member.id === editingMember.id ? newMember : member));
    } else {
      updatedMembers = [newMember, ...members];
    }

    setMembers(updatedMembers);

    // Reset form state
    setEditingMember(null);
    setShowMemberForm(false);
  };

  const handleEditMember = (member: Member) => {
    setEditingMember(member);
    setShowMemberForm(true);
  };

  const handleDeleteMember = (id: string) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };

  const handleStatusChange = (id: string, status: "active" | "inactive") => {
    const updatedMembers = members.map((member) => (member.id === id ? { ...member, status } : member));
    setMembers(updatedMembers);
  };

  const handleCancelForm = () => {
    setEditingMember(null);
    setShowMemberForm(false);
  };

  const handleShowForm = () => {
    setEditingMember(null);
    setShowMemberForm(true);
  };

  const handleExportExcel = () => {
    const dataToExport = filteredMembers.length > 0 ? filteredMembers : members;
    const fileName = `data-anggota-${new Date().toISOString().split("T")[0]}.csv`;
    exportMembersToExcel(dataToExport, fileName);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data anggota...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {!showMemberForm ? (
        <>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Manajemen Anggota</h2>
              <p className="text-gray-600 mt-1">Kelola data anggota yang terdaftar dalam sistem</p>
            </div>
          </div>

          <MemberStatsCards members={members} />

          <MemberFiltersComponent filters={filters} onFilterChange={setFilters} onExportExcel={handleExportExcel} onShowForm={handleShowForm} />

          <MemberTable members={filteredMembers} onEdit={handleEditMember} onDelete={handleDeleteMember} onStatusChange={handleStatusChange} />
        </>
      ) : (
        <MemberForm editingMember={editingMember} onSave={handleSaveMember} onCancel={handleCancelForm} existingMembers={members} />
      )}
    </div>
  );
};

export default MemberManagement;
