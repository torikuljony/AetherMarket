"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

export default function LoginModal() {
  const router = useRouter();
  const { googleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    router.push("/");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const saveUserToDB = async (userData) => {
    try {
      await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserRole = async (email) => {
    try {
      const res = await fetch(`/api/users/${email}`);
      const data = await res.json();
      return data?.role || "user";
    } catch (error) {
      console.log(error);
      return "user";
    }
  };

  const redirectDashboard = (role) => {
    if (role === "admin") {
      router.push("/dashboard/admin");
    } else if (role === "creator") {
      router.push("/dashboard/creator");
    } else {
      router.push("/dashboard/user");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();

      await saveUserToDB({
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        image: result.user.photoURL,
        role: "user",
      });

      const role = await getUserRole(result.user.email);
      redirectDashboard(role);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const role = await getUserRole(result.user.email);

      alert("Login Successful");
      redirectDashboard(role);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-[100000] w-full max-w-md rounded-3xl border border-[#2a2f46] bg-[#0d1120] p-8 shadow-2xl text-white"
      >
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={22} />
        </button>

        <h2 className="text-center text-3xl font-bold">
          Welcome Back
        </h2>

        <p className="mt-2 text-center text-gray-400">
          Login to your account
        </p>

        <button
          onClick={handleGoogleLogin}
          className="mt-6 w-full h-12 flex items-center justify-center gap-3 rounded-xl bg-white text-black font-semibold"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="google"
          />
          Sign in with Google
        </button>

        <div className="flex items-center gap-3 my-6">
          <div className="h-[1px] flex-1 bg-[#2a2f46]" />
          <span className="text-gray-500 text-sm">OR</span>
          <div className="h-[1px] flex-1 bg-[#2a2f46]" />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            className="h-12 w-full rounded-xl border border-[#2a2f46] bg-[#14192d] px-4 text-white outline-none"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="h-12 w-full rounded-xl border border-[#2a2f46] bg-[#14192d] px-4 text-white outline-none"
          />

          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-[#d8c3ff] font-semibold text-black"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#d8c3ff] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}