import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-50 bg-gradient-to-br from-red-50 via-white to-zinc-100 px-4 py-10">
      <Outlet />
    </div>
  );
}
