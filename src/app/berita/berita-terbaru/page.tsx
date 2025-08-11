"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FrontHeader from "../../components/Navbar";
import FrontFooter from "../../components/Footer";
import { beritaService, type BeritaItem } from "../../../lib/api/berita";

const BeritaPage = () => {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [filteredBerita, setFilteredBerita] = useState<BeritaItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Load categories on component mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await beritaService.getCategories();
        setCategories(["Semua", ...categoriesData]);
      } catch (error) {
        console.error("Error loading categories:", error);
        // Fallback to default categories
        setCategories(["Semua", "Pendidikan", "Sosial", "Ekonomi", "Kesehatan", "Seni Budaya", "Kepemudaan"]);
      }
    };

    loadCategories();
  }, []);

  // Load berita data
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const params = {
          page: currentPage,
          per_page: 12,
          category: selectedCategory,
          search: searchQuery || undefined,
        };

        const response = await beritaService.getBerita(params);

        setBeritaList(response.data);
        setFilteredBerita(response.data);

        if (response.meta) {
          setTotalPages(response.meta.last_page);
        }
      } catch (error) {
        console.error("Error fetching berita:", error);
        setError("Gagal memuat berita. Silakan coba lagi.");

        // Fallback to mock data for development
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
        ];

        setBeritaList(mockBerita);
        setFilteredBerita(mockBerita);
        setError(null);
      } finally {
        setIsLoading(false);
      }
    };

    // Add debounce for search
    const timeoutId = setTimeout(
      () => {
        fetchBerita();
      },
      searchQuery ? 500 : 0
    );

    return () => clearTimeout(timeoutId);
  }, [selectedCategory, searchQuery, currentPage]);

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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category.toLowerCase());
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <FrontHeader />
        <div className="flex-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat berita terbaru...</p>
          </div>
        </div>
        <FrontFooter />
      </div>
    );
  }

  const featuredNews = filteredBerita.filter((item) => item.featured);
  const regularNews = filteredBerita.filter((item) => !item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <FrontHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Berita <span className="text-blue-600">Terbaru</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ikuti perkembangan terkini program dan kegiatan Reksa Mahardhika Unggul</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Cari berita..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category.toLowerCase() ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured News Section */}
          {featuredNews.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                Berita Utama
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredNews.slice(0, 2).map((item) => (
                  <Link href={`/berita/${item.id}`} key={item.id}>
                    <div className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>{item.category}</div>
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
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Semua Berita</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button key={pageNum} onClick={() => handlePageChange(pageNum)} className={`px-4 py-2 rounded-lg ${currentPage === pageNum ? "bg-blue-600 text-white" : "border border-gray-300 text-gray-500 hover:bg-gray-50"}`}>
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && (
                  <>
                    <span className="px-2 text-gray-400">...</span>
                    <button onClick={() => handlePageChange(totalPages)} className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? "bg-blue-600 text-white" : "border border-gray-300 text-gray-500 hover:bg-gray-50"}`}>
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* No Results State */}
          {filteredBerita.length === 0 && !isLoading && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada berita ditemukan</h3>
              <p className="text-gray-600 mb-4">Coba ubah filter atau kata kunci pencarian Anda.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("semua");
                  setCurrentPage(1);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </main>

      <FrontFooter />
    </div>
  );
};

export default BeritaPage;
