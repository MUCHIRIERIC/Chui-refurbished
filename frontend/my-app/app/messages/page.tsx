'use client';

import Link from 'next/link';
import { ArrowLeft, Send, Phone, Mail } from 'lucide-react';

export default function Messages() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="p-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Link href="/" className="hover:text-cyan-400 transition"><ArrowLeft size={24} /></Link>
          <h1 className="text-2xl font-black tracking-wider text-cyan-400">CHUI ELECTRONICS</h1>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Info Side */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center">
          <h2 className="text-4xl font-black mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8 font-medium">Have a question about an order or a product? Send us a message directly or reach out through our channels below.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full"><Phone className="text-cyan-400" /></div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Call / WhatsApp</p>
                <p className="text-xl font-bold">+257 684 50250</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full"><Mail className="text-cyan-400" /></div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Email Support</p>
                <p className="text-xl font-bold">support@chuielectronics.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form Side */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-500" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-500" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
              <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-500 resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full bg-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-cyan-600 transition shadow-lg flex justify-center items-center gap-2 mt-4">
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}
