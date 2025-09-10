import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Member, MemberFilters } from "../../types/member";
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

  // Ambil data dari API
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const token = localStorage.getItem("admin_token"); 
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/people/member`,
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
        const apiMembers = res.data.data.member;

        const mappedMembers: Member[] = apiMembers.map((m: any) => ({
          id: m.memberId,
          nikKtp: m.nik,
          namaLengkap: m.name,
          alamatLengkap: m.address,
          wilayah: m.region ? String(m.region.regionId) : "",   
          wilayahName: m.region ? `${m.region.name} (${m.region.code})` : "", 
          nomorWhatsapp: m.phone,
          registrationDate: m.registered_at
            ? m.registered_at.split("T")[0]
            : "",
          status: m.status === 1 ? "active" : "inactive", 
        }));
        // console.log('wilayah', mappedMembers)


        setMembers(mappedMembers);
      } catch (err) {
        console.error("Gagal ambil data member:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // filteredMembers sama kaya punya kamu
  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch =
          member.namaLengkap.toLowerCase().includes(searchTerm) ||
          member.nikKtp.includes(searchTerm) ||
          member.nomorWhatsapp.includes(searchTerm) ||
          String(member.id).includes(searchTerm);


        if (!matchesSearch) return false;
      }

      if (filters.wilayah && member.wilayah !== filters.wilayah) {
        return false;
      }


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
              <h2 className="text-2xl font-bold text-gray-800">
                Manajemen Anggota
              </h2>
              <p className="text-gray-600 mt-1">
                Kelola data anggota yang terdaftar dalam sistem
              </p>
            </div>
          </div>

          <MemberStatsCards members={members} />

          <MemberFiltersComponent
            filters={filters}
            onFilterChange={setFilters}
            onExportExcel={() => exportMembersToExcel(filteredMembers, "anggota.csv")}
            onShowForm={() => {
              setEditingMember(null);
              setShowMemberForm(true);
            }}
          />

          <MemberTable
            members={filteredMembers}
            onEdit={(m) => {
              setEditingMember(m);
              setShowMemberForm(true);
            }}
            onDelete={(id) =>
              setMembers(members.filter((member) => member.id !== id))
            }
            onStatusChange={(id, status) =>
              setMembers(
                members.map((member) =>
                  member.id === Number(id) ? { ...member, status } : member
                )
              )
            }
          />
        </>
      ) : (
        <MemberForm
          editingMember={editingMember}
          onSave={(m) => {
            // kalau masih mau tambah manual ke local FE
            const newMember: Member = {
              id: editingMember ? editingMember.id : Number(m.id), 
              memberCode: m.memberCode || "",
              nikKtp: m.nikKtp || "",
              namaLengkap: m.namaLengkap || "",
              alamatLengkap: m.alamatLengkap || "",
              wilayah: m.wilayah || "",
              wilayahName: m.wilayahName || "",
              nomorWhatsapp: m.nomorWhatsapp || "",
              registrationDate:
                m.registrationDate || new Date().toISOString().split("T")[0],
              status: "active", 
            };
            setMembers(
              editingMember
                ? members.map((mem) =>
                    mem.id === editingMember.id ? newMember : mem
                  )
                : [newMember, ...members]
            );
            setEditingMember(null);
            setShowMemberForm(false);
          }}
          onCancel={() => {
            setEditingMember(null);
            setShowMemberForm(false);
          }}
          existingMembers={members}
        />
      )}
    </div>
  );
};

export default MemberManagement;
