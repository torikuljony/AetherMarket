"use client";

import useAuth from "@/hooks/useAuth";

export default function ProPage() {
  const { user } = useAuth();

  const upgradeToPro = async () => {
    const res = await fetch("/api/users/pro", {
      method: "PATCH",
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
      <div className="w-[500px] bg-[#11192d] p-10 rounded-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Upgrade to PRO
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Unlock all prompts instantly
        </p>

        <div className="text-center mb-8">
          <span className="text-5xl font-bold">$99</span>
          <span className="text-gray-400"> Lifetime</span>
        </div>

        <button
          onClick={upgradeToPro}
          className="w-full h-14 bg-yellow-400 text-black font-bold rounded-xl"
        >
          Buy PRO
        </button>
      </div>
    </div>
  );
}