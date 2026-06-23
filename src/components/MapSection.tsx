import { MapPin, Navigation, Phone, Clock, Compass, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function MapSection() {
  const address = "551, Upper Sokponba Road, Benin City, Edo State, Nigeria";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-green/10 text-primary-green px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4">
            <Compass size={16} className="animate-spin-slow" />
            <span>Visit Our Facility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 mb-4">
            Location & Live Directions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Find the shortest route to our state-of-the-art diagnostic laboratory in Benin City. Walk-ins are always welcome.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Location Info & Directions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
                <span className="w-1.5 h-6 bg-primary-green rounded-full inline-block"></span>
                <span>Laboratory Address</span>
              </h3>

              {/* Address card */}
              <div className="flex items-start space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100/80 mb-6">
                <div className="bg-primary-green/10 p-3 rounded-xl text-primary-green mt-0.5 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base mb-1">Benin City Office</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{address}</p>
                </div>
              </div>

              {/* Quick details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3.5 text-sm text-slate-600">
                  <Clock size={18} className="text-primary-green shrink-0" />
                  <span><strong>Mon - Sat:</strong> 8:00 AM - 5:00 PM (Sunday: Closed)</span>
                </div>
                <div className="flex items-center space-x-3.5 text-sm text-slate-600">
                  <Phone size={18} className="text-primary-green shrink-0" />
                  <span><strong>Hotlines:</strong> +234 915 583 3115, +234 806 497 5990</span>
                </div>
              </div>

              <hr className="border-slate-100 mb-6" />

              {/* Travel Instructions */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
                  <HelpCircle size={16} className="text-primary-green" />
                  <span>How to Reach Us</span>
                </h4>
                <ul className="space-y-3.5 text-xs text-slate-500 pl-1">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 mr-2 shrink-0"></span>
                    <span><strong>By Local Transport (Keke/Taxi):</strong> Instruct the driver to head to 551 Upper Sokponba Road. We are prominently visible with our diagnostic signage.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 mr-2 shrink-0"></span>
                    <span><strong>Self-Driving:</strong> Located on the main Upper Sokponba dual-carriageway with dedicated street-side parking options directly in front.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Google Directions Trigger Button */}
            <div className="pt-6">
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-primary-green text-white py-4 px-6 rounded-2xl font-bold shadow-lg shadow-primary-green/20 hover:bg-slate-900 transition-all duration-300 transform active:scale-95 text-center transform-gpu"
              >
                <Navigation size={18} className="animate-pulse" />
                <span>OPEN GOOGLE DIRECTIONS</span>
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-2.5">
                Opens in Google Maps for turn-by-turn live navigation.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive View */}
          <div className="lg:col-span-7 flex flex-col h-[400px] lg:h-auto min-h-[400px] bg-slate-950 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative group">
            {/* Embedded maps iframe */}
            <iframe
              title="Shola-Peace Diagnostic & Medical Laboratory Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0 grayscale-[10%] hover:grayscale-0 transition-all duration-500 bg-slate-100"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
            ></iframe>

            {/* Floating Quick Navigation Card atop Map */}
            <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md border border-slate-200/50 flex items-center justify-between z-10">
              <div className="flex items-center space-x-2.5 min-w-0">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping shrink-0"></div>
                <p className="text-xs font-bold text-slate-900 truncate">
                  Shola-Peace Diagnosis Lab
                </p>
              </div>
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-primary-green transition-colors inline-flex items-center space-x-1 uppercase shrink-0"
              >
                <span>Navigate</span>
                <Navigation size={10} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
