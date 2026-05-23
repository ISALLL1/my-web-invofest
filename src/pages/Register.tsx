import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Keamanan kurang: Password wajib minimal 8 karakter");
      return;
    }

    if (password !== confirmPassword) {
      setError("Input tidak sinkron: Konfirmasi password tidak sesuai");
      return;
    }

    setError("");
    alert("Akun berhasil dibuat! Silakan masuk.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-12">
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-zinc-200/40 w-full max-w-2xl flex flex-col md:flex-row overflow-hidden border border-zinc-100">
        {/* --- LEFT SIDE: ILLUSTRATION (Hidden on Mobile) --- */}
        <div className="hidden md:flex w-1/3 bg-gradient-to-b from-red-900 to-red-950 p-10 flex-col justify-between text-white">
          <div>
            <h2 className="text-2xl font-black mb-2 leading-tight">
              Mulai Perjalananmu.
            </h2>
            <div className="h-1 w-12 bg-white/30 rounded-full"></div>
          </div>

          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt="Mascot"
            className="w-full drop-shadow-2xl animate-pulse-slow"
          />

          <p className="text-xs font-medium text-red-200 leading-relaxed">
            Bergabunglah dengan ribuan talenta muda di Invofest 2026.
          </p>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="flex-1 p-8 sm:p-12">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-red-950 tracking-tight mb-2">
              Daftar Akun
            </h1>
            <p className="text-zinc-500 font-medium text-sm">
              Lengkapi formulir di bawah untuk membuat akses.
            </p>
          </div>

          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-red-950 uppercase tracking-wider ml-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Contoh: Faizal"
                className="border-2 border-zinc-100 bg-zinc-50 p-3.5 rounded-2xl focus:bg-white focus:border-red-900 focus:outline-none transition-all placeholder:text-zinc-300"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-red-950 uppercase tracking-wider ml-1">
                Alamat Email
              </label>
              <input
                type="email"
                placeholder="user@email.com"
                className="border-2 border-zinc-100 bg-zinc-50 p-3.5 rounded-2xl focus:bg-white focus:border-red-900 focus:outline-none transition-all placeholder:text-zinc-300"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-red-950 uppercase tracking-wider ml-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Min. 8 Karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-zinc-100 bg-zinc-50 p-3.5 rounded-2xl focus:bg-white focus:border-red-900 focus:outline-none transition-all placeholder:text-zinc-300"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-red-950 uppercase tracking-wider ml-1">
                  Ulangi Password
                </label>
                <input
                  type="password"
                  placeholder="Konfirmasi"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border-2 border-zinc-100 bg-zinc-50 p-3.5 rounded-2xl focus:bg-white focus:border-red-900 focus:outline-none transition-all placeholder:text-zinc-300"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-xl animate-shake">
                <p className="text-xs font-bold text-red-700">{error}</p>
              </div>
            )}

            <Button
              label="Daftar Sekarang"
              variant="primary"
              className="py-4 rounded-2xl font-black text-lg shadow-xl shadow-red-900/20 active:scale-95 transition-transform mt-4"
            />

            <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
              <p className="text-sm font-medium text-zinc-500">
                Sudah punya akun?{" "}
                <Link
                  to="/login"
                  className="text-red-700 font-extrabold hover:text-red-900 transition-colors underline-offset-4 hover:underline"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
