"use client";

import { useState, useEffect } from "react";

interface Division {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const FoundationDivisionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredDivision, setHoveredDivision] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  const divisions: Division[] = [
    {
      id: 1,
      name: "Divisi Sosial",
      description: "Program bantuan sosial dan pemberdayaan masyarakat kurang mampu",
      icon: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=center",
      color: "text-red-500",
    },
    {
      id: 2,
      name: "Divisi Pendidikan",
      description: "Program beasiswa dan pengembangan pendidikan berkualitas",
      icon: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&crop=center",
      color: "text-blue-500",
    },
    {
      id: 3,
      name: "Divisi Seni Budaya",
      description: "Pelestarian dan pengembangan seni budaya Indonesia",
      icon: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop&crop=center",
      color: "text-purple-500",
    },
    {
      id: 4,
      name: "Divisi Hukum",
      description: "Bantuan hukum dan advokasi untuk masyarakat",
      icon: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&crop=center",
      color: "text-amber-600",
    },
    {
      id: 5,
      name: "Divisi Ekonomi",
      description: "Pemberdayaan ekonomi dan pengembangan UMKM",
      icon: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      color: "text-green-500",
    },
    {
      id: 6,
      name: "Divisi Kesehatan",
      description: "Program kesehatan masyarakat dan layanan medis",
      icon: "https://images.unsplash.com/photo-1576091160399-112ba8d76b6e?w=400&h=300&fit=crop&crop=center",
      color: "text-teal-500",
    },
    {
      id: 7,
      name: "Divisi Humas",
      description: "Hubungan masyarakat dan komunikasi publik",
      icon: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      color: "text-indigo-500",
    },
    {
      id: 8,
      name: "Divisi HRD",
      description: "Pengembangan sumber daya manusia organisasi",
      icon: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&crop=center",
      color: "text-cyan-500",
    },
    {
      id: 9,
      name: "Divisi Kesekretariatan",
      description: "Administrasi dan manajemen operasional organisasi",
      icon: "https://images.unsplash.com/photo-1586953211409-26ba84e4c46f?w=400&h=300&fit=crop&crop=center",
      color: "text-slate-500",
    },
    {
      id: 10,
      name: "Divisi Kepemudaan",
      description: "Pengembangan potensi dan leadership generasi muda",
      icon: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop&crop=center",
      color: "text-orange-500",
    },
    {
      id: 11,
      name: "Divisi Keamanan",
      description: "Keamanan dan ketertiban kegiatan organisasi",
      icon: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop&crop=center",
      color: "text-rose-500",
    },
    {
      id: 12,
      name: "Divisi Pemberdayaan Perempuan",
      description: "Pemberdayaan dan peningkatan peran perempuan dalam masyarakat",
      icon: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop&crop=center",
      color: "text-pink-500",
    },
  ];

  // Duplicate divisions for seamless infinite scroll
  const duplicatedDivisions = [...divisions, ...divisions];

  useEffect(() => {
    setIsVisible(true);
    setIsClient(true);
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; icon: string } } = {
      "text-red-500": { bg: "bg-red-50", icon: "bg-red-500" },
      "text-blue-500": { bg: "bg-blue-50", icon: "bg-blue-500" },
      "text-purple-500": { bg: "bg-purple-50", icon: "bg-purple-500" },
      "text-amber-600": { bg: "bg-amber-50", icon: "bg-amber-600" },
      "text-green-500": { bg: "bg-green-50", icon: "bg-green-500" },
      "text-teal-500": { bg: "bg-teal-50", icon: "bg-teal-500" },
      "text-indigo-500": { bg: "bg-indigo-50", icon: "bg-indigo-500" },
      "text-cyan-500": { bg: "bg-cyan-50", icon: "bg-cyan-500" },
      "text-slate-500": { bg: "bg-slate-50", icon: "bg-slate-500" },
      "text-orange-500": { bg: "bg-orange-50", icon: "bg-orange-500" },
      "text-rose-500": { bg: "bg-rose-50", icon: "bg-rose-500" },
      "text-pink-500": { bg: "bg-pink-50", icon: "bg-pink-500" },
    };
    return colorMap[color] || { bg: "bg-gray-50", icon: "bg-gray-500" };
  };

  return (
    <section className="relative w-full bg-white py-16 overflow-hidden">
      {/* Custom CSS for animation */}
      <style jsx>{`
        .carousel-container {
          overflow: hidden;
          width: 100%;
        }

        .carousel-track {
          display: flex;
          animation: scroll-left 60s linear infinite;
          width: max-content;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-600 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Reksa Mahardhika Group</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
            Reksa Mahardhika dan divisi-divisi saling bersinergy guna menciptakan dampak sosial terbaik serta menyediakan solusi paling tepat untuk kebutuhan masyarakat.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span>12 Divisi Aktif</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>50+ Program</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span>25+ Kota</span>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="carousel-container">
            <div className="carousel-track">
              {duplicatedDivisions.map((division, index) => {
                const colorClasses = getColorClasses(division.color);
                return (
                  <div
                    key={`${division.id}-${index}`}
                    className="flex-shrink-0 w-72 mx-3 group bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                    onMouseEnter={() => setHoveredDivision(division.id)}
                    onMouseLeave={() => setHoveredDivision(null)}
                  >
                    {/* Division Image */}
                    <div className="relative h-32 overflow-hidden">
                      <img src={division.icon} alt={division.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      {/* Color indicator */}
                      <div className={`absolute top-3 right-3 w-6 h-6 ${colorClasses.bg} rounded-full border-2 border-white flex items-center justify-center shadow-sm`}>
                        <div className={`w-3 h-3 ${colorClasses.icon} rounded-full`}></div>
                      </div>
                    </div>

                    {/* Division Content */}
                    <div className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-1 h-5 ${colorClasses.icon} rounded-full`}></div>
                        <h3 className="text-lg font-bold text-gray-900">{division.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{division.description}</p>

                      {/* Action Button */}
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-medium px-2 py-1 ${colorClasses.bg} ${division.color} rounded-full`}>Aktif</span>
                        <div className={`w-8 h-8 ${colorClasses.bg} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                          <svg className={`w-4 h-4 ${division.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`h-1 ${colorClasses.icon} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center group">
            <div className="bg-white rounded-lg p-4 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl font-bold text-red-500 mb-1 group-hover:scale-105 transition-transform duration-300">50+</div>
              <div className="text-gray-600 font-medium text-sm">Program Aktif</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white rounded-lg p-4 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl font-bold text-blue-500 mb-1 group-hover:scale-105 transition-transform duration-300">100+</div>
              <div className="text-gray-600 font-medium text-sm">Mitra Organisasi</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white rounded-lg p-4 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl font-bold text-green-500 mb-1 group-hover:scale-105 transition-transform duration-300">25+</div>
              <div className="text-gray-600 font-medium text-sm">Kota Terjangkau</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationDivisionsSection;
