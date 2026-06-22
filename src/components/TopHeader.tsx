import { Phone, Mail, Clock } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-[#002d18] text-white py-2 text-sm hidden md:block">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="tel:+2349155833115" className="flex items-center space-x-2 hover:text-accent-green transition-colors">
            <Phone size={14} className="text-accent-green" />
            <span>+234 915 583 3115, +234 806 497 5990</span>
          </a>
          <a href="mailto:sholapeacediagnosticandmedlab@gmail.com" className="flex items-center space-x-2 hover:text-accent-green transition-colors">
            <Mail size={14} className="text-accent-green" />
            <span>sholapeacediagnosticandmedlab@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={14} className="text-accent-green" />
          <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>
  );
}
