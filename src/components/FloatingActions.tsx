import { MessageCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  const whatsappNumber = "2349155833115";
  const email = "sholapeacelab@gmail.com";

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors group relative"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Email Button */}
      <motion.a
        href={`mailto:${email}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary-green text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-900 transition-colors group relative"
        title="Email Us"
      >
        <Mail size={24} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Email Us
        </span>
      </motion.a>
    </div>
  );
}
