import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createCategory, updateCategory } from "@/lib/api/kategori";

interface Props {
  open: boolean;
  onClose: () => void;
  initialData?: {
    id: string;
    name: string;
    description: string;
    isActive: boolean;
  } | null;
  onSuccess: () => void;
}

const CategoryModal = ({ open, onClose, initialData, onSuccess }: Props) => {
  const [name, setName]               = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading]         = useState(false);

  useEffect(() => {
    setName(initialData?.name || "");
    setDescription(initialData?.description || "");
  }, [initialData]);

  if (!open) return null;

  const handleSubmit = async () => {
    if (!name.trim()) {
      toast.error("Nama kategori wajib diisi");
      return;
    }

    try {
      setLoading(true);

      const payload = { name, description };

      if (initialData) {
        await updateCategory(initialData.id, payload);
        toast.success("Kategori berhasil diperbarui");
      } else {
        await createCategory(payload);
        toast.success("Kategori berhasil ditambahkan");
      }

      onSuccess();
      onClose();
    } catch {
      toast.error("Gagal menyimpan kategori");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl w-full max-w-md p-6 space-y-5"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h2 className="text-lg font-semibold">
          {initialData ? "Edit Kategori" : "Tambah Kategori"}
        </h2>

        <div>
          <label className="text-sm font-medium">Nama</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-xl"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-xl"
          />
        </div>

        <div className="flex justify-end gap-3 pt-3">
          <button onClick={onClose} className="px-4 py-2 border rounded-xl">
            Batal
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl"
          >
            <Icon icon="solar:diskette-bold" />
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CategoryModal;
