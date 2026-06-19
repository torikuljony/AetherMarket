export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#050816] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">User Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#11192d] p-6 rounded-2xl">
          <h2>Saved Prompts</h2>
          <p className="text-3xl font-bold mt-2">14</p>
        </div>

        <div className="bg-[#11192d] p-6 rounded-2xl">
          <h2>Purchased Prompts</h2>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
      </div>
    </div>
  );
}