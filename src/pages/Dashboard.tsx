import { useEffect, useState } from "react";
import {
  LayoutGrid,
  Calendar,
  Mic2,
  CheckCircle2,
  User,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

// --- INTERFACES ---
interface Stat {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend: string;
  color: string;
}

interface EventItem {
  id?: string | number;
  name: string;
  category: string;
  date: string;
}

interface SpeakerItem {
  id?: string | number;
  name: string;
  job: string;
}

export default function Dashboard() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [speakers, setSpeakers] = useState<SpeakerItem[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isError, setIsError] = useState(false);

  const loadData = async () => {
    try {
      const [resEvent, resSpeaker, resCategory] = await Promise.all([
        fetch("http://localhost:3000/api/events"),
        fetch("http://localhost:3000/api/pembicara"),
        fetch("http://localhost:3000/api/categories"),
      ]);

      if (!resEvent.ok || !resSpeaker.ok || !resCategory.ok)
        throw new Error("Gagal ambil data");

      const dataEvent = await resEvent.json();
      const dataSpeaker = await resSpeaker.json();
      const dataCategory = await resCategory.json();

      setEvents(
        dataEvent.map((e: any) => ({
          id: e.id,
          name: e.nama,
          category: "Event",
          date: e.tanggal,
        })),
      );

      setSpeakers(
        dataSpeaker.map((s: any) => ({
          id: s.id,
          name: s.name,
          job: s.title || "Speaker",
        })),
      );

      setCategories(dataCategory);
      setIsError(false);
    } catch (error) {
      console.error("Dashboard Error:", error);
      setIsError(true);
    }
  };

  // Menggunakan dependency kosong agar berjalan sekali saat komponen dimuat
  useEffect(() => {
    loadData();
  }, []);

  const stats: Stat[] = [
    {
      title: "Kategori",
      value: categories.length,
      icon: <LayoutGrid size={20} />,
      trend: "Total",
      color: "bg-blue-500",
    },
    {
      title: "Total Event",
      value: events.length,
      icon: <Calendar size={20} />,
      trend: "Real-time",
      color: "bg-purple-500",
    },
    {
      title: "Pembicara",
      value: speakers.length,
      icon: <Mic2 size={20} />,
      trend: "Aktif",
      color: "bg-orange-500",
    },
    {
      title: "Status",
      value: 1,
      icon: <CheckCircle2 size={20} />,
      trend: "Online",
      color: "bg-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F4] px-8 py-6 w-full space-y-8 font-sans">
      {/* HEADER */}
      <div className="flex justify-between items-center border-b border-stone-200 pb-8">
        <div>
          <h1 className="text-3xl font-black text-stone-900">
            Invofest <span className="text-[#7B1D3F]">Hub</span>
          </h1>
          <p className="text-stone-500 text-sm">
            Dashboard Admin - Monitoring Data
          </p>
        </div>
        <button
          onClick={loadData}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-stone-200 shadow-sm text-sm font-bold hover:bg-stone-50"
        >
          <RefreshCw size={16} /> Refresh Data
        </button>
      </div>

      {isError && (
        <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 p-4 rounded-2xl text-amber-700 text-sm">
          <AlertCircle size={18} />
          <span>
            Gagal memuat data dari database. Pastikan backend (port 3000) aktif.
          </span>
        </div>
      )}

      {/* STATS */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm"
          >
            <div
              className={`p-3 w-fit ${stat.color} text-white rounded-2xl mb-4`}
            >
              {stat.icon}
            </div>
            <p className="text-sm text-stone-500">{stat.title}</p>
            <p className="text-4xl font-extrabold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* LIST DATA */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
          <h2 className="text-lg font-black mb-6">Agenda Terdekat</h2>
          {events.length > 0 ? (
            events.map((e, i) => (
              <div
                key={i}
                className="flex justify-between p-4 border-b last:border-none"
              >
                <div>
                  <p className="font-bold text-sm">{e.name}</p>
                  <p className="text-xs text-stone-400">{e.date}</p>
                </div>
                <span className="bg-stone-100 text-[10px] px-2 py-1 rounded-md">
                  {e.category}
                </span>
              </div>
            ))
          ) : (
            <p className="text-stone-400 text-sm text-center py-4">
              Belum ada agenda.
            </p>
          )}
        </div>

        <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
          <h2 className="text-lg font-black mb-6">Daftar Narasumber</h2>
          {speakers.length > 0 ? (
            speakers.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 border-b last:border-none"
              >
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center">
                  <User size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm">{s.name}</p>
                  <p className="text-xs text-stone-400 italic">{s.job}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-stone-400 text-sm text-center py-4">
              Belum ada pembicara.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
