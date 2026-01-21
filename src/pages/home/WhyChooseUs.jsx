import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Award, Heart, Shield, Truck, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Dignified Handling",
      description: "We treat every individual with utmost respect and dignity, ensuring proper care during difficult times.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]",
      accentColor: "from-[#4A5568]/20 to-[#2D3748]/20"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Professional Staff",
      description: "Trained and compassionate professionals who understand the importance of respectful service.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]",
      accentColor: "from-[#4A5568]/20 to-[#2D3748]/20"
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock service to assist you whenever the need arises, without delay.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]",
      accentColor: "from-[#4A5568]/20 to-[#2D3748]/20"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Proper Equipment",
      description: "Modern freezer boxes and transportation equipment maintained to the highest standards.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]",
      accentColor: "from-[#4A5568]/20 to-[#2D3748]/20"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Respectful Service",
      description: "Committed to providing services with compassion, sensitivity, and cultural awareness.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]",
      accentColor: "from-[#4A5568]/20 to-[#2D3748]/20"
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Wide Coverage",
      description: "Serving multiple communities with a fleet of specialized vehicles ready to assist.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]",
      accentColor: "from-[#4A5568]/20 to-[#2D3748]/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-[#4A5568]/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-[#2D3748]/5 blur-3xl"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-serif">
        {/* Section Header */}
        <motion.div
          className="mb-10 sm:mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#4A5568]/10 to-[#2D3748]/10 text-[#2D3748] rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-[#4A5568]/20">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            WHY CHOOSE US
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#d03b38] mb-4 sm:mb-6 px-2">
            Compassionate <span className="bg-[#d03b38] bg-clip-text text-transparent">Funeral Services</span> When You Need Support
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6 px-4">
            We provide dignified funeral and mortuary services with a commitment to respect and care. From freezer boxes to transportation and ceremony assistance, we ensure everything is handled with sensitivity during difficult times.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="h-full bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md shadow-black hover:shadow-2xl transition-all duration-500 transform sm:hover:-translate-y-2 cursor-pointer relative overflow-hidden border border-gray-100">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full opacity-50"></div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className={`inline-flex w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${service.bgIcon} rounded-xl sm:rounded-2xl items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#2D3748] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="flex items-center gap-2 text-[#4A5568] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-xs sm:text-sm font-semibold">Learn more</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#4A5568] to-[#2D3748] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Floating Badge (appears on hover) */}
              <motion.div
                className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-[#d03b38] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ 
                  scale: hoveredIndex === index ? 1 : 0,
                  rotate: hoveredIndex === index ? 0 : -45
                }}
                transition={{ duration: 0.3, ease: "backOut" }}
              >
                ✓ Trusted
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA with Enhanced Design */}
        <motion.div
          className="mt-10 sm:mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300 max-w-full">
            <div className="flex -space-x-2 sm:-space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#4A5568] to-[#2D3748] flex items-center justify-center text-white text-xs sm:text-sm font-bold border-2 border-white shadow-md">1</div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#2D3748] to-[#4A5568] flex items-center justify-center text-white text-xs sm:text-sm font-bold border-2 border-white shadow-md">2</div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-xs sm:text-sm font-bold border-2 border-white shadow-md">3</div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white text-xs sm:text-sm font-bold border-2 border-white shadow-md">+</div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span className="text-gray-700 text-sm sm:text-base font-semibold px-2">
                Trusted by families during their most difficult times
              </span>
              <div className="flex items-center gap-0.5 sm:gap-1 text-amber-500">
                <span className="text-base sm:text-lg">★★★★★</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;