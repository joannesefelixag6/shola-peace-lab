import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Do I need to fast before my blood test?",
    answer: "Most blood tests, like Blood Sugar (Fasting) and Lipid Profile, require 8-12 hours of fasting (only water allowed). Please check your specific test requirements when booking."
  },
  {
    question: "How long does it take to get my results?",
    answer: "Most routine reports are delivered within 12-24 hours. Specialized tests like cultures or hormonal assays may take 3-5 working days. You will be notified via SMS/Email."
  },
  {
    question: "Can I book a test for my family members?",
    answer: "Yes, you can add multiple family members under one booking or use our 'Home Collection' service to have samples collected for everyone at once."
  },
  {
    question: "Are your labs internationally certified?",
    answer: "Yes, Shola-Peace Laboratory follows MLSCN and international quality standards (ISO compliant) ensured by our automated state-of-the-art equipment."
  }
];

export default function FAQSection({ onBook }: { onBook: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-light">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="bg-primary-green p-8 rounded-3xl text-white">
              <HelpCircle size={48} className="mb-6 opacity-50" />
              <h2 className="text-3xl font-bold font-display mb-4">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="text-white/70 mb-8">
                Find answers to common questions about our services, test preparation, and reporting.
              </p>
              <button 
                onClick={onBook}
                className="bg-white text-primary-green px-6 py-3 rounded-xl font-bold w-full hover:bg-slate-900 hover:text-white transition-colors"
              >
                ASK A SPECIFIC QUESTION
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900">{faq.question}</span>
                  <ChevronDown 
                    className={`text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-slate-600 leading-relaxed text-sm overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
