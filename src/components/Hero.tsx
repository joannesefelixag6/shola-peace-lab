import { motion } from 'motion/react';
import { Calendar, Phone, ArrowRight, ShieldCheck, Play } from 'lucide-react';
import heroImg from '../lab_2.jpeg';

export default function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary-green/10 text-primary-green px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6 border border-primary-green/20">
                <ShieldCheck size={14} />
                <span>NIGERIA'S MOST TRUSTED LAB</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display text-slate-900 leading-[1.1] mb-6">
                ACCURATE RESULTS <br />
                <span className="text-primary-green">FASTER THAN EVER</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Experience world-class diagnostic services with automated technology. Get your medical reports within 24 hours in Benin City.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onBook}
                  className="bg-primary-green text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-primary-green/30 text-lg flex items-center justify-center space-x-3"
                >
                  <Calendar size={20} />
                  <span>BOOK APPOINTMENT</span>
                </motion.button>
                <a 
                  href="tel:+2349155833115"
                  className="flex items-center justify-center space-x-3 px-8 py-5 border-2 border-slate-100 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all text-lg"
                >
                  <Phone size={20} />
                  <span>+234 915 583 3115</span>
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-8 pt-8 border-t border-slate-100">
                <div className="text-center lg:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-none">10k+</h4>
                  <p className="text-[10px] sm:text-sm text-slate-500 font-medium mt-1">Patients</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
                <div className="text-center lg:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-none">500+</h4>
                  <p className="text-[10px] sm:text-sm text-slate-500 font-medium mt-1">Daily Tests</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
                <div className="text-center lg:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-none">24h</h4>
                  <p className="text-[10px] sm:text-sm text-slate-500 font-medium mt-1">Turnaround</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
               <img 
                src={heroImg} 
                alt="Black Medical Specialist" 
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent-green/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-green/20 rounded-full blur-3xl -z-10"></div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-4 border border-slate-100"
              >
                <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">Quality Assured</p>
                  <p className="font-bold text-slate-900">MLSCN Certified</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
