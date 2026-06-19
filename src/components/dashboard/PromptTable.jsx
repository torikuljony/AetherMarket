// import { Filter, Plus, ChevronLeft, ChevronRight } from "lucide-react";

// const prompts = [
//   {
//     title: "Hyper-Realistic Cyberpunk Portrait",
//     model: "MIDJOURNEY",
//     category: "Art & Design",
//     status: "Approved",
//     earnings: "1,248.60",
//     sales: "124",
//     rating: 4.9,
//   },
//   {
//     title: "Enterprise SQL Query Optimizer",
//     model: "GPT-4",
//     category: "DevOps",
//     status: "Pending",
//     earnings: "0.00",
//     sales: "0",
//     rating: null,
//   },
//   {
//     title: "Isometric Cityscape Master",
//     model: "DALL-E 3",
//     category: "3D Assets",
//     status: "Rejected",
//     earnings: "0.00",
//     sales: "0",
//     rating: null,
//   },
// ];

// export default function PromptTable() {
//   return (
//     <div className="bg-[#0f1629] border border-[#1f2336] rounded-3xl p-4 lg:p-6">
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
//         <h2 className="text-xl font-semibold">My Prompts</h2>
//         <div className="flex gap-3">
//           <button className="flex items-center gap-2 px-4 py-2 border border-[#2d3148] rounded-2xl text-sm hover:bg-[#1f2336]">
//             <Filter size={16} /> Filter
//           </button>
//           <button className="flex items-center gap-2 bg-[#7b61ff] hover:bg-violet-600 px-5 py-2 rounded-2xl text-sm font-medium">
//             <Plus size={18} /> New Prompt
//           </button>
//         </div>
//       </div>

//       {/* Desktop Table */}
//       <div className="hidden lg:block overflow-x-auto">
//         <table className="w-full min-w-[900px]">
//           <thead>
//             <tr className="border-b border-[#1f2336] text-left text-sm text-gray-400">
//               <th className="pb-4 font-normal">PROMPT DETAILS</th>
//               <th className="pb-4 font-normal">STATUS</th>
//               <th className="pb-4 font-normal">EARNINGS</th>
//               <th className="pb-4 font-normal">RATING</th>
//               <th className="pb-4 font-normal text-right">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-[#1f2336]">
//             {prompts.map((prompt, i) => (
//               <tr key={i} className="hover:bg-[#1a2138]">
//                 <td className="py-5">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-2xl"></div>
//                     <div>
//                       <p className="font-medium">{prompt.title}</p>
//                       <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
//                         <span className="bg-[#1f2336] px-2 py-0.5 rounded">{prompt.model}</span>
//                         <span>{prompt.category}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="py-5">
//                   <span className={`px-4 py-1.5 text-sm rounded-full ${
//                     prompt.status === "Approved" ? "bg-emerald-500/10 text-emerald-400" :
//                     prompt.status === "Pending" ? "bg-amber-500/10 text-amber-400" :
//                     "bg-red-500/10 text-red-400"
//                   }`}>
//                     {prompt.status}
//                   </span>
//                 </td>
//                 <td className="py-5">
//                   <p className="font-medium">${prompt.earnings}</p>
//                   <p className="text-xs text-gray-400">{prompt.sales} sales</p>
//                 </td>
//                 <td className="py-5">
//                   {prompt.rating ? (
//                     <div className="flex items-center gap-1 text-yellow-400">★ {prompt.rating}</div>
//                   ) : (
//                     <span className="text-gray-500">—</span>
//                   )}
//                 </td>
//                 <td className="py-5 text-right">
//                   <button className="text-violet-400 hover:text-violet-300">View →</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile Cards */}
//       <div className="lg:hidden space-y-4">
//         {prompts.map((prompt, i) => (
//           <div key={i} className="bg-[#1a2138] rounded-2xl p-4 border border-[#2d3148]">
//             <div className="flex gap-4">
//               <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-2xl flex-shrink-0"></div>
//               <div className="flex-1">
//                 <p className="font-medium leading-tight">{prompt.title}</p>
//                 <div className="flex gap-2 mt-2 text-xs">
//                   <span className="bg-[#2d3148] px-2 py-1 rounded">{prompt.model}</span>
//                   <span className="text-gray-400">{prompt.category}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center mt-5 pt-4 border-t border-[#2d3148]">
//               <div>
//                 <p className="text-emerald-400 font-medium">${prompt.earnings}</p>
//                 <p className="text-xs text-gray-400">{prompt.sales} sales</p>
//               </div>
//               <div className={`px-4 py-1.5 text-sm rounded-full ${
//                 prompt.status === "Approved" ? "bg-emerald-500/10 text-emerald-400" :
//                 prompt.status === "Pending" ? "bg-amber-500/10 text-amber-400" :
//                 "bg-red-500/10 text-red-400"
//               }`}>
//                 {prompt.status}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
//         <p>Showing 3 of 42 prompts</p>
//         <div className="flex gap-2">
//           <button className="p-2 border border-[#2d3148] rounded-xl hover:bg-[#1f2336]"><ChevronLeft size={18} /></button>
//           <button className="p-2 border border-[#2d3148] rounded-xl hover:bg-[#1f2336]"><ChevronRight size={18} /></button>
//         </div>
//       </div>
//     </div>
//   );
// }