/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureBar from './components/FeatureBar';
import Accreditations from './components/Accreditations';
import HealthPackages from './components/HealthPackages';
import HomeCollection from './components/HomeCollection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import StatsBar from './components/StatsBar';
import HealthBlog from './components/HealthBlog';
import FAQSection from './components/FAQSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import BookingDashboard from './components/BookingDashboard';
import { useState } from 'react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const openBooking = (packageName: string = 'General Checkup') => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <TopHeader />
      <Navbar onBook={openBooking} />
      <main className="flex-grow">
        <Hero onBook={openBooking} />
        <FeatureBar />
        <Accreditations />
        <AboutSection />
        <HealthPackages onBook={openBooking} />
        <HomeCollection onBook={openBooking} />
        <ServicesSection onBook={openBooking} />
        <StatsBar />
        <HealthBlog />
        <FAQSection onBook={openBooking} />
        <BookingDashboard />
        <Testimonials />
      </main>
      <Footer onBook={openBooking} />
      <FloatingActions />
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        packageName={selectedPackage}
      />
    </div>
  );
}

