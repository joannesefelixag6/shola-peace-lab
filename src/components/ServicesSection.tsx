import { FlaskConical, Microscope, TestTubes, Heart, Activity, ClipboardList, ChevronRight, Clock, AlertCircle, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <FlaskConical className="text-primary-green" size={40} />,
    title: "HAEMATOLOGY",
    description: "Complete blood count, blood grouping, PCV, ESR and more.",
    price: "₦15,000",
    requirements: {
      sample: "Blood (Whole Blood / EDTA)",
      fasting: "No fasting required",
      isFastingRequired: false,
      instructions: [
        "Hydrate well beforehand: drink 1-2 glasses of plain clean water.",
        "Inform phlebotomist of current blood thinners."
      ]
    }
  },
  {
    icon: <Microscope className="text-primary-green" size={40} />,
    title: "MICROBIOLOGY",
    description: "Infection diagnosis, culture & sensitivity, urinalysis and more.",
    price: "₦12,500",
    requirements: {
      sample: "Urine, Stool or Swab specimen",
      fasting: "No fasting required",
      isFastingRequired: false,
      instructions: [
        "Urine: mid-stream clean catch sample in sterile container.",
        "Preferable to avoid antibiotics for 48 hours prior."
      ]
    }
  },
  {
    icon: <TestTubes className="text-primary-green" size={40} />,
    title: "CLINICAL CHEMISTRY",
    description: "Blood sugar, liver function, kidney function and more.",
    price: "₦18,000",
    requirements: {
      sample: "Blood Serum or Plasma",
      fasting: "8-12 hours fasting required",
      isFastingRequired: true,
      instructions: [
        "Strict overnight fasting required (no coffee, tea or food).",
        "Clear water allowed and highly recommended."
      ]
    }
  },
  {
    icon: <Activity className="text-primary-green" size={40} />,
    title: "HORMONAL ASSAYS",
    description: "Thyroid, fertility, reproductive and other hormone tests.",
    price: "₦25,000",
    requirements: {
      sample: "Blood Serum",
      fasting: "Morning collection requested",
      isFastingRequired: false,
      instructions: [
        "Optimal draw time is between 7:00 AM - 10:00 AM.",
        "Indicate day of cycle for reproductive hormones."
      ]
    }
  },
  {
    icon: <Heart className="text-primary-green" size={40} />,
    title: "CARDIAC MARKERS",
    description: "Cardiac risk assessment and heart related biomarker tests.",
    price: "₦22,000",
    requirements: {
      sample: "Blood Serum",
      fasting: "No fasting required",
      isFastingRequired: false,
      instructions: [
        "Avoid high-intensity exercise 24 hours beforehand.",
        "Sit and relax comfortably 15 minutes prior to draw."
      ]
    }
  },
  {
    icon: <ClipboardList className="text-primary-green" size={40} />,
    title: "GENERAL CHECK UPS",
    description: "Automated Laboratory and General Medical Check Up.",
    price: "₦35,000",
    requirements: {
      sample: "Blood & Mid-stream Urine",
      fasting: "10-12 hours fasting required",
      isFastingRequired: true,
      instructions: [
        "Fast fully overnight (10-12 hours) before collection.",
        "Avoid fatty foods and alcoholic beverages for 24 hours."
      ]
    }
  }
];

export default function ServicesSection({ onBook }: { onBook: (packageName: string) => void }) {
  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 font-display uppercase tracking-tight">
            OUR <span className="text-primary-green">SERVICES</span>
          </h2>
          <div className="w-16 h-1 bg-accent-green mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col group transition-all duration-300 hover:shadow-md lg:hover:-translate-y-1.5 transform-gpu"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary-green/5 rounded-2xl group-hover:bg-primary-green/10 transition-colors shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">{service.title}</h3>
                </div>
              </div>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Specific Diagnostic Requirements */}
              <div className="mt-auto mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold pb-2 border-b border-slate-200/60">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">Preparation Required</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${service.requirements.isFastingRequired ? 'bg-amber-500/10 text-amber-700' : 'bg-emerald-500/10 text-emerald-700'}`}>
                    {service.requirements.fasting}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-slate-500 text-[10px] uppercase min-w-[55px] pt-0.5">Specimen:</span>
                    <span className="font-semibold text-slate-800 text-[11px] leading-tight">{service.requirements.sample}</span>
                  </div>
                  
                  <div className="pt-1.5 space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Patient Guidelines:</div>
                    <ul className="space-y-1 pl-1 text-[11px] leading-relaxed font-medium text-slate-500">
                      {service.requirements.instructions.map((inst, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-green mr-1.5">•</span>
                          <span>{inst}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center w-full pt-4 border-t border-slate-100">
                <button 
                  onClick={() => onBook(service.title)}
                  className="text-primary-green font-bold text-sm flex items-center hover:underline cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  BOOK TEST <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => onBook('General Checkup')}
            className="border-2 border-primary-green text-primary-green px-8 py-3.5 rounded-xl font-bold hover:bg-primary-green hover:text-white transition-all flex items-center mx-auto space-x-2 cursor-pointer active:scale-95 transform-gpu"
          >
            <span>VIEW ALL SERVICES</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
