import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import LoginModal from "@/components/Auth/LoginModal";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-[#050816]">

      <Navbar />

      <div className="blur-sm pointer-events-none">
        <Hero />
      </div>

      <LoginModal />
    </main>
  );
}