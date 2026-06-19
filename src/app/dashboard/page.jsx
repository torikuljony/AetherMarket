// "use client";

// import Sidebar from "@/components/dashboard/Sidebar";
// import DashboardCards from "@/components/dashboard/DashboardCards";
// import PromptTable from "@/components/dashboard/PromptTable";

// export default function DashboardPage() {
//   return (
//     <div className="flex min-h-screen bg-[#050816] text-white">
//       {/* Sidebar - Desktop Only */}
//       <div className="hidden lg:block">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 lg:ml-72">
//         <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
//           <div>
//             <h1 className="text-2xl sm:text-3xl font-bold text-[#d8c3ff]">Creator Dashboard</h1>
//             <p className="text-gray-400 mt-1">Manage your prompts & earnings</p>
//           </div>

//           <DashboardCards />
//           <PromptTable />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  // TEMP ROLE
  const role = "admin";
  // const role = "creator";
  // const role = "user";

  useEffect(() => {
    if (role === "admin") {
      router.push("/dashboard/admin");
    } else if (role === "creator") {
      router.push("/dashboard/creator");
    } else {
      router.push("/dashboard/user");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center text-white">
      Loading Dashboard...
    </div>
  );
}