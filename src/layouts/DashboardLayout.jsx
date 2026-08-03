import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
      {/* Sidebar fixed container */}
      <aside className="w-72 h-full shrink-0">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="px-8 pt-6 pb-2 shrink-0">
          <Navbar />
        </header>

        <main className="flex-1 px-8 py-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}