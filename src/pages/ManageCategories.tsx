import { useEffect, useState } from "react";
import { Trash2, Plus } from "lucide-react";

export default function ManageCategories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [namaKategori, setNamaKategori] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/categories");
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Gagal ambil data kategori:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // PENTING: Gunakan key 'name' karena di DB kolomnya bernama 'name'
      const res = await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: namaKategori }),
      });

      if (res.ok) {
        setNamaKategori("");
        fetchData();
      } else {
        alert("Gagal menambah data!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteCategory = async (id: number) => {
    if (confirm("Hapus kategori ini?")) {
      await fetch(`http://localhost:3000/api/categories/${id}`, {
        method: "DELETE",
      });
      fetchData();
    }
  };

  return (
    <div className="p-8 bg-[#F5F5F4] min-h-screen">
      <h1 className="text-3xl font-black text-stone-900 mb-8">
        Kategori Event
      </h1>

      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-3xl border border-stone-200 mb-8 flex gap-4 items-end"
      >
        <div className="flex-1">
          <label className="block text-xs font-bold text-stone-500 uppercase mb-2">
            Nama Kategori
          </label>
          <input
            className="w-full p-3 bg-stone-50 rounded-xl border border-stone-200"
            value={namaKategori}
            onChange={(e) => setNamaKategori(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#7B1D3F] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2"
        >
          <Plus size={18} /> Tambah Kategori
        </button>
      </form>

      <div className="bg-white rounded-[2.5rem] border border-stone-200 p-8 shadow-sm">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <p className="font-bold">
              {index + 1}. {cat.name}
            </p>{" "}
            {/* Gunakan cat.name */}
            <button
              onClick={() => deleteCategory(cat.id)}
              className="text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
