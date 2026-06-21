"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";

export default function PromptsPage() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPrompts = async () => {
    try {
      const res = await fetch("/api/prompts");
      const data = await res.json();
      setPrompts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  const handleApprove = async (id) => {
    try {
      await fetch(`/api/prompts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "approved",
        }),
      });

      fetchPrompts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (id) => {
    try {
      await fetch(`/api/prompts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "rejected",
        }),
      });

      fetchPrompts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Manage Prompts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : prompts.length === 0 ? (
        <p>No prompts found</p>
      ) : (
        <div className="space-y-4">
          {prompts.map((prompt) => (
            <div
              key={prompt._id}
              className="bg-[#11192d] p-5 rounded-xl"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-lg">
                    {prompt.title}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Category: {prompt.category}
                  </p>

                  <p className="text-gray-400 text-sm">
                    Creator: {prompt.creatorName}
                  </p>

                  <p className="mt-2">
                    Status:{" "}
                    <span
                      className={
                        prompt.status === "approved"
                          ? "text-green-400"
                          : prompt.status === "rejected"
                          ? "text-red-400"
                          : "text-yellow-400"
                      }
                    >
                      {prompt.status || "pending"}
                    </span>
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(prompt._id)}
                    className="px-4 py-2 bg-green-500 rounded-lg"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleReject(prompt._id)}
                    className="px-4 py-2 bg-red-500 rounded-lg"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}