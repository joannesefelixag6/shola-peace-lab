import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronRight } from 'lucide-react';
import logoImg from '../lab_4.jpeg';

export default function Footer({ onBook }: { onBook: () => void }) {
  const links = [
    { name: "Home", href: "#top" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Team", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact Us", href: "#footer" }
  ];

  return (
    <footer id="footer" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shadow-md">
                <img 
                   src={logoImg} 
                   alt="Shola-Peace Logo" 
                   className="w-full h-full object-contain rounded-full"
                   referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-xl font-bold font-display tracking-tight uppercase">SHOLA-PEACE</h2>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Providing reliable, accurate and timely laboratory services for over 10 years in Benin City. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" onClick={(e) => {e.preventDefault(); onBook();}} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary-green hover:border-primary-green transition-all shadow-lg active:scale-95">
                <Facebook size={18} />
              </a>
              <a href="#" onClick={(e) => {e.preventDefault(); onBook();}} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary-green hover:border-primary-green transition-all shadow-lg active:scale-95">
                <Instagram size={18} />
              </a>
              <a href="#" onClick={(e) => {e.preventDefault(); onBook();}} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary-green hover:border-primary-green transition-all shadow-lg active:scale-95">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary-green w-fit pb-1">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400 group cursor-pointer" onClick={() => window.open('tel:+2349155833115')}>
                <Phone size={18} className="text-primary-green mt-1 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">+234 915 583 3115, +234 806 497 5990</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400 group cursor-pointer" onClick={() => window.open('mailto:sholapeacediagnosticandmedlab@gmail.com')}>
                <Mail size={18} className="text-primary-green mt-1 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">sholapeacediagnosticandmedlab@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={18} className="text-primary-green mt-1" />
                <span>551, Upper Sokponba Road, Benin City, Edo State, Nigeria.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary-green w-fit pb-1">QUICK LINKS</h3>
            <ul className="grid grid-cols-1 gap-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-primary-green flex items-center space-x-2 transition-colors">
                    <ChevronRight size={14} className="text-primary-green" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary-green w-fit pb-1">OPENING HOURS</h3>
            <ul className="space-y-4">
              <li className="text-slate-400">
                <p className="font-bold text-white text-sm mb-1">Monday - Saturday</p>
                <p>8:00 AM - 5:00 PM</p>
              </li>
              <li className="text-slate-400">
                <p className="font-bold text-white text-sm mb-1">Sunday</p>
                <p>CLOSED</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2026 Shola-Peace Diagnostic & Medical Laboratory. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
