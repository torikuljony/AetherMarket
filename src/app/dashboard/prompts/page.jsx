"use client";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";

export default function PromptsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Manage Prompts</h1>

      <div className="space-y-4">
        <div className="bg-[#11192d] p-5 rounded-xl flex justify-between items-center">
          <div>
            <h2 className="font-semibold">AI Marketing Prompt</h2>
            <p className="text-gray-400 text-sm">Category: Marketing</p>
          </div>

          <button className="px-4 py-2 bg-[#d8c3ff] text-black rounded-lg">
            Edit
          </button>
        </div>

        <div className="bg-[#11192d] p-5 rounded-xl flex justify-between items-center">
          <div>
            <h2 className="font-semibold">SEO Expert Prompt</h2>
            <p className="text-gray-400 text-sm">Category: SEO</p>
          </div>

          <button className="px-4 py-2 bg-[#d8c3ff] text-black rounded-lg">
            Edit
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}