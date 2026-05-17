import { ShieldCheck, Award, Microscope, Globe } from 'lucide-react';

export default function Accreditations() {
  const logos = [
    { icon: <ShieldCheck size={24} />, name: "MLSCN BOARD" },
    { icon: <Award size={24} />, name: "ISO 15189" },
    { icon: <Microscope size={24} />, name: "WHO CERTIFIED" },
    { icon: <Globe size={24} />, name: "INTERNATIONAL" }
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-12">
      <div className="container-custom">
        <p className="text-center text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase mb-10">Trusted & Accredited By</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all">
              <div className="text-primary-green">
                {logo.icon}
              </div>
              <span className="font-display font-black text-slate-900 text-lg">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
