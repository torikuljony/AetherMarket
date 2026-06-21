import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import FooterWrapper from "@/components/Footer/FooterWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AetherMarket",
  description: "AI Prompt Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-screen bg-[#050816] text-white antialiased overflow-x-hidden">
        <AuthProvider>
          <div className="relative min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>

            <FooterWrapper />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}