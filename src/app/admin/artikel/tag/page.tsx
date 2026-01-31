"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import {Tag,PaginationMeta,getTag,deleteTag} from "@/lib/api/tag";
import Pagination from "@/app/components/pagination";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import AdminHeader from "@/app/components/AdminHeader";
import TagModal from "./tagModal";

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


const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("id-ID");

const TagPage = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [tag, setTag] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTag, setEditingTag] = useState<Tag | null>(null);
  const getRole = (user: User): string => {
    if (user.role) return "admin";
    return "unknown";
  };

  const fetchTag = async (pageNumber = 1) => {
    try {
      setLoading(true);
      setError(null);

      const res = await getTag(pageNumber, 10);

      setTag(res.data.data.data);
      setPagination(res.data.data.pagination);
    } catch (err: any) {
      if (err.response?.status === 401) {
        setError("Sesi login habis, silakan login ulang.");
      } else {
        setError("Gagal mengambil data tag.");
      }
    } finally {
      setLoading(false);
    }
  };

  const checkAuth = () => {
      const savedUser = localStorage.getItem("admin_user");
      const token = localStorage.getItem("admin_token");

      if (!savedUser || !token) {
        router.push("/admin/login");
        return;
      }

      const parsedUser: User = JSON.parse(savedUser);

      // set user + role
      setCurrentUser({
        ...parsedUser,
        role: getRole(parsedUser),
      } as User & { role: string });
    };

  useEffect(() => {
    void fetchTag(page);
    checkAuth();
  }, [page]);


    return (
      <div className="space-y-6">

        <AdminHeader currentUser={currentUser} />
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Header */}

          <div className="mb-4">
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
            >
              <Icon icon="solar:arrow-left-bold" className="w-4 h-4" />
              Kembali ke Dashboard
            </button>
          </div>


          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900">
              Tag Artikel 
            </h1>

          <button
            onClick={() => {
              setEditingTag(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Icon icon="solar:add-circle-bold" className="w-5 h-5" />
            Tambah Tag
          </button>

          </div>

          {/* Loading */}
          {loading && (
            <div className="py-10 text-center text-gray-500">
              Memuat tag...
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="py-10 text-center text-red-500">
              {error}
            </div>
          )}

          {/* Table */}
          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Nama
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Slug
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Dibuat
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase">
                      Aksi
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {tag.map((tag) => (
                    <tr
                      key={tag.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {tag.name}
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {tag.slug}
                      </td>
                      <td className="px-4 py-3">
                        {tag.isActive ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                            <Icon
                              icon="solar:check-circle-bold"
                              className="w-4 h-4"
                            />
                            Aktif
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                            <Icon
                              icon="solar:close-circle-bold"
                              className="w-4 h-4"
                            />
                            Nonaktif
                          </span>
                        )}
                      </td>

                      <td className="px-4 py-3 text-sm text-gray-500">
                        {formatDate(tag.createdAt)}
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => {
                              setEditingTag(tag);
                              setIsModalOpen(true);
                            }}
                            className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition"
                          >
                            <Icon icon="solar:pen-bold" className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => setDeleteId(tag.id)}
                            className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition"
                            title="Hapus"
                          >
                            <Icon icon="solar:trash-bin-trash-bold" className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {tag.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="py-8 text-center text-gray-500"
                      >
                        Data tag kosong
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
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
                      <h3 className="text-lg font-semibold text-gray-900">
                        Hapus Tag?
                      </h3>

                      <p className="text-sm text-gray-600">
                        Tag yang dihapus tidak dapat dikembalikan.
                      </p>

                      <div className="flex justify-end gap-2 pt-4">
                        <button
                          onClick={() => setDeleteId(null)}
                          disabled={isDeleting}
                          className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50"
                        >
                          Batal
                        </button>

                        <button
                          onClick={async () => {
                            try {
                              setIsDeleting(true);
                              await deleteTag(deleteId);
                              toast.success("Tag berhasil dihapus");
                              setDeleteId(null);
                              fetchTag(page);
                            } catch {
                              toast.error("Tag gagal dihapus");
                            } finally {
                              setIsDeleting(false);
                            }
                          }}
                          className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700 disabled:opacity-60"
                        >
                          {isDeleting ? "Menghapus..." : "Hapus"}
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {pagination && (
                <Pagination
                  page={pagination.page}
                  totalPages={pagination.totalPages}
                  totalItems={pagination.total}
                  onPageChange={setPage}
                />
              )}

            </div>
          )}
        </div>
        
        <TagModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialData={editingTag}
          onSuccess={() => fetchTag(page)}
        />

      </div>
  );
};

export default TagPage;
