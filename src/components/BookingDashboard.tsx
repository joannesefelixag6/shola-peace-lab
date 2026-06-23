import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Calendar, ClipboardCheck, User, MapPin, Mail, Phone } from 'lucide-react';
import { safeStorage } from '../lib/storage';

interface Booking {
  id: number;
  name: string;
  email?: string;
  phone: string;
  address: string;
  date: string;
  packageName: string;
  status: string;
  timestamp: string;
}

interface BookingDashboardProps {
  onBook?: (packageName?: string) => void;
}

export default function BookingDashboard({ onBook }: BookingDashboardProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const loadBookings = () => {
    const saved = safeStorage.getItem('sholapeace_bookings');
    if (saved) {
      setBookings(JSON.parse(saved).sort((a: any, b: any) => b.id - a.id));
    } else {
      setBookings([]);
    }
  };

  useEffect(() => {
    loadBookings();
    window.addEventListener('storage', loadBookings);
    return () => window.removeEventListener('storage', loadBookings);
  }, []);

  const deleteBooking = (id: number) => {
    const updated = bookings.filter(b => b.id !== id);
    safeStorage.setItem('sholapeace_bookings', JSON.stringify(updated));
    setBookings(updated);
  };

  if (bookings.length === 0) {
    return (
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight">
              MY <span className="text-primary-green">APPOINTMENTS</span>
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Securely track and manage your local diagnostic tests and home sample collection schedules.
            </p>
          </div>

          {/* Interactive Placeholder Card */}
          <div className="max-w-2xl mx-auto bg-white/5 border border-dashed border-white/10 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/5 rounded-full blur-2xl -z-10 group-hover:bg-primary-green/10 transition-colors"></div>
            
            <div className="w-16 h-16 bg-primary-green/10 border border-primary-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-green">
              <Calendar size={32} className="animate-pulse" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">No Scheduled Appointments</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              You haven't requested any diagnostic packages yet. Book a session or request a home-collection service, and your progress will appear live in this dashboard!
            </p>

            <button
              onClick={() => onBook?.('General Checkup')}
              className="inline-flex items-center space-x-2.5 bg-primary-green text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg shadow-primary-green/10 active:scale-95 transform-gpu cursor-pointer"
              id="dashboard-book-btn"
            >
              <span>SCHEDULE HEALTH TEST NOW</span>
              <ClipboardCheck size={18} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight">
              MY <span className="text-primary-green">APPOINTMENTS</span>
            </h2>
            <p className="text-slate-400 mt-2 text-sm">Locally saved booking requests (Preview Mode)</p>
          </div>
          <div className="bg-primary-green/10 px-4 py-2 rounded-full border border-primary-green/20 w-fit">
            <span className="text-primary-green font-bold text-sm">{bookings.length} Total</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {bookings.map((booking) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-2">
                  <button 
                    onClick={() => deleteBooking(booking.id)}
                    className="p-2 text-slate-500 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-green/20 rounded-full flex items-center justify-center text-primary-green">
                    <ClipboardCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{booking.packageName}</h4>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{booking.status}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-slate-300">
                    <User size={14} className="text-primary-green" />
                    <span>{booking.name}</span>
                  </div>
                  {booking.email && (
                    <div className="flex items-center space-x-3 text-sm text-slate-300">
                      <Mail size={14} className="text-primary-green" />
                      <span className="truncate">{booking.email}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-3 text-sm text-slate-300">
                    <Phone size={14} className="text-primary-green" />
                    <span>{booking.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-slate-300">
                    <Calendar size={14} className="text-primary-green" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-slate-300">
                    <MapPin size={14} className="text-primary-green" />
                    <span className="truncate">{booking.address}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">ID: {booking.id}</span>
                  <button className="text-[10px] font-bold text-primary-green hover:underline">
                    VIEW DETAILS
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
