import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Truck, Home, CalendarCheck, FileText, ChevronDown } from 'lucide-react';
// @ts-ignore
import labImage from './lab.jpeg';

export default function HomeCollection({ onBook }: { onBook: (packageName: string) => void }) {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    { 
      icon: <CalendarCheck />, 
      title: "Book Online", 
      desc: "Select your tests and schedule a time.",
      extra: "Choose from our wide menu of diagnostic tests. Pick a convenient date and time range. You can register on behalf of multiple family members in just a few taps." 
    },
    { 
      icon: <Home />, 
      title: "Sample Collection", 
      desc: "Certified phlebotomist visits your home.",
      extra: "Our highly trained personal health officer will call to confirm before arriving, keeping your visit completely private, sanitised and comfortable." 
    },
    { 
      icon: <FileText />, 
      title: "Digital Reports", 
      desc: "Get accurate results on your email/phone.",
      extra: "Reports are processed with automated MLSCN accuracy. We deliver them directly to your email or WhatsApp number via a secure link within 12-24 hours." 
    }
  ];

  return (
    <section className="py-24 bg-primary-green relative overflow-hidden">
      {/* Decorative background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-24 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-12 -mb-12"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              <Truck size={14} />
              <span>Premium Convenience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-6 leading-tight">
              CAN'T COME TO US? <br />
              <span className="text-accent-green">WE'LL COME TO YOU.</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience hassle-free sample collection from the comfort of your home or office. Our certified healthcare professionals ensure safety and hygiene at every step.
            </p>
            
            <div className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
              {steps.map((step, idx) => {
                const isOpen = activeStep === idx;
                return (
                  <div 
                    key={idx} 
                    onClick={() => setActiveStep(isOpen ? null : idx)}
                    className={`flex flex-col p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                      isOpen 
                        ? 'bg-white/15 border-white/30 shadow-lg shadow-black/10' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl border transition-colors duration-300 ${
                          isOpen ? 'bg-accent-green text-primary-green border-accent-green/20' : 'bg-white/10 text-white border-white/10'
                        }`}>
                          {step.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-bold">{step.title}</h4>
                          <p className="text-white/75 text-xs sm:text-sm">{step.desc}</p>
                        </div>
                      </div>
                      <ChevronDown 
                        size={18} 
                        className={`text-white/60 transition-transform duration-300 ml-2 ${isOpen ? 'rotate-180 text-white' : ''}`} 
                      />
                    </div>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/80 text-xs sm:text-sm pl-1 leading-relaxed border-l-2 border-accent-green/50">
                            {step.extra}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => onBook('Home Collection')}
              className="bg-white text-primary-green px-10 py-4 rounded-xl font-bold shadow-2xl flex items-center space-x-3 transition-all duration-200 active:scale-95 lg:hover:scale-105 transform-gpu"
            >
              <Truck size={20} />
              <span>BOOK HOME COLLECTION</span>
            </button>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img 
                src={labImage} 
                alt="Home Collection Service" 
                className="rounded-[40px] shadow-3xl border-8 border-white/10 w-full h-auto max-h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute hidden sm:block -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <div className="flex items-center space-x-2 text-primary-green mb-2">
                  <ShieldCheck className="fill-primary-green text-white" />
                  <span className="font-bold text-slate-900">100% Safe</span>
                </div>
                <p className="text-xs text-slate-500">WHO compliant collection process for your safety.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );
}
