import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Navigation & Logo Div */}
      <nav className="flex justify-between items-center p-6 bg-black/30 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          {/* Logo container */}
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            CE
          </div>
          <h1 className="text-2xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            CHUI ELECTRONICS
          </h1>
        </div>

        <div className="flex space-x-6 items-center">
          <Link className="hover:text-cyan-400 transition" href="/login">
            Login / Register
          </Link>
          <button className="relative p-2 rounded-full hover:bg-white/10 transition">
            <ShoppingCart size={24} />
            <span className="absolute top-0 right-0 bg-cyan-500 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              3
            </span>
          </button>
        </div>
      </nav>

      {/* Dynamic Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="z-10 text-center space-y-6">
          <h2 className="text-5xl md:text-7xl font-black drop-shadow-2xl">
            Modern Tech. Unbeatable Prices.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Refurbished & New Phones, Laptops, TVs, and Audio Systems.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg hover:scale-105 transition shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            Shop Flash Sales
          </button>
        </div>
      </section>

      {/* Product Catalog Display */}
      <section className="max-w-7xl mx-auto p-6 my-12">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-3xl font-bold border-b-4 border-cyan-500 pb-2">
            Latest Products
          </h3>
          <div className="text-right">
            <p className="text-sm text-cyan-400 font-bold mb-1">
              Weekend Flash Sale Ends In:
            </p>
            <p className="text-2xl font-mono bg-black/50 px-4 py-2 rounded-lg">
              48:12:05
            </p>
          </div>
        </div>

        <ProductGrid />
      </section>
    </main>
  );
}