import React, { useState, useEffect } from 'react';

const StepCard = ({ step, index, isActive, onHover, onLeave }) => {
  return (
    <div 
      className={`relative transform transition-all duration-700 ${
        isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#36496e]/20 overflow-hidden shadow-lg shadow-black">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#36496e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-[#36496e]/10 to-transparent rounded-bl-full transform translate-x-12 sm:translate-x-14 md:translate-x-16 -translate-y-12 sm:-translate-y-14 md:-translate-y-16 group-hover:translate-x-10 sm:group-hover:translate-x-12 group-hover:-translate-y-10 sm:group-hover:-translate-y-12 transition-transform duration-700" />
        
        {/* Number with elegant styling */}
        <div className="relative flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
          <div className="relative">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-[#d03b38] mb-3 sm:mb-4 group-hover:text-[#d03b38] flex items-center justify-center shadow-lg shadow-[#36496e]/20 transform group-hover:scale-110 transition-all duration-500">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                {step.number}
              </span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#36496e] rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#d03b38] mb-3 sm:mb-4 group-hover:text-[#d03b38] transition-colors">
            {step.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
            {step.description}
          </p>
          
          {step.subtext && (
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gradient-to-r from-[#36496e]/5 to-[#36496e]/10 rounded-lg sm:rounded-xl border border-[#36496e]/20 backdrop-blur-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#36496e] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-xs sm:text-sm text-[#36496e] font-medium">
                  {step.subtext}
                </p>
              </div>
            </div>
          )}
          
          {/* Hover arrow */}
          <div className="mt-4 sm:mt-5 md:mt-6 flex items-center text-[#36496e] font-semibold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500">
            <span className="text-xs sm:text-sm">Learn more</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      number: '01',
      title: "Tell Us About Yourself",
      description: "Looking for a new script? We'll find the perfect match for your lifestyle.",
     
    },
    {
      number: '02',
      title: "Speak With Our Medical Team",
      description: "Speak with a medical professional without stepping foot in an office. Chat online to find the best birth control for you."
    },
    {
      number: '03',
      title: "Receive Your Medication",
      description: "We'll deliver your birth control directly to your door — at no additional cost."
    },
    {
      number: '04',
      title: "Enjoy Your Extra Free Time",
      description: "Never stand in line at a pharmacy again. Manage automatic refills, pause or change your prescription anytime."
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#36496e]/5 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#36496e]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#4a5f85]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#36496e]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #36496e 1px, transparent 0)`,
        backgroundSize: '30px 30px sm:40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-5 py-1.5 sm:py-2 bg-[#36496e]/10 backdrop-blur-sm rounded-full border border-[#36496e]/20">
            <span className="text-xs sm:text-sm font-semibold text-[#36496e] tracking-wide uppercase">
              Simple Process
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-[#d03b38] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>

          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6 px-4">
            Get your birth control delivered in 4 simple steps
          </p>
        </div>

        {/* Enhanced Progress bar */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="relative flex justify-between items-center px-2 sm:px-4">
            {/* Background line */}
            <div className="absolute top-1/2 left-4 sm:left-8 right-4 sm:right-8 h-0.5 sm:h-1 bg-gray-200 -translate-y-1/2 rounded-full" />
            
            {/* Active progress line with gradient */}
            <div 
              className="absolute top-1/2 left-4 sm:left-8 h-0.5 sm:h-1 bg-gradient-to-r from-[#36496e] to-[#4a5f85] -translate-y-1/2 rounded-full transition-all duration-1000 ease-out shadow-md sm:shadow-lg shadow-[#36496e]/20"
              style={{ 
                width: `calc(${(activeStep / (steps.length - 1)) * 100}% * (100% - 2rem) / 100)`,
              }}
            />
            
            {/* Step indicators */}
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 flex flex-col items-center gap-2 sm:gap-3 transition-all duration-500 group ${
                  index <= activeStep ? 'scale-100' : 'scale-90'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 sm:border-4 transition-all duration-500 ${
                  index <= activeStep
                    ? 'bg-gradient-to-br from-[#36496e] to-[#4a5f85] border-white shadow-lg sm:shadow-xl shadow-[#36496e]/30 scale-105 sm:scale-110'
                    : 'bg-white border-gray-300 group-hover:border-[#36496e]/30 group-hover:scale-105'
                }`}>
                  {index < activeStep ? (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : index === activeStep ? (
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-400 group-hover:bg-[#36496e]/30 transition-colors" />
                  )}
                </div>
                
                <span className={`text-[10px] sm:text-xs font-semibold transition-colors hidden sm:block ${
                  index <= activeStep ? 'text-[#36496e]' : 'text-gray-400 group-hover:text-gray-600'
                }`}>
                  Step {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-10 sm:mb-12 md:mb-16">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isActive={index <= activeStep}
              onHover={() => setHoveredStep(index)}
              onLeave={() => setHoveredStep(null)}
            />
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}