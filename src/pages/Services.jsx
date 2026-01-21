import React, { useState, useEffect } from 'react';
import { Shield, Activity, Star, CheckCircle, ArrowRight, Phone, MapPin, Clock, Heart, Home, Car, User, Sparkles, Feather, Trees, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

import { IoBookOutline } from "react-icons/io5";

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      icon: Home,
      title: 'Funeral Services',
      image: "/blog-img/fu.jpg",
      description: 'Complete end-to-end funeral arrangements with dignity and respect',
      details: 'We provide comprehensive funeral services that honor your loved one with dignity. From preparation to final rites, our experienced team ensures every detail is handled with sensitivity and respect.',
      features: ['Complete Arrangements', 'Dignified Handling', 'Documentation Support', '24/7 Availability'],
      color: '#4A5568',
    },
    {
      id: 2,
      icon: Heart,
      title: 'Funeral Ceremony',
      image: "/blog-img/8.jpg",
      description: 'Traditional and contemporary funeral ceremonies conducted with reverence',
      details: 'Our ceremony services blend traditional customs with personal touches to create a meaningful farewell. We coordinate all aspects of the ceremony according to your cultural and religious preferences.',
      features: ['Traditional Rituals', 'Custom Ceremonies', 'Flower Arrangements', 'Memorial Setup'],
      color: '#718096',
    },
    {
      id: 3,
      icon: Car,
      title: 'Transportation Services',
      image: "/blog-img/9.jpg",
      description: 'Dignified and respectful transportation for the deceased',
      details: 'We provide specialized transportation services with freezer boxes and proper handling. Our vehicles are equipped to maintain dignity and respect during transit to any location.',
      features: ['Freezer Box Transport', 'Temperature Controlled', 'Professional Staff', 'Multi-location Service'],
      color: '#2D3748',
    },
    {
      id: 4,
      icon: User,
      title: 'Pandit for Funeral',
      image: "/blog-img/pandit2.jpg",
      description: 'Experienced and knowledgeable pandits for conducting funeral rites',
      details: 'We arrange experienced pandits who understand the importance of proper funeral rites. They guide families through the process with patience and respect for traditions.',
      features: ['Experienced Pandits', 'All Rituals Covered', 'Puja Materials', 'Guidance & Support'],
      color: '#1A202C',
    },
     {
  id: 5,
  icon: User,
  title: 'Deadbody Freezerbox',
  image: "/blog-img/11.jpg",
  description: 'Reliable and hygienic dead body freezer box services for safe preservation.',
  details: 'We provide high-quality freezer boxes designed to preserve the body with proper temperature control. Our team ensures timely delivery, installation, and maintenance, offering families peace of mind during critical moments.',
  features: [
    '24/7 Availability',
    'Hygienic & Temperature-Controlled Freezer Boxes',
    'Doorstep Delivery & Pickup',
    'Professional Handling & Support'
  ],
  color: '#1A202C',
}
  ];

  const processSteps = [
    {
      title: 'Initial Contact',
      description: 'Reach out to our compassionate team',
      icon: Phone,
      bg: 'bg-blue-50',
    },
    {
      title: 'Service Planning',
      description: 'Personalized arrangements discussion',
      icon: Clock,
      bg: 'bg-purple-50',
    },
    {
      title: 'Service Execution',
      description: 'Dignified service delivery',
      icon: Activity,
      bg: 'bg-pink-50',
    },
    {
      title: 'Final Support',
      description: 'Complete assistance through farewell',
      icon: Heart,
      bg: 'bg-indigo-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section - New Design */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-64 h-48 sm:h-64 bg-blue-200 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-64 h-48 sm:h-64 bg-purple-200 rounded-full filter blur-3xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative overflow-hidden text-white mt-12 sm:mt-15 h-64 sm:h-80 md:h-96 lg:h-[500px]">
          {/* Background Image with Parallax Effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center sm:bg-fixed"
            style={{ backgroundImage: "url('/banner12.png')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent"></div>
          </div>

          <div
            className={`relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-full text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 font-serif leading-tight drop-shadow-lg px-2">
                Our Services
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 drop-shadow px-4">
                Explore medical stories, health tips, and ambulance service updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Grid with Centered Last Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif px-2">
            Our <span className="text-gray-600">Services</span>
          </h2>
          <motion.div className="w-16 sm:w-20 md:w-24 h-1 bg-gray-800 mx-auto mb-2 sm:mb-3 mt-1"></motion.div>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive support services to help you navigate this difficult time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLastCard = index === services.length - 1;
            return (
              <div
                key={service.id}
                className={`${isLastCard ? 'md:col-span-2 md:flex md:justify-center' : ''} transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`${isLastCard ? 'md:w-2/3 lg:w-1/2' : 'w-full'} bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-73 overflow-hidden">
                    {/* IMAGE Instead of Icon */}
                    <div className="relative h-full flex items-center justify-center">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="h-full object-cover w-full" 
                      />
                    </div>

                    <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center transform transition-all duration-500 
                      ${hoveredCard === index ? 'rotate-12 scale-110' : ''}`}>
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details - New Design */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              
              {/* Left Side - Visual */}
              <div className="relative h-64 sm:h-80 md:h-auto">
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-90"
                  style={{ backgroundColor: services[activeService].color }}
                ></div>

                <div className="relative h-full flex items-center justify-center p-8 sm:p-10 md:p-12">
                  <div className="text-center text-white">
                    {/* Updated Part — Image Instead of Emoji/Icon */}
                    <img
                      src="/blog-img/12.jpg"
                      alt={services[activeService].title}
                      className="w-full h-full mx-auto mb-4 sm:mb-6 object-contain"
                    />

                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                      {services[activeService].title}
                    </h3>
                    <div className="w-16 sm:w-20 h-1 bg-white mx-auto opacity-50"></div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">Service Details</h2>

                <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  {services[activeService].details}
                </p>

                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <button className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm sm:text-base font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
                    Request This Service
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Process Section - New Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif px-2">
            How We <span className="text-gray-600">Support You</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our caring team is here to guide you through every step
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Background connecting line */}
          <div className="hidden md:block absolute top-10 sm:top-12 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
          
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative text-center transform transition-all duration-700 z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 sm:mb-6">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full ${step.bg} flex items-center justify-center transform transition-all duration-500 hover:scale-110 relative z-10`}>
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700" />
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm px-2">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-100 to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-white rounded-full shadow-lg mb-4 sm:mb-6">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif px-2">We're Here For You</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              Contact us anytime for compassionate support and professional funeral services
            </p>
            <Link to="/contact">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold text-sm sm:text-base rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}