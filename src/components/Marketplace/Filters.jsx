export default function Filters({ filters, setFilters }) {

  const handleDifficulty = (value) => {
    const exists = filters.difficulty.includes(value);

    let updated;
    if (exists) {
      updated = filters.difficulty.filter((d) => d !== value);
    } else {
      updated = [...filters.difficulty, value];
    }

    setFilters({ ...filters, difficulty: updated });
  };

  const handlePrice = (value) => {
    setFilters({ ...filters, price: value });
  };

  return (
    <div className="bg-[#11192d] border border-[#2a2f46] rounded-2xl p-5 text-white">
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      {/* DIFFICULTY */}
      <div className="mb-8">
        <h3 className="text-sm text-gray-400 mb-4">DIFFICULTY</h3>

        <div className="space-y-3 text-gray-300">
          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={filters.difficulty.includes("Beginner")}
              onChange={() => handleDifficulty("Beginner")}
            />
            Beginner
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={filters.difficulty.includes("Intermediate")}
              onChange={() => handleDifficulty("Intermediate")}
            />
            Intermediate
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={filters.difficulty.includes("Advanced")}
              onChange={() => handleDifficulty("Advanced")}
            />
            Advanced
          </label>
        </div>
      </div>

      {/* PRICE */}
      <div>
        <h3 className="text-sm text-gray-400 mb-4">PRICE RANGE</h3>

        <div className="space-y-3 text-gray-300">
          <label className="flex gap-2">
            <input
              type="radio"
              name="price"
              checked={filters.price === "free"}
              onChange={() => handlePrice("free")}
            />
            Free
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              name="price"
              checked={filters.price === "under5"}
              onChange={() => handlePrice("under5")}
            />
            Under $5
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              name="price"
              checked={filters.price === "5-15"}
              onChange={() => handlePrice("5-15")}
            />
            $5 - $15
          </label>
        </div>
      </div>
    </div>
  );
}