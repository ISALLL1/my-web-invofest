import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    alert("Login berhasil! Selamat datang di Dashboard Invofest Hub.");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F4] px-4 py-10 font-['Plus_Jakarta_Sans']">
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-stone-200/50 overflow-hidden flex max-w-4xl w-full border border-stone-200 min-h-[600px]">
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="mb-8 text-center md:text-left">
            <div className="w-10 h-1 bg-[#7B1D3F] rounded-full mb-4 hidden md:block" />
            <h1 className="text-3xl md:text-4xl font-black text-stone-900 mb-3 tracking-tight">
              Masuk Akun
            </h1>
            <p className="text-stone-500 font-medium text-sm md:text-base">
              Gunakan akun terdaftar untuk mengelola data{" "}
              <span className="text-[#7B1D3F] font-bold">INVOFEST 2026</span>.
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-stone-400 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="nama@email.com"
                className="w-full border border-stone-200 bg-stone-50 p-4 rounded-2xl focus:bg-white focus:border-[#7B1D3F] focus:ring-4 focus:ring-red-900/5 focus:outline-none transition-all placeholder:text-stone-300 text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-black text-stone-400 uppercase tracking-widest">
                  Password
                </label>
                <Link
                  to="#"
                  className="text-xs font-bold text-stone-400 hover:text-[#7B1D3F] transition-colors"
                >
                  Lupa Password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-stone-200 bg-stone-50 p-4 rounded-2xl focus:bg-white focus:border-[#7B1D3F] focus:ring-4 focus:ring-red-900/5 focus:outline-none transition-all placeholder:text-stone-300 text-sm"
                required
              />
            </div>

            <Button
              label="Login ke Dashboard"
              variant="primary"
              className="w-full py-4 rounded-2xl font-bold bg-[#7B1D3F] hover:bg-[#5a152e] text-white shadow-xl shadow-red-900/20 mt-2 text-base transition-all active:scale-95"
            />

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-stone-100"></span>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-white px-4 text-stone-300 font-black tracking-[0.3em]">
                  Internal Access
                </span>
              </div>
            </div>

            <p className="text-stone-500 text-center font-medium text-sm">
              Belum punya akses?{" "}
              <Link
                to="/register"
                className="text-[#7B1D3F] font-black hover:underline underline-offset-4"
              >
                Hubungi Admin
              </Link>
            </p>
          </form>
        </div>

        <div className="hidden md:flex md:w-1/2 bg-stone-50 items-center justify-center p-12 border-l border-stone-100 relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-stone-200 rounded-full blur-3xl opacity-50" />

          <div className="text-center w-full relative z-10">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="Invofest Mascot"
              className="w-full max-w-[280px] mx-auto drop-shadow-[0_20px_50px_rgba(123,29,63,0.2)] animate-soft object-contain"
            />
            <div className="mt-10">
              <h3 className="text-2xl font-black text-stone-800 tracking-tighter">
                Beyond Limits
              </h3>
              <p className="text-[10px] text-stone-400 font-black tracking-[0.4em] uppercase mt-2">
                Innovate for Tomorrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
