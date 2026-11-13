import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#1f1712] text-[#f5f2ed] min-h-screen pt-36 pb-24 px-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="p-10 md:p-14 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md mb-8">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Error 404 — Page Not Found
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-[#f5f2ed] tracking-tighter mb-4">
            4<span className="text-gold">0</span>4
          </h1>

          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[#f5f2ed] mb-4">
            The page you are looking for does not exist
          </h2>

          <p className="text-sm md:text-base text-[#f5f2ed]/60 max-w-lg mx-auto leading-relaxed mb-10">
            The link you clicked may be broken, outdated, or the page may have been moved as part of our platform restructuring.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-black font-bold text-xs uppercase tracking-widest hover:bg-[#cdaa6d] transition-colors"
            >
              <Home className="w-4 h-4" /> Return to Home
            </Link>
            <Link
              to="/engineering"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-colors"
            >
              Engineering Pillar
            </Link>
            <Link
              to="/education"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-colors"
            >
              Education Pillar
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[#f5f2ed]/80 font-bold text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
