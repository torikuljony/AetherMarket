"use client";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import StatsCard from "@/components/Dashboard/StatsCard";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <StatsCard title="Total Users" value="1240" />
        <StatsCard title="Total Prompts" value="520" />
        <StatsCard title="Revenue" value="$12,400" />
      </div>
      </div>
    </DashboardLayout>
  );
}