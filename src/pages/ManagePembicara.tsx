import { useEffect, useState } from "react";
import { Trash2, Edit3, X } from "lucide-react";

const API_URL = "https://website-invofest-main.vercel.app";

export default function ManagePembicara() {
  const [pembicara, setPembicara] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_URL}/api/pembicara`);
      const data = await res.json();
      setPembicara(data);
    } catch (error) {
      console.error("Error fetching pembicara:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/api/pembicara`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, title }),
      });
      setName("");
      setTitle("");
      fetchData();
    } catch (error) {
      console.error("Error adding pembicara:", error);
    }
  };

  const openEdit = (p: any) => {
    setEditingId(p.id);
    setEditName(p.name);
    setEditTitle(p.title);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/api/pembicara/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editName, title: editTitle }),
      });
      setEditingId(null);
      fetchData();
    } catch (error) {
      console.error("Error updating pembicara:", error);
    }
  };

  const deletePembicara = async (id: number) => {
    if (confirm("Hapus pembicara ini?")) {
      try {
        await fetch(`${API_URL}/api/pembicara/${id}`, {
          method: "DELETE",
        });
        fetchData();
      } catch (error) {
        console.error("Error deleting pembicara:", error);
      }
    }
  };

  return (
    <div className="p-8">
      <form onSubmit={handleAdd} className="mb-8 bg-stone-50 p-6 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Tambah Pembicara</h2>
        <input
          type="text"
          placeholder="Nama Pembicara"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 mb-4 border rounded-xl"
        />
        <input
          type="text"
          placeholder="Posisi/Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 mb-4 border rounded-xl"
        />
        <button
          type="submit"
          className="w-full bg-[#7B1D3F] text-white p-3 rounded-xl font-bold"
        >
          Tambah
        </button>
      </form>

      <div className="space-y-4">
        {pembicara.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between p-4 border border-stone-200 rounded-2xl"
          >
            <div>
              <p className="font-bold">{p.name}</p>
              <p className="text-xs text-stone-500">{p.title}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => openEdit(p)}
                className="p-2 hover:bg-stone-100 rounded-lg"
              >
                <Edit3 size={18} />
              </button>
              <button
                onClick={() => deletePembicara(p.id)}
                className="p-2 hover:bg-red-50 text-red-500 rounded-lg"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-8 rounded-3xl w-full max-w-md"
          >
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-bold">Edit Pembicara</h2>
              <button type="button" onClick={() => setEditingId(null)}>
                <X />
              </button>
            </div>
            <input
              className="w-full p-3 mb-4 border rounded-xl"
              placeholder="Nama"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              required
            />
            <input
              className="w-full p-3 mb-6 border rounded-xl"
              placeholder="Title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#7B1D3F] text-white p-3 rounded-xl font-bold"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
