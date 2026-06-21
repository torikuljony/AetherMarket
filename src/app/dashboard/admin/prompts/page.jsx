"use client";

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, Clock, Filter } from "lucide-react";

export default function AdminPromptsPage() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, pending, approved, rejected

  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/prompts/all");
      const data = await res.json();
      setPrompts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/prompts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        alert(`Prompt ${status} successfully!`);
        fetchPrompts();
      } else {
        alert("Failed to update");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const filteredPrompts = prompts.filter((prompt) => {
    if (filter === "all") return true;
    return prompt.status === filter;
  });

  return (
    <div className="p-8 text-white min-h-screen bg-[#050816]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">Manage Prompts</h1>
            <p className="text-gray-400 mt-2">Review and moderate user submitted prompts</p>
          </div>
          <button
            onClick={fetchPrompts}
            className="px-5 py-2 bg-[#1a2338] hover:bg-[#242e4a] rounded-xl flex items-center gap-2"
          >
            Refresh
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {[
            { label: "All Prompts", value: "all", icon: Filter },
            { label: "Pending", value: "pending", icon: Clock },
            { label: "Approved", value: "approved", icon: CheckCircle },
            { label: "Rejected", value: "rejected", icon: XCircle },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all ${
                filter === item.value
                  ? "bg-[#7b61ff] text-black"
                  : "bg-[#11192d] hover:bg-[#1a2338] text-gray-300"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading prompts...</div>
        ) : filteredPrompts.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-xl">
            No prompts found in this filter.
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredPrompts.map((prompt) => (
              <div
                key={prompt._id}
                className="bg-[#11192d] border border-[#2a2f46] rounded-3xl p-8 hover:border-[#7b61ff]/50 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3">{prompt.title}</h2>
                    <p className="text-gray-300 leading-relaxed line-clamp-3">
                      {prompt.description}
                    </p>
                  </div>

                  <div className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    prompt.status === "approved" ? "bg-green-500/20 text-green-400" :
                    prompt.status === "rejected" ? "bg-red-500/20 text-red-400" :
                    "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {prompt.status ? prompt.status.toUpperCase() : "PENDING"}
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => updateStatus(prompt._id, "approved")}
                    className="flex-1 py-4 bg-green-600 hover:bg-green-700 rounded-2xl font-semibold transition flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={20} /> Approve
                  </button>

                  <button
                    onClick={() => updateStatus(prompt._id, "rejected")}
                    className="flex-1 py-4 bg-red-600 hover:bg-red-700 rounded-2xl font-semibold transition flex items-center justify-center gap-2"
                  >
                    <XCircle size={20} /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}