"use client";

import { useState, useEffect } from "react";
import { Pencil, X } from "lucide-react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { updateProfile } from "firebase/auth";

export default function ProfilePage() {
  const router = useRouter();
  const { user } = useAuth();

  const [editName, setEditName] = useState(false);
  const [name, setName] = useState("");

  const closeProfile = () => router.back();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (user?.displayName) {
      setName(user.displayName);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [user]);

  const handleSave = async () => {
    try {
      await updateProfile(user, {
        displayName: name,
      });

      setEditName(false);
      alert("Profile Updated");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  if (!user) {
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 backdrop-blur-md">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={closeProfile}
        className="absolute inset-0 bg-black/30 backdrop-blur-[10px]"
      />

      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#0c1020]/95 backdrop-blur-2xl border border-[#2a2f46] rounded-3xl p-10 shadow-2xl text-white"
      >
        {/* CLOSE */}
        <button
          onClick={closeProfile}
          className="absolute right-5 top-5 text-gray-400 hover:text-white"
        >
          <X size={22} />
        </button>

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-4">
          <img
            src={user.photoURL || "https://lens.usercontent.google.com/image?vsrid=CMuS4YzumqbmzQEQAhgBIiRlYjhhYjJlMC0zZDFhLTQ3ZWQtYWMxYS0zMTlkZDljYmFkOWIyeyICdGEoQ0JzCi5sZmUtZHVtbXk6OTAyMDRiZDAtNjE3ZC00NDJiLTk1ODQtNzhjM2E5MDg3NzRlEkEKPy9ibnMvdGEvYm9yZy90YS9ibnMvbGVucy1mcm9udGVuZC1hcGkvcHJvZC5sZW5zLWZyb250ZW5kLWFwaS81MTjf-N2YqZGVAw&gsessionid=wq3-3uV4LKqAnkigVlIQtLi5L61Rtjh9wohG12umJfOKmLZgESFIuQ"}
            alt="profile"
            className="w-28 h-28 rounded-full border-2 border-[#7b61ff]"
          />

          {!editName ? (
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">
                {user.displayName || "No Name"}
              </h1>

              <button onClick={() => setEditName(true)}>
                <Pencil size={16} className="text-gray-400 hover:text-white" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 rounded-lg bg-[#11192d] border border-[#2d3148] text-white outline-none text-center"
              />

              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="px-4 py-1 rounded-lg bg-green-500 text-black font-semibold"
                >
                  Save
                </button>

                <button
                  onClick={() => setEditName(false)}
                  className="px-4 py-1 rounded-lg bg-red-500 text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <p className="text-gray-400">{user.email}</p>
        </div>

        {/* INFO */}
        <div className="mt-10 space-y-4">
          <div className="bg-[#11192d] p-5 rounded-xl flex justify-between">
            <span className="text-gray-400">Name</span>
            <span>{user.displayName || "No Name"}</span>
          </div>

          <div className="bg-[#11192d] p-5 rounded-xl flex justify-between">
            <span className="text-gray-400">Email</span>
            <span>{user.email}</span>
          </div>

          <div className="bg-[#11192d] p-5 rounded-xl flex justify-between">
            <span className="text-gray-400">Account Type</span>
            <span className="text-green-400">
              {user.providerData?.[0]?.providerId === "google.com"
                ? "Google"
                : "Email"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}