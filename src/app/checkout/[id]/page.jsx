"use client";

import { useParams } from "next/navigation";

export default function CheckoutPage() {
  const params = useParams();

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
      <div className="bg-[#11192d] p-10 rounded-3xl w-[500px]">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <p className="text-gray-400 mb-4">
          Prompt ID: {params.id}
        </p>

        <button className="w-full h-14 rounded-xl bg-[#d8c3ff] text-black font-bold">
          Pay Now
        </button>
      </div>
    </div>
  );
}