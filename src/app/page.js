"use client";   // ← এটা প্রথম লাইনে রাখো

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import WhyChoose from "@/components/Home/WhyChoose";
import assets from "@/data/assets";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssets, setFilteredAssets] = useState(assets);

  const handleSearch = (term) => {
    setSearchTerm(term);
    
    if (!term) {
      setFilteredAssets(assets);
      return;
    }

    const filtered = assets.filter((asset) =>
      asset.title.toLowerCase().includes(term.toLowerCase()) ||
      asset.description?.toLowerCase().includes(term.toLowerCase()) ||
      asset.creator?.toLowerCase().includes(term.toLowerCase()) ||
      asset.tag?.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredAssets(filtered);
  };

  const isSearching = searchTerm.length > 0;

  return (
    <>
      <Navbar />
      <Hero onSearch={handleSearch} />

      {/* ==================== MARKETPLACE STYLE CARDS ON HOME ==================== */}
      <section className="bg-[#050816] py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold text-white">
              {isSearching ? `Results for "${searchTerm}"` : "Latest Assets"}
            </h2>
            
            {isSearching && (
              <button 
                onClick={() => handleSearch("")}
                className="text-purple-400 hover:text-purple-500 font-medium"
              >
                Clear Search →
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAssets.slice(0, 4).map((asset) => (
              <Link 
                href={`/prompt/${asset.id}`} 
                key={asset.id}
                className="group"
              >
                <div className="bg-[#11192d] border border-[#2a2f46] rounded-3xl overflow-hidden hover:border-purple-500 transition-all duration-300 h-full">
                  
                  <div className="relative">
                    <img 
                      src={asset.image} 
                      alt={asset.title}
                      className="w-full h-[260px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                      ⭐ {asset.rating} <span className="text-gray-400">({asset.reviews})</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-4 py-1 rounded-full font-semibold">
                      {asset.price === 0 ? "FREE" : `$${asset.price}`}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-[#1f2945] text-[#a78bff] text-xs px-3 py-1 rounded-full">
                        {asset.tag}
                      </span>
                      <span className="bg-[#1f2945] text-gray-400 text-xs px-3 py-1 rounded-full">
                        {asset.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4 line-clamp-2 group-hover:text-purple-400 transition-colors">
                      {asset.title}
                    </h3>

                    <div className="flex justify-between items-center text-sm">
                      <div className="text-gray-400">
                        {asset.copies} copies
                      </div>
                      <div className="text-yellow-400 flex items-center gap-1">
                        ⭐ {asset.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredAssets.length === 0 && isSearching && (
            <p className="text-center text-gray-400 text-xl py-20">
              No assets found for "{searchTerm}"
            </p>
          )}
        </div>
      </section>

      <WhyChoose />
    </>
  );
}