import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="p-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/" className="hover:text-cyan-400 transition"><ArrowLeft size={24} /></Link>
          <h1 className="text-2xl font-black tracking-wider text-cyan-400">CHUI ELECTRONICS</h1>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-8 my-12 bg-white rounded-3xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-black text-slate-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Welcome to Chui Electronics. We are your premier destination for top-tier electronics, bridging the gap between cutting-edge technology and affordability. Whether you are looking for brand new flagship devices or rigorously tested refurbished gadgets, we have you covered.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2 inline-block">Our Guarantee</h3>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-3 text-gray-700 font-medium text-lg">
            <CheckCircle className="text-cyan-500" /> 100% Quality Assurance on all refurbished devices.
          </li>
          <li className="flex items-center gap-3 text-gray-700 font-medium text-lg">
            <CheckCircle className="text-cyan-500" /> Fast and secure countrywide delivery.
          </li>
          <li className="flex items-center gap-3 text-gray-700 font-medium text-lg">
            <CheckCircle className="text-cyan-500" /> Dedicated customer support via WhatsApp and Email.
          </li>
        </ul>

        <div className="bg-slate-50 p-6 rounded-2xl text-center border border-gray-200 mt-8">
          <p className="text-gray-500 font-bold mb-2">Ready to upgrade your tech?</p>
          <Link href="/" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-600 transition shadow-lg">
            Browse Catalog
          </Link>
        </div>
      </main>
    </div>
  );
}
