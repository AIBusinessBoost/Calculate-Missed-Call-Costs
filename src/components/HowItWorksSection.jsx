import React, { useState } from 'react';

function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState('capture');
  
  const steps = [
    {
      id: 1,
      title: "Calculate Your Loss",
      description: "Use our calculator to see how much revenue you're currently losing from missed calls and leads.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Get Your Free Audit",
      description: "Our team analyzes your current call handling process and identifies specific improvement areas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Implement AI Solution",
      description: "We set up our AI system to capture every lead and ensure no call goes unanswered.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Watch Revenue Grow",
      description: "Track your increased conversion rates and revenue growth through our real-time dashboard.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const features = {
    capture: {
      title: "AI-Powered Lead Capture",
      description: "Never miss another opportunity with our 24/7 AI assistant that answers every call, captures lead information, and qualifies prospects in real-time.",
      image: "https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stats: [
        { value: "100%", label: "Call answer rate" },
        { value: "24/7", label: "Availability" },
        { value: "45%", label: "More leads captured" }
      ],
      benefits: [
        "Never miss a call again, even after hours",
        "Capture complete lead information automatically",
        "Qualify leads based on your custom criteria",
        "Instant lead notifications to your team"
      ]
    },
    engage: {
      title: "Intelligent Lead Engagement",
      description: "Our AI assistant engages with leads naturally, answering questions, providing information, and scheduling appointments without human intervention.",
      image: "https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stats: [
        { value: "89%", label: "Customer satisfaction" },
        { value: "3.5x", label: "Faster response" },
        { value: "68%", label: "Appointment rate" }
      ],
      benefits: [
        "Natural, conversational AI interactions",
        "Answers common questions instantly",
        "Schedules appointments directly to your calendar",
        "Follows up with leads automatically"
      ]
    },
    convert: {
      title: "Conversion Optimization",
      description: "Turn more leads into customers with AI-driven follow-ups, personalized messaging, and strategic engagement based on lead behavior.",
      image: "https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stats: [
        { value: "37%", label: "Higher conversion" },
        { value: "42%", label: "Revenue increase" },
        { value: "78%", label: "Follow-up rate" }
      ],
      benefits: [
        "Personalized follow-up sequences",
        "Behavior-based engagement strategies",
        "Automated nurturing campaigns",
        "Performance analytics and optimization"
      ]
    }
  };

  return (
    <section id="how-it-works" className="section-padding bg-neutral-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">MyAutomatedAssistant</span> Works
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Our AI-powered system ensures you never miss another opportunity, automatically capturing and converting leads 24/7.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={step.id} className="card p-6 text-center relative group hover:shadow-elegant">
              <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="h-6 w-6 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              
              <div className="absolute -top-3 -left-3 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {step.id}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-elegant overflow-hidden mb-16">
          <div className="flex flex-wrap border-b border-neutral-200">
            <button
              className={`px-6 py-4 font-semibold text-lg transition-colors ${
                activeTab === 'capture' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-500 hover:text-primary-500'
              }`}
              onClick={() => setActiveTab('capture')}
            >
              Lead Capture
            </button>
            <button
              className={`px-6 py-4 font-semibold text-lg transition-colors ${
                activeTab === 'engage' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-500 hover:text-primary-500'
              }`}
              onClick={() => setActiveTab('engage')}
            >
              Lead Engagement
            </button>
            <button
              className={`px-6 py-4 font-semibold text-lg transition-colors ${
                activeTab === 'convert' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-500 hover:text-primary-500'
              }`}
              onClick={() => setActiveTab('convert')}
            >
              Conversion
            </button>
          </div>
          
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{features[activeTab].title}</h3>
                <p className="text-neutral-600 mb-6">{features[activeTab].description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {features[activeTab].stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-neutral-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                      <div className="text-sm text-neutral-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <ul className="space-y-3">
                  {features[activeTab].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <img 
                  src={features[activeTab].image} 
                  alt={features[activeTab].title}
                  className="rounded-xl shadow-md w-full h-auto object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-elegant p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-neutral-800">AI Assistant Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#contact" className="btn-primary">
            Get Your AI Assistant Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
