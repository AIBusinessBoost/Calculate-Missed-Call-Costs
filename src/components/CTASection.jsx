import React from 'react';

function CTASection({ onCTAClick }) {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-700"></div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-70 -mt-20 -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-70 -mb-20 -ml-20"></div>
      
      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to stop losing money?</h2>
          <p className="mb-8 text-xl md:text-2xl text-white/90 leading-relaxed">
            Let us show you how our AI-powered assistant can help you capture more leads, 
            answer more calls, and dramatically increase your revenue.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-10 inline-block">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-white/80 text-sm">Calls Answered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">42%</div>
                <div className="text-white/80 text-sm">More Revenue</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">24/7</div>
                <div className="text-white/80 text-sm">Availability</div>
              </div>
            </div>
          </div>
          
          <button
            onClick={onCTAClick}
            className="bg-white text-primary-600 font-bold px-8 py-4 rounded-lg shadow-glow hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            Get My Free AI Growth Audit
          </button>
          <p className="mt-4 text-white/80">No obligation. No sales pitch. Just actionable insights.</p>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
