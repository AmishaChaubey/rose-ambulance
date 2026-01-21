import { Link } from "react-router-dom";
import { useState } from "react";

export default function CallToAction() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 bg-white">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(71,85,105,.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(71,85,105,.3) 1px, transparent 1px)
            `,
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full blur-3xl opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(71,85,105,0.3) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            animationDuration: '15s'
          }}
        />
        <div 
          className="absolute w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 rounded-full blur-3xl opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(51,65,85,0.25) 0%, transparent 70%)',
            bottom: '15%',
            right: '15%',
            animationDelay: '3s',
            animationDuration: '18s'
          }}
        />
        <div 
          className="absolute w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full blur-3xl opacity-8 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(100,116,139,0.2) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animationDelay: '6s',
            animationDuration: '20s'
          }}
        />
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-30px) translateX(20px); }
          66% { transform: translateY(-15px) translateX(-20px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
          
          {/* Left Visual Section */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-300 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-slate-500/20">
                
                {/* Image Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-xl sm:rounded-2xl opacity-60" />
                  <img
                    className="w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 object-contain relative z-10 transition-transform duration-700 group-hover:scale-110 mx-auto"
                    src="/blog-img/10.jpg"
                    alt="Freezer Box Service"
                  />
                </div>

                {/* Sparkle Effects */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 sm:w-3 h-2 sm:h-3 bg-slate-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 animate-ping" />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white shadow-xl border-2 border-slate-300">
                <span className="text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                  <span className="text-base sm:text-lg">🕊️</span>
                  Dignity Preserved
                </span>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-3/5 text-slate-800 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6 mt-6 lg:mt-0">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 backdrop-blur-md border border-slate-300 shadow-lg">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-700">
                24/7 PRESERVATION SERVICE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2 sm:px-0">
              <span className="bg-[#d03b38] bg-clip-text text-transparent">
                Dignified
              </span>{" "}
              <span className="text-[#d03b38] relative inline-block">
                Preservation Services
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-slate-600 via-slate-700 to-transparent rounded-full" />
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl px-2 sm:px-0">
              Compassionate freezer box services ensuring dignified preservation with utmost respect and care during your most difficult moments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pt-2 sm:pt-4 px-2 sm:px-0">
              <Link to="/about" className="w-full sm:w-auto">
                <button
                  onMouseEnter={() => setHoveredButton('primary')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="relative group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #d03b38 0%, #d03b38 100%)',
                    boxShadow: '0 10px 40px rgba(71, 85, 105, 0.3)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Learn More
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  {hoveredButton === 'primary' && (
                    <span 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      style={{
                        animation: 'shimmer 1.5s infinite',
                        backgroundSize: '200% 100%'
                      }}
                    />
                  )}
                </button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <button
                  onMouseEnter={() => setHoveredButton('secondary')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="relative group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base text-slate-700 transition-all duration-300 transform hover:scale-105 overflow-hidden border-2 border-slate-300 backdrop-blur-sm"
                  style={{
                    background: hoveredButton === 'secondary' 
                      ? 'linear-gradient(135deg, rgba(241,245,249,1) 0%, rgba(226,232,240,1) 100%)'
                      : 'rgba(248,250,252,1)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="text-lg sm:text-xl">📅</span>
                    Book Service
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/0 via-slate-600/10 to-slate-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4 px-2 sm:px-0">
              {[
                { icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ), label: 'Certified', color: 'from-green-400 to-emerald-400' },
                { icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                ), label: '24/7 Available', color: 'from-blue-400 to-cyan-400' },
                { icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                ), label: 'Professional', color: 'from-purple-400 to-pink-400' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-slate-50 backdrop-blur-sm border border-slate-200 hover:bg-slate-100 transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${item.color} p-1 sm:p-1.5 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}