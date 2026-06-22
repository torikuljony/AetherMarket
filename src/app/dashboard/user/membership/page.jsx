import Link from "next/link";

export default function MembershipPage() {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Membership
      </h1>

      <Link href="/pro">
        <button className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold">
          Upgrade To PRO
        </button>
      </Link>
    </div>
  );
}