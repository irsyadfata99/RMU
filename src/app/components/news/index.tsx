"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface BeritaItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

interface HomepageNewsProps {
  limit?: number; // Number of articles to display
  showFeatured?: boolean; // Whether to show featured articles differently
  className?: string; // Additional CSS classes
}

const HomepageNews = ({ limit = 6, showFeatured = true, className = "" }: HomepageNewsProps) => {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data - Replace with actual API call to Laravel backend
  const mockBerita: BeritaItem[] = [
    {
      id: 1,
      title: "Program Beasiswa RMU Tahun 2024 Dibuka untuk 1000 Siswa Berprestasi",
      excerpt: "Reksa Mahardhika Unggul membuka program beasiswa untuk siswa kurang mampu namun berprestasi di seluruh Indonesia.",
      content: "Lorem ipsum dolor sit amet...",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=400&fit=crop",
      author: "Tim Humas RMU",
      publishedAt: "2024-01-15",
      category: "Pendidikan",
      readTime: 5,
      tags: ["Beasiswa", "Pendidikan", "Siswa"],
      featured: true,
    },
    {
      id: 2,
      title: "Bantuan Sosial untuk Korban Bencana Alam di Jawa Barat",
      excerpt: "Tim relawan RMU menyalurkan bantuan kepada masyarakat terdampak banjir di wilayah Jawa Barat.",
      content: "Lorem ipsum dolor sit amet...",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop",
      author: "Divisi Sosial",
      publishedAt: "2024-01-12",
      category: "Sosial",
      readTime: 4,
      tags: ["Bantuan", "Bencana", "Sosial"],
      featured: false,
    },
    {
      id: 3,
      title: "Workshop Entrepreneurship untuk Pengembangan UMKM Lokal",
      excerpt: "RMU mengadakan pelatihan kewirausahaan untuk meningkatkan kapasitas pelaku UMKM di berbagai daerah.",
      content: "Lorem ipsum dolor sit amet...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      author: "Divisi Ekonomi",
      publishedAt: "2024-01-10",
      category: "Ekonomi",
      readTime: 6,
      tags: ["UMKM", "Workshop", "Ekonomi"],
      featured: true,
    },
    {
      id: 4,
      title: "Festival Seni Budaya Nusantara 2024 Sukses Digelar",
      excerpt: "Acara tahunan yang menampilkan keberagaman seni dan budaya Indonesia dari Sabang sampai Merauke.",
      content: "Lorem ipsum dolor sit amet...",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=400&fit=crop",
      author: "Divisi Seni Budaya",
      publishedAt: "2024-01-08",
      category: "Seni Budaya",
      readTime: 7,
      tags: ["Festival", "Seni", "Budaya"],
      featured: false,
    },
    {
      id: 5,
      title: "Program Kesehatan Gratis Menjangkau Desa Terpencil",
      excerpt: "Tim medis RMU memberikan pelayanan kesehatan gratis kepada masyarakat di daerah terpencil.",
      content: "Lorem ipsum dolor sit amet...",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d76b6e?w=800&h=400&fit=crop",
      author: "Divisi Kesehatan",
      publishedAt: "2024-01-05",
      category: "Kesehatan",
      readTime: 5,
      tags: ["Kesehatan", "Desa", "Gratis"],
      featured: false,
    },
    {
      id: 6,
      title: "Pelatihan Leadership untuk Generasi Muda Indonesia",
      excerpt: "Program pengembangan kepemimpinan yang ditujukan untuk para pemuda sebagai agent of change.",
      content: "Lorem ipsum dolor sit amet...",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop",
      author: "Divisi Kepemudaan",
      publishedAt: "2024-01-03",
      category: "Kepemudaan",
      readTime: 6,
      tags: ["Leadership", "Pemuda", "Pelatihan"],
      featured: true,
    },
  ];

  // Function to fetch news from Laravel API
  const fetchNews = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // TODO: Replace with actual Laravel API endpoint
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/berita?limit=${limit}`);
      // if (!response.ok) {
      //   throw new Error('Failed to fetch news');
      // }
      // const data = await response.json();
      // setBeritaList(data.data || data);

      // Simulate API call with mock data
      setTimeout(() => {
        setBeritaList(mockBerita.slice(0, limit));
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [limit]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      Pendidikan: "bg-blue-100 text-blue-700",
      Sosial: "bg-red-100 text-red-700",
      Ekonomi: "bg-green-100 text-green-700",
      Kesehatan: "bg-teal-100 text-teal-700",
      "Seni Budaya": "bg-purple-100 text-purple-700",
      Kepemudaan: "bg-orange-100 text-orange-700",
    };
    return colorMap[category] || "bg-gray-100 text-gray-700";
  };

  if (isLoading) {
    return (
      <div className={`py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Berita <span className="text-blue-600">Terbaru</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-5">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-3"></div>
                  <div className="h-3 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Gagal memuat berita</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button onClick={fetchNews} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Coba Lagi
            </button>
          </div>
        </div>
      </div>
    );
  }

  const featuredNews = showFeatured ? beritaList.filter((item) => item.featured) : [];
  const regularNews = showFeatured ? beritaList.filter((item) => !item.featured) : beritaList;

  return (
    <section className={`py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Berita <span className="text-blue-600">Terbaru</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ikuti perkembangan terkini program dan kegiatan Reksa Mahardhika Unggul</p>
        </div>

        {/* Featured News */}
        {showFeatured && featuredNews.length > 0 && (
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.slice(0, 2).map((item) => (
                <Link href={`/berita/${item.id}`} key={item.id}>
                  <div className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>{item.category}</div>
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">⭐ Unggulan</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{item.author}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(item.publishedAt)}</span>
                        <span className="mx-2">•</span>
                        <span>{item.readTime} min baca</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular News Grid */}
        {regularNews.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularNews.map((item) => (
              <Link href={`/berita/${item.id}`} key={item.id}>
                <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>{item.category}</div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span>{formatDate(item.publishedAt)}</span>
                      <span className="mx-2">•</span>
                      <span>{item.readTime} min</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{item.author}</span>
                      <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Link href="/berita/berita-terbaru">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Lihat Semua Berita
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageNews;
