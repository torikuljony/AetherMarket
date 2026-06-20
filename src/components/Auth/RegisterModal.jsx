"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "@/hooks/useAuth";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { useRouter } from "next/navigation";

export default function RegisterModal({ setShowRegister }) {
  const { googleLogin } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    if (setShowRegister) {
      setShowRegister(false);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Save User to MongoDB
  const saveUserToDB = async (userData) => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log("DB Response:", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // Register with Email
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields required");
      return;
    }

    if (password.length < 6) {
      alert("Password minimum 6 characters");
      return;
    }

    setLoading(true);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(result.user, {
        displayName: name,
      });

      await saveUserToDB({
        uid: result.user.uid,
        name,
        email,
        role,
        image: "",
      });

      alert("Registration Successful");

      if (role === "creator") {
        router.push("/dashboard/creator");
      } else {
        router.push("/dashboard/user");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Register
  const handleGoogleRegister = async () => {
    setLoading(true);

    try {
      const result = await googleLogin();

      await saveUserToDB({
        uid: result.user.uid,
        name: result.user.displayName || "User",
        email: result.user.email,
        role,
        image: result.user.photoURL || "",
      });

      if (role === "creator") {
        router.push("/dashboard/creator");
      } else {
        router.push("/dashboard/user");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
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
        className="relative z-10 w-full max-w-md rounded-3xl border border-[#2a2f46] bg-[#0d1120] p-8 text-white shadow-2xl"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={22} />
        </button>

        <h2 className="text-3xl font-bold text-center">Create Account</h2>

        <form onSubmit={handleRegister} className="mt-8 space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full h-12 rounded-xl bg-[#14192d] border border-[#2a2f46] px-4 text-white outline-none"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full h-12 rounded-xl bg-[#14192d] border border-[#2a2f46] px-4 text-white outline-none"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full h-12 rounded-xl bg-[#14192d] border border-[#2a2f46] px-4 text-white outline-none"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full h-12 rounded-xl bg-[#14192d] border border-[#2a2f46] px-4 text-white outline-none"
          >
            <option value="user">Standard User</option>
            <option value="creator">Creator</option>
          </select>

          <button
            disabled={loading}
            type="submit"
            className="w-full h-12 rounded-xl bg-[#d8c3ff] text-black font-semibold disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-[1px] bg-[#2a2f46]" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-[#2a2f46]" />
        </div>

        <button
          disabled={loading}
          onClick={handleGoogleRegister}
          className="w-full h-12 rounded-xl bg-white flex items-center justify-center gap-3 font-semibold text-black"
        >
          <FcGoogle size={22} />
          {loading ? "Please wait..." : "Continue with Google"}
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[#d8c3ff] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}