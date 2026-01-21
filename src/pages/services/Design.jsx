// src/pages/services/ServiceLayout.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import HowItWorks from "../HowToWork";

export default function ServiceLayout({ service }) {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const demoService = service || {
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop",
    title: "Emergency Ambulance Services",
    overview:
      "24/7 emergency medical transport with trained paramedics and advanced life support equipment. Your health and safety are our top priorities.",
    inclusions: [
      "24/7 Emergency Response Team",
      "Advanced Life Support (ALS) Equipment",
      "Certified Paramedics and EMTs",
      "GPS-Enabled Fast Response",
      "Patient Monitoring Systems",
      "Oxygen and Ventilation Support",
      "Cardiac Emergency Equipment",
      "Inter-Hospital Transfer Services",
    ],
    process: [
      {
        step: 1,
        title: "Emergency Call",
        desc: "Call our 24/7 helpline immediately. Our trained operators will gather essential information and dispatch the nearest ambulance to your location.",
      },
      {
        step: 2,
        title: "Rapid Dispatch",
        desc: "Our GPS-enabled ambulance is dispatched within seconds, with paramedics preparing medical equipment en route to ensure immediate care upon arrival.",
      },
      {
        step: 3,
        title: "Medical Care & Transport",
        desc: "Our certified paramedics provide immediate medical care and safely transport the patient to the nearest appropriate medical facility.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
    ],
    contact: "info@example.com or call +1 (555) 123-4567",
  };

  const data = service || demoService;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-white">
      {/* ======================= HERO SECTION ======================= */}
      {data.heroImage && (
     <div className="relative overflow-hidden">
  <div
    className="
      relative
      min-h-[85vh]
      sm:min-h-[90vh]
      lg:min-h-[95vh]
      xl:min-h-screen
      flex
      items-center
    "
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${data.heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
    </div>

   

    {/* Hero Content */}
    <div className="relative w-full py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Badge */}
            <div
              className="
                inline-flex items-center
                px-4 py-1.5
                rounded-full
                bg-white/10 border border-white/20
                text-white text-sm font-semibold
                mb-6
              "
            >
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              24/7 Available
            </div>

            {/* Title */}
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl xl:text-6xl
                font-bold text-white
                mb-5 leading-tight
              "
            >
              {data.title}
            </h1>

            {/* Description */}
            <p
              className="
                text-base sm:text-lg md:text-xl
                text-gray-200
                mb-8
                max-w-xl mx-auto lg:mx-0
                leading-relaxed
              "
            >
              {data.overview}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+919355331118"
                className="
                  bg-white text-[#36496e]
                  px-7 py-3
                  rounded-full
                  font-semibold
                  text-base
                  transition hover:scale-105
                  text-center
                "
              >
                Call Now
              </a>

              <Link
                to="/about"
                className="
                  border border-white/30 text-white
                  px-7 py-3
                  rounded-full
                  font-semibold
                  text-base
                  hover:bg-white/10
                  transition
                  text-center
                "
              >
                Learn More →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </div>
</div>

      )}

      {/* ======================= FEATURES SECTION ======================= */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-[#36496e]/5 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#36496e]/10 rounded-full filter blur-3xl opacity-60" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#4a5f85]/10 rounded-full filter blur-3xl opacity-60" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-5 py-1.5 sm:py-2 bg-[#36496e]/10 backdrop-blur-sm rounded-full border border-[#36496e]/20">
              <span className="text-xs sm:text-sm font-semibold text-[#36496e] tracking-wide uppercase">
                Our Advantages
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#d03b38] px-2">
              Why Choose Our Emergency Services
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6 px-4">
              Trusted by thousands for rapid response and professional care
            </p>
          
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {[
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Quick Response",
                desc: "Our ambulances reach you within minutes of your call.",
                color: "from-[#36496e] to-[#4a5f85]"
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Certified Staff",
                desc: "All our paramedics and EMTs are fully certified and experienced.",
                color: "from-[#4a5f85] to-[#36496e]"
              },
              {
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                title: "Advanced Equipment",
                desc: "State-of-the-art medical equipment for immediate care.",
                color: "from-[#36496e] to-[#5a6d8b]"
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Citywide Coverage",
                desc: "We cover all areas of the city with our ambulance network.",
                color: "from-[#4a5f85] to-[#5a6d8b]"
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#36496e]/20 relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#36496e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-4 sm:mb-5 md:mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl shadow-lg shadow-[#36496e]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                    </svg>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#36496e] rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#36496e] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.desc}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-[#d03b38] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================= SERVICES SECTION ======================= */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#36496e]/5 via-white to-[#4a5f85]/5 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#36496e]/10 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#4a5f85]/10 rounded-full filter blur-3xl opacity-40"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #36496e 1px, transparent 0)`,
          backgroundSize: '30px 30px sm:40px 40px'
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-5 py-1.5 sm:py-2 bg-[#36496e]/10 backdrop-blur-sm rounded-full border border-[#36496e]/20">
              <span className="text-xs sm:text-sm font-semibold text-[#36496e] tracking-wide uppercase">
                What We Offer
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-[#d03b38] px-2">
              Our Premium Services
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6 px-4">
              Comprehensive medical transport solutions with state-of-the-art equipment and expert staff
            </p>
            
        
          </div>
          
          {/* Enhanced Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 sm:mb-16 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-1.5 sm:p-2 max-w-3xl mx-auto border border-gray-100">
            {["All Services", "Equipment", "Staff", "Transport"].map((tab, idx) => (
              <button
                key={idx}
                className={`px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 font-bold rounded-xl sm:rounded-2xl transition-all duration-300 flex-1 text-xs sm:text-sm md:text-base ${
                  activeTab === idx
                    ? "bg-gradient-to-r from-[#36496e] to-[#4a5f85] text-white shadow-lg shadow-[#36496e]/20 transform scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {data.inclusions.map((item, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-[#36496e]/30 relative overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#36496e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#36496e]/10 to-transparent rounded-bl-full transform translate-x-10 sm:translate-x-12 -translate-y-10 sm:-translate-y-12 group-hover:translate-x-6 sm:group-hover:translate-x-8 group-hover:-translate-y-6 sm:group-hover:-translate-y-8 transition-transform duration-700" />
                
                {/* Icon with Animation */}
                <div className="relative z-10 mb-4 sm:mb-5 md:mb-6">
                  <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#36496e] to-[#4a5f85] rounded-xl sm:rounded-2xl shadow-lg shadow-[#36496e]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#36496e] rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
                </div>
                
                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10 group-hover:text-[#36496e] transition-colors">
                  {item}
                </h3>

                
                
                {/* Service Description */}
                <p className="text-gray-600 mb-4 sm:mb-6 relative z-10 leading-relaxed text-sm sm:text-base">
                  Professional {item.toLowerCase()} provided by our certified team with years of experience.
                </p>
                
                {/* Learn More Link */}
            <Link to='/about'>  <div className="relative z-10 inline-flex items-center text-[#d03b38] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-xs sm:text-sm">Learn More</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                </Link>  
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-[#d03b38] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
          
       
        </div>
      </div>

      {/* ======================= PROCESS SECTION ======================= */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#36496e]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#4a5f85]/5 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-5 py-1.5 sm:py-2 bg-[#36496e]/10 backdrop-blur-sm rounded-full border border-[#36496e]/20">
              <span className="text-xs sm:text-sm font-semibold text-[#36496e] tracking-wide uppercase">
                Our Process
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#d03b38] px-2">
              How We Serve You
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6 px-4">
              Our streamlined process ensures rapid response and professional care
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-[#36496e]/20 via-[#36496e]/40 to-[#36496e]/20 -z-10"></div>

            {data.process.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#36496e]/20 relative overflow-hidden group">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#36496e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Step number */}
                  <div className="relative z-10 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#36496e] to-[#4a5f85] rounded-2xl shadow-lg shadow-[#36496e]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <span className="text-2xl sm:text-3xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#36496e] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {step.desc}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#36496e]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================= HOW IT WORKS ======================= */}
      <HowItWorks />

      {/* ======================= GALLERY SECTION ======================= */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-[#36496e]/5 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#36496e]/10 rounded-full filter blur-3xl opacity-60" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#4a5f85]/10 rounded-full filter blur-3xl opacity-60" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #36496e 1px, transparent 0)`,
          backgroundSize: '30px 30px sm:40px 40px'
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-5 py-1.5 sm:py-2 bg-[#36496e]/10 backdrop-blur-sm rounded-full border border-[#36496e]/20">
              <span className="text-xs sm:text-sm font-semibold text-[#36496e] tracking-wide uppercase">
                Explore Our Collection
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-[#d03b38] px-2">
              Our Fleet
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6 mt-4 sm:mt-6 px-4">
              Discover our premium collection of vehicles ready to serve you
            </p>
          
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {data.gallery.map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg"
                onClick={() => setSelectedImage(img)}
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  <img
                    src={img}
                    alt={`Fleet Vehicle ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#36496e]/90 via-[#36496e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {/* View Icon with animated circle */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-25" />
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#36496e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="mt-3 sm:mt-4 text-white font-semibold text-base sm:text-lg">View Details</p>
                  </div>
                </div>
                
                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#36496e] to-transparent p-4 sm:p-5 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs sm:text-sm font-medium opacity-90">Vehicle #{idx + 1}</p>
                      <p className="text-[10px] sm:text-xs opacity-75">Click to expand</p>
                    </div>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 border-t-4 border-r-4 border-white/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ======================= CONTACT SECTION ======================= */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#36496e]/5 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#36496e]/10 rounded-full filter blur-3xl opacity-60" />
          <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#4a5f85]/10 rounded-full filter blur-3xl opacity-60" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Side */}
              <div className="h-64 sm:h-80 md:h-auto relative overflow-hidden">
                <img 
                  src="https://i.pinimg.com/1200x/2a/51/3d/2a513ddc63aa682cb7efcbfaf7792358.jpg" 
                  alt="Emergency Service" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#36496e]/20 to-transparent" />
              </div>
              
              {/* Text and Actions Side */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-14 relative">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#36496e]/5 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16" />
                
                <div className="relative z-10">
                  <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#36496e]/10 rounded-full">
                    <span className="text-xs sm:text-sm font-semibold text-[#36496e] uppercase tracking-wide">
                      24/7 Available
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d03b38] mb-4 sm:mb-6 leading-tight">
                    We're Here When You Need Us
                  </h3>
                  
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                    Our professional team is available around the clock to respond to your emergency. Don't hesitate to reach out anytime, day or night.
                  </p>
                  
                  <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                    <div className="flex items-center bg-gradient-to-r from-[#36496e]/10 to-[#36496e]/5 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#36496e]/20 hover:border-[#36496e]/30 transition-colors group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#36496e] to-[#4a5f85] rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">Emergency Hotline</p>
                        <p className="font-bold text-gray-900 text-base sm:text-lg break-all">{data.contact}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <a  
                      href="tel:+919355331118"
                      className="group flex items-center justify-center bg-[#d03b38] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-[#36496e]/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call Now
                    </a>
                    
                    <Link
                      to="/contact"
                      className="group flex items-center justify-center border-2 border-[#36496e] text-[#36496e] px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-[#36496e] hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= IMAGE MODAL ======================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 sm:top-8 right-4 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-6xl w-full animate-fadeIn">
            <img
              src={selectedImage}
              alt="Selected vehicle"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Info bar */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-8 py-2 sm:py-4 border border-white/20">
              <p className="text-white text-xs sm:text-sm font-medium">Click outside to close</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}