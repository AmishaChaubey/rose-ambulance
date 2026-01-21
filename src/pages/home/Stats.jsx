import { useState, useEffect } from 'react';


const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const responseTime = useCountUp({ end: 8, duration: 2000, isVisible });
  const livesSaved = useCountUp({ end: 10000, duration: 2500, isVisible, separator: true });
  const transportUnits = useCountUp({ end: 5, duration: 1500, isVisible });

  const stats = [
    {
      value: responseTime,
      suffix: 'min',
      label: 'Avg Response Time',
      icon: '⏱️',
      delay: 'delay-100'
    },
    {
      value: livesSaved,
      suffix: '+',
      label: 'Lives Preserved',
      icon: '🕊️',
      delay: 'delay-200'
    },
    {
      value: '24/7',
      label: 'Always Available',
      icon: '📅',
      delay: 'delay-300'
    },
    {
      value: transportUnits,
      suffix: '+',
      label: 'Vehicles Ready',
      icon: '🚐',
      delay: 'delay-400'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-[#043915]/10 to-blue-100 rounded-full opacity-40 blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-l from-gray-200/20 to-[#043915]/5 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-r from-[#043915]/5 to-transparent rounded-full opacity-20 blur-xl animate-ping-slow"></div>
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.4; }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-ping-slow { animation: ping-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-[#d03b38] bg-clip-text text-transparent mb-3 sm:mb-4 font-serif px-2">
            Our Impact
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed px-4">
            Delivering compassionate service with unwavering reliability
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 relative">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center transition-all duration-1000 ${stat.delay} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Stat Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-lg lg:shadow-xl lg:shadow-2xl p-5 sm:p-6 md:p-8 w-full hover:shadow-green-glow hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 border border-white/50 hover:border-[#043915]/20">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#043915]/10 to-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-all duration-500 shadow-md sm:shadow-lg group-hover:shadow-green-glow">
                  <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300">{stat.icon}</span>
                </div>

                {/* Value */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-2 sm:mb-3 bg-gradient-to-r from-gray-800 via-gray-900 to-[#043915] bg-clip-text text-transparent">
                  {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                  {stat.suffix && <span className="text-xl sm:text-2xl font-normal text-[#043915]">{stat.suffix}</span>}
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 text-center font-medium leading-relaxed px-2">
                  {stat.label}
                </p>

                {/* Bottom Glow Line */}
                <div className="h-0.5 sm:h-1 w-0 bg-gradient-to-r from-[#043915] to-green-600 mx-auto mt-4 sm:mt-5 md:mt-6 group-hover:w-16 sm:group-hover:w-20 md:group-hover:w-24 transition-all duration-700 rounded-full shadow-md"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-semibold shadow-xl sm:shadow-2xl hover:shadow-green-glow hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3 text-center">
            <span className="text-lg sm:text-xl">🛡️</span>
            <span className="leading-tight">Trusted by thousands of families across India</span>
          </div>
        </div>
      </div>

      {/* Custom Glow Shadow */}
      <style jsx>{`
        .shadow-green-glow {
          box-shadow: 0 25px 50px -12px rgba(4, 57, 21, 0.25);
        }
        .shadow-green-glow:hover {
          box-shadow: 0 35px 60px -12px rgba(4, 57, 21, 0.4);
        }
      `}</style>
    </div>
  );
};

// Custom CountUp Hook (add as separate file or inline)
function useCountUp({ end, duration = 2000, isVisible = false, separator = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return separator ? count.toLocaleString() : count;
}

export default StatsBar;