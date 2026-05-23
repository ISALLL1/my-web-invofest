import { Home, Info, Users, HelpCircle, MessageSquare } from "lucide-react";
import { NavLink } from "./ui/NavLink";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const menuItems = [
    { label: "Beranda", href: "/", icon: <Home size={18} /> },
    { label: "Competition", href: "/competition", icon: <Info size={18} /> },
    { label: "Seminar", href: "/seminar", icon: <Users size={18} /> },
    { label: "Workshop", href: "/workshop", icon: <HelpCircle size={18} /> },
    { label: "Talkshow", href: "/talkshow", icon: <MessageSquare size={18} /> },
  ];

  return (
    // Gunakan w-full dan px-4 (mobile) agar tidak ada sekat putih di kanan
    <header className="w-full bg-white shadow-sm px-4 md:px-12 py-2 sticky top-0 z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        {/* Logo - Tambahkan shrink-0 agar logo tidak gepeng saat menu panjang */}
        <div className="shrink-0">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>

        {/* Menu Navigasi - Gunakan overflow-x-auto agar bisa di-scroll jika kepanjangan */}
        <nav className="flex items-center gap-2 md:gap-4 overflow-x-auto no-scrollbar py-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
              isActive={location.pathname === item.href}
            />
          ))}
        </nav>

        {/* LOGIN BUTTON - shrink-0 agar tombol tidak tertekuk */}
        <div className="shrink-0">
          <Link
            to="/login"
            className="bg-red-900 text-white px-5 py-2 rounded-xl font-bold hover:bg-red-800 transition shadow-lg shadow-red-900/10 text-sm md:text-base"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
