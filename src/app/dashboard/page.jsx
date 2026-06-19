"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardCards from "@/components/dashboard/DashboardCards";
import PromptTable from "@/components/dashboard/PromptTable";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#050816] text-white">
      {/* Sidebar - Desktop Only */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-72">
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#d8c3ff]">Creator Dashboard</h1>
            <p className="text-gray-400 mt-1">Manage your prompts & earnings</p>
          </div>

          <DashboardCards />
          <PromptTable />
        </div>
      </div>
    </div>
  );
}