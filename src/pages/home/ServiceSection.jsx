import React, { useState } from 'react';
import { Heart, ArrowRight, Clock, Users, Star, Sparkles, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernCardUI = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Shield,
      title: "Freezer Box Rental",
      description: "Premium temperature-controlled preservation with dignity and professional care around the clock.",
      price: "From ₹2,000/day",
      features: ["24/7 Support", "Temperature Control", "Professional Handling"],
      gradient: "from-slate-700 to-slate-800",
      bgGradient: "from-slate-50 to-slate-100",
      link:"/services/dead-body-freezer-box",
    },
    {
      icon: Heart,
      title: "Funeral Services",
      description: "Elegant and respectful arrangements with thoughtful attention to every detail and tradition.",
      price: "Custom Packages",
      features: ["Complete Setup", "Traditional Rites", "Family Support"],
      gradient: "from-slate-700 to-slate-800",
      bgGradient: "from-slate-50 to-slate-100",
        link:"/services/funeral-services",
    },
    {
      icon: Sparkles,
      title: "Cremation Support",
      description: "Comprehensive assistance from documentation to ceremony with compassionate guidance.",
      price: "Full Service",
      features: ["Documentation", "Ritual Support", "Legal Assistance"],
      gradient: "from-slate-700 to-slate-800",
      bgGradient: "from-slate-50 to-slate-100",
        link:"/services/embalming-services",
    },
    {
      icon: Zap,
      title: "Transportation",
      description: "Safe and timely transfer services with professional handling and complete care.",
      price: "Available 24/7",
      features: ["Nationwide", "Refrigerated", "Professional Care"],
      gradient: "from-slate-700 to-slate-800",
      bgGradient: "from-slate-50 to-slate-100",
        link:"/services/ambulance-services",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 shadow-lg mb-4 sm:mb-6 border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Compassionate Care</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 tracking-tight bg-[#d03b38] bg-clip-text text-transparent px-2">
            Services with Dignity
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-3 sm:mt-4 md:mt-5 px-4">
            Professional support when you need it most
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500`} />
                
                {/* Main Card */}
                <div className={`relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 ${isHovered ? 'sm:scale-105 sm:-translate-y-2' : ''}`}>
                  {/* Top Gradient Bar */}
                  <div className={`h-1 sm:h-1.5 bg-gradient-to-r ${service.gradient}`} />
                  
                  {/* Card Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-slate-800" />
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-slate-100 rounded-full px-2.5 sm:px-3 py-1 mb-3 sm:mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] sm:text-xs font-medium text-slate-600">Available Now</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-slate-700 transition-colors leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                      {service.description}
                    </p>
                   

                    {/* Features */}
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                          <div className="w-1 h-1 rounded-full bg-slate-800 flex-shrink-0" />
                          <span className="text-[10px] sm:text-xs text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        {service.price}
                      </span>
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                    </div>

                    {/* CTA Button */}
                    <Link to={service.link}>
                      <button className={`w-full bg-[#d03b38] text-white rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-4 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}>
                        <span>Learn More</span>
                        <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                      </button>
                    </Link>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`h-24 sm:h-32 bg-gradient-to-t ${service.bgGradient} opacity-30 absolute bottom-0 left-0 right-0 -z-10 blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-50' : 'opacity-30'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModernCardUI;