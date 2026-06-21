"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders/all")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">All Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-[#11192d] p-5 rounded-xl"
          >
            <h2 className="font-bold text-lg">
              {order.promptTitle}
            </h2>

            <p className="text-gray-400">
              Buyer: {order.buyerName}
            </p>

            <p className="text-gray-400">
              Email: {order.buyerEmail}
            </p>

            <p className="text-[#d8c3ff] font-semibold mt-2">
              ${order.price}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}