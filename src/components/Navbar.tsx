import { PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#' },
    { name: 'SERVICES', href: '#' },
    { name: 'OUR TEAM', href: '#' },
    { name: 'GALLERY', href: '#' },
    { name: 'CONTACT US', href: '#' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center">
            <div className="w-8 h-8 text-white">
              {/* Simplified Logo representation */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary-green leading-tight font-display">SHOLA-PEACE</h1>
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Diagnostic & Medical Laboratory</p>
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
            className="bg-primary-green text-white px-6 py-2.5 rounded text-sm font-bold shadow-lg shadow-primary-green/20"
          >
            BOOK APPOINTMENT
          </motion.button>
        </div>

        {/* Mobile menu icon placeholder */}
        <div className="lg:hidden">
          <button className="text-primary-green">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
