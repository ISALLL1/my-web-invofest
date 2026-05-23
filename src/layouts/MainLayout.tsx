import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    // Tambahkan min-h-screen dan flex-col agar layout mengisi seluruh tinggi layar
    // overflow-x-hidden penting untuk menghilangkan "sekat" putih di kanan layar
    <div className="min-h-screen flex flex-col bg-zinc-50 overflow-x-hidden">
      <Header />

      {/* Main tag berfungsi sebagai pembungkus konten utama. 
        flex-grow memastikan footer (jika ada nanti) tetap di bawah.
      */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>
    </div>
  );
}
