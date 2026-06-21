"use client";

import UserSidebar from "@/components/dashboard/UserSidebar";

export default function UserDashboard() {
  return (
    <div className="flex bg-[#050816] text-white min-h-screen">
      <UserSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#11192d] p-6 rounded-2xl">
            <h2 className="text-gray-400">Purchased Prompts</h2>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>

          <div className="bg-[#11192d] p-6 rounded-2xl">
            <h2 className="text-gray-400">Total Spend</h2>
            <p className="text-3xl font-bold mt-2">$240</p>
          </div>
        </div>
      </div>
    </div>
  );
}