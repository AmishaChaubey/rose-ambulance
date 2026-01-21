import React from 'react';
import { DollarSign, Users, Clock, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Price",
      description: "We provide high quality emergency ambulance services at competitive rates"
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Our team consists of certified paramedics and healthcare professionals"
    },
    {
      icon: Clock,
      title: "18+ Years Experience",
      description: "Over 18 years of trusted emergency medical services and patient care"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in emergency response and life-saving care"
    }
  ];

  return (
    <div className="min-h-screen bg-[#36496e] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="text-white text-xs sm:text-sm font-medium mb-2 sm:mb-3">Why Choose Us</p>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 sm:gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-md leading-tight">
              Why Trust Us for Your IT Needs?
            </h1>
            <button className="bg-[#d03b38] hover:bg-[#df2825] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors hidden md:block flex-shrink-0">
              Get A Quote
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            <img 
              src="https://i.pinimg.com/1200x/d8/f9/a1/d8f9a1b025739325ab75acc74dbeb76b.jpg" 
              alt="Medical Team"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
            />
          </div>

          {/* Right Side - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="space-y-3 sm:space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-white text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <div className="mt-6 sm:mt-8 md:hidden">
          <button className="w-full bg-[#d03b38] hover:bg-[#e2221f] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors">
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
}