import React, { useState } from "react";
import {
  X,
  Eye,
  ArrowUpRight,
  ChevronDown,
  Home,
  ChevronRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const AmbulanceGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const ambulanceGallery = [
    {
      id: 1,
      src: "/fleet/1.png",
      title: "Eeco Ambulance",
      desc: "ICU equipped emergency vehicle",
      vehicleNo: "DL-1CA-1234",
    },
    {
      id: 2,
      src: "/fleet/2.png",
      title: "Cruiser Ambulance",
      desc: "Basic life support ambulance",
      vehicleNo: "DL-1CA-5678",
    },
    {
      id: 3,
      src: "/fleet/3.png",
      title: "Winger Ambulance",
      desc: "Cardiac care specialized unit",
      vehicleNo: "DL-1CA-9012",
    },
    {
      id: 4,
      src: "/fleet/6.png",
      title: "Tempo Traveler ICU",
      desc: "Neonatal care ambulance",
      vehicleNo: "DL-1CA-3456",
    },
    {
      id: 5,
      src: "/fleet/8.png",
      title: "Air Ambulance",
      desc: "Emergency air medical service",
      vehicleNo: "AIR-108",
    },
    {
      id: 6,
      src: "/fleet/7.png",
      title: "Patient Transport",
      desc: "Comfortable patient transfer",
      vehicleNo: "DL-1CA-7890",
    },
  ];

  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-red-100 selection:text-red-900">
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-slate-100 rounded-lg mb-4 sm:mb-6">
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-slate-600" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-medium md:text-5xl lg:text-6xl font-serif bg-[#d03b38] bg-clip-text text-transparent mb-3 sm:mb-4 tracking-tight px-2">
          Our Fleet
        </h2>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 px-4">
          Care you can trust. Response you can rely on
        </p>
      </div>

      {/* --- GALLERY GRID SECTION --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24 pt-8 sm:pt-12 lg:pt-16">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {ambulanceGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg shadow-slate-200/50 cursor-pointer hover:shadow-2xl hover:shadow-[#d03b38]/10 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                {/* Vehicle Number Badge */}
                <div className="mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <span className="inline-block px-2.5 sm:px-3 py-1 bg-[#d03b38] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                    {item.vehicleNo}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <h3 className="text-white text-lg sm:text-xl font-bold font-serif mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm mb-3 sm:mb-4">
                    {item.desc}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <div className="inline-flex items-center gap-1.5 text-white font-semibold text-xs sm:text-sm group-hover:text-[#d03b38] transition-colors">
                      View Details <Eye size={14} className="sm:w-4 sm:h-4" />
                    </div>
                  <a
  href="tel:9355331118"
  className="inline-flex items-center gap-1.5 text-white font-semibold text-xs sm:text-sm hover:text-green-400 transition-colors"
>
  <Phone size={14} className="sm:w-4 sm:h-4" />
  Book
</a>

                  </div>
                </div>

                {/* Floating Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-500 delay-200">
                  <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Mobile Tap Indicator */}
              <div className="sm:hidden absolute bottom-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-slate-700 shadow-lg">
                <Eye size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
    {selectedImage && (
  <div
    className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur flex items-center justify-center p-2 sm:p-4"
    onClick={() => setSelectedImage(null)}
  >
    {/* Close Button */}
    <button
      onClick={() => setSelectedImage(null)}
      className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition"
      aria-label="Close modal"
    >
      <X size={20} />
    </button>

    <div
      className="relative max-w-3xl w-full flex flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image */}
      <div className="relative rounded-lg overflow-hidden shadow-xl border border-white/10 w-full">
        <img
          src={selectedImage.src}
          alt={selectedImage.title}
          className="w-full max-h-[60vh] object-contain"
        />
      </div>

      {/* Info */}
      <div className="mt-3 text-center px-3 space-y-1">
        <span className="inline-block px-3 py-1 bg-[#d03b38] text-white text-xs font-semibold rounded-full">
          {selectedImage.vehicleNo}
        </span>

        <h2 className="text-white text-base sm:text-lg font-semibold">
          {selectedImage.title}
        </h2>

        <p className="text-slate-400 text-xs sm:text-sm">
          {selectedImage.desc}
        </p>

        <Link to='/contact'><button className="mt-3 inline-flex items-center gap-2 bg-[#d03b38] hover:bg-[#b83330] text-white px-4 py-2 rounded-full text-xs font-semibold transition">
          <Phone size={14} />
          Book Ambulance
        </button></Link>
      </div>

      {/* Mobile hint */}
      <p className="sm:hidden mt-2 text-slate-500 text-[10px]">
        Tap outside to close
      </p>
    </div>
  </div>
)}


      {/* Custom Animations */}
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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }

        @media (max-width: 640px) {
          .touch-manipulation {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 640px) {
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default AmbulanceGallery;
