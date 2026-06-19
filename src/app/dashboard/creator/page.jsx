export default function CreatorDashboard() {
  return (
    <div className="min-h-screen bg-[#050816] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Creator Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#11192d] p-6 rounded-2xl">
          <h2>My Prompts</h2>
          <p className="text-3xl font-bold mt-2">48</p>
        </div>

        <div className="bg-[#11192d] p-6 rounded-2xl">
          <h2>Total Sales</h2>
          <p className="text-3xl font-bold mt-2">$980</p>
        </div>

        <div className="bg-[#11192d] p-6 rounded-2xl">
          <h2>Followers</h2>
          <p className="text-3xl font-bold mt-2">1.2K</p>
        </div>
      </div>
    </div>
  );
}