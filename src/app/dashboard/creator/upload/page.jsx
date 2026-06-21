"use client";

import { useState } from "react";
import { Upload, Sparkles } from "lucide-react";

export default function UploadPrompt() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    difficulty: "Beginner",
    image: "",
    category: "Writing",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/prompts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          creatorEmail: "creator@gmail.com", // পরে useAuth থেকে নিবি
          creatorName: "Creator User",
          status: "pending",
          sales: 0,
          rating: 0,
          reviews: 0,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("🎉 Prompt Uploaded Successfully!");
      } else {
        alert(data.message || "Upload failed");
      }

      // Reset form
      setFormData({
        title: "",
        description: "",
        price: "",
        difficulty: "Beginner",
        image: "",
        category: "Writing",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Sparkles className="w-10 h-10 text-[#d8c3ff]" />
          <div>
            <h1 className="text-4xl font-bold">Upload New Prompt</h1>
            <p className="text-gray-400 mt-1">Share your prompt with the community</p>
          </div>
        </div>

        <div className="bg-[#11192d] border border-[#2a2f46] rounded-3xl p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
           
            {/* Title */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Prompt Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Ultimate Midjourney Cinematic Prompt"
                className="w-full h-14 px-6 bg-[#1a2338] border border-[#2a2f46] rounded-2xl focus:outline-none focus:border-[#7b61ff] text-lg"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe what this prompt does and why it's valuable..."
                className="w-full h-40 px-6 py-5 bg-[#1a2338] border border-[#2a2f46] rounded-2xl focus:outline-none focus:border-[#7b61ff] resize-y"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Price ($)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0 for Free"
                  className="w-full h-14 px-6 bg-[#1a2338] border border-[#2a2f46] rounded-2xl focus:outline-none focus:border-[#7b61ff]"
                />
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Difficulty</label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="w-full h-14 px-6 bg-[#1a2338] border border-[#2a2f46] rounded-2xl focus:outline-none focus:border-[#7b61ff]"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Preview Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                className="w-full h-14 px-6 bg-[#1a2338] border border-[#2a2f46] rounded-2xl focus:outline-none focus:border-[#7b61ff]"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-14 px-6 bg-[#1a2338] border border-[#2a2f46] rounded-2xl focus:outline-none focus:border-[#7b61ff]"
              >
                <option value="Writing">Writing</option>
                <option value="Marketing">Marketing</option>
                <option value="Image Generation">Image Generation</option>
                <option value="Coding">Coding</option>
                <option value="Productivity">Productivity</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-16 mt-6 bg-gradient-to-r from-[#7b61ff] to-[#a78bff] hover:from-[#8b72ff] hover:to-[#b38cff] text-black font-bold text-xl rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-70"
            >
              <Upload size={24} />
              {loading ? "Uploading..." : "Upload Prompt"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}