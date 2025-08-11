"use client";

import { useState, useEffect } from "react";

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
  username: string;
}

interface ArticleFormProps {
  editingArticle: Article | null;
  currentUser: User | null;
  onSave: (article: Partial<Article>) => void;
  onCancel: () => void;
}

const ArticleForm = ({ editingArticle, currentUser, onSave, onCancel }: ArticleFormProps) => {
  const [articleForm, setArticleForm] = useState<Partial<Article>>({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    author: "",
    category: "Pendidikan",
    tags: [],
    featured: false,
    status: "draft",
  });

  useEffect(() => {
    if (editingArticle) {
      setArticleForm(editingArticle);
    } else {
      setArticleForm({
        title: "",
        excerpt: "",
        content: "",
        image: "",
        author: currentUser?.username || "",
        category: "Pendidikan",
        tags: [],
        featured: false,
        status: "draft",
      });
    }
  }, [editingArticle, currentUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(articleForm);
  };

  const categories = ["Pendidikan", "Sosial", "Ekonomi", "Kesehatan", "Seni Budaya", "Kepemudaan"];

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{editingArticle ? "Edit Artikel" : "Buat Artikel Baru"}</h2>
        <button onClick={onCancel} className="text-gray-500 hover:text-gray-700 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Judul Artikel *</label>
            <input
              type="text"
              value={articleForm.title}
              onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Masukkan judul artikel..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
            <select
              value={articleForm.category}
              onChange={(e) => setArticleForm({ ...articleForm, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ringkasan Artikel *</label>
          <textarea
            value={articleForm.excerpt}
            onChange={(e) => setArticleForm({ ...articleForm, excerpt: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Tulis ringkasan singkat artikel..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Konten Artikel *</label>
          <textarea
            value={articleForm.content}
            onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
            rows={12}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Tulis konten lengkap artikel..."
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">URL Gambar</label>
            <input
              type="url"
              value={articleForm.image}
              onChange={(e) => setArticleForm({ ...articleForm, image: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="https://example.com/image.jpg"
            />
            {articleForm.image && (
              <div className="mt-2">
                <img
                  src={articleForm.image}
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Penulis</label>
            <input
              type="text"
              value={articleForm.author}
              onChange={(e) => setArticleForm({ ...articleForm, author: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder={currentUser?.username || "Nama penulis"}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tags (pisahkan dengan koma)</label>
          <input
            type="text"
            value={articleForm.tags?.join(", ") || ""}
            onChange={(e) =>
              setArticleForm({
                ...articleForm,
                tags: e.target.value
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter((tag) => tag),
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="beasiswa, pendidikan, siswa"
          />
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              checked={articleForm.featured}
              onChange={(e) => setArticleForm({ ...articleForm, featured: e.target.checked })}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
              Artikel Unggulan
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={articleForm.status}
              onChange={(e) => setArticleForm({ ...articleForm, status: e.target.value as "draft" | "published" })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="draft">Draft</option>
              <option value="published">Publikasi</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-6 border-t">
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
            {editingArticle ? "Update Artikel" : "Simpan Artikel"}
          </button>

          <button type="button" onClick={onCancel} className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
