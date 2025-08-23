// pages/admin/dashboard.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "../../components/AdminHeader";
import StatCards from "../../components/StatCards";
import ArticleTable from "../../components/ArtikelTable";
import ArticleForm from "../../components/ArtikelForm";
import MemberManagement from "../../components/Dashboard-Admin/MemberManagement";

interface Article {
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
  status: "draft" | "published";
}

interface User {
  id: number;
  username: string;
  email: string;
  role: "admin" | "editor";
}

type ActiveTab = "articles" | "members";

const AdminDashboard = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [showArticleForm, setShowArticleForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>("articles");

  // Sample articles data
  const sampleArticles: Article[] = [
    {
      id: 1,
      title: "Program Beasiswa RMU Tahun 2024 Dibuka untuk 1000 Siswa Berprestasi",
      excerpt: "Reksa Mahardhika Unggul membuka program beasiswa untuk siswa kurang mampu namun berprestasi di seluruh Indonesia.",
      content:
        "Reksa Mahardhika Unggul (RMU) dengan bangga mengumumkan pembukaan program beasiswa tahun 2024 yang akan memberikan kesempatan kepada 1000 siswa berprestasi dari keluarga kurang mampu untuk melanjutkan pendidikan mereka ke jenjang yang lebih tinggi.\n\nProgram beasiswa ini ditujukan untuk siswa-siswi yang memenuhi kriteria sebagai berikut:\n- Siswa SMA/SMK kelas 12 atau lulusan tahun 2023-2024\n- Memiliki prestasi akademik dengan rata-rata nilai minimal 8.0\n- Berasal dari keluarga dengan penghasilan maksimal Rp 3.000.000 per bulan\n- Aktif dalam kegiatan sosial atau organisasi di sekolah\n- Memiliki motivasi tinggi untuk mengembangkan diri",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=400&fit=crop",
      author: "Tim Humas RMU",
      publishedAt: "2024-01-15",
      category: "Pendidikan",
      readTime: 5,
      tags: ["Beasiswa", "Pendidikan", "Siswa"],
      featured: true,
      status: "published",
    },
    {
      id: 2,
      title: "Bantuan Sosial untuk Korban Bencana Alam di Jawa Barat",
      excerpt: "Tim relawan RMU menyalurkan bantuan kepada masyarakat terdampak banjir di wilayah Jawa Barat.",
      content:
        "Tim relawan Reksa Mahardhika Unggul (RMU) bergerak cepat untuk memberikan bantuan kepada masyarakat yang terdampak banjir di beberapa wilayah Jawa Barat. Bencana yang terjadi akibat curah hujan tinggi ini telah menyebabkan ribuan keluarga kehilangan tempat tinggal dan harta benda.\n\nRMU telah menyalurkan berbagai jenis bantuan meliputi:\n- Paket sembako untuk 500 keluarga\n- Air bersih dan obat-obatan\n- Perlengkapan bayi dan anak-anak\n- Tenda darurat dan selimut\n- Bantuan tunai untuk kebutuhan mendesak",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop",
      author: "Divisi Sosial",
      publishedAt: "2024-01-12",
      category: "Sosial",
      readTime: 4,
      tags: ["Bantuan", "Bencana", "Sosial"],
      featured: false,
      status: "published",
    },
    {
      id: 3,
      title: "Workshop Entrepreneurship untuk Pengembangan UMKM Lokal",
      excerpt: "RMU mengadakan pelatihan kewirausahaan untuk meningkatkan kapasitas pelaku UMKM di berbagai daerah.",
      content:
        "Reksa Mahardhika Unggul (RMU) mengadakan workshop entrepreneurship yang bertujuan untuk meningkatkan kapasitas dan kemampuan para pelaku UMKM (Usaha Mikro, Kecil, dan Menengah) di berbagai daerah.\n\nWorkshop ini mencakup:\n- Strategi pemasaran digital\n- Manajemen keuangan UMKM\n- Pengembangan produk dan inovasi\n- Akses permodalan dan investasi\n- Networking dengan sesama pengusaha",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      author: "Divisi Ekonomi",
      publishedAt: "2024-01-10",
      category: "Ekonomi",
      readTime: 6,
      tags: ["UMKM", "Workshop", "Ekonomi"],
      featured: true,
      status: "draft",
    },
  ];

  useEffect(() => {
    // Check authentication
    const checkAuth = () => {
      const savedUser = localStorage.getItem("admin_user");
      const token = localStorage.getItem("admin_token");

      if (!savedUser || !token) {
        router.push("/admin/login");
        return;
      }

      setCurrentUser(JSON.parse(savedUser));
    };

    // Load articles
    const loadArticles = () => {
      const savedArticles = localStorage.getItem("admin_articles");
      if (savedArticles) {
        setArticles(JSON.parse(savedArticles));
      } else {
        setArticles(sampleArticles);
        localStorage.setItem("admin_articles", JSON.stringify(sampleArticles));
      }
    };

    checkAuth();
    loadArticles();
    setIsLoading(false);
  }, [router]);

  const handleSaveArticle = (articleData: Partial<Article>) => {
    const newArticle: Article = {
      id: editingArticle ? editingArticle.id : Date.now(),
      title: articleData.title || "",
      excerpt: articleData.excerpt || "",
      content: articleData.content || "",
      image: articleData.image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      author: articleData.author || currentUser?.username || "",
      publishedAt: editingArticle ? editingArticle.publishedAt : new Date().toISOString().split("T")[0],
      category: articleData.category || "Pendidikan",
      readTime: Math.ceil((articleData.content?.length || 0) / 200),
      tags: articleData.tags || [],
      featured: articleData.featured || false,
      status: articleData.status || "draft",
    };

    let updatedArticles;
    if (editingArticle) {
      updatedArticles = articles.map((article) => (article.id === editingArticle.id ? newArticle : article));
    } else {
      updatedArticles = [newArticle, ...articles];
    }

    setArticles(updatedArticles);
    localStorage.setItem("admin_articles", JSON.stringify(updatedArticles));

    // Reset form state
    setEditingArticle(null);
    setShowArticleForm(false);
  };

  const handleEditArticle = (article: Article) => {
    setEditingArticle(article);
    setShowArticleForm(true);
  };

  const handleDeleteArticle = (id: number) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
    setArticles(updatedArticles);
    localStorage.setItem("admin_articles", JSON.stringify(updatedArticles));
  };

  const handleCancelForm = () => {
    setEditingArticle(null);
    setShowArticleForm(false);
  };

  const handleShowForm = () => {
    setEditingArticle(null);
    setShowArticleForm(true);
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    // Reset article form when switching tabs
    setShowArticleForm(false);
    setEditingArticle(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <AdminHeader currentUser={currentUser} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 mb-8">
          <div className="flex space-x-2">
            <button
              onClick={() => handleTabChange("articles")}
              className={`flex-1 py-3 px-6 text-center font-medium rounded-lg transition-all duration-200 ${activeTab === "articles" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}
            >
              <div className="flex items-center justify-center gap-2">
                <span>📝</span>
                <span>Manajemen Artikel</span>
              </div>
            </button>
            <button
              onClick={() => handleTabChange("members")}
              className={`flex-1 py-3 px-6 text-center font-medium rounded-lg transition-all duration-200 ${activeTab === "members" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}
            >
              <div className="flex items-center justify-center gap-2">
                <span>👥</span>
                <span>Manajemen Anggota</span>
              </div>
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === "articles" && (
          <>
            {!showArticleForm ? (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">Manajemen Artikel</h1>
                  <p className="text-gray-600">Kelola artikel dan konten yang akan ditampilkan di website</p>
                </div>
                <StatCards articles={articles} />
                <ArticleTable articles={articles} onEdit={handleEditArticle} onDelete={handleDeleteArticle} onShowForm={handleShowForm} />
              </>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button onClick={handleCancelForm} className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                    <span>←</span>
                    <span>Kembali ke Daftar Artikel</span>
                  </button>
                </div>
                <ArticleForm editingArticle={editingArticle} currentUser={currentUser} onSave={handleSaveArticle} onCancel={handleCancelForm} />
              </div>
            )}
          </>
        )}

        {activeTab === "members" && <MemberManagement currentUser={currentUser} />}
      </div>
    </div>
  );
};

export default AdminDashboard;
