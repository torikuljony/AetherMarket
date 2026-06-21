"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("/api/all-users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (email, role) => {
    await fetch("/api/users/update-role", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, role }),
    });

    fetchUsers();
  };

  const deleteUser = async (email) => {
    await fetch("/api/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    fetchUsers();
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-[#2a2f46]">
          <thead className="bg-[#14192d]">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t border-[#2a2f46]">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => updateRole(user.email, "admin")}
                    className="px-3 py-1 bg-blue-500 rounded"
                  >
                    Admin
                  </button>

                  <button
                    onClick={() => updateRole(user.email, "creator")}
                    className="px-3 py-1 bg-green-500 rounded"
                  >
                    Creator
                  </button>

                  <button
                    onClick={() => deleteUser(user.email)}
                    className="px-3 py-1 bg-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}