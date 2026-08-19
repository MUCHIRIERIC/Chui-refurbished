'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, MessageSquare, Info, Phone, Mail, Globe, CheckCircle, Star, ShieldAlert } from 'lucide-react';

const BACKEND_URL = 'https://chui-refurbished.onrender.com';

// --- MOCK DATA ---
const slides = [
  { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Next-Gen Tech Unveiled' },
  { type: 'image', front: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop', side: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=600&fit=crop', title: 'iPhone 15 Pro' },
  { type: 'image', front: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop', side: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&h=600&fit=crop', title: 'Samsung Galaxy S24 Ultra' },
];

const featuredCategories = [
  { name: 'Curved Screen TVs', front: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop', side: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop', gift: 'Smart Watch' },
  { name: 'Flat Screen TVs', front: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop', side: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop', gift: 'Smart Watch' },
  { name: 'Subwoofers', front: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop', side: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=400&fit=crop', gift: 'Smart Watch' },
  { name: 'Mobile Phones', front: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop', side: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop', gift: 'Smart Watch' },
  { name: 'Laptops', front: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop', side: 'https://images.unsplash.com/photo-1531297172864-45d2b78b40aa?w=400&h=400&fit=crop', gift: 'Smart Watch' },
];

const generateProducts = () => Array.from({ length: 40 }, (_, i) => ({
  _id: i + 1,
  name: `Premium Device Model ${i + 1}`,
  price: 35000 + (i * 1500),
  frontView: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=400&h=400&fit=crop',
  sideView: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
  specs: ['16GB RAM', '512GB SSD', 'OLED Display', '5000mAh Battery', '1 Year Warranty']
}));

const mockProducts = generateProducts();

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState('24:00:00');
  const [products, setProducts] = useState<any[]>(mockProducts);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [deliveryStatus, setDeliveryStatus] = useState<'pending' | 'cancelled' | 'delivered'>('pending');
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/products`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setProducts(data);
          }
        }
      } catch (error) {
        console.error('❌ Failed to fetch products from backend, using mock data:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diff = tomorrow.getTime() - now.getTime();
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (deliveryStatus === 'delivered') {
      setShowRatingModal(true);
    }
  }, [deliveryStatus]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="flex justify-between items-center p-6 bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="flex items-center space-x-4">
          <img 
            src={`${BACKEND_URL}/uploads/logo.png`} 
            alt="Logo" 
            className="w-12 h-12 rounded-full object-cover bg-white" 
            onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100&h=100&fit=crop')} 
          />
          <div>
            <h1 className="text-2xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              CHUI ELECTRONICS
            </h1>
            <p className="text-xs text-cyan-400 font-medium tracking-wide">Your premium plug for modern tech</p>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          <Link className="hover:text-cyan-400 transition flex items-center gap-1" href="/about"><Info size={18}/> About</Link>
          <Link className="hover:text-cyan-400 transition flex items-center gap-1" href="/messages"><MessageSquare size={18}/> Messages</Link>
          <Link className="hover:text-orange-400 transition flex items-center gap-1 text-orange-300" href="/admin"><ShieldAlert size={18}/> Admin</Link>
          <Link className="hover:text-cyan-400 transition font-medium bg-white/10 px-4 py-2 rounded-lg" href="/login">Login / Register</Link>
          
          <button className="relative p-2 rounded-full hover:bg-white/10 transition">
            <ShoppingCart size={24} />
            <span className="absolute top-0 right-0 bg-cyan-500 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">3</span>
          </button>
        </div>
      </nav>

      <section className="relative w-full h-[60vh] md:h-[70vh] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center overflow-hidden text-white">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 flex flex-col md:flex-row items-center justify-center gap-8 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            {slide.type === 'video' ? (
              <video src={slide.url} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-60" />
            ) : (
              <div className="flex gap-4">
                <img src={slide.front} alt={`${slide.title} Front`} className="w-48 h-auto object-contain drop-shadow-2xl hover:scale-105 transition rounded-xl" />
                <img src={slide.side} alt={`${slide.title} Side`} className="w-32 h-auto object-contain drop-shadow-2xl hover:scale-105 transition rounded-xl" />
              </div>
            )}
            <div className="z-20 text-center md:text-left bg-black/40 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl">
              <h2 className="text-5xl md:text-6xl font-black drop-shadow-2xl mb-2">{slide.title}</h2>
              <p className="text-cyan-400 font-bold mb-6">+ Free Smart Watch on every device!</p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg hover:scale-105 transition shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                Shop Collection
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto p-6 my-12">
        <h3 className="text-3xl font-bold border-b-4 border-cyan-500 pb-2 mb-8 inline-block text-slate-900">Top Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {featuredCategories.map((cat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:border-cyan-500 transition relative">
              <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10 shadow-sm">
                + Free {cat.gift}
              </span>
              <div className="flex justify-center items-center gap-2 h-32 mb-4 mt-4 bg-gray-50 rounded-lg p-2 overflow-hidden">
                <img src={cat.front} alt="Front View" className="h-full w-1/2 object-cover rounded-md" />
                <img src={cat.side} alt="Side View" className="h-full w-1/2 object-cover rounded-md opacity-80" />
              </div>
              <h4 className="text-center font-bold text-sm text-slate-800">{cat.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl text-white my-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
        <div className="mb-6 md:mb-0 flex flex-col md:flex-row items-center gap-6">
          <div className="flex gap-2">
             <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop" className="w-24 h-24 object-cover bg-white/20 rounded-xl p-1" alt="Daily Offer" />
             <img src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop" className="w-24 h-24 object-cover bg-white/20 rounded-xl p-1 opacity-80" alt="Daily Offer Side" />
          </div>
          <div>
            <h2 className="text-4xl font-black mb-2 drop-shadow-lg">Deal of the Day!</h2>
            <p className="text-xl font-medium">Sony 65" Curved 4K TV + Free Smart Watch</p>
          </div>
        </div>
        <div className="text-center bg-black/40 p-6 rounded-2xl backdrop-blur-md border border-white/20">
          <p className="text-sm font-bold mb-2 uppercase tracking-widest text-orange-200">Offer Ends In</p>
          <p className="text-5xl font-mono font-black tracking-wider">{timeLeft}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 my-12">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-3xl font-bold border-b-4 border-cyan-500 pb-2 inline-block text-slate-900">Refurbished & New Catalog</h3>
          <div className="bg-white p-2 rounded-lg shadow-sm border text-sm flex items-center gap-2">
            <span className="font-bold text-gray-500">Test Delivery Status:</span>
            <select 
              className="bg-gray-100 p-1 rounded font-bold outline-none cursor-pointer"
              value={deliveryStatus}
              onChange={(e) => setDeliveryStatus(e.target.value as 'pending' | 'cancelled' | 'delivered')}
            >
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-2xl transition-all duration-300 group relative flex flex-col justify-between">
              <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10 shadow-sm">
                + Free Smartwatch
              </span>
              
              <div className="cursor-pointer" onClick={() => setSelectedItem(product)}>
                <div className="h-44 bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden gap-2 p-2">
                  <img src={product.frontView} alt="Front" className="h-32 w-full object-cover rounded-md group-hover:scale-110 transition-transform" />
                  <img src={product.sideView} alt="Side" className="h-24 w-full object-cover rounded-md opacity-70 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm leading-tight mb-2 group-hover:text-cyan-600 transition">
                  {product.name}
                </h4>
                <span className="font-black text-lg text-slate-900 block mb-4">
                  Ksh {product.price?.toLocaleString()}
                </span>
              </div>

              <button className="w-full bg-slate-900 text-white py-3 rounded-lg text-sm font-bold hover:bg-cyan-600 transition shadow-md">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <a 
        href="https://wa.me/25768450250" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <MessageSquare size={32} />
      </a>

      <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-cyan-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-xl font-black mb-6 text-cyan-400">Contact Us</h4>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center gap-3"><Phone size={18} className="text-cyan-500"/> +257 684 50250</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-cyan-500"/> support@chuielectronics.com</p>
              <p className="flex items-center gap-3"><Globe size={18} className="text-cyan-500"/> www.chuielectronics.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-black mb-6 text-cyan-400">Payment Methods</h4>
            <div className="flex flex-col gap-4 text-gray-300 font-medium">
              <span className="flex items-center gap-3"><CheckCircle size={20} className="text-green-400"/> M-Pesa Till Number</span>
              <span className="flex items-center gap-3"><CheckCircle size={20} className="text-blue-400"/> Direct Bank Transfer</span>
              <span className="flex items-center gap-3"><CheckCircle size={20} className="text-yellow-400"/> Cash on Delivery</span>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-black mb-6 text-cyan-400">Account & Orders</h4>
            <div className="space-y-4">
              <Link href="/login" className="block text-gray-300 hover:text-white transition">Login / Register</Link>
              <Link href="/orders" className="block text-gray-300 hover:text-white transition">Track Order Status</Link>
              <div className="bg-white/10 p-4 rounded-lg mt-4 border border-white/5">
                 <p className="text-sm text-gray-400 mb-1">Current Order Status:</p>
                 <p className={`font-bold uppercase ${deliveryStatus === 'delivered' ? 'text-green-400' : deliveryStatus === 'cancelled' ? 'text-red-400' : 'text-yellow-400'}`}>
                    {deliveryStatus}
                 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm border-t border-white/10 pt-8">
          © 2026 Chui Electronics. All Rights Reserved.
        </div>
      </footer>

      {selectedItem && (
        <div className="fixed inset-0 bg-slate-900/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
          <div className="bg-white rounded-3xl max-w-3xl w-full p-8 relative flex flex-col md:flex-row gap-8 shadow-2xl" onClick={e => e.stopPropagation()}>
            <button className="absolute top-6 right-6 text-gray-400 hover:text-slate-900 font-bold text-2xl transition" onClick={() => setSelectedItem(null)}>✕</button>
            <div className="flex-1 flex gap-4 justify-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
               <img src={selectedItem.frontView} alt="Front" className="w-1/2 object-cover rounded-md drop-shadow-md" />
               <img src={selectedItem.sideView} alt="Side" className="w-1/2 object-cover rounded-md drop-shadow-md opacity-90" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-2 text-slate-900">{selectedItem.name}</h2>
              <span className="text-4xl font-black text-cyan-600 block mb-6">Ksh {selectedItem.price?.toLocaleString()}</span>
              <h3 className="font-bold border-b-2 border-gray-100 pb-2 mb-4 text-slate-800 text-lg">Specifications</h3>
              <ul className="space-y-3 mb-8">
                {selectedItem.specs?.map((spec: string, i: number) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-3 font-medium">
                    <CheckCircle size={16} className="text-cyan-500"/> {spec}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-cyan-600 transition shadow-lg">
                Confirm Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {showRatingModal && (
        <div className="fixed inset-0 bg-slate-900/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center relative shadow-2xl">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-slate-900 font-bold text-xl transition" onClick={() => setShowRatingModal(false)}>✕</button>
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">Order Delivered!</h2>
            <p className="text-gray-600 mb-6 font-medium">How was your experience with Chui Electronics?</p>
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star} 
                  onClick={() => setRating(star)}
                  className={`transition-colors ${rating >= star ? 'text-yellow-400' : 'text-gray-200 hover:text-yellow-200'}`}
                >
                  <Star size={40} fill={rating >= star ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
            <button 
              onClick={() => {
                alert('Thank you for your rating!');
                setShowRatingModal(false);
              }}
              className="w-full bg-cyan-500 text-white py-3 rounded-xl font-bold hover:bg-cyan-600 transition shadow-md disabled:opacity-50"
              disabled={rating === 0}
            >
              Submit Rating
            </button>
          </div>
        </div>
      )}
    </main>
  );
}