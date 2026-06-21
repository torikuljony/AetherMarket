"use client";

import { useEffect, useState } from "react";
import useAuth from "./useAuth";

export default function useRole() {
  const { user } = useAuth();
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    const fetchRole = async () => {
      try {
        const res = await fetch(`/api/users?email=${user.email}`);
        const data = await res.json();

        setRole(data?.role || "user");
      } catch (error) {
        console.log(error);
      }
    };

    fetchRole();
  }, [user]);

  return role;
}