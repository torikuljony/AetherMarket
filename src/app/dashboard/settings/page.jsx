"use client";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="bg-[#11192d] p-8 rounded-2xl max-w-2xl">
        <div className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-400">
              Name
            </label>
            <input
              className="w-full h-12 rounded-xl bg-[#14192d] px-4 border border-[#2a2f46]"
              defaultValue="Torikul Islam"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-400">
              Email
            </label>
            <input
              className="w-full h-12 rounded-xl bg-[#14192d] px-4 border border-[#2a2f46]"
              defaultValue="torikul@gmail.com"
            />
          </div>

          <button className="px-6 py-3 rounded-xl bg-[#d8c3ff] text-black font-semibold">
            Save Changes
          </button>

        </div>
      </div>
    </DashboardLayout>
  );
}