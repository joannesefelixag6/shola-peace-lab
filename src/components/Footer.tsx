import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronRight } from 'lucide-react';

export default function Footer() {
  const links = ["Home", "About Us", "Services", "Our Team", "Gallery", "Contact Us"];

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold font-display tracking-tight">SHOLA-PEACE</h2>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Providing reliable, accurate and timely laboratory services for over 10 years. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary-green hover:border-primary-green transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary-green hover:border-primary-green transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary-green hover:border-primary-green transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary-green w-fit pb-1">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <Phone size={18} className="text-primary-green mt-1" />
                <span>09155833115, 08064975990</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <Mail size={18} className="text-primary-green mt-1" />
                <span>sholapeacelab@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={18} className="text-primary-green mt-1" />
                <span>551, Upper Sokponba Road, Benin City, Edo State.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary-green w-fit pb-1">QUICK LINKS</h3>
            <ul className="grid grid-cols-1 gap-3">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-primary-green flex items-center space-x-2 transition-colors">
                    <ChevronRight size={14} className="text-primary-green" />
                    <span>{link}</span>
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
