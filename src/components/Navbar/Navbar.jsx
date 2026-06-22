"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoginModal from "../Auth/LoginModal";
import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";
import { usePathname } from "next/navigation";
import {
  LogIn,
  LogOut,
  LayoutDashboard,
  Menu,
  X,
  Sparkles,
  Gem,
} from "lucide-react";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user, logOut } = useAuth();
  const role = useRole();
  const pathname = usePathname();

  const getDashboardRoute = () => {
    if (role === "admin") return "/dashboard/admin";
    if (role === "creator") return "/dashboard/creator";
    return "/dashboard/user";
  };

  const handleLogout = async () => {
    try {
      await logOut();
      setMobileMenu(false);
    } catch (error) {
      console.log(error);
    }
  };

  const closeLogin = () => setShowLogin(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-[#1f2336] bg-[#050816]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-6 h-[72px]">
          {/* Logo with Sparkle + PRO Badge */}
          <Link href="/" className="flex items-center gap-2.5">
            <Sparkles className="w-8 h-8 text-[#a78bff]" />
            <div className="flex items-center gap-3">
              <h1 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#d8c3ff]">
                AetherMarket
              </h1>
              {user?.membership === "pro" && (
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold text-[10px]">
                  <Gem size={12} />
                  PRO
                </div>
              )}
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <ul className="hidden md:flex items-center gap-8 text-[15px] font-semibold">
              <li>
                <Link
                  href="/"
                  className={
                    pathname === "/"
                      ? "text-[#d8c3ff]"
                      : "text-[#a5a8bb] hover:text-white transition"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className={
                    pathname === "/marketplace"
                      ? "text-[#d8c3ff]"
                      : "text-[#a5a8bb] hover:text-white transition"
                  }
                >
                  All Prompts
                </Link>
              </li>
            </ul>

            {/* ✅ Added PRO Button Here */}
            {/* <Link href="/pro">
              <button className="hidden md:flex h-10 px-4 rounded-full bg-cyan-400 text-black font-bold">
                PRO
              </button>
            </Link> */}

            {!user ? (
              <button
                onClick={() => setShowLogin(true)}
                className="hidden md:flex h-10 px-5 rounded-full border border-[#7b61ff] text-[#d8c3ff] items-center gap-2 hover:bg-[#7b61ff]/10 transition"
              >
                <LogIn size={18} />
                Login
              </button>
            ) : (
              <>
                <Link href={getDashboardRoute()}>
                  <button className="hidden md:flex h-10 px-4 rounded-full border border-[#7b61ff] text-[#d8c3ff] items-center gap-2 hover:bg-[#7b61ff]/10 transition">
                    <LayoutDashboard size={18} />
                    Dashboard
                  </button>
                </Link>
                <Link href="/profile">
                  <img
                    src={
                      user?.photoURL ||
                      `https://ui-avatars.com/api/?name=${
                        user?.displayName || "User"
                      }`
                    }
                    alt="profile"
                    className="hidden md:block w-10 h-10 rounded-full object-cover border border-[#2d3148]"
                  />
                </Link>
                <button
                  onClick={handleLogout}
                  className="hidden md:flex h-10 px-5 rounded-full border border-red-400 text-red-400 items-center gap-2 hover:bg-red-500/10 transition"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            )}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white"
            >
              {mobileMenu ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden absolute top-[72px] left-0 w-full bg-[#0c1020] border-t border-[#1f2336] z-50">
            <div className="px-6 py-5">
              <div className="flex flex-col gap-4 text-[#a5a8bb] font-medium">
                <Link href="/" onClick={() => setMobileMenu(false)} className="hover:text-white transition">
                  Home
                </Link>
                <Link href="/marketplace" onClick={() => setMobileMenu(false)} className="hover:text-white transition">
                  All Prompts
                </Link>
                {user && (
                  <>
                    <Link href={getDashboardRoute()} onClick={() => setMobileMenu(false)} className="hover:text-white transition">
                      Dashboard
                    </Link>
                    <Link href="/profile" onClick={() => setMobileMenu(false)} className="hover:text-white transition">
                      Profile
                    </Link>
                  </>
                )}
              </div>

              {!user ? (
                <button
                  onClick={() => { setShowLogin(true); setMobileMenu(false); }}
                  className="mt-5 w-full h-11 rounded-full border border-[#7b61ff] text-[#d8c3ff]"
                >
                  Login
                </button>
              ) : (
                <button onClick={handleLogout} className="mt-5 w-full h-11 rounded-full border border-red-400 text-red-400">
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {showLogin && (
        <LoginModal setShowLogin={setShowLogin} closeModal={closeLogin} />
      )}
    </>
  );
}