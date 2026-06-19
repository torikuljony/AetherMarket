"use client";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import StatsCard from "@/components/Dashboard/StatsCard";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <StatsCard title="Views" value="8.4K" />
        <StatsCard title="Downloads" value="2.1K" />
        <StatsCard title="Sales" value="$4,500" />
      </div>
    </DashboardLayout>
  );
}