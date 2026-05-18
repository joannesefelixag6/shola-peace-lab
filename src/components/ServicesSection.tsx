import { FlaskConical, Microscope, TestTubes, Heart, Activity, ClipboardList, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <FlaskConical className="text-primary-green" size={40} />,
    title: "HAEMATOLOGY",
    description: "Complete blood count, blood grouping, PCV, ESR and more.",
    price: "₦15,000"
  },
  {
    icon: <Microscope className="text-primary-green" size={40} />,
    title: "MICROBIOLOGY",
    description: "Infection diagnosis, culture & sensitivity, urinalysis and more.",
    price: "₦12,500"
  },
  {
    icon: <TestTubes className="text-primary-green" size={40} />,
    title: "CHEMISTRY",
    description: "Blood sugar, liver function, kidney function and more.",
    price: "₦18,000"
  },
  {
    icon: <Activity className="text-primary-green" size={40} />,
    title: "HORMONAL ASSAYS",
    description: "Thyroid, fertility, reproductive and other hormone tests.",
    price: "₦25,000"
  },
  {
    icon: <Heart className="text-primary-green" size={40} />,
    title: "CARDIAC MARKERS",
    description: "Cardiac risk assessment and heart related biomarker tests.",
    price: "₦22,000"
  },
  {
    icon: <ClipboardList className="text-primary-green" size={40} />,
    title: "GENERAL CHECK UPS",
    description: "Automated Laboratory and General Medical Check Up.",
    price: "₦35,000"
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
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-primary-green/5 rounded-full group-hover:bg-primary-green/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-slate-50">
                <span className="text-xl font-bold text-primary-green">{service.price}</span>
                <button 
                  onClick={() => onBook(service.title)}
                  className="text-primary-green font-bold text-sm flex items-center hover:underline"
                >
                  BOOK TEST <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => onBook('General Checkup')}
            className="border-2 border-primary-green text-primary-green px-8 py-3 rounded font-bold hover:bg-primary-green hover:text-white transition-all flex items-center mx-auto space-x-2"
          >
            <span>VIEW ALL SERVICES</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
