// pages/admin/dashboard.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "../../components/AdminHeader";
import StatCards from "../../components/StatCards";
import ArticleTable from "../../components/ArtikelTable";
import ArticleForm from "../artikel/post/page";
import MemberManagement from "../../components/Dashboard-Admin/MemberManagement";
import { getBerita, getBeritaById, publishBerita, deleteBerita } from "@/lib/api/article";
import { ArticleUI } from "@/app/types/article";
import { Article } from "@/app/models/artikel/artikel/artikel";

interface User {
  id: number;
  name: string;
  email: string;
  last_login_ip: string | null;
  last_login_device: string | null;
  last_active_at: string | null;
  role: string;
  created_at: string;
  updated_at: string;
  admin?: {
    adminId: number;
    user_id: number;
    name: string;
    phone: string;
  } | null;
  supervisor?: object | null;
  employee?: object | null;
  member?: object | null;
}

type ActiveTab = "articles" | "members";


const AdminDashboard = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [articles, setArticles] = useState<ArticleUI[]>([]);
  const [showArticleForm, setShowArticleForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>("articles");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const getRole = (user: User): string => {
    if (user.role) return "admin";
    return "unknown";
  };

  const handleEditArticle = async (article: ArticleUI) => {
    try {
      const res = await getBeritaById(article.id);
      setEditingArticle(res.data.data); 
      setShowArticleForm(true);
    } catch (err) {
      console.error(err);
      alert("Gagal mengambil detail artikel");
    }
  };

  const fetchArticles = useCallback(async (page = 1) => {
    setIsLoading(true);
    try {
      const res = await getBerita({ page, limit: 10 });

      const mapped = res.data.data.data.map((item: any) => ({
        id: item.id,
        title: item.title,
        excerpt: item.excerpt,
        content: item.content,
        image: item.thumbImage,
        author: item.User?.name ?? "-",
        category: item.CategoryPost?.name ?? "-",
        tags: item.TagPosts?.map((t: any) => t.name) ?? [],
        createdAt: item.createdAt,
        status: item.status === "PUBLISHED" ? "published" : "draft",
      }));

      setArticles(mapped);

      setPage(res.data.data.pagination.page);
      setTotalPages(res.data.data.pagination.totalPages);
      setTotalItems(res.data.data.pagination.total);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

    useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem("admin_user");
      const token = localStorage.getItem("admin_token");

      if (!savedUser || !token) {
        router.push("/admin/login");
        return;
      }

      const parsedUser: User = JSON.parse(savedUser);

      setCurrentUser({
        ...parsedUser,
        role: getRole(parsedUser),
      } as User & { role: string });
    };

    checkAuth();
    fetchArticles(page);

    setIsLoading(false);
  }, [router, fetchArticles, page]);

  const handlePublishArticle = async (id: string) => {
    try {
      await publishBerita(id);

      setArticles((prev) =>
        prev.map((article) =>
          article.id === id ? { ...article, status: "published" } : article
        )
      );

    } catch (error) {
      console.error(error);
      // toast error juga sudah ada di ArticleTable
    }
  };

  const handleDeleteArticle = async (id: string) => {
    try {
      await deleteBerita(id);

      setArticles((prev) => prev.filter((article) => article.id !== id));

    } catch (error) {
      console.error(error);
    }
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
    setShowArticleForm(false);
    setEditingArticle(null);
  };

  const handlePageChange = (newPage: number) => {
    fetchArticles(newPage);
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
                <ArticleTable 
                  articles={articles} 
                  onEdit={handleEditArticle} 
                  onPublish={handlePublishArticle}
                  onDelete={handleDeleteArticle} 
                  page={page}
                  totalPages={totalPages}
                  totalItems={totalItems}
                  onPageChange={handlePageChange}
                />

              </>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button onClick={handleCancelForm} className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                    <span>←</span>
                    <span>Kembali ke Daftar Artikel</span>
                  </button>
                </div>
                <ArticleForm editingArticle={editingArticle}  currentUser={currentUser} onCancel={handleCancelForm} />
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
