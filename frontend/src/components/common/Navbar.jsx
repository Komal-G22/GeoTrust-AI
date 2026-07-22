import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">
        <Search className="cursor-pointer" />

        <Bell className="cursor-pointer" />

        <div className="h-10 w-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black">
          K
        </div>
      </div>
    </header>
  );
}

export default Navbar;