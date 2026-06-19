export default function StatsCard({ title, value }) {
  return (
    <div className="bg-[#11192d] rounded-2xl p-6 border border-[#1f2336] shadow-lg hover:scale-[1.02] transition">
      <h3 className="text-gray-400 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-3 text-white">
        {value}
      </p>
    </div>
  );
}