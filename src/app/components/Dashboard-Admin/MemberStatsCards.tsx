// components/MemberStatsCards.tsx
import React from "react";
import { Member, MemberStats } from "../../types/member";

interface MemberStatsCardsProps {
  members: Member[];
}

const MemberStatsCards: React.FC<MemberStatsCardsProps> = ({ members }) => {
  const calculateStats = (): MemberStats => {
    const totalMembers = members.length;
    const activeMembers = members.filter((member) => member.status === "active").length;
    const inactiveMembers = totalMembers - activeMembers;

    // Members by wilayah
    const membersByWilayah: { [key: string]: number } = {};
    members.forEach((member) => {
      membersByWilayah[member.wilayahName] = (membersByWilayah[member.wilayahName] || 0) + 1;
    });

    // Recent registrations (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentRegistrations = members.filter((member) => new Date(member.registrationDate) > thirtyDaysAgo).length;

    return {
      totalMembers,
      activeMembers,
      inactiveMembers,
      membersByWilayah,
      recentRegistrations,
    };
  };

  const stats = calculateStats();

  const statCards = [
    {
      title: "Total Anggota",
      value: stats.totalMembers,
      icon: "👥",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
    },
    {
      title: "Anggota Aktif",
      value: stats.activeMembers,
      icon: "✅",
      color: "from-green-500 to-green-600",
      textColor: "text-green-600",
    },
    {
      title: "Anggota Tidak Aktif",
      value: stats.inactiveMembers,
      icon: "⏸️",
      color: "from-yellow-500 to-yellow-600",
      textColor: "text-yellow-600",
    },
    {
      title: "Pendaftar Baru (30 hari)",
      value: stats.recentRegistrations,
      icon: "📈",
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statCards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
              <p className={`text-3xl font-bold ${card.textColor}`}>{card.value.toLocaleString()}</p>
            </div>
            <div className={`w-14 h-14 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center text-2xl`}>{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberStatsCards;
