import React from 'react';

export default function BannerSection({ 
  bannerData, 
  breadcrumbData, 
  introductionData 
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Banner Section with Overlay */}
      <section 
        className="relative py-32 px-6 overflow-hidden" 
        style={{ 
          backgroundImage: `url(${bannerData.backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-white animate-fade-in">
            {bannerData.title}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
            {bannerData.subtitle}
          </p>
        </div>
      </section>

      {/* Enhanced Breadcrumb */}
      <div className="max-w-7xl mx-auto py-8">
        <div className="bg-white rounded-xl shadow-md px-6 py-4 inline-flex items-center space-x-3 hover:shadow-lg transition-shadow duration-300">
          <nav className="flex items-center space-x-3">
            <a 
              href={breadcrumbData.homeLink} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
            >
              <svg 
                className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" 
                style={{ color: '#1e4d83' }} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="font-medium text-sm" style={{ color: '#1e4d83' }}>
                {breadcrumbData.homeText}
              </span>
            </a>
            
            <svg 
              className="w-5 h-5" 
              style={{ color: '#1e4d83' }} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            
            <span 
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold text-sm"
              style={{ 
                color: '#a81514',
                backgroundColor: 'rgba(168, 21, 20, 0.08)'
              }}
            >
              <svg 
                className="w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {breadcrumbData.currentPageText}
            </span>
          </nav>
        </div>
      </div>

      {/* Enhanced Introduction Section */}
      <section className="py-12 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-red-600"></div>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#a81514' }}>
                {introductionData.sectionLabel}
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-red-600 to-red-600"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
              {introductionData.title}
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {introductionData.description}
            </p>
          </div>

          {/* Content Grid - First Row */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-right">
              <div className="relative">
                {/* Decorative quote mark */}
                <div className="absolute -left-4 -top-2 text-7xl font-serif opacity-10" style={{ color: '#1e4d83' }}>"</div>
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-blue-900">
                  <p className="text-lg leading-relaxed mb-6" style={{ color: '#1e4d83' }}>
                    {introductionData.content.row1.text1.before}
                    <span className="font-semibold text-red-600">{introductionData.content.row1.text1.highlight}</span>
                    {introductionData.content.row1.text1.after}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-gray-600">{introductionData.content.row1.text1.footer}</span>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-4 right-4 w-16 h-16 bg-red-600/5 rounded-full"></div>
                <p className="text-lg leading-relaxed relative z-10" style={{ color: '#1e4d83' }}>
                  {introductionData.content.row1.text2.before}
                  <span className="font-semibold" style={{ color: '#a81514' }}>{introductionData.content.row1.text2.highlight}</span>
                  {introductionData.content.row1.text2.after}
                </p>
              </div>
            </div>

            {/* Image with Enhanced Styling */}
            <div className="relative group animate-slide-left">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-500 animate-gradient"></div>
              <div className="relative">
                <img 
                  src={introductionData.content.row1.image} 
                  alt={introductionData.content.row1.imageAlt}
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content Grid - Second Row (Reversed) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
            {/* Image with Enhanced Styling */}
            <div className="relative group order-2 lg:order-1 animate-slide-right">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-500 animate-gradient"></div>
              <div className="relative">
                <img 
                  src={introductionData.content.row2.image}
                  alt={introductionData.content.row2.imageAlt}
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 order-1 lg:order-2 animate-slide-left">
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-900/5 to-transparent rounded-bl-full"></div>
                <p className="text-lg leading-relaxed relative z-10" style={{ color: '#1e4d83' }}>
                  {introductionData.content.row2.text1.before}
                  <span className="font-semibold text-red-600">{introductionData.content.row2.text1.highlight}</span>
                  {introductionData.content.row2.text1.after}
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-r-4 border-red-600">
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#1e4d83' }}>
                  {introductionData.content.row2.text2.main}
                </p>
                
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base" style={{ color: '#1e4d83' }}>
                    {introductionData.content.row2.text2.footer}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What Sets Us Apart - Enhanced Card */}
          <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl shadow-2xl p-10 lg:p-14 overflow-hidden animate-fade-in-up">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-600/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-900/5 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-red-600 via-red-500 to-blue-900 rounded-full"></div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-red-600 to-blue-900 bg-clip-text text-transparent">
                    {introductionData.distinctiveSection.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                  {introductionData.distinctiveSection.badge}
                </div>
              </div>
              
              <p className="text-lg lg:text-xl leading-relaxed mb-12 max-w-4xl" style={{ color: '#1e4d83' }}>
                {introductionData.distinctiveSection.description.before}
                <span className="font-semibold text-red-600">{introductionData.distinctiveSection.description.highlight}</span>
                {introductionData.distinctiveSection.description.after}
              </p>

              {/* Feature highlights with staggered animation */}
              <div className="grid md:grid-cols-3 gap-8">
                {introductionData.distinctiveSection.features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${feature.borderColor}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.hoverGradient} rounded-2xl transition-all duration-500`}></div>
                    <div className="relative z-10">
                      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h4 className="font-bold text-xl mb-3" style={{ color: feature.titleColor }}>
                        {feature.title}
                      </h4>
                      <p className="text-base leading-relaxed" style={{ color: '#1e4d83' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}