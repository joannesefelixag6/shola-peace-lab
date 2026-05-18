import { motion } from 'motion/react';
import { ShoppingCart, HeartPulse, ShieldCheck, Zap } from 'lucide-react';

const packages = [
  {
    name: "Standard Wellness",
    tagline: "Basic Health Monitoring",
    price: "₦25,000",
    tests: "32 Tests Included",
    features: ["CBC & Blood Grouping", "Blood Sugar (Fasting)", "Urinalysis", "Basic Lipids"],
    recommended: false,
    color: "bg-blue-500"
  },
  {
    name: "Executive Plus",
    tagline: "Comprehensive Screening",
    price: "₦75,000",
    tests: "64 Tests Included",
    features: ["Full Body Checkup", "Liver Function", "Kidney Function", "Cardiac Markers", "Vitamin D & B12"],
    recommended: true,
    color: "bg-primary-green"
  },
  {
    name: "Heart Health",
    tagline: "Cardiac Care Focus",
    price: "₦45,000",
    tests: "12 Targeted Tests",
    features: ["ECG Interpretation", "Lipid Profile", "Homocysteine", "CRP (High Sensitivity)"],
    recommended: false,
    color: "bg-rose-500"
  }
];

export default function HealthPackages({ onBook }: { onBook: (packageName: string) => void }) {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-primary-green font-bold text-sm tracking-widest uppercase mb-4">
              <Zap size={16} />
              <span>Smart Health Bundles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mb-4">
              CURATED <span className="text-primary-green">HEALTH PACKAGES</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Save up to 40% with our curated diagnostic bundles designed for specific health goals and age groups.
            </p>
          </div>
          <button 
            onClick={() => onBook('General Checkup')}
            className="mt-8 md:mt-0 text-primary-green font-bold flex items-center justify-center hover:underline group w-full md:w-auto"
          >
            Compare all packages
            <ShieldCheck size={18} className="ml-2 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-3xl border-2 ${pkg.recommended ? 'border-primary-green shadow-2xl shadow-primary-green/10' : 'border-slate-100'} transition-all`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-green text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{pkg.name}</h3>
                <p className="text-slate-500 text-sm">{pkg.tagline}</p>
              </div>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black text-slate-900">{pkg.price}</span>
                <span className="text-slate-400 ml-2 text-sm">/ checkup</span>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 mb-8">
                <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm mb-4">
                  <HeartPulse size={18} className="text-primary-green" />
                  <span>{pkg.tests}</span>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-green/40 mr-3"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onBook(pkg.name)}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all ${
                  pkg.recommended 
                  ? 'bg-primary-green text-white shadow-lg shadow-primary-green/30' 
                  : 'bg-slate-900 text-white'
                }`}
              >
                <ShoppingCart size={18} />
                <span>BOOK NOW</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
