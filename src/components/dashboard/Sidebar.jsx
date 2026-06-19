import Link from "next/link";
import { LayoutDashboard, Plus, HelpCircle, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-72 bg-[#0a0e1a] border-r border-[#1f2336] h-screen flex flex-col fixed overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-[#1f2336]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-violet-600 rounded-xl flex items-center justify-center text-2xl">
            ⚡
          </div>
          <div>
            <h1 className="text-xl font-bold">Creator Hub</h1>
            <p className="text-xs text-gray-400">MANAGE YOUR AI ASSETS</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#7b61ff] text-white rounded-2xl font-medium">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link href="/my-prompts" className="flex items-center gap-3 px-4 py-3 text-[#a5a8bb] hover:bg-[#1f2336] rounded-2xl">
          📋 My Prompts
        </Link>
        <Link href="/earnings" className="flex items-center gap-3 px-4 py-3 text-[#a5a8bb] hover:bg-[#1f2336] rounded-2xl">
          💰 Earnings
        </Link>
        <Link href="/analytics" className="flex items-center gap-3 px-4 py-3 text-[#a5a8bb] hover:bg-[#1f2336] rounded-2xl">
          📈 Analytics
        </Link>
        <Link href="/reviews" className="flex items-center gap-3 px-4 py-3 text-[#a5a8bb] hover:bg-[#1f2336] rounded-2xl">
          ⭐ Reviews
        </Link>
        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-[#a5a8bb] hover:bg-[#1f2336] rounded-2xl">
          ⚙️ Settings
        </Link>
      </nav>

      {/* New Prompt */}
      <div className="px-4 pb-4">
        <Link href="/new-prompt" className="w-full bg-[#7b61ff] hover:bg-violet-600 py-3 rounded-2xl flex items-center justify-center gap-2 font-medium">
          <Plus size={20} /> New Prompt
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-[#1f2336] text-sm text-gray-400">
        <a href="#" className="flex items-center gap-2 px-4 py-2 hover:text-white rounded-xl">
          <HelpCircle size={18} /> Help Center
        </a>
        <a href="#" className="flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 rounded-xl">
          <LogOut size={18} /> Logout
        </a>
      </div>
    </div>
  );
}