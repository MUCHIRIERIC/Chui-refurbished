'use client';

import { useState, FormEvent } from 'react';

export default function AddProduct() {
  // Explicitly tell TypeScript that file can be a File or null
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      alert('Please select an image file before submitting.');
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append('image', file);

    try {
      // API call to save product details and upload image
      // await fetch('/api/products', { method: 'POST', body: formData });
      alert('Product added to Chui Electronics database!');
    } catch (error) {
      console.error('Failed to publish product:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-4 text-cyan-400">
          Admin: Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-black/30 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Price (Ksh)</label>
              <input
                type="number"
                name="price"
                required
                className="w-full bg-black/30 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Category</label>
            <select
              name="category"
              className="w-full bg-black/30 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none"
            >
              <option value="Phone">Phone</option>
              <option value="Laptop">Laptop</option>
              <option value="TV">TV</option>
              <option value="Subwoofer">Subwoofer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Upload Image from Device</label>
            <input
              type="file"
              accept="image/*"
              // Safe optional chaining for TypeScript
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full bg-black/30 border border-gray-700 rounded-lg p-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 transition"
            />
          </div>

          <div className="flex items-center space-x-3 mt-4">
            <input
              type="checkbox"
              name="isDailyOffer"
              id="dailyOffer"
              className="w-5 h-5 accent-cyan-500"
            />
            <label htmlFor="dailyOffer">Set as Daily Offer</label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-lg font-bold text-lg mt-6 hover:opacity-90 transition"
          >
            Publish to Store
          </button>
        </form>
      </div>
    </div>
  );
}