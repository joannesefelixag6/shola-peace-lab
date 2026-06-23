import React, { useState } from 'react';
import { ArrowRight, BookOpen, X, Calendar, User, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import blogImg1 from '../lab_5.jpeg';
import blogImg2 from '../lab_6.jpeg';

interface BlogParagraph {
  type: string;
  text: string;
}

interface BlogPost {
  image: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  content: BlogParagraph[];
}

const blogs: BlogPost[] = [
  {
    image: blogImg1,
    category: "LIFESTYLE",
    title: "Understanding Your Cholesterol Levels for a Healthier Heart",
    date: "May 15, 2026",
    readTime: "5 min read",
    author: "Dr. Sarah Jenkins (Cardiologist)",
    content: [
      {
        type: "paragraph",
        text: "Cholesterol is a waxy substance found in your blood. Your body needs cholesterol to build healthy cells, but high levels of cholesterol can increase your risk of heart disease. When you have high cholesterol, you can develop fatty deposits in your blood vessels."
      },
      {
        type: "subtitle",
        text: "The Difference Between HDL and LDL"
      },
      {
        type: "paragraph",
        text: "• LDL (Low-Density Lipoprotein): Known as 'bad' cholesterol. LDL carries cholesterol to your arteries. High levels can cause plaque buildup (atherosclerosis), narrowing the arteries and reducing blood flow.\n• HDL (High-Density Lipoprotein): Known as 'good' cholesterol. HDL absorbs cholesterol and carries it back to the liver, which then flushes it from the body. High levels of HDL can lower your risk for heart disease and stroke."
      },
      {
        type: "subtitle",
        text: "How to Manage Your Cholesterol Levels"
      },
      {
        type: "paragraph",
        text: "1. Eat a Heart-Healthy Diet: Reduce saturated fats and eliminate trans fats. Increase intake of soluble fiber, such as oatmeal, kidney beans, pears, and apples.\n2. Exercise Daily: Regular physical activity can raise HDL cholesterol. Aim for at least 30 minutes of exercise five times a week.\n3. Avoid smoking and limit alcohol intake: Quitting smoking improves your HDL cholesterol level and overall cardiovascular integrity.\n4. Regular Lab Tests: Comprehensive lipid profile exams are essential, as high cholesterol typically presents no physical symptoms until complications arise."
      }
    ]
  },
  {
    image: blogImg2,
    category: "PREVENTIVE",
    title: "5 Essential Tests Every Adult Should Take Annually",
    date: "May 10, 2026",
    readTime: "4 min read",
    author: "Dr. Shola Peace (Director of Diagnostics)",
    content: [
      {
        type: "paragraph",
        text: "Routine health screening is the cornerstone of preventive medicine. Many critical health conditions, such as early-stage diabetes, high blood pressure, and cholesterol abnormalities, show no visual warning signs. Catching them early is the key to simple, highly successful treatments."
      },
      {
        type: "subtitle",
        text: "1. Complete Blood Count (CBC)"
      },
      {
        type: "paragraph",
        text: "A CBC measures various parts and features of your blood. It helps diagnose conditions like anemia, infection, immune system disorders, and blood cancers."
      },
      {
        type: "subtitle",
        text: "2. Comprehensive Lipid Panel"
      },
      {
        type: "paragraph",
        text: "Calculates HDL, LDL, Triglycerides, and Total Cholesterol levels. Tracking these stats is crucial to preempt stroke risk and heart failures."
      },
      {
        type: "subtitle",
        text: "3. Fasting Blood Glucose & HbA1c"
      },
      {
        type: "paragraph",
        text: "Evaluates your average blood sugar levels over the past 3 months. Essential for detecting pre-diabetes and monitoring active diabetic states."
      },
      {
        type: "subtitle",
        text: "4. Renal and Liver Function Profile"
      },
      {
        type: "paragraph",
        text: "Simple blood and urine checks that screen how effectively your kidneys and liver are filtering waste materials and metabolic byproducts from your body."
      },
      {
        type: "subtitle",
        text: "5. Thyroid-Stimulating Hormone (TSH) Test"
      },
      {
        type: "paragraph",
        text: "Analyzes thyroid glands activity. Unbalanced thyroid levels can lead to extreme chronic fatigue, unexplained weight variance, and mood shifts."
      }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1760&auto=format&fit=crop",
    category: "NUTRITION",
    title: "How Vitamin D Deficiency Affects Your Immunity",
    date: "May 05, 2026",
    readTime: "6 min read",
    author: "Dr. James Cole (Clinical Immunologist)",
    content: [
      {
        type: "paragraph",
        text: "Vitamin D is unique because your skin actually produces it using sunlight. Often treated as a hormone rather than a simple nutrient, Vitamin D plays a massive, fundamental role in securing the body's immune defenses."
      },
      {
        type: "subtitle",
        text: "The Immune System Connection"
      },
      {
        type: "paragraph",
        text: "Vitamin D receptors are present on almost all cells of your immune system, including T-cells and antigen-presenting cells. It boosts the production of proteins that fight microbes and pathogens, helping the white blood cells work optimally. When your Vitamin D levels are deficient, you become far more susceptible to colds, respiratory tract infections, and viruses."
      },
      {
        type: "subtitle",
        text: "Common Warning Symptoms of Deficiency"
      },
      {
        type: "paragraph",
        text: "• Getting sick or infected often\n• Constant fatigue, exhaustion, and brain fog\n• Bone and back pain\n• Slow wound healing or muscle soreness"
      },
      {
        type: "subtitle",
        text: "Actionable Steps"
      },
      {
        type: "paragraph",
        text: "Get a 25-hydroxy Vitamin D blood test to see your exact active serum status. Spend 15-20 minutes daily in light morning sunlight, or consult your primary care doctor to receive exact, tailored Vitamin D3 supplemental plans based on your direct lab numbers."
      }
    ]
  }
];

export default function HealthBlog() {
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-white">
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
            <article
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-md lg:hover:-translate-y-2 transform-gpu"
              onClick={() => setActiveBlog(blog)}
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
                <div className="flex items-center space-x-3 text-slate-400 text-xs mb-3 font-semibold uppercase">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-green transition-colors leading-tight">
                  {blog.title}
                </h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveBlog(blog);
                  }}
                  className="flex items-center text-primary-green font-bold text-sm hover:underline group/btn"
                >
                  Read Article <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => {
              // Open first blog post as feature/archive view
              setActiveBlog(blogs[0]);
            }}
            className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-green transition-colors"
          >
            VIEW ALL HEALTH TIPS
          </button>
        </div>
      </div>

      {/* Blog Detail Modal */}
      <AnimatePresence>
        {activeBlog && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveBlog(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl z-10 scrollbar-thin"
            >
              {/* Close Button Button */}
              <button 
                onClick={() => setActiveBlog(null)}
                className="absolute top-6 right-6 p-2 bg-slate-900 text-white rounded-full hover:bg-primary-green transition-colors z-20 shadow-lg"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {/* Cover Image */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <img 
                  src={activeBlog.image} 
                  alt={activeBlog.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-primary-green text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-md">
                    {activeBlog.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-display mt-3 leading-tight drop-shadow-sm">
                    {activeBlog.title}
                  </h2>
                </div>
              </div>

              {/* Meta Tags Details */}
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm border-b border-gray-100 pb-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <User size={16} className="text-primary-green" />
                    <span className="font-semibold text-slate-700">{activeBlog.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-primary-green" />
                    <span>{activeBlog.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-primary-green" />
                    <span>{activeBlog.readTime}</span>
                  </div>
                </div>

                {/* Article Read content */}
                <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
                  {activeBlog.content.map((block, idx) => {
                    if (block.type === 'subtitle') {
                      return (
                        <h4 key={idx} className="text-xl font-bold text-slate-900 font-display mt-8 mb-4">
                          {block.text}
                        </h4>
                      );
                    }
                    return (
                      <p key={idx} className="whitespace-pre-line">
                        {block.text}
                      </p>
                    );
                  })}
                </div>

                {/* Modal Footer actions */}
                <div className="border-t border-gray-100 mt-10 pt-8 flex justify-end">
                  <button
                    onClick={() => setActiveBlog(null)}
                    className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-green transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
