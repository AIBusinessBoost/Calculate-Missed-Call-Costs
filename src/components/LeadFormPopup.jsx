import React, { useState, useEffect } from 'react';

function LeadFormPopup({ open, onClose }) {
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', industry: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const industries = [
    "HVAC & Plumbing",
    "Legal Services",
    "Healthcare",
    "Real Estate",
    "Home Services",
    "Financial Services",
    "Automotive",
    "Retail",
    "Other"
  ];
  
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.business.trim()) newErrors.business = 'Business name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.industry) newErrors.industry = 'Please select your industry';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        
        // Reset form after submission
        setTimeout(() => {
          setForm({ name: '', business: '', phone: '', email: '', industry: '' });
        }, 500);
      }, 1500);
    }
  };
  
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (open) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [open, onClose]);
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setSubmitted(false);
      }, 300);
    }
  }, [open]);

  if (!open) return null;
  
  return (
    <div className="fixed inset-0 bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden transition-all duration-300 transform"
        style={{ 
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1)' : 'scale(0.95)'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
        
        <button 
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 text-2xl font-bold z-10 transition-colors"
          onClick={onClose}
        >
          ×
        </button>
        
        {submitted ? (
          <div className="text-center py-12 px-6">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p className="text-neutral-600 mb-6">
              We'll be in touch within 24 hours to schedule your free AI growth audit and show you how much revenue you could be capturing.
            </p>
            <button 
              onClick={onClose}
              className="btn-primary"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Get Your Free AI Growth Audit</h3>
                <p className="text-neutral-600">
                  Discover how much revenue you could be capturing with MyAutomatedAssistant.
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                <input
                  name="name"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handleChange}
                  className={`input-field ${errors.name ? 'border-red-500 bg-red-50' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Business Name</label>
                <input
                  name="business"
                  placeholder="Your Company, LLC"
                  value={form.business}
                  onChange={handleChange}
                  className={`input-field ${errors.business ? 'border-red-500 bg-red-50' : ''}`}
                />
                {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@yourcompany.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`input-field ${errors.email ? 'border-red-500 bg-red-50' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                <input
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={handleChange}
                  className={`input-field ${errors.phone ? 'border-red-500 bg-red-50' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Industry</label>
                <select
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  className={`input-field ${errors.industry ? 'border-red-500 bg-red-50' : ''}`}
                >
                  <option value="">Select your industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
                {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Request My Free Audit'
                )}
              </button>
              
              <p className="text-xs text-neutral-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
                We'll never share your information with third parties.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeadFormPopup;
