export default function Trending() {
  return (
    <div className="bg-[#11192d] border border-[#2a2f46] rounded-2xl p-5 text-white">
      <h2 className="text-xl font-bold mb-6">Trending</h2>

      <div className="space-y-5">
        <div>
          <h3 className="font-semibold">Macro Iris Photorealism</h3>
          <p className="text-gray-400 text-sm">2.4k sales</p>
        </div>

        <div>
          <h3 className="font-semibold">Ghostwriter Suite Pro</h3>
          <p className="text-gray-400 text-sm">1.1k sales</p>
        </div>

        <div>
          <h3 className="font-semibold">Baroque Cyborg Portrait</h3>
          <p className="text-gray-400 text-sm">988 sales</p>
        </div>
      </div>
    </div>
  );
}