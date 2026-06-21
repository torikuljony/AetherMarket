"use client";

import { useState } from "react";
import assets from "@/data/assets";
import AssetCard from "./AssetCard";

export default function AssetsGrid({ filters, onCardClick }) {
  const [visible, setVisible] = useState(4);

  const filteredAssets = assets.filter((asset) => {
    const matchDifficulty =
      filters.difficulty.length === 0 ||
      filters.difficulty.includes(asset.difficulty);

    let matchPrice = true;

    if (filters.price === "free") {
      matchPrice = asset.price === 0;
    } else if (filters.price === "under5") {
      matchPrice = asset.price > 0 && asset.price < 5;
    } else if (filters.price === "5-15") {
      matchPrice = asset.price >= 5 && asset.price <= 15;
    }

    return matchDifficulty && matchPrice;
  });

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        {filteredAssets.slice(0, visible).map((asset) => (
          <AssetCard
            key={asset.id}
            asset={asset}
            onClick={() => onCardClick(asset)}
          />
        ))}
      </div>

      {visible < filteredAssets.length && (
        <button
          onClick={() => setVisible(visible + 4)}
          className="mt-8 w-full bg-[#11192d] border border-[#2a2f46] py-3 rounded-xl text-white"
        >
          Load More Assets
        </button>
      )}
    </div>
  );
}