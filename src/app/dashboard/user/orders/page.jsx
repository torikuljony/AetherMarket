"use client";

import UserSidebar from "@/components/dashboard/UserSidebar";

export default function OrdersPage() {
  return (
    <div className="flex bg-[#050816] text-white min-h-screen">
      <UserSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Purchase History</h1>

        <div className="bg-[#11192d] p-5 rounded-xl">
          <h2 className="font-semibold">AI Marketing Prompt</h2>
          <p className="text-gray-400">$15</p>
        </div>
      </div>
    </div>
  );
}