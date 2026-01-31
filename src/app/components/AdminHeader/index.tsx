"use client";

import { useRouter } from "next/navigation";

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

interface AdminHeaderProps {
  currentUser: User | null;
}

const AdminHeader = ({ currentUser }: AdminHeaderProps) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_token");
    router.push("/login");
  };

  // Ambil nama user yang paling tersedia
  const displayName =
    currentUser?.name ||
    (currentUser as any)?.name ||
    currentUser?.name ||
    "User";

  const initial = displayName.charAt(0).toUpperCase();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
            <p className="text-gray-600">Kelola artikel dan konten website RMU</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">{initial}</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{displayName}</p>
                <p className="text-xs text-gray-500 capitalize">{currentUser?.role ?? "guest"}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
