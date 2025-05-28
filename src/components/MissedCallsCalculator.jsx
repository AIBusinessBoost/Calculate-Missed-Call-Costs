import React, { useState, useEffect } from 'react';

function MissedCallsCalculator() {
  const [companyType, setCompanyType] = useState("HVAC Company");
  const [profitPerJob, setProfitPerJob] = useState(900);
  const [unansweredCalls, setUnansweredCalls] = useState(1350);
  const [conversionRate, setConversionRate] = useState(29);
  const [isVisible, setIsVisible] = useState(false);

  const unansweredCallLeads = Math.round(unansweredCalls * 0.52);
  const phoneLeadConversions = Math.round(unansweredCallLeads * (conversionRate / 100));
  const unrealizedProfits = phoneLeadConversions * profitPerJob;
  const yearlyLoss = unrealizedProfits * 12;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      observer.observe(calculatorElement);
    }

    return () => {
      if (calculatorElement) {
        observer.unobserve(calculatorElement);
      }
    };
  }, []);

  return (
    <section id="calculator" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-text">Revenue Cost</span> of Unanswered Calls
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Use our calculator to see how much money your business is leaving on the table every month from missed calls and leads.
          </p>
        </div>
        
        <div className={`card p-8 md:p-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center mb-8">
            <span className="mr-2 text-neutral-500">Example:</span>
            <div className="relative">
              <input
                type="text"
                value={companyType}
                onChange={e => setCompanyType(e.target.value)}
                placeholder="Type of Company"
                className="border-b-2 border-primary-300 px-3 py-1 text-neutral-700 focus:outline-none focus:border-primary-500 w-48 bg-transparent"
              />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-10">
              <div>
                <label className="block font-semibold text-neutral-800 mb-3">Average profit per job</label>
                <div className="relative">
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={profitPerJob}
                    onChange={e => setProfitPerJob(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="absolute -top-2 left-0 right-0">
                    <div className="relative h-0">
                      <div 
                        className="absolute top-0 -mt-1 text-xs font-medium text-neutral-500"
                        style={{ left: `${((profitPerJob - 100) / (2000 - 100)) * 100}%`, transform: 'translateX(-50%)' }}
                      >
                        ${profitPerJob}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-neutral-500 mt-1">
                  <span>$100</span>
                  <span>$2,000</span>
                </div>
                <div className="text-primary-600 text-2xl font-bold mt-2">${profitPerJob.toLocaleString()}</div>
              </div>
              
              <div>
                <label className="block font-semibold text-neutral-800 mb-3">Unanswered calls per month</label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    step="10"
                    value={unansweredCalls}
                    onChange={e => setUnansweredCalls(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="absolute -top-2 left-0 right-0">
                    <div className="relative h-0">
                      <div 
                        className="absolute top-0 -mt-1 text-xs font-medium text-neutral-500"
                        style={{ left: `${(unansweredCalls / 3000) * 100}%`, transform: 'translateX(-50%)' }}
                      >
                        {unansweredCalls}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-neutral-500 mt-1">
                  <span>0</span>
                  <span>3,000</span>
                </div>
                <div className="text-primary-600 text-2xl font-bold mt-2">{unansweredCalls.toLocaleString()}</div>
              </div>
              
              <div>
                <label className="block font-semibold text-neutral-800 mb-3">Phone lead conversion rate (%)</label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={conversionRate}
                    onChange={e => setConversionRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="absolute -top-2 left-0 right-0">
                    <div className="relative h-0">
                      <div 
                        className="absolute top-0 -mt-1 text-xs font-medium text-neutral-500"
                        style={{ left: `${conversionRate}%`, transform: 'translateX(-50%)' }}
                      >
                        {conversionRate}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-neutral-500 mt-1">
                  <span>1%</span>
                  <span>100%</span>
                </div>
                <div className="text-primary-600 text-2xl font-bold mt-2">{conversionRate}%</div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center h-full">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 rounded-lg p-4 text-center border border-neutral-200">
                  <span className="text-neutral-600 block mb-1 text-sm">Unanswered call leads</span>
                  <div className="text-2xl font-bold text-primary-500">{unansweredCallLeads.toLocaleString()}</div>
                </div>
                
                <div className="bg-neutral-50 rounded-lg p-4 text-center border border-neutral-200">
                  <span className="text-neutral-600 block mb-1 text-sm">Phone lead conversions</span>
                  <div className="text-2xl font-bold text-secondary-500">{phoneLeadConversions.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-xl p-6 text-center shadow-elegant">
                <div className="text-lg mb-2 text-white/90">{phoneLeadConversions.toLocaleString()} x ${profitPerJob.toLocaleString()} =</div>
                <div className="text-4xl font-extrabold mb-1">${unrealizedProfits.toLocaleString()}</div>
                <div className="text-lg mb-6 text-white/90">Monthly Unrealized Profits</div>
                
                <div className="h-px bg-white/20 mb-6"></div>
                
                <div className="text-5xl font-extrabold mb-1">${yearlyLoss.toLocaleString()}</div>
                <div className="text-xl font-semibold">Yearly Lost Revenue</div>
                
                <a 
                  href="#contact" 
                  className="mt-8 inline-block bg-white text-primary-600 font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1"
                >
                  Stop Losing Money Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissedCallsCalculator;
