"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { ArticleUI } from "@/app/types/article";
import Pagination from "../pagination";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

interface ArticleTableProps {
  articles: ArticleUI[];
  onEdit: (article: ArticleUI) => void;
  onPublish: (id: string) => void;
  onDelete: (id: string) => void; 
  page: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const ArticleTable = ({
  articles,
  onEdit,
  onDelete,
  onPublish,
  page,
  totalPages,
  totalItems,
  onPageChange 
}: ArticleTableProps) => {
  const [openMenu, setOpenMenu]         = useState(false);
  const [deleteId, setDeleteId]         = useState<string | null>(null);
  const [isDeleting, setIsDeleting]     = useState(false);
  const [publishId, setPublishId]       = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const router                          = useRouter();

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID");
  };

  return (
    <>
      {/* Action Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Kelola Artikel</h2>

        <div className="relative">
          <button
            onClick={() => setOpenMenu(prev => !prev)}
            className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
            title="Kelola Artikel"
          >
            <Icon icon="solar:menu-dots-bold" className="w-6 h-6" />
          </button>

          <div
            className={`absolute right-0 mt-3 w-56 rounded-xl bg-white shadow-lg z-50
              transform transition-all duration-300 origin-top-right
              ${openMenu
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
          >
            <button
              onClick={() => { setOpenMenu(false); router.push("/admin/artikel/post"); }}
              className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition"
            >
              <Icon icon="solar:pen-new-square-bold" className="w-5 h-5 text-blue-600" />
              Buat Artikel
            </button>

            <button
              onClick={() => { setOpenMenu(false); router.push("/admin/artikel/kategori"); }}
              className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition"
            >
              <Icon icon="solar:folder-with-files-bold" className="w-5 h-5 text-green-600" />
              Kategori Artikel
            </button>

            <button
              onClick={() => { setOpenMenu(false); router.push("/admin/artikel/tag"); }}
              className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition"
            >
              <Icon icon="solar:tag-bold" className="w-5 h-5 text-purple-600" />
              Tag Artikel
            </button>
          </div>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artikel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {articles.map(article => (
                <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={article.image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"}
                        alt={article.title}
                        className="w-12 h-12 rounded-lg object-cover mr-4 shadow-sm"
                        onError={e => { e.currentTarget.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"; }}
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 line-clamp-1">{article.title}</p>
                        <p className="text-sm text-gray-500">oleh {article.author}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${article.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {article.status === "published" ? "Dipublikasi" : "Draft"}
                      </span>
                      {"featured" in article && article.featured && (
                        <span className="text-yellow-500" title="Artikel Unggulan">⭐</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{formatDate(article.createdAt)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => onEdit(article)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit Artikel">
                        <Icon icon="solar:pen-bold" className="w-4 h-4" />
                      </button>

                        {article.status !== "published" && (
                        <button
                          onClick={() => setPublishId(article.id)} 
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Publish Artikel"
                        >
                          <Icon icon="solar:upload-bold" className="w-4 h-4" />
                        </button>
                      )}

                      <button onClick={() => setDeleteId(article.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus Artikel">
                        <Icon icon="solar:trash-bin-trash-bold" className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AnimatePresence>
          {publishId && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl w-full max-w-sm p-6 space-y-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-lg font-semibold text-gray-900">Publish Artikel?</h3>
                <p className="text-sm text-gray-600">Artikel akan dipublikasi dan dapat dilihat semua orang.</p>

                <div className="flex justify-end gap-2 pt-4">
                  <button onClick={() => setPublishId(null)} disabled={isPublishing} className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50">Batal</button>
                  <button onClick={async () => {
                    try {
                      setIsPublishing(true);
                      await onPublish(publishId!);
                      toast.success("Artikel berhasil dipublish");
                      setPublishId(null);
                    } catch {
                      toast.error("Artikel gagal dipublish");
                    } finally {
                      setIsPublishing(false);
                    }
                  }}
                    className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700 disabled:opacity-60">
                    {isPublishing ? "Memproses..." : "Publish"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {deleteId && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl w-full max-w-sm p-6 space-y-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-lg font-semibold text-gray-900">Hapus Artikel?</h3>
                <p className="text-sm text-gray-600">Artikel yang dihapus tidak dapat dikembalikan.</p>

                <div className="flex justify-end gap-2 pt-4">
                  <button onClick={() => setDeleteId(null)} disabled={isDeleting} className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50">Batal</button>
                  <button onClick={async () => {
                    try {
                      setIsDeleting(true);
                      await onDelete(deleteId!);
                      toast.success("Artikel berhasil dihapus");
                      setDeleteId(null);
                    } catch {
                      toast.error("Artikel gagal dihapus");
                    } finally {
                      setIsDeleting(false);
                    }
                  }}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700 disabled:opacity-60">
                    {isDeleting ? "Menghapus..." : "Hapus"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-4">
          <Pagination page={page} totalPages={totalPages} totalItems={totalItems} onPageChange={onPageChange} />
        </div>
      </div>
    </>
  );
};

export default ArticleTable;
