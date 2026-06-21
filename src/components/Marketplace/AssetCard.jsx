export default function AssetCard({ asset, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#11192d] border border-[#2a2f46] rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300 cursor-pointer"
    >
      <div className="relative">
        <img
          src={asset.image}
          alt={asset.title}
          className="w-full h-52 object-cover"
        />

        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded-lg text-xs text-white">
          ⭐ {asset.rating} ({asset.reviews})
        </div>

        <div className="absolute top-3 right-3 bg-[#d8c3ff] text-black px-3 py-1 rounded-lg text-xs font-bold">
          {asset.price === 0 ? "FREE" : `$${asset.price}`}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs px-3 py-1 rounded-full bg-[#1f2945] text-[#d8c3ff]">
            {asset.tag}
          </span>

          <span className="text-xs text-gray-400">
            {asset.difficulty}
          </span>
        </div>

        <h3 className="text-white text-lg font-semibold mb-3">
          {asset.title}
        </h3>

        <div className="flex justify-between text-sm text-gray-400">
          <span>📦 {asset.copies}</span>
          <span>⭐ {asset.rating}</span>
        </div>
      </div>
    </div>
  );
}