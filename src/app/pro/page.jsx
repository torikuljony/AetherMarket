"use client";

import { Gem } from "lucide-react";
import useAuth from "@/hooks/useAuth";

export default function ProPage() {
  const { user } = useAuth();

  const handleUpgrade = async () => {
    const res = await fetch("/api/pro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("🎉 PRO Activated");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
      <div className="max-w-xl w-full bg-[#11192d] rounded-3xl p-10 border border-[#2a2f46]">

        <div className="flex justify-center mb-6">
          <Gem className="w-16 h-16 text-cyan-400" />
        </div>

        <h1 className="text-4xl font-bold text-center mb-4">
          AetherMarket PRO
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Unlock every premium prompt instantly.
        </p>

        <ul className="space-y-4 mb-10">
          <li>✅ Unlimited Prompt Access</li>
          <li>✅ No Need To Buy Individually</li>
          <li>✅ Future Premium Content Included</li>
          <li>✅ PRO Badge On Profile</li>
        </ul>

        <button
          onClick={handleUpgrade}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold"
        >
          Upgrade To PRO
        </button>
      </div>
    </div>
  );
}