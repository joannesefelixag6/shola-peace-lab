import { CheckCircle2, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  const points = [
    "Automated Laboratory",
    "General Medical Check Up",
    "Qualified & Experienced Staff",
    "Quality, Safety & Confidentiality"
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-slate-900 font-display mb-6">
              WHO <span className="text-primary-green">WE ARE</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Shola-Peace Diagnostic & Medical Laboratory is a modern, customer-focused laboratory committed to providing accurate, reliable and timely diagnostic services using state-of-the-art equipment and professional expertise.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              {points.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 bg-bg-light p-4 rounded-xl border border-primary-green/5">
                  <CheckCircle2 className="text-primary-green" size={20} />
                  <span className="text-slate-700 font-bold">{point}</span>
                </div>
              ))}
            </div>

            <div className="bg-bg-light p-8 rounded-2xl border border-primary-green/10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 relative overflow-hidden">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-primary-green/20">
                <Phone size={28} />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Need Help? Call Us Anytime</p>
                <div className="text-2xl font-bold text-primary-green flex flex-col sm:flex-row sm:space-x-4">
                  <span>+234 915 583 3115</span>
                  <span className="hidden sm:inline">|</span>
                  <span>+234 806 497 5990</span>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-green/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
