import { Phone, Mail, Clock } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-[#002d18] text-white py-2 text-sm hidden md:block">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-accent-green" />
            <span>09155833115, 08064975990</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-accent-green" />
            <span>sholapeacelab@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={14} className="text-accent-green" />
          <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>
  );
}
