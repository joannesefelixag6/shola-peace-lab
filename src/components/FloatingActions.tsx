import { useState, useEffect } from 'react';
import { Mail, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
  const whatsappNumber = "2349155833115";
  const email = "sholapeacediagnosticandmedlab@gmail.com";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-slate-900 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-primary-green transition-all duration-300 active:scale-95 lg:hover:scale-110 transform-gpu group relative"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
            <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Back to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-all duration-300 active:scale-95 lg:hover:scale-110 transform-gpu group relative"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12.031 2c-5.514 0-9.989 4.478-9.989 9.993 0 1.763.459 3.483 1.33 5.004L2 22l5.12-1.341c1.472.802 3.125 1.226 4.908 1.226 5.514 0 9.992-4.478 9.992-9.993C22.02 6.478 17.545 2 12.031 2zm6.204 14.194c-.255.722-1.473 1.318-2.022 1.392-.49.066-1.13.08-1.791-.131-.41-.13-.925-.316-1.564-.59-2.719-1.162-4.476-3.924-4.612-4.104-.135-.18-1.101-1.464-1.101-2.793 0-1.329.678-1.983.92-2.242.242-.259.529-.324.706-.324.176 0 .353.001.507.009.16.008.373-.061.584.45.215.523.737 1.797.801 1.929.064.13.107.283.021.455-.086.173-.13.284-.258.435-.13.151-.271.339-.387.455-.13.129-.265.271-.113.532.152.261.674 1.114 1.442 1.801.99.886 1.82 1.16 2.08 1.29.261.129.412.108.566-.068.154-.177.674-.783.855-1.049.18-.266.361-.223.608-.13.247.093 1.57.739 1.841.874.271.135.452.203.518.318.066.115.066.662-.189 1.383z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Email Button */}
      <a
        href={`mailto:${email}`}
        className="bg-primary-green text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-900 transition-all duration-300 active:scale-95 lg:hover:scale-110 transform-gpu group relative"
        title="Email Us"
      >
        <Mail size={24} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Email Us
        </span>
      </a>
    </div>
  );
}
