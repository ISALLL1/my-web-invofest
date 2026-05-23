import { useEffect, useState } from "react";
import { Trash2, Edit3, X } from "lucide-react";

export default function ManagePembicara() {
  const [pembicara, setPembicara] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  // State untuk Edit
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const fetchData = async () => {
    // Pastikan URL API sudah sesuai dengan backend yang di-deploy
    const res = await fetch("http://localhost:3000/api/pembicara");
    const data = await res.json();
    setPembicara(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/pembicara", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, title }),
    });
    setName("");
    setTitle("");
    fetchData();
  };

  // Fungsi untuk membuka modal edit
  const openEdit = (p: any) => {
    setEditingId(p.id);
    setEditName(p.name);
    setEditTitle(p.title);
  };

  // Fungsi untuk menyimpan perubahan
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/pembicara/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editName, title: editTitle }),
    });
    setEditingId(null);
    fetchData();
  };

  const deletePembicara = async (id: number) => {
    if (confirm("Hapus pembicara ini?")) {
      await fetch(`http://localhost:3000/api/pembicara/${id}`, {
        method: "DELETE",
      });
      fetchData();
    }
  };

  return (
    <div className="p-8">
      {/* FORM TAMBAH */}
      <form onSubmit={handleAdd} className="mb-8 p-4 border rounded-2xl">
        <input
          placeholder="Nama"
          className="block w-full p-2 mb-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Judul/Title"
          className="block w-full p-2 mb-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Tambah
        </button>
      </form>

      {/* LIST DATA */}
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

      {/* MODAL EDIT */}
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
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              className="w-full p-3 mb-6 border rounded-xl"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
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
