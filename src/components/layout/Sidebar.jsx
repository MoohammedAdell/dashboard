import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { sidebarMenu } from "../../constants/sidebarMenu";

import { LayoutDashboard, LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Sidebar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const { isDark, toggleTheme } = useTheme();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <aside className="w-full h-full bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 flex flex-col justify-between p-6 select-none transition-all duration-300">
      {/* ================= HEADER & NAV ================= */}
      <div className="flex flex-col gap-6">
        {/* Brand Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
              <LayoutDashboard className="text-white w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base text-slate-800 dark:text-white leading-snug">
                Dashboard
              </h2>
              <p className="text-xs font-medium text-slate-400">Admin Panel</p>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            title="Toggle Theme"
          >
            {isDark ? (
              <Moon size={18} className="text-indigo-400" />
            ) : (
              <Sun size={18} className="text-amber-500" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-2">
          {sidebarMenu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) =>
                  `group relative flex items-center gap-3.5 rounded-xl px-3.5 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25 font-semibold"
                      : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/60 font-medium"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 dark:bg-slate-800 group-hover:scale-105 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    <span className="text-sm tracking-wide">{item.title}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-800/40 p-3.5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white text-sm shadow-sm shrink-0">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div className="overflow-hidden">
              <h4 className="font-semibold text-xs text-slate-800 dark:text-white truncate">
                {user?.name || "User"}
              </h4>
              <p className="text-[11px] text-slate-400 truncate mt-0.5">
                {user?.email || "Frontend Developer"}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-50 dark:bg-red-500/10 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
