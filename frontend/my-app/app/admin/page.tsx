'use client';

import Link from 'next/link';
import { Package, Users, ShoppingBag, ArrowLeft, PlusCircle } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-black text-cyan-400 mb-8">Admin Panel</h2>
        <nav className="space-y-4 font-medium text-gray-300">
          <Link href="/" className="flex items-center gap-3 hover:text-cyan-400 transition"><ArrowLeft size={20}/> Back to Site</Link>
          <div className="h-px bg-white/10 my-4"></div>
          <a href="#" className="flex items-center gap-3 text-cyan-400"><ShoppingBag size={20}/> Dashboard</a>
          <a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition"><Package size={20}/> Manage Products</a>
          <a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition"><Users size={20}/> Customers</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">Dashboard Overview</h1>
          <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-cyan-600 transition">
            <PlusCircle size={20} /> Add New Product
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-t-4 border-t-cyan-500">
            <p className="text-gray-500 font-bold text-sm mb-1">Total Revenue</p>
            <h3 className="text-3xl font-black text-slate-900">Ksh 450,000</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-t-4 border-t-orange-500">
            <p className="text-gray-500 font-bold text-sm mb-1">Pending Orders</p>
            <h3 className="text-3xl font-black text-slate-900">12</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-t-4 border-t-green-500">
            <p className="text-gray-500 font-bold text-sm mb-1">Total Products</p>
            <h3 className="text-3xl font-black text-slate-900">40</h3>
          </div>
        </div>

        {/* Recent Orders Placeholder */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Recent Orders</h3>
          <p className="text-gray-500 font-medium">No recent orders to display yet. Connect your backend API to fetch real data.</p>
        </div>
      </main>
    </div>
  );
}
