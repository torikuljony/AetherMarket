"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

export default function RegisterModal() {
  const router = useRouter();
  const { googleLogin } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    router.push("/");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(result.user, {
        displayName: name,
      });

      alert("Registration Successful");
      closeModal();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await googleLogin();
      closeModal();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-md rounded-3xl border border-[#2a2f46] bg-[#0d1120] p-8 text-white shadow-2xl"
      >
        {/* CLOSE */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={22} />
        </button>

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center">
          Create Account
        </h2>

        {/* FORM */}
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

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-[#d8c3ff] text-black font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-[1px] bg-[#2a2f46]" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-[#2a2f46]" />
        </div>

        {/* GOOGLE */}
        <button
          onClick={handleGoogleRegister}
          className="w-full h-12 rounded-xl bg-white flex items-center justify-center gap-3 font-semibold text-black border border-gray-200 hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} />
          <span className="text-[15px]">
            Continue with Google
          </span>
        </button>

        {/* LOGIN LINK */}
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