import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: "John Obiora",
    role: "Regular Patient",
    content: "The staff here is incredibly professional. I got my results within 24 hours just as promised. Highly recommend for anyone needing quick and accurate tests.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Health Enthusiast",
    content: "The facility is clean and the medical check-up process was very seamless. Shola-Peace is definitely the top choice in Benin City for diagnostic services.",
    rating: 5
  },
  {
    name: "David Adeleke",
    role: "Corporate Client",
    content: "We use Shola-Peace for our annual corporate staff check-ups. Their reports are detailed and the service is exceptionally reliable.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 font-display uppercase tracking-tight">
            CUSTOMER <span className="text-primary-green">REVIEWS</span>
          </h2>
          <div className="w-16 h-1 bg-accent-green mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <div className="absolute top-6 right-8 text-primary-green/10">
                <Quote size={48} />
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">"{review.content}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <p className="text-sm text-primary-green font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
