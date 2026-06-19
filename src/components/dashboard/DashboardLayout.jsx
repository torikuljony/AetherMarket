"use client";

import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* TOP NAVBAR */}
      <Navbar />

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="hidden md:block fixed left-0 top-[72px] h-[calc(100vh-72px)] w-[260px] bg-[#0c1020] border-r border-[#1f2336] p-6">
          <h2 className="text-2xl font-bold text-[#d8c3ff] mb-10">
            Dashboard
          </h2>

          <div className="space-y-3">

            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#151b2f] hover:bg-[#1b2238] transition"
            >
              <LayoutDashboard size={18} />
              Overview
            </Link>

            <Link
              href="/dashboard/prompts"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#151b2f] transition"
            >
              <FileText size={18} />
              Prompts
            </Link>

            <Link
              href="/dashboard/analytics"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#151b2f] transition"
            >
              <BarChart3 size={18} />
              Analytics
            </Link>

            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#151b2f] transition"
            >
              <Settings size={18} />
              Settings
            </Link>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-[#151b2f] transition">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 md:ml-[260px] mt-[72px] p-8">
          {children}
        </main>

      </div>
    </div>
  );
}