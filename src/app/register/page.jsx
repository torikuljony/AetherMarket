import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import RegisterModal from "@/components/Auth/RegisterModal";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen bg-[#050816]">

      <Navbar />

      <div className="blur-sm pointer-events-none">
        <Hero />
      </div>

      <RegisterModal />
    </main>
  );
}