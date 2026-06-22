"use client";

import Image from "next/image";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";

export default function AssetDetail({ asset, onBack }) {
  const { user } = useAuth();
  const isProUser = user?.membership === "pro";   // ← এটা যোগ করা হয়েছে

  const [loading, setLoading] = useState(false);

  if (!asset) return null;

  const handleBuy = async () => {
    if (!user) {
      alert("Please login first to purchase this prompt.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          promptId: asset.id,
          promptTitle: asset.title,
          price: asset.price,
          buyerEmail: user.email,
          buyerName: user.displayName || user.email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("🎉 Purchase Successful! You can now access this prompt.");
      } else {
        alert(data.message || "Purchase failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
        >
          ← Back to Marketplace
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Image */}
          <div className="relative rounded-3xl overflow-hidden">
            <Image 
              src={asset.image} 
              alt={asset.title}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm">
              {asset.tag}
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold leading-tight">{asset.title}</h1>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="font-semibold">{asset.rating}</span>
                  <span className="text-gray-400">({asset.reviews} reviews)</span>
                </div>
                <div className="text-cyan-400 font-medium">{asset.copies} Copies</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">
                {asset.price === 0 ? "FREE" : `$${asset.price}`}
              </span>
              
              {isProUser ? (
                <div className="px-8 py-3 rounded-2xl bg-green-500 text-black font-bold">
                  🔓 Unlocked with PRO
                </div>
              ) : (
                <button 
                  onClick={handleBuy}
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-2xl font-semibold transition-all active:scale-95 disabled:opacity-70"
                >
                  {loading ? "Processing..." : "Buy Now"}
                </button>
              )}
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              {asset.description}
            </p>

            {/* How to use */}
            <div className="bg-[#1a1a1a] p-6 rounded-3xl">
              <h3 className="font-semibold mb-4">How to use this prompt</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Open your GPT-4 or Claude interface.</li>
                <li>Paste the prompt template and replace variables.</li>
                <li>Use suggested settings for best results.</li>
              </ol>
            </div>

            {/* Creator Info */}
            <div className="flex items-center gap-4 bg-[#1a1a1a] p-5 rounded-3xl">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-xl">
                👤
              </div>
              <div>
                <p className="font-semibold">{asset.creator}</p>
                <p className="text-sm text-gray-400">Elite Seller</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}