"use client";

import { useState } from "react";
import Filters from "./Filters";
import AssetsGrid from "./AssetsGrid";
import Trending from "./Trending";
import MarketStats from "./MarketStats";
import AssetDetail from "./AssetDetail";
import assets from "../../data/assets";

export default function Marketplace() {
  const [filters, setFilters] = useState({
    difficulty: [],
    price: "",
  });

  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleCardClick = (asset) => {
    setSelectedAsset(asset);
  };

  const handleBack = () => {
    setSelectedAsset(null);
  };

  if (selectedAsset) {
    return <AssetDetail asset={selectedAsset} onBack={handleBack} />;
  }

  return (
    <section className="bg-[#050816] px-8 py-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">

        <div className="col-span-2">
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        <div className="col-span-7">
          
          {/* PRO Upgrade Banner - Added Here */}
          <div className="mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl p-6">
            <h2 className="text-3xl font-bold text-black mb-2">
              Upgrade to PRO 💎
            </h2>
            <p className="text-black/80 mb-4">
              Get unlimited access to all premium prompts with one purchase.
            </p>
            <a href="/pro">
              <button className="bg-black text-white px-5 py-3 rounded-xl font-semibold">
                Buy PRO Now
              </button>
            </a>
          </div>

          <h1 className="text-white text-3xl font-bold mb-6">
            Latest Assets
          </h1>

          <AssetsGrid 
            filters={filters} 
            onCardClick={handleCardClick}
          />
        </div>

        <div className="col-span-3">
          <Trending />
          <MarketStats />
        </div>
      </div>
    </section>
  );
}