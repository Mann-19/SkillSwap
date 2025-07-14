import { Search, Bell, User, Settings } from "lucide-react";

export const Navbar = ({ userName }) => {
  return (
    <nav
      className="bg-black border-b border-zinc-800 sticky top-0 z-50 backdrop-blur-sm"
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div id="logo" className="flex items-center">
            <img
              src="/logo.png"
              alt="logo"
              className="w-7 h-7 aspect-square mr-3"
            />
            <span className="text-3xl text-white font-medium">Skill</span>
            <span className="text-3xl text-emerald-500 font-medium">Swap</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-2xl mx-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-500" />
              </div>
              <input
                type="text"
                placeholder="Search skills, services..."
                className="block w-full pl-12 pr-4 py-3 border border-zinc-800 rounded-2xl bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <button className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-xl transition-all">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-xl transition-all">
              <Settings className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-4 p-3 rounded-xl transition-all cursor-pointer">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="text-white text-sm font-medium hidden sm:block">
                {userName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
