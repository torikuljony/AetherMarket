"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  Upload,
  ShoppingBag,     // ← নতুন যোগ করা
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-[260px] min-h-screen bg-[#0c1020] border-r border-[#1f2336] p-6">
      <h1 className="text-2xl font-bold text-[#d8c3ff] mb-10">
        Dashboard
      </h1>

      <div className="space-y-3">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#171d32]"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]"
        >
          <FileText size={18} />
          Prompts
        </Link>

        <Link
          href="/dashboard/creator/upload"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]"
        >
          <Upload size={18} />
          Upload Prompt
        </Link>

        {/* Users Link */}
        <Link
          href="/dashboard/admin/users"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]"
        >
          <Users size={18} />
          Users
        </Link>

        {/* New Orders Link */}
        <Link
          href="/dashboard/admin/orders"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]"
        >
          <ShoppingBag size={18} />
          Orders
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]"
        >
          <BarChart3 size={18} />
          Analytics
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]"
        >
          <Settings size={18} />
          Settings
        </Link>
      </div>
    </div>
  );
}