"use client";

import { useEffect, useState } from "react";

export default function WhyChoose() {
  // ================= FEATURES =================
  const features = [
    {
      title: "Smart Discovery",
      desc: "Advanced semantic search to find exactly the prompt you need.",
      icon: "✨",
    },
    {
      title: "Premium Collection",
      desc: "Every prompt is tested and verified for consistent quality.",
      icon: "⚙️",
    },
    {
      title: "Creator Economy",
      desc: "Best-in-class revenue share for prompt engineers.",
      icon: "💰",
    },
    {
      title: "Secure Marketplace",
      desc: "Secure transactions for buyers and sellers.",
      icon: "🛡️",
    },
  ];

  // ================= CREATORS =================
  const [showAllCreators, setShowAllCreators] = useState(false);

  const creators = [
    {
      name: "Alex Rivers",
      role: "#1 Artist",
      prompts: 128,
      sales: "12.5k",
      img: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Marcus Chen",
      role: "#1 Developer",
      prompts: 94,
      sales: "8.2k",
      img: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Saria Vane",
      role: "Visual Specialist",
      prompts: 210,
      sales: "6.1k",
      img: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "John David",
      role: "Strategy Expert",
      prompts: 45,
      sales: "5.4k",
      img: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const extraCreators = [
    {
      name: "Sophia Lee",
      role: "Prompt Engineer",
      prompts: 167,
      sales: "9.1k",
      img: "https://i.pravatar.cc/150?img=20",
    },
    {
      name: "Michael Ross",
      role: "AI Strategist",
      prompts: 82,
      sales: "7.3k",
      img: "https://i.pravatar.cc/150?img=18",
    },
    {
      name: "Emma Watson",
      role: "Content Creator",
      prompts: 143,
      sales: "6.7k",
      img: "https://i.pravatar.cc/150?img=25",
    },
    {
      name: "Noah Smith",
      role: "Marketing Expert",
      prompts: 91,
      sales: "5.9k",
      img: "https://i.pravatar.cc/150?img=41",
    },
  ];

  // ================= TESTIMONIAL SLIDER =================
  const testimonials = [
    {
      text:
        "As a creator, the platform gives me everything I need to reach a global audience. The revenue split is fair, and the community is incredibly supportive.",
      name: "David Chen",
      role: "Freelance Digital Artist",
    },
    {
      text:
        "PromptForge completely changed how I monetize my AI expertise. The audience quality is amazing.",
      name: "Sarah Wilson",
      role: "AI Consultant",
    },
    {
      text:
        "The marketplace is clean, secure and attracts serious buyers. My sales increased dramatically.",
      name: "Marcus Brown",
      role: "Prompt Engineer",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-[#050816] py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">

        {/* ================= WHY CHOOSE ================= */}
        <div className="bg-[#0b1020] border border-[#1f2336] rounded-2xl p-8 md:p-12">
          <h2 className="text-center text-white text-3xl md:text-5xl font-bold">
            Why Choose PromptForge
          </h2>

          <p className="text-center text-gray-400 mt-4">
            We're building the infrastructure for the generative AI era.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-[#0d1430] border border-[#1f2336] rounded-xl p-6"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TOP CREATORS ================= */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-2xl font-bold">
              Top Creators
            </h2>

            <button
              onClick={() => setShowAllCreators(!showAllCreators)}
              className="text-[#b18cff]"
            >
              {showAllCreators ? "Hide Rankings" : "View Rankings →"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...creators, ...(showAllCreators ? extraCreators : [])].map(
              (creator, i) => (
                <div
                  key={i}
                  className="bg-[#0b1020] border border-[#1f2336] rounded-xl p-6 text-center hover:scale-[1.02] transition"
                >
                  {/* IMAGE */}
                  <div className="flex justify-center">
                    <img
                      src={creator.img}
                      alt={creator.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-[#b18cff]"
                    />
                  </div>

                  <h3 className="text-white font-semibold mt-4">
                    {creator.name}
                  </h3>

                  <p className="text-[#b18cff] text-sm">
                    {creator.role}
                  </p>

                  <div className="flex justify-between mt-6 text-sm">
                    <div>
                      <h4 className="text-white font-bold">
                        {creator.prompts}
                      </h4>
                      <p className="text-gray-500">PROMPTS</p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold">
                        {creator.sales}
                      </h4>
                      <p className="text-gray-500">SALES</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* ================= TESTIMONIAL SLIDER ================= */}
        <div className="mt-20 bg-[#0b1020] border border-[#1f2336] rounded-2xl p-10 md:p-16 text-center overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="text-5xl text-[#b18cff] mb-6">❝</div>
                <p className="text-white text-xl italic max-w-3xl mx-auto">
                  {item.text}
                </p>
                <h3 className="text-white font-semibold mt-8">
                  {item.name}
                </h3>
                <p className="text-[#b18cff] text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}