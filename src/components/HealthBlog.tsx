import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop",
    category: "LIFESTYLE",
    title: "Understanding Your Cholesterol Levels for a Healthier Heart",
    date: "May 15, 2026"
  },
  {
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    category: "PREVENTIVE",
    title: "5 Essential Tests Every Adult Should Take Annually",
    date: "May 10, 2026"
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1760&auto=format&fit=crop",
    category: "NUTRITION",
    title: "How Vitamin D Deficiency Affects Your Immunity",
    date: "May 05, 2026"
  }
];

export default function HealthBlog() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-green font-bold text-sm tracking-widest uppercase mb-4">
            <BookOpen size={16} />
            <span>Health Insights</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 font-display mb-4">
            LATEST FROM OUR <span className="text-primary-green">HEALTH BLOG</span>
          </h2>
          <p className="text-slate-600">
            Stay informed with expert advice on diagnostics, wellness, and preventive healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl aspect-[4/3]">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase text-primary-green">
                  {blog.category}
                </div>
              </div>
              
              <div className="px-2">
                <p className="text-slate-400 text-xs mb-3 font-bold uppercase tracking-tighter">{blog.date}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-green transition-colors leading-tight">
                  {blog.title}
                </h3>
                <button className="flex items-center text-primary-green font-bold text-sm hover:underline group/btn">
                  Read Article <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-green transition-colors">
            VIEW ALL HEALTH TIPS
          </button>
        </div>
      </div>
    </section>
  );
}
