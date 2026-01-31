import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createTag, updateTag } from "@/lib/api/tag";

interface Props {
  open: boolean;
  onClose: () => void;
  initialData?: {
    id: string;
    name: string;
  } | null;
  onSuccess: () => void;
}

const TagModal = ({ open, onClose, initialData, onSuccess }: Props) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(initialData?.name || "");
  }, [initialData]);

  if (!open) return null;

  const handleSubmit = async () => {
    if (!name.trim()) {
      toast.error("Nama tag wajib diisi");
      return;
    }

    try {
      setLoading(true);

      if (initialData) {
        await updateTag(initialData.id, { name });
        toast.success("Tag berhasil diperbarui");
      } else {
        await createTag({ name });
        toast.success("Tag berhasil ditambahkan");
      }

      onSuccess();
      onClose();
    } catch {
      toast.error("Gagal menyimpan tag");
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
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        <h2 className="text-lg font-semibold text-gray-900">
          {initialData ? "Edit Tag" : "Tambah Tag"}
        </h2>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Nama Tag
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="contoh: laravel"
            className="mt-1 w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end gap-3 pt-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border text-sm hover:bg-gray-50"
          >
            Batal
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-700 disabled:opacity-60"
          >
            <Icon icon="solar:diskette-bold" className="w-4 h-4" />
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TagModal;
