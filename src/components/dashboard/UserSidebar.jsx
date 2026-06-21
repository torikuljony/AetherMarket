"use client";

import Link from "next/link";
import { LayoutDashboard, ShoppingBag } from "lucide-react";

export default function UserSidebar() {
  return (
    <div className="w-[260px] min-h-screen bg-[#0c1020] border-r border-[#1f2336] p-6">
      <h1 className="text-2xl font-bold text-[#d8c3ff] mb-10">
        User Dashboard
      </h1>

      <div className="space-y-3">
        <Link
          href="/dashboard/user"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#171d32]"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/dashboard/user/orders"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]"
        >
          <ShoppingBag size={18} />
          Purchase History
        </Link>
      </div>
    </div>
  );
}