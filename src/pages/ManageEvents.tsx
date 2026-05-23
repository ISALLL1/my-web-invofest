import { useEffect, useState } from "react";
import { Trash2, Plus } from "lucide-react";

export default function ManageEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState(""); // 1. Tambahkan state lokasi

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/events");
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error("Gagal ambil data event:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    // 2. Masukkan lokasi ke dalam payload
    const payload = {
      nama: nama,
      tanggal: tanggal,
      lokasi: lokasi,
    };

    try {
      const res = await fetch("http://localhost:3000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setNama("");
        setTanggal("");
        setLokasi(""); // Reset input lokasi
        fetchData();
      } else {
        alert("Gagal menambah data!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteEvent = async (id: number) => {
    if (confirm("Hapus event ini?")) {
      await fetch(`http://localhost:3000/api/events/${id}`, {
        method: "DELETE",
      });
      fetchData();
    }
  };

  return (
    <div className="p-8 bg-[#F5F5F4] min-h-screen">
      <h1 className="text-3xl font-black text-stone-900 mb-8">
        Manajemen Event
      </h1>

      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm mb-8 flex flex-wrap gap-4 items-end"
      >
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-bold text-stone-500 uppercase mb-2">
            Nama Event
          </label>
          <input
            className="w-full p-3 bg-stone-50 rounded-xl border border-stone-200"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-bold text-stone-500 uppercase mb-2">
            Tanggal
          </label>
          <input
            type="date"
            className="w-full p-3 bg-stone-50 rounded-xl border border-stone-200"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            required
          />
        </div>
        {/* 3. Input Lokasi */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-bold text-stone-500 uppercase mb-2">
            Lokasi
          </label>
          <input
            className="w-full p-3 bg-stone-50 rounded-xl border border-stone-200"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#7B1D3F] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#601530]"
        >
          <Plus size={18} /> Tambah
        </button>
      </form>

      <div className="bg-white rounded-[2.5rem] border border-stone-200 p-8 shadow-sm">
        {events.map((e) => (
          <div
            key={e.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div>
              <p className="font-bold">{e.nama}</p>
              <p className="text-xs text-stone-500">
                {e.tanggal} • {e.lokasi}
              </p>
            </div>
            <button onClick={() => deleteEvent(e.id)} className="text-red-500">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
