"use client";

import { useState, useEffect } from "react";
import { Article, CategoryPost, TagPost } from "@/app/models/artikel/artikel/artikel";
import { getOptions as getCategoryOptions } from "@/lib/api/kategori";
import { getOptions as getTagOptions } from "@/lib/api/tag";
import { useRouter } from "next/navigation";
import { createBerita, updateBerita } from "@/lib/api/article";
import EditorField from "@/app/components/editor/editorField";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

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

const Select = dynamic(() => import("react-select"), { ssr: false });
interface ArticleFormProps {
  editingArticle?: Article | null;
  currentUser: User | null;
  onCancel: () => void;
}

const ArticleForm = ({
  editingArticle,
  onCancel,
}: ArticleFormProps) => {
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: null as any,
    category_id: "",
    tag_ids: [] as string[],
    thumbImage: null as File | null,
    date: "",
  });
  const router = useRouter();
  const [categories, setCategories]       = useState<CategoryPost[]>([]);
  const [tags, setTags]                   = useState<TagPost[]>([]);
  const [loadingOption, setLoadingOption] = useState(true);
  const [thumbPreview, setThumbPreview]   = useState<string | null>(null);
    const [editorImages, setEditorImages] =
    useState<Record<string, File>>({});
  
  useEffect(() => {
    if (!editingArticle) return;

    setForm({
      title: editingArticle.title,
      date: editingArticle.date,
      excerpt: editingArticle.excerpt ?? "",
      content:
        typeof editingArticle.content === "string"
          ? JSON.parse(editingArticle.content)
          : editingArticle.content,
      category_id: editingArticle.category_id,
      tag_ids: editingArticle.TagPosts?.map((t) => t.id) ?? [],
      thumbImage: null,
    });

    if (editingArticle.thumbImage) {
      setThumbPreview(
        `${process.env.NEXT_PUBLIC_API_UPLOAD}/uploads/articles/${editingArticle.thumbImage}`
      );
    }
  }, [editingArticle]);


  
  useEffect(() => {
    
    Promise.all([getCategoryOptions(), getTagOptions()])
      .then(([cats, tags]) => {
        setCategories(cats);
        setTags(tags);
      })
      .finally(() => setLoadingOption(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    title: form.title,
    date: form.date || null,
    excerpt: form.excerpt,
    content: form.content,
    category_id: form.category_id,
    tag_ids: form.tag_ids,
    thumbImage: form.thumbImage || undefined,
  };

  try {
    if (editingArticle) {
      await updateBerita(editingArticle.id, payload);
      toast.success("Artikel berhasil diperbarui");
    } else {
      await createBerita(payload);
      toast.success("Artikel berhasil dibuat");
      router.push("/admin/dashboard");
    }
  } catch (err) {
    console.error(err);
    toast.error("Gagal menyimpan artikel");
  }
};


  return (
    <div className=" min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg flex justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full ">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          {editingArticle ? "Edit Artikel" : "Buat Artikel Baru"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Judul */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Judul Artikel
              </label>
              <input
                type="text"
                placeholder="Masukkan judul artikel"
                value={form.title}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Kategori */}
              <div className="z-10">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kategori
                </label>
                <Select
                  key={typeof window === "undefined" ? "server" : "client"}
                  options={categories.map(c => ({
                    value: c.id,
                    label: c.name,
                  }))}
                  value={
                    form.category_id
                      ? { value: form.category_id, label: categories.find(c => c.id === form.category_id)?.name || "" }
                      : null
                  }
                  onChange={(selected: any) =>
                    setForm((prev) => ({
                      ...prev,
                      category_id: selected?.value || "",
                    }))
                  }
                  isSearchable
                  placeholder={loadingOption ? "Memuat kategori..." : "Pilih Kategori"}
                />
              </div>

              {/* Date / Tanggal Publikasi */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Publikasi
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, date: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ringkasan Artikel
              </label>
              <textarea
                placeholder="Masukkan ringkasan singkat artikel (maks 255 karakter)"
                value={form.excerpt}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, excerpt: e.target.value }))
                }
                rows={3}
                className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500
                  ${form.excerpt.length > 255 ? "border-red-500" : "border-gray-300"}`}
              />
              <p className={`text-sm mt-1 ${form.excerpt.length > 255 ? "text-red-500" : "text-gray-500"}`}>
                {form.excerpt.length} / 255 karakter
              </p>
            </div>


            {/* Konten */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Konten Artikel
              </label>
 

          {(!editingArticle || form.content) && (
            <EditorField
              initialData={editingArticle ? form.content : undefined}
              onChange={(data, files) => {
                setForm(prev => ({ ...prev, content: data }));
                setEditorImages(files);
              }}
            />
          )}
          
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags
              </label>
              <Select
                value={(tags || [])
                  .filter(t => form.tag_ids.includes(t.id))
                  .map(t => ({ value: t.id, label: t.name }))}
                onChange={(selected: any) =>
                  setForm((prev) => ({
                    ...prev,
                    tag_ids: selected ? selected.map((s: any) => s.value) : [],
                  }))
                }
                options={(tags || []).map(t => ({
                  value: t.id,
                  label: t.name,
                }))}
                isMulti
                isSearchable
                placeholder={loadingOption ? "Memuat tag..." : "Pilih Tags"}
              />

            </div>

            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Thumbnail
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setForm(prev => ({ ...prev, thumbImage: file }));
                  if (file) setThumbPreview(URL.createObjectURL(file));
                }}
                className="block w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {thumbPreview && (
                <div className="mt-3 w-32 h-32 rounded-md overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src={thumbPreview}
                    alt="Thumbnail Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleForm;
