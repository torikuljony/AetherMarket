"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import useAuth from "@/hooks/useAuth";

export default function PurchasesPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`/api/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Purchase History</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-[#11192d] p-5 rounded-xl"
          >
            <h2 className="text-xl font-semibold">
              {order.promptTitle}
            </h2>
            <p className="text-gray-400">${order.price}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}