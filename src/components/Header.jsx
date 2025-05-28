import React, { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="MyAutomatedAssistant" className="h-10" />
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#calculator" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
            Calculator
          </a>
          <a href="#how-it-works" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
            Success Stories
          </a>
          <a href="#contact" className="btn-primary ml-4">
            Get Started
          </a>
        </nav>
        
        <button 
          className="md:hidden text-neutral-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 border-t border-neutral-200">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#calculator" 
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculator
            </a>
            <a 
              href="#how-it-works" 
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Success Stories
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
