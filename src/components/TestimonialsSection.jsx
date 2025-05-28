import React, { useState, useEffect } from 'react';

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      title: "Owner",
      company: "Rodriguez Plumbing & Heating",
      quote: "We were missing over 40% of our calls during peak season. After implementing MyAutomatedAssistant, we've captured an additional $18,000 in monthly revenue. The ROI has been incredible.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      stats: {
        callsAnswered: "100%",
        revenueIncrease: "42%",
        roi: "1,240%"
      }
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Managing Partner",
      company: "Johnson Law Firm",
      quote: "The calculator was eye-opening. We had no idea we were losing $9,500 per month in potential revenue from missed calls. MyAutomatedAssistant solved this problem completely and our client acquisition has doubled.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      stats: {
        callsAnswered: "100%",
        revenueIncrease: "37%",
        roi: "980%"
      }
    },
    {
      id: 3,
      name: "David Chen",
      title: "CEO",
      company: "Reliable Roofing",
      quote: "Our ROI with MyAutomatedAssistant has been incredible. For every $1 we spend, we're getting back $27 in new business that we were previously missing. The AI assistant handles calls better than our previous receptionist.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
      stats: {
        callsAnswered: "100%",
        revenueIncrease: "53%",
        roi: "2,700%"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const testimonialElement = document.getElementById('testimonials');
    if (testimonialElement) {
      observer.observe(testimonialElement);
    }

    return () => {
      if (testimonialElement) {
        observer.unobserve(testimonialElement);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Businesses That Stopped <span className="gradient-text">Losing Money</span>
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            See how companies like yours are capturing more leads and increasing revenue with MyAutomatedAssistant.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-white rounded-2xl shadow-elegant overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3">
                  <svg className="text-primary-300 h-16 w-16 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <div className="relative testimonial-content h-32">
                    {testimonials.map((testimonial, index) => (
                      <blockquote 
                        key={testimonial.id}
                        className={`text-xl md:text-2xl text-neutral-700 italic absolute transition-all duration-500 ${
                          index === activeIndex 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-20'
                        }`}
                      >
                        "{testimonial.quote}"
                      </blockquote>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-neutral-200">
                    <div className="relative h-20">
                      {testimonials.map((testimonial, index) => (
                        <div 
                          key={testimonial.id}
                          className={`flex items-center absolute transition-all duration-500 ${
                            index === activeIndex 
                              ? 'opacity-100 translate-x-0' 
                              : 'opacity-0 -translate-x-10'
                          }`}
                        >
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-200"
                          />
                          <div>
                            <h3 className="font-bold text-lg">{testimonial.name}</h3>
                            <p className="text-neutral-600">{testimonial.title}, {testimonial.company}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex mt-6 space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === activeIndex 
                              ? 'bg-primary-500 w-6' 
                              : 'bg-neutral-300 hover:bg-neutral-400'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 bg-neutral-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">Results Achieved</h3>
                  
                  <div className="space-y-6">
                    {Object.entries(testimonials[activeIndex].stats).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="text-neutral-600">
                          {key === 'callsAnswered' && 'Calls Answered'}
                          {key === 'revenueIncrease' && 'Revenue Increase'}
                          {key === 'roi' && 'Return on Investment'}
                        </div>
                        <div className="text-2xl font-bold text-primary-600">{value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <div className="text-center">
                      <div className="text-sm text-neutral-500 mb-1">Overall Satisfaction</div>
                      <div className="flex justify-center text-yellow-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#calculator" 
              className="btn-primary"
            >
              Calculate Your Potential Revenue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
