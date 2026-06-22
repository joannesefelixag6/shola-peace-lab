import React, { useState } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../lab_4.jpeg';

export default function Navbar({ onBook }: { onBook: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'BLOG', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#footer' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-100 rounded-full flex items-center justify-center cursor-pointer overflow-hidden p-1 shadow-sm hover:border-primary-green transition-all" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
               src={logoImg} 
               alt="Shola-Peace Logo" 
               className="w-full h-full object-contain rounded-full"
               referrerPolicy="no-referrer"
            />
          </div>
          <div className="cursor-pointer font-display" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <h1 className="text-2xl md:text-3xl font-extrabold text-primary-green leading-none tracking-tight">SHOLA-PEACE</h1>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Diagnostic & Medical Laboratory</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-gray-600 hover:text-primary-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBook}
            className="bg-primary-green text-white px-6 py-2.5 rounded text-sm font-bold shadow-lg shadow-primary-green/20"
          >
            BOOK APPOINTMENT
          </motion.button>
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button 
            className="text-primary-green p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-lg font-bold text-slate-900 hover:text-primary-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBook();
                }}
                className="bg-primary-green text-white py-4 rounded-xl font-bold shadow-lg shadow-primary-green/20"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
