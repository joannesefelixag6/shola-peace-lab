import { FlaskConical, Users, Award, ShieldCheck } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { icon: <FlaskConical size={32} />, value: "10,000+", label: "TESTS CONDUCTED" },
    { icon: <Users size={32} />, value: "5,000+", label: "HAPPY CLIENTS" },
    { icon: <Award size={32} />, value: "10+", label: "YEARS EXPERIENCE" },
    { icon: <ShieldCheck size={32} />, value: "100%", label: "QUALITY & TRUST" },
  ];

  return (
    <div className="bg-[#003d21] py-16 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 text-accent-green">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 font-display">{stat.value}</div>
              <div className="text-xs font-bold tracking-widest uppercase text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
