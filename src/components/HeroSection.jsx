import React from 'react';

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Stop Losing Money.</span>
              <br />
              <span className="text-neutral-800">Start Growing with AI.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Most businesses lose thousands every month from missed calls and uncontacted leads. Don't be one of them.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-8 inline-block shadow-soft">
              <div className="text-2xl md:text-3xl font-bold text-accent-600 animate-pulse">
                $23,000,000,000+ lost by small businesses every year
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#calculator" 
                className="btn-primary text-center"
              >
                Calculate Your Lost Revenue
              </a>
              <a 
                href="#how-it-works" 
                className="btn-secondary text-center"
              >
                See How It Works
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 w-full h-full bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Business team celebrating growth" 
                className="rounded-2xl shadow-elegant object-cover w-full max-h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-elegant p-4 max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-neutral-700">Live Results</span>
                </div>
                <div className="text-2xl font-bold text-primary-600">+42% Revenue</div>
                <div className="text-sm text-neutral-500">Average client growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
