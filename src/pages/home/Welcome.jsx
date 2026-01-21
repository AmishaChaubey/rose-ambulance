import { useState, useEffect } from "react";
import { Phone, Heart, ArrowRight, Clock, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function WelcomeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { 
      title: "Freezer Box", 
      icon: "❄️",
      description: "Temperature-controlled preservation facilities"
    },
    { 
      title: "Funeral Arrangements", 
      icon: "📋",
      description: "Complete ceremony planning and coordination"
    },
    { 
      title: "Cremation Support", 
      icon: "🔥",
      description: "Respectful cremation services and guidance"
    },
    { 
      title: "Transportation", 
      icon: "🚚",
      description: "Safe and dignified transport services"
    }
  ];

  const trustIndicators = [
    { icon: Clock, text: "24/7 Available" },
    { icon: Shield, text: "Licensed & Certified" },
    { icon: Users, text: "Experienced Team" }
  ];

  return (
    <>
      {/* Google Fonts Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        `}
      </style>

      <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-slate-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-radial from-blue-50/20 to-transparent rounded-full" />
        </div>

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className={`text-center transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
          

            {/* Main Heading with elegant serif typography */}
            <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d03b38] leading-tight px-2" style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.01em' }}>
                <span className="block mb-1 sm:mb-2" style={{ fontWeight: 400 }}>Dignified Care</span>
                <span className="block bg-slate-800 bg-clip-text text-transparent" style={{ fontWeight: 600 }}>
                  In Your Time of Need
                </span>
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />
            </div>

            {/* Enhanced Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed px-4" style={{ fontFamily: '"Lato", sans-serif', fontWeight: 300 }}>
              Providing <span style={{ fontWeight: 700 }} className="text-slate-700">compassionate funeral services</span> with unwavering respect, 
              personalized arrangements, and gentle support during life's most difficult moments.
            </p>

            {/* Premium Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-16 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`
                    relative h-full py-6 sm:py-7 md:py-8 px-4 sm:px-5 md:px-6 bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl 
                    border border-slate-200/60 shadow-lg hover:shadow-2xl 
                    transform transition-all duration-500 cursor-default
                    ${activeService === index ? 'sm:-translate-y-3 shadow-slate-300/50' : 'sm:hover:-translate-y-2'}
                  `}>
                    {/* Gradient overlay on hover */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-50/50 
                      rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-500
                      ${activeService === index ? 'opacity-100' : 'group-hover:opacity-100'}
                    `} />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3 sm:space-y-4">
                      <div className={`
                        text-4xl sm:text-5xl transform transition-all duration-500
                        ${activeService === index ? 'scale-110 ' : 'group-hover:scale-110'}
                      `}>
                        {service.icon}
                      </div>
                      <h3 className="text-slate-800 text-base sm:text-lg" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 600, letterSpacing: '0.02em' }}>
                        {service.title}
                      </h3>
                      <p className={`
                        text-xs sm:text-sm text-slate-600 leading-relaxed transition-all duration-500
                        ${activeService === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}
                      `} style={{ fontFamily: '"Lato", sans-serif', fontWeight: 400 }}>
                        {service.description}
                      </p>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-slate-200/30 to-transparent rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section with improved styling */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-center mb-8 sm:mb-10 md:mb-12">
              <Link to="/about" className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-xl sm:shadow-2xl hover:shadow-slate-900/30 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ fontFamily: '"Lato", sans-serif', fontWeight: 700, letterSpacing: '0.02em' }}>
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    Explore More About Us
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </Link>
              
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto bg-white/90 backdrop-blur-sm border-2 border-slate-300 text-slate-800 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-lg sm:shadow-xl hover:shadow-slate-400/30 hover:bg-white hover:border-slate-400 transform hover:-translate-y-1 transition-all duration-300" style={{ fontFamily: '"Lato", sans-serif', fontWeight: 700, letterSpacing: '0.02em' }}>
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:rotate-12 transition-transform duration-300" />
                    Call Us Now
                  </span>
                </button>
              </Link>
            </div>

            {/* Location badge */}
            <div className="mt-4 sm:mt-6 inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-slate-700" style={{ fontFamily: '"Lato", sans-serif', fontWeight: 400 }}>Serving Greater Noida & Uttar Pradesh</span>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>
    </>
  );
}