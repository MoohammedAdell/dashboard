import React from "react";
import { Menu, Search, Bell, MessageSquare, User } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/dashboard/profile": "Profile",
  "/dashboard/settings": "Settings",
  "/dashboard/tasks": "Tasks",
  "/dashboard/analytics": "Analytics",
  "/dashboard/calendar": "Calendar",
  "/dashboard/users": "Users",
};

export default function Navbar() {
  const location = useLocation();
  const currentTitle = pageTitles[location.pathname] || "Dashboard";
  return (
    <header className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 shadow-xs transition-colors duration-300">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side: Menu Icon & Search Bar */}
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              {currentTitle}
            </h1>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Welcome back 👋
            </p>
          </div>

          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 text-sm rounded-xl pl-9 pr-4 py-2 outline-none border border-transparent focus:border-indigo-500/50 dark:focus:border-indigo-400/50 transition-all"
            />
          </div>
        </div>

        {/* Right Side: Action Icons */}
        <div className="flex items-center gap-1.5">
          {/* Notifications */}
          <button className="relative p-2.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition cursor-pointer">
            <Bell size={19} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full" />
          </button>

          {/* Messages */}
          <button className="p-2.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition cursor-pointer">
            <MessageSquare size={19} />
          </button>

          {/* User Profile */}
          <button className="p-2.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition cursor-pointer">
            <User size={19} />
          </button>
        </div>
      </div>
    </header>
  );
}
