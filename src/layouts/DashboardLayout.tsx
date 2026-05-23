import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation(); // Untuk mendeteksi halaman aktif
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Fungsi pembantu untuk menentukan class aktif
  const isActive = (path: string) =>
    location.pathname === path ? "bg-white/20 font-bold" : "hover:bg-white/10";

  return (
    <div className="flex min-h-screen bg-[#F5F5F4]">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#7B1D3F] text-white flex flex-col p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-10 tracking-tight">
          Invofest Hub
        </h2>

        <nav className="flex-1 space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-4 px-3">
            Menu Admin
          </p>

          <Link
            to="/dashboard"
            className={`block p-3 rounded-xl transition-all ${isActive("/dashboard")}`}
          >
            📊 Dashboard
          </Link>

          <Link
            to="/manage-categories"
            className={`block p-3 rounded-xl transition-all ${isActive("/manage-categories")}`}
          >
            🏷️ Category Event
          </Link>

          <Link
            to="/manage-events"
            className={`block p-3 rounded-xl transition-all ${isActive("/manage-events")}`}
          >
            📅 Manage Events
          </Link>

          <Link
            to="/manage-pembicara"
            className={`block p-3 rounded-xl transition-all ${isActive("/manage-pembicara")}`}
          >
            🎤 Manage Pembicara
          </Link>

          <div className="my-6 border-t border-white/10" />

          <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-4 px-3">
            Situs
          </p>
          <Link
            to="/"
            className="block p-3 hover:bg-white/10 rounded-xl transition-all"
          >
            🏠 Lihat Web
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto bg-white/10 hover:bg-red-500/80 text-white p-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
        >
          Logout
        </button>
      </aside>

      {/* CONTENT AREA */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
