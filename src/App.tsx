import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./route/ProtectedRoute";

import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ManagePembicara from "./pages/ManagePembicara";
import ManageEvents from "./pages/ManageEvents";
import ManageCategories from "./pages/ManageCategories";

// Global API URL
export const API_URL = "https://website-invofest-main.vercel.app";

function App() {
  return (
    <Routes>
      {/* Jalur Publik */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Jalur Admin (Terkunci & Menggunakan Dashboard Layout) */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Halaman Manajemen Data Admin */}
          <Route path="/manage-pembicara" element={<ManagePembicara />} />
          <Route path="/manage-events" element={<ManageEvents />} />
          <Route path="/manage-categories" element={<ManageCategories />} />
        </Route>
      </Route>

      {/* Jika rute tidak ditemukan, arahkan ke beranda */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
