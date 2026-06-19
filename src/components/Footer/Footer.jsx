"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#070A1A] text-gray-300 pt-16 pb-8 px-6 border-t border-white/10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-white text-xl font-bold">AetherMarket</h2>

          <p className="text-sm mt-4 text-gray-400 leading-relaxed">
            The definitive hub for AI prompt engineering. Empowering creators
            and developers to unlock the full potential of artificial intelligence.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10"
            >
              <FaFacebook size={16} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10"
            >
              <FaTwitter size={16} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10"
            >
              <FaLinkedin size={16} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-white font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/marketplace">Marketplace</Link></li>
            <li><Link href="/trending">Trending Now</Link></li>
            <li><Link href="/creator">Creator Program</Link></li>
            <li><Link href="/enterprise">Enterprise</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/docs">Documentation</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2024 AetherMarket AI. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <Link href="/status">Status</Link>
          <Link href="/changelog">Changelog</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>

    </footer>
  );
}