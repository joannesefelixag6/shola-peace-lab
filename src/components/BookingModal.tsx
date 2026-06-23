import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, MapPin, CheckCircle2, Mail, AlertCircle, Clock, FileText } from 'lucide-react';
import { safeStorage } from '../lib/storage';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
}

interface TestRequirement {
  title: string;
  fasting: { required: boolean; duration?: string; details: string };
  instructions: string[];
  badgeColor: string;
}

const TEST_REQUIREMENTS: Record<string, TestRequirement> = {
  "HAEMATOLOGY": {
    title: "HAEMATOLOGY PACKAGE PREPARATION",
    fasting: { required: false, details: "No strict fasting required." },
    instructions: [
      "No overnight fasting is necessary for HAEMATOLOGY (e.g. CBC, PCV, ESR, grouping).",
      "Stay hydrated: drink 1-2 glasses of plain clean water prior to your sample appointment.",
      "Inform the phlebotomist if you take active blood thinners or chemotherapy medication."
    ],
    badgeColor: "bg-rose-500/10 text-rose-600 border-rose-500/20"
  },
  "MICROBIOLOGY": {
    title: "MICROBIOLOGY SPECIMEN GUIDELINE",
    fasting: { required: false, details: "No fasting required." },
    instructions: [
      "Mid-stream clean catch sample is required for Urine analysis and Cultures.",
      "Submit fecal samples or external swabs as quickly as possible to preserve flora.",
      "Do not take antibiotics for 48 hours prior to test unless explicitly prescribed."
    ],
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  },
  "CLINICAL CHEMISTRY": {
    title: "CLINICAL CHEMISTRY REQUIREMENT",
    fasting: { required: true, duration: "10-12 hours", details: "Overnight fasting is recommended for certain tests (Lipids, Glucose)." },
    instructions: [
      "Overnight fasting (10 to 12 hours) is recommended for specific chemistry profiles (FBS, Lipid profiles).",
      "Do not consume food, tea, coffee, milk, or sugary drinks. Plain water is allowed and recommended.",
      "For standard chemistries (e.g., Liver/Kidney tests, Electrolytes), fasting is not strictly required."
    ],
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-500/20"
  },
  "HORMONAL ASSAYS": {
    title: "HORMONAL PANEL GUIDANCE",
    fasting: { required: false, details: "Fasting depends on specific hormone tests." },
    instructions: [
      "Samples are best drawn during early morning hours (typically 7:00 AM - 10:00 AM).",
      "For female reproductive or fertility tests, indicate day of menstrual cycle to clinical technician.",
      "Avoid excess stress or intensive cardiovascular training on the morning of the procedure."
    ],
    badgeColor: "bg-pink-500/10 text-pink-600 border-pink-500/20"
  },
  "CARDIAC MARKERS": {
    title: "CARDIAC RISK BIOMARKER GUIDELINE",
    fasting: { required: false, details: "No fasting is necessary." },
    instructions: [
      "Avoid intense exercise, manual weight lifting or heavy labor for 24 hours prior to testing.",
      "Rest comfortably in our lounge environment for 15 minutes immediately prior to blood collection.",
      "Communicate any immediate physical symptoms (e.g., palpitations or chest pressure) to phlebotomist."
    ],
    badgeColor: "bg-orange-500/10 text-orange-600 border-orange-500/20"
  },
  "GENERAL CHECK UPS": {
    title: "COMPREHENSIVE CHECK UP PROTOCOL",
    fasting: { required: true, duration: "10-12 hours", details: "Strict fasting required for comprehensive metaboilc panels." },
    instructions: [
      "Fast fully overnight (10 to 12 hours) before having check up blood samples collected.",
      "Avoid alcohol, heavy high-fat entrees, and dessert sugary items 24 hours prior.",
      "Stay hydrated by drinking normal amounts of pure water to optimize venous accessibility."
    ],
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20"
  },
  "HOME COLLECTION": {
    title: "HOME SAMPLE COLLECTION PROTOCOL",
    fasting: { required: false, details: "Instructions rely on specific requested diagnostic panels." },
    instructions: [
      "Prepare a clean table area and comfortable solid chair with adequate daylight/illumination.",
      "Keep standard ID, verification, and a warm cup of water ready to warm cold hands.",
      "Our certified phlebotomists will trace location coordinates and phone beforehand."
    ],
    badgeColor: "bg-sky-500/10 text-sky-600 border-sky-500/20"
  },
  "DEFAULT": {
    title: "GENERAL PROCEDURE PREPARATION",
    fasting: { required: false, details: "Consult with a medical laboratory scientist if unsure." },
    instructions: [
      "Drink average levels of clear water to guarantee smooth vein access and hydration.",
      "State any chronic medical backgrounds or standard active medications taken.",
      "Relax comfortably; our experienced clinical phlebotomists ensure a rapid, warm experience."
    ],
    badgeColor: "bg-slate-500/10 text-slate-700 border-slate-500/20"
  }
};

const getTestRequirements = (pkgName: string): TestRequirement => {
  const norm = String(pkgName || '').toUpperCase().trim();
  
  // Try exact key matching first
  if (norm === 'HAEMATOLOGY' || norm === 'HAEMATOLOGY TESTS') return TEST_REQUIREMENTS['HAEMATOLOGY'];
  if (norm === 'MICROBIOLOGY' || norm === 'MICROBIOLOGY TESTS') return TEST_REQUIREMENTS['MICROBIOLOGY'];
  if (norm === 'CLINICAL CHEMISTRY') return TEST_REQUIREMENTS['CLINICAL CHEMISTRY'];
  if (norm === 'HORMONAL ASSAYS') return TEST_REQUIREMENTS['HORMONAL ASSAYS'];
  if (norm === 'CARDIAC MARKERS' || norm === 'CARDIAC BIOMARKERS') return TEST_REQUIREMENTS['CARDIAC MARKERS'];
  if (norm === 'GENERAL CHECKUP' || norm === 'GENERAL CHECK UP' || norm === 'GENERAL CHECK UPS') return TEST_REQUIREMENTS['GENERAL CHECK UPS'];
  if (norm === 'HOME COLLECTION' || norm === 'HOME SAMPLE COLLECTION') return TEST_REQUIREMENTS['HOME COLLECTION'];

  // Fallback to substring matching, with CHEMISTRY checked before HAEMATOLOGY (since CHEMIS-TRY contains HEM)
  if (norm.includes('CHEM')) return TEST_REQUIREMENTS['CLINICAL CHEMISTRY'];
  if (norm.includes('HAEM') || norm.includes('HEM')) return TEST_REQUIREMENTS['HAEMATOLOGY'];
  if (norm.includes('MICR')) return TEST_REQUIREMENTS['MICROBIOLOGY'];
  if (norm.includes('HORM')) return TEST_REQUIREMENTS['HORMONAL ASSAYS'];
  if (norm.includes('CARD')) return TEST_REQUIREMENTS['CARDIAC MARKERS'];
  if (norm.includes('GENERAL') || norm.includes('CHECK')) return TEST_REQUIREMENTS['GENERAL CHECK UPS'];
  if (norm.includes('HOME') || norm.includes('COLLECT')) return TEST_REQUIREMENTS['HOME COLLECTION'];
  
  return TEST_REQUIREMENTS['DEFAULT'];
};

export default function BookingModal({ isOpen, onClose, packageName }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    packageName: (typeof packageName === 'string' && packageName) ? packageName : 'General Checkup'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (packageName && typeof packageName === 'string') {
      setFormData(prev => ({ ...prev, packageName }));
    }
  }, [packageName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate save to safe storage
    const existingBookings = JSON.parse(safeStorage.getItem('sholapeace_bookings') || '[]');
    const newBooking = {
      ...formData,
      id: Date.now(),
      status: 'Pending',
      timestamp: new Date().toISOString()
    };
    
    safeStorage.setItem('sholapeace_bookings', JSON.stringify([...existingBookings, newBooking]));

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" id="booking-modal-overlay">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative z-10 scrollbar-thin"
            id="booking-modal-card"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Close booking modal"
            >
              <X size={20} className="text-slate-400" />
            </button>

            <div className="p-8">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-primary-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Booking Successful!</h3>
                  <p className="text-slate-500 mb-8">Your appointment for {formData.packageName} has been saved to local storage.</p>
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      onClose();
                    }}
                    className="w-full bg-primary-green text-white py-4 rounded-xl font-bold"
                  >
                    DONE
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">Book Appointment</h3>
                    <p className="text-slate-500 text-xs mt-1">Review diagnostic requirements & fill in your details.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" id="booking-form">
                    {/* Package / Test Selector */}
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                      <select
                        required
                        className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all appearance-none cursor-pointer text-slate-700 font-semibold text-sm"
                        value={formData.packageName}
                        onChange={e => setFormData({...formData, packageName: e.target.value})}
                      >
                        <option value="General Checkup">General Check Up</option>
                        <option value="HAEMATOLOGY">Haematology Tests</option>
                        <option value="MICROBIOLOGY">Microbiology Tests</option>
                        <option value="CLINICAL CHEMISTRY">Clinical Chemistry</option>
                        <option value="HORMONAL ASSAYS">Hormonal Assays</option>
                        <option value="CARDIAC MARKERS">Cardiac Biomarkers</option>
                        <option value="Home Collection">Home Sample Collection</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 select-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                      </div>
                    </div>

                    {/* Pre-test Requirements Alert Box */}
                    {(() => {
                      const reqs = getTestRequirements(formData.packageName);
                      return (
                        <div className={`p-4 rounded-xl border text-xs space-y-2.5 transition-all ${reqs.badgeColor}`}>
                          <div className="flex items-center space-x-2 font-bold tracking-wide uppercase text-[10px]">
                            <AlertCircle size={14} className="flex-shrink-0" />
                            <span>{reqs.title}</span>
                          </div>
                          
                          <div className="flex items-start space-x-2 bg-white/60 p-2 rounded-lg border border-black/5">
                            <Clock size={13} className="text-slate-500 mt-0.5 flex-shrink-0" />
                            <div className="text-[11px] text-slate-700 leading-tight">
                              <span className="font-bold">Fasting Status: </span>
                              {reqs.fasting.required ? (
                                <span className="text-red-700 font-extrabold">
                                  REQUIRED ({reqs.fasting.duration})
                                </span>
                              ) : (
                                <span className="text-slate-600 font-bold">NOT REQUIRED</span>
                              )}
                              {" - "}{reqs.fasting.details}
                            </div>
                          </div>

                          <ul className="list-disc list-inside space-y-1 pl-0.5 text-[10.5px] text-slate-600 font-medium leading-relaxed">
                            {reqs.instructions.map((inst, index) => (
                              <li key={index} className="list-item">
                                <span className="pl-0.5">{inst}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })()}

                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal" size={18} />
                      <input
                        required
                        type="text"
                        placeholder="Full Name"
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        type="text"
                        placeholder="Home Address (For Collection)"
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all"
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                      />
                    </div>

                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        type="date"
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-primary-green transition-all disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer font-display tracking-wide"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <span>CONFIRM BOOKING</span>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
