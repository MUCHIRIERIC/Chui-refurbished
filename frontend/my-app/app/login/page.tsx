'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative">
        <Link href="/" className="absolute top-6 left-6 text-gray-400 hover:text-cyan-500 transition">
          <ArrowLeft size={24} />
        </Link>
        
        <div className="text-center mb-8 mt-4">
          <h1 className="text-3xl font-black text-slate-900 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-500 font-medium">
            {isLogin ? 'Sign in to access your orders and cart.' : 'Join Chui Electronics today.'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-cyan-500 font-medium" />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-cyan-500 font-medium" />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input type="password" placeholder="Password" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-cyan-500 font-medium" />
          </div>

          <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-cyan-600 transition shadow-lg mt-6">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600 font-medium">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-cyan-600 font-bold hover:underline">
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
}
