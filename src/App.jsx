import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissedCallsCalculator from './components/MissedCallsCalculator';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import LeadFormPopup from './components/LeadFormPopup';
import Footer from './components/Footer';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          <div className="text-xl font-semibold text-neutral-700">Loading MyAutomatedAssistant...</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <MissedCallsCalculator />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection onCTAClick={() => setFormOpen(true)} />
      </main>
      <LeadFormPopup open={formOpen} onClose={() => setFormOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;
