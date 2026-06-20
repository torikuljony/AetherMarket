"use client";

import { useState } from "react";
import Filters from "./Filters";
import AssetsGrid from "./AssetsGrid";
import Trending from "./Trending";
import MarketStats from "./MarketStats";
import AssetDetail from "./AssetDetail";     // ← নতুন যোগ করো
import assets from "../../data/assets";      // ← পাথ ঠিক করে নিবে

export default function Marketplace() {
  const [filters, setFilters] = useState({
    difficulty: [],
    price: "",
  });

  const [selectedAsset, setSelectedAsset] = useState(null);   // ← নতুন

  const handleCardClick = (asset) => {
    setSelectedAsset(asset);
  };

  const handleBack = () => {
    setSelectedAsset(null);
  };

  // Detail View খোলা থাকলে এটা দেখাবে
  if (selectedAsset) {
    return <AssetDetail asset={selectedAsset} onBack={handleBack} />;
  }

  // Normal Marketplace View
  return (
    <section className="bg-[#050816] px-8 py-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">

        <div className="col-span-2">
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        <div className="col-span-7">
          <h1 className="text-white text-3xl font-bold mb-6">
            Latest Assets
          </h1>

          <AssetsGrid 
            filters={filters} 
            onCardClick={handleCardClick}     // ← নতুন প্রপ যোগ করা হলো
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