import assets from "@/data/assets";
import { notFound } from "next/navigation";

export default async function PromptDetailsPage({ params }) {
  const { id } = await params;     // ← এটা খুব জরুরি

  const asset = assets.find(
    (item) => item.id === Number(id)
  );

  if (!asset) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid lg:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div>
          <img
            src={asset.image}
            alt={asset.title}
            className="w-full rounded-2xl border border-[#2a2f46]"
          />
        </div>

        {/* CONTENT */}
        <div>

          <div className="flex flex-wrap gap-2 mb-4">
            {asset.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-[#1f2945] text-[#d8c3ff] text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            {asset.title}
          </h1>

          <p className="text-gray-400 mb-6">
            {asset.description}
          </p>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
              {asset.creator?.charAt(0)}
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Created by
              </p>
              <p className="text-white font-medium">
                {asset.creator}
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mb-8">

            <div className="bg-[#11192d] p-4 rounded-xl border border-[#2a2f46]">
              <p className="text-gray-400 text-sm">Sales</p>
              <p className="text-white text-xl font-bold">
                {asset.sales}
              </p>
            </div>

            <div className="bg-[#11192d] p-4 rounded-xl border border-[#2a2f46]">
              <p className="text-gray-400 text-sm">Rating</p>
              <p className="text-white text-xl font-bold">
                ⭐ {asset.rating}
              </p>
            </div>

            <div className="bg-[#11192d] p-4 rounded-xl border border-[#2a2f46]">
              <p className="text-gray-400 text-sm">Views</p>
              <p className="text-white text-xl font-bold">
                {asset.views}
              </p>
            </div>

          </div>

          {/* BUY BOX */}
          <div className="bg-[#11192d] border border-[#2a2f46] rounded-2xl p-6">

            <h2 className="text-3xl font-bold text-white mb-4">
              {asset.price === 0 ? "FREE" : `$${asset.price}`}
            </h2>

            <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl text-white font-semibold transition">
              Unlock Full Access
            </button>

          </div>

        </div>

      </div>

      {/* REVIEWS */}
      <div className="mt-16">

        <h2 className="text-3xl font-bold text-white mb-6">
          Community Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {asset.reviewsData?.map((review, index) => (
            <div
              key={index}
              className="bg-[#11192d] border border-[#2a2f46] rounded-2xl p-5"
            >
              <p className="text-yellow-400 mb-3">
                {"⭐".repeat(review.rating)}
              </p>

              <p className="text-gray-300 mb-4">
                "{review.comment}"
              </p>

              <p className="text-white font-medium">
                {review.user}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}