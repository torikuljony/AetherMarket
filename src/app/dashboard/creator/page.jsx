// "use client";

// import { useState } from "react";
// import useAuth from "@/hooks/useAuth";
// import CreatorSidebar from "@/components/dashboard/CreatorSidebar";

// export default function CreatorDashboard() {
//   const { user } = useAuth();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("Writing");
//   const [loading, setLoading] = useState(false);

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       alert("Please login first");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("/api/prompts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title,
//           description,
//           price: Number(price),
//           category,
//           creatorEmail: user?.email,
//           creatorName: user?.displayName,
//         }),
//       });

//       const data = await res.json();

//       if (data.success || data.message?.includes("success")) {
//         alert("✅ Prompt Uploaded Successfully!");
//         // Reset form
//         setTitle("");
//         setDescription("");
//         setPrice("");
//         setCategory("Writing");
//       } else {
//         alert(data.message || "Upload failed");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex bg-[#050816] text-white min-h-screen">
//       <CreatorSidebar />

//       <div className="flex-1 p-8 md:p-10">
//         <h1 className="text-4xl font-bold mb-10">Creator Dashboard</h1>

//         <div className="max-w-3xl">
//           <div className="bg-[#11192d] border border-[#2a2f46] rounded-3xl p-8">
//             <h2 className="text-2xl font-semibold mb-6">Upload New Prompt</h2>

//             <form onSubmit={handleUpload} className="space-y-6">
//               <input
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Prompt Title"
//                 className="w-full h-12 px-5 rounded-2xl bg-[#1a2338] border border-[#2a2f46] focus:outline-none focus:border-[#7b61ff]"
//                 required
//               />

//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Prompt Description"
//                 className="w-full h-36 px-5 py-4 rounded-2xl bg-[#1a2338] border border-[#2a2f46] focus:outline-none focus:border-[#7b61ff]"
//                 required
//               />

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   type="number"
//                   placeholder="Price ($)"
//                   className="w-full h-12 px-5 rounded-2xl bg-[#1a2338] border border-[#2a2f46] focus:outline-none focus:border-[#7b61ff]"
//                   required
//                 />

//                 <select
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   className="w-full h-12 px-5 rounded-2xl bg-[#1a2338] border border-[#2a2f46] focus:outline-none focus:border-[#7b61ff]"
//                 >
//                   <option value="Writing">Writing</option>
//                   <option value="Marketing">Marketing</option>
//                   <option value="Image Generation">Image Generation</option>
//                   <option value="Coding">Coding</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <button
//                 disabled={loading}
//                 type="submit"
//                 className="w-full h-14 rounded-2xl bg-[#7b61ff] hover:bg-[#8b72ff] text-black font-bold text-lg transition-all disabled:opacity-70"
//               >
//                 {loading ? "Uploading..." : "Upload Prompt"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import CreatorSidebar from "@/components/dashboard/CreatorSidebar";

export default function CreatorDashboard() {
  return (
    <div className="flex bg-[#050816] text-white min-h-screen">
      <CreatorSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Creator Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#11192d] p-6 rounded-xl">
            <p className="text-gray-400">Total Prompts</p>
            <h2 className="text-3xl font-bold mt-2">12</h2>
          </div>

          <div className="bg-[#11192d] p-6 rounded-xl">
            <p className="text-gray-400">Total Sales</p>
            <h2 className="text-3xl font-bold mt-2">48</h2>
          </div>

          <div className="bg-[#11192d] p-6 rounded-xl">
            <p className="text-gray-400">Total Earnings</p>
            <h2 className="text-3xl font-bold mt-2">$540</h2>
          </div>
        </div>

        <div className="bg-[#11192d] p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Recent Uploads</h2>

          <div className="space-y-4">
            <div className="bg-[#1b233b] p-4 rounded-xl">
              AI Marketing Prompt
            </div>

            <div className="bg-[#1b233b] p-4 rounded-xl">
              SEO Expert Prompt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}