import UserSidebar from "@/components/dashboard/UserSidebar";

export default function UserDashboard() {
  return (
    <div className="flex bg-[#050816] text-white min-h-screen">
      <UserSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
      </div>
    </div>
  );
}