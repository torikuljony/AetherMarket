"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LoginModal from "../Auth/LoginModal";

import {
  Search,
  Bell,
  Bookmark,
  LogIn,
  LogOut,
  User,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

import { auth } from "@/firebase/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ REAL AUTH STATE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // ✅ LOGOUT
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMobileMenu(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <nav className="w-full border-b border-[#1f2336] bg-[#050816]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-[72px]">

          {/* LEFT */}
          <div className="flex items-center gap-8">

            {/* LOGO */}
            <Link href="/">
              <h1 className="text-[22px] font-bold text-[#d8c3ff]">
                AetherMarket
              </h1>
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-8 text-[15px] font-semibold">
              <li>
                <Link href="/" className="text-[#d8c3ff]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/marketplace" className="text-[#a5a8bb] hover:text-white">
                  All Prompts
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* SEARCH */}
            <div className="hidden lg:flex items-center gap-3 w-[280px] h-11 rounded-full border border-[#2d3148] bg-[#0c1020] px-5">
              <Search size={18} className="text-[#8d92a7]" />
              <input
                type="text"
                placeholder="Search prompts..."
                className="w-full bg-transparent outline-none text-white"
              />
            </div>

            <button className="text-[#b2b6cb] hover:text-white">
              <Bell size={20} />
            </button>

            <button className="text-[#b2b6cb] hover:text-white">
              <Bookmark size={20} />
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white"
            >
              {mobileMenu ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* AUTH (DESKTOP) */}
            {!user ? (
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  className="hidden md:flex h-10 px-5 rounded-full border border-[#7b61ff] text-[#d8c3ff] items-center gap-2"
                >
                  <LogIn size={18} />
                  Login
                </button>

                <Link href="/profile">
                  <button className="hidden md:flex w-10 h-10 rounded-full border border-[#2d3148] bg-[#0c1020] items-center justify-center text-[#777c91]">
                    <User size={18} />
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard">
                  <button className="hidden md:flex h-10 px-4 rounded-full border border-[#7b61ff] text-[#d8c3ff] items-center gap-2">
                    <LayoutDashboard size={18} />
                    Dashboard
                  </button>
                </Link>

                <Link href="/profile">
                  <button className="hidden md:flex w-10 h-10 rounded-full overflow-hidden border border-[#2d3148] bg-[#0c1020]">
                    <img
                      src={
                        user?.photoURL ||
                        "https://lh3.googleusercontent.com/a/default-user"
                      }
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </button>
                </Link>

                <button
                  onClick={handleLogout}
                  className="hidden md:flex h-10 px-5 rounded-full border border-red-400 text-red-400 items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden bg-[#0c1020] border-t border-[#1f2336] px-6 py-4 space-y-4">

            <Link href="/" className="block text-[#d8c3ff]">
              Home
            </Link>

            <Link href="/marketplace" className="block text-[#a5a8bb]">
              All Prompts
            </Link>

            {user && (
              <>
                <Link href="/dashboard" className="block text-[#a5a8bb]">
                  Dashboard
                </Link>

                <Link href="/profile" className="block text-[#a5a8bb]">
                  Profile
                </Link>
              </>
            )}

            <hr className="border-[#1f2336]" />

            {!user ? (
              <button
                onClick={() => setShowLogin(true)}
                className="w-full h-10 rounded-full border border-[#7b61ff] text-[#d8c3ff]"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full h-10 rounded-full border border-red-400 text-red-400"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>

      {/* LOGIN MODAL */}
      {showLogin && <LoginModal setShowLogin={setShowLogin} />}
    </>
  );
}