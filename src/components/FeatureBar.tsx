import { CheckCircle, Clock, Users, Microscope } from 'lucide-react';

export default function FeatureBar() {
  const features = [
    { icon: <CheckCircle className="text-white" size={32} />, title: "ACCURATE RESULTS" },
    { icon: <Clock className="text-white" size={32} />, title: "TIMELY REPORTS" },
    { icon: <Users className="text-white" size={32} />, title: "EXPERIENCED PROFESSIONALS" },
    { icon: <Microscope className="text-white" size={32} />, title: "MODERN EQUIPMENT" },
  ];

  return (
    <div className="bg-primary-green py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 border-l border-white/20 pl-6 first:border-0 md:border-l-0 lg:border-l lg:first:border-0 md:bg-white/5 lg:bg-transparent rounded-lg p-4 lg:p-0">
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <span className="text-white font-bold text-sm tracking-wide">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
