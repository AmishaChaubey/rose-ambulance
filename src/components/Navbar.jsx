import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Heart,
  ChevronDown,
  Snowflake,
  Flame,
  Calendar,
  Clock,
  User,
  Mail,
  MessageSquare,
  Cross,
  PlusCircle,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function FuneralNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const [activeRoute, setActiveRoute] = useState("/");

  const services = [
    {
      title: "Dead Body Freezer Box",
      slug: "dead-body-freezer-box",
      description: "Advanced preservation technology",
      icon: Snowflake,
      color: "from-blue-500 to-cyan-500",
      link: "/services/dead-body-freezer-box",
    },
    {
      title: "Funeral Services",
      slug: "funeral-services",
      description: "Dignified farewell ceremonies",
      icon: Cross,
      color: "from-purple-500 to-pink-500",
      link: "/services/funeral-services",
    },
    {
      title: "Ambulance Services",
      slug: "ambulance-services",
      description: "Rapid response transportation",
      icon: PlusCircle,
      color: "from-red-500 to-orange-500",
      link: "/services/ambulance-services",
    },
    {
      title: "ICU Ambulance Services",
      slug: "icu-ambulance-services",
      description: "Critical care in transit",
      icon: Heart,
      color: "from-rose-500 to-red-500",
      link: "/services/icu-ambulance-services",
    },
    {
      title: "Embalming Services",
      slug: "embalming-services",
      description: "Expert preservation care",
      icon: Flame,
      color: "from-amber-500 to-yellow-500",
      link: "/services/embalming-services",
    },
    {
      title: "Prayer Meetings",
      slug: "prayer-meetings",
      description: "Spiritual gathering arrangements",
      icon: Users,
      color: "from-indigo-500 to-blue-500",
      link: "/services/prayer-meetings",
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu or modal is open
  useEffect(() => {
    if (isOpen || bookingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, bookingModalOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const isActive = (path) => activeRoute === path;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully! We will contact you soon.");
    setBookingModalOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .font-display {
          font-family: 'Sora', sans-serif;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #36496e 0%, #5a7aa5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .service-card {
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(54, 73, 110, 0.05), transparent);
          transition: left 0.5s ease;
        }
        
        .service-card:hover::before {
          left: 100%;
        }
        
        .glow-button {
          position: relative;
          overflow: hidden;
        }
        
        .glow-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .glow-button:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #36496e;
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #2d3d5e;
        }
        
        .modal-backdrop {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        input:focus, textarea:focus, select:focus {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        /* Extra Small Devices (Portrait Phones, less than 360px) */
        @media (max-width: 359px) {
          .logo-container img {
            height: 80px !important;
          }
          
          .mobile-menu-item {
            font-size: 14px;
            padding: 10px 12px;
          }
          
          .mobile-service-icon {
            width: 28px !important;
            height: 28px !important;
          }
          
          .modal-content {
            max-width: 100% !important;
            margin: 0 !important;
            border-radius: 16px !important;
          }
        }

        /* Small Devices (Landscape Phones, 360px to 575px) */
        @media (min-width: 360px) and (max-width: 575px) {
          .logo-container img {
            height: 100px !important;
          }
        }

        /* Medium Devices (Tablets, 576px to 767px) */
        @media (min-width: 576px) and (max-width: 767px) {
          .logo-container img {
            height: 120px !important;
          }
          
          .modal-content {
            max-width: 90vw !important;
          }
        }

        /* Large Tablets (768px to 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .logo-container img {
            height: 140px !important;
          }
          
          .tablet-nav-spacing {
            gap: 1rem !important;
          }
        }

        /* Desktop (992px to 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .desktop-dropdown {
            width: 400px !important;
          }
          
          .desktop-nav-spacing {
            gap: 1.25rem !important;
          }
        }

        /* Large Desktop (1200px and above) */
        @media (min-width: 1200px) {
          .desktop-dropdown {
            width: 420px !important;
          }
          
          .desktop-nav-spacing {
            gap: 2rem !important;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-height: 600px) and (orientation: landscape) {
          .mobile-menu-container {
            max-height: calc(100vh - 60px) !important;
          }
          
          .modal-body-landscape {
            max-height: 70vh !important;
          }
        }

        /* High DPI screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .logo-container img {
            image-rendering: -webkit-optimize-contrast;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .touch-target {
            min-height: 44px !important;
            min-width: 44px !important;
          }
          
          button, a {
            -webkit-tap-highlight-color: rgba(54, 73, 110, 0.1);
          }
        }

        /* Foldable devices */
        @media (min-width: 540px) and (max-width: 720px) {
          .foldable-adjust {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-effect shadow-2xl border-b bg-white"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 foldable-adjust">
          <div className="flex justify-between items-center h-14 xs:h-16 sm:h-18 md:h-20">
            {/* Logo - Fully Responsive */}
            <Link to="/" className="logo-container flex-shrink-0">
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setActiveRoute("/")}
              >
<div className="relative">
  <img
    src="/logo4.svg.svg"
    alt="Logo"
    className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain py-2"
  />
</div>




              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center desktop-nav-spacing space-x-4 xl:space-x-6">
              <Link to="/">
                <button
                  onClick={() => setActiveRoute("/")}
                  className={`font-display text-xs xl:text-sm font-semibold tracking-wide relative group transition-all duration-300 touch-target ${
                    isActive("/")
                      ? "text-[#36496e]"
                      : "text-gray-700 hover:text-[#36496e]"
                  }`}
                >
                  Home
                  <span
                    className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#36496e] to-[#5a7aa5] rounded-full transition-all duration-300 ${
                      isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              </Link>

              <Link to="/about">
                <button
                  onClick={() => setActiveRoute("/about")}
                  className={`font-display text-xs xl:text-sm font-semibold tracking-wide relative group transition-all duration-300 touch-target ${
                    isActive("/about")
                      ? "text-[#36496e]"
                      : "text-gray-700 hover:text-[#36496e]"
                  }`}
                >
                  About Us
                  <span
                    className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#36496e] to-[#5a7aa5] rounded-full transition-all duration-300 ${
                      isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => {
                  if (closeTimeoutRef.current)
                    clearTimeout(closeTimeoutRef.current);
                  setServicesOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimeoutRef.current = setTimeout(
                    () => setServicesOpen(false),
                    200
                  );
                }}
              >
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`font-display text-xs xl:text-sm font-semibold tracking-wide flex items-center gap-1.5 relative group transition-all duration-300 touch-target ${
                    servicesOpen
                      ? "text-[#36496e]"
                      : "text-gray-700 hover:text-[#36496e]"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#36496e] to-[#5a7aa5] rounded-full transition-all duration-300 ${
                      servicesOpen ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 desktop-dropdown w-[380px] lg:w-[400px] xl:w-[420px] transition-all duration-300 ${
                    servicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="relative bg-gradient-to-br from-[#36496e] via-[#4a5f7f] to-[#36496e] text-white px-5 xl:px-6 py-5 xl:py-6 overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                            backgroundSize: "20px 20px",
                          }}
                        ></div>
                      </div>
                      <div className="relative flex items-center gap-3">
                        <div className="w-9 h-9 xl:w-10 xl:h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <Sparkles className="w-4 h-4 xl:w-5 xl:h-5" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-base xl:text-lg">
                            Our Services
                          </h3>
                          <p className="text-xs opacity-90 mt-0.5">
                            Compassionate care when it matters most
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 xl:p-3 max-h-[420px] lg:max-h-[450px] xl:max-h-[480px] overflow-y-auto scrollbar-thin">
                      <div className="grid grid-cols-1 gap-1.5 xl:gap-2">
                        {services.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <Link to={service.link} key={index}>
                              <button
                                onClick={() => {
                                  setActiveRoute(`/services/${service.slug}`);
                                  setServicesOpen(false);
                                }}
                                className="service-card group flex items-center gap-3 xl:gap-4 px-3 xl:px-4 py-3 xl:py-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200 text-left w-full"
                              >
                                <div
                                  className={`flex-shrink-0 w-10 h-10 xl:w-12 xl:h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                                >
                                  <Icon className="w-5 h-5 xl:w-6 xl:h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-display font-semibold text-gray-800 group-hover:text-[#36496e] transition-colors duration-300 text-xs xl:text-sm">
                                    {service.title}
                                  </h4>
                                  <p className="text-xs text-gray-600 mt-0.5 line-clamp-1">
                                    {service.description}
                                  </p>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-gray-400 group-hover:text-[#36496e] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                              </button>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/blog">
                <button
                  onClick={() => setActiveRoute("/blog")}
                  className={`font-display text-xs xl:text-sm font-semibold tracking-wide relative group transition-all duration-300 touch-target ${
                    isActive("/blog")
                      ? "text-[#36496e]"
                      : "text-gray-700 hover:text-[#36496e]"
                  }`}
                >
                  Blog
                  <span
                    className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#36496e] to-[#5a7aa5] rounded-full transition-all duration-300 ${
                      isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              </Link>

              <Link to="/contact">
                <button
                  onClick={() => setActiveRoute("/contact")}
                  className={`font-display text-xs xl:text-sm font-semibold tracking-wide relative group transition-all duration-300 touch-target ${
                    isActive("/contact")
                      ? "text-[#36496e]"
                      : "text-gray-700 hover:text-[#36496e]"
                  }`}
                >
                  Contact
                  <span
                    className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#36496e] to-[#5a7aa5] rounded-full transition-all duration-300 ${
                      isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              </Link>

              <button
                onClick={() => setBookingModalOpen(true)}
                className="glow-button relative bg-[#d03b38] text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-lg flex items-center gap-2 shadow-lg font-display text-xs xl:text-sm font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 touch-target"
              >
                <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 relative z-10" />
                <span className="relative z-10">Book Now</span>
              </button>
            </div>

            {/* Mobile & Tablet menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-[#36496e] p-2 transition-all duration-300 rounded-xl hover:bg-gray-100 active:scale-95 touch-target"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-500 ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="mobile-menu-container flex flex-col px-3 sm:px-4 md:px-6 py-3 sm:py-4 space-y-1 max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto scrollbar-thin">
            <Link to="/">
              <button
                onClick={() => {
                  setActiveRoute("/");
                  closeMobileMenu();
                }}
                className={`mobile-menu-item font-display font-medium text-left text-gray-700 hover:text-[#36496e] hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 w-full touch-target ${
                  isActive("/")
                    ? "text-[#36496e] bg-gradient-to-r from-gray-50 to-blue-50/50 font-semibold"
                    : ""
                }`}
              >
                Home
              </button>
            </Link>

            <Link to="/about">
              <button
                onClick={() => {
                  setActiveRoute("/about");
                  closeMobileMenu();
                }}
                className={`mobile-menu-item font-display font-medium text-left text-gray-700 hover:text-[#36496e] hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 w-full touch-target ${
                  isActive("/about")
                    ? "text-[#36496e] bg-gradient-to-r from-gray-50 to-blue-50/50 font-semibold"
                    : ""
                }`}
              >
                About Us
              </button>
            </Link>

            {/* Mobile Services */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="mobile-menu-item font-display font-medium flex items-center justify-between w-full text-left text-gray-700 hover:text-[#36496e] hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 touch-target"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="flex flex-col space-y-1 pb-2 pl-1 sm:pl-2">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link to={service.link} key={index}>
                      <button
                        onClick={() => {
                          setActiveRoute(`/services/${service.slug}`);
                          closeMobileMenu();
                        }}
                        className={`flex items-center gap-2.5 sm:gap-3 text-left text-gray-600 hover:text-[#36496e] hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl transition-all duration-300 w-full touch-target ${
                          isActive(`/services/${service.slug}`)
                            ? "text-[#36496e] bg-gradient-to-r from-gray-50 to-blue-50/50 font-semibold"
                            : ""
                        }`}
                      >
                        <div
                          className={`mobile-service-icon w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center shadow-sm flex-shrink-0`}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="text-sm sm:text-base font-display">
                          {service.title}
                        </span>
                      </button>
                    </Link>
                  );
                })}
              </div>
            )}

            <Link to="/blog">
              <button
                onClick={() => {
                  setActiveRoute("/blog");
                  closeMobileMenu();
                }}
                className={`mobile-menu-item font-display font-medium text-left text-gray-700 hover:text-[#36496e] hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 w-full touch-target ${
                  isActive("/blog")
                    ? "text-[#36496e] bg-gradient-to-r from-gray-50 to-blue-50/50 font-semibold"
                    : ""
                }`}
              >
                Blog
              </button>
            </Link>

            <Link to="/contact">
              <button
                onClick={() => {
                  setActiveRoute("/contact");
                  closeMobileMenu();
                }}
                className={`mobile-menu-item font-display font-medium text-left text-gray-700 hover:text-[#36496e] hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 w-full touch-target ${
                  isActive("/contact")
                    ? "text-[#36496e] bg-gradient-to-r from-gray-50 to-blue-50/50 font-semibold"
                    : ""
                }`}
              >
                Contact
              </button>
            </Link>

            <button
              onClick={() => {
                setBookingModalOpen(true);
                closeMobileMenu();
              }}
              className="glow-button bg-[#d03b38] text-white px-4 py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg font-display text-sm font-semibold hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300 mt-2 sm:mt-3 touch-target"
            >
              <Phone className="w-4 h-4" /> Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Booking Modal - Fully Responsive */}
      {bookingModalOpen && (
        <div className="fixed inset-0 bg-black/60 modal-backdrop z-50 flex items-center justify-center p-2 xs:p-3 sm:p-4 md:p-6 animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-[95vw] xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl my-auto animate-scaleIn modal-content">
            {/* Modal Header */}
            <div className="relative bg-gradient-to-br from-[#36496e] via-[#4a5f7f] to-[#36496e] text-white px-3 xs:px-4 sm:px-6 md:px-8 py-4 xs:py-5 sm:py-6 md:py-8 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>
              <div className="relative flex justify-between items-start gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-sm float-animation flex-shrink-0">
                      <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h2 className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                      Book Our Services
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm opacity-90 ml-11 xs:ml-12 sm:ml-15">
                    Fill out the form and we'll respond within 2 hours
                  </p>
                </div>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/20 p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl transition-all duration-300 hover:rotate-90 flex-shrink-0 touch-target"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body-landscape p-3 xs:p-4 sm:p-6 md:p-8 max-h-[60vh] sm:max-h-[65vh] md:max-h-[70vh] overflow-y-auto scrollbar-thin">
              <form
                onSubmit={handleBookingSubmit}
                className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6"
              >
                {/* Two Column Layout for larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
                  {/* Name */}
                  <div>
                    <label className="block font-display text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-2.5 xs:pl-3 sm:pl-4 flex items-center pointer-events-none transition-all duration-300 group-focus-within:text-[#36496e]">
                        <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-[#36496e]" />
                      </div>
                      <input
                        type="text"
                        required
                        className="pl-9 xs:pl-10 sm:pl-12 w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#36496e]/20 focus:border-[#36496e] transition-all duration-300 font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-display text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-2.5 xs:pl-3 sm:pl-4 flex items-center pointer-events-none transition-all duration-300 group-focus-within:text-[#36496e]">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-[#36496e]" />
                      </div>
                      <input
                        type="email"
                        required
                        className="pl-9 xs:pl-10 sm:pl-12 w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#36496e]/20 focus:border-[#36496e] transition-all duration-300 font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-display text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-2.5 xs:pl-3 sm:pl-4 flex items-center pointer-events-none transition-all duration-300 group-focus-within:text-[#36496e]">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-[#36496e]" />
                    </div>
                    <input
                      type="tel"
                      required
                      className="pl-9 xs:pl-10 sm:pl-12 w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#36496e]/20 focus:border-[#36496e] transition-all duration-300 font-medium"
                      placeholder="+91 9XXXXXXXXX"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block font-display text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#36496e]/20 focus:border-[#36496e] transition-all duration-300 bg-white font-medium appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2336496e'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.75rem center",
                      backgroundSize: "1.25em 1.25em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
                  {/* Date */}
                  <div>
                    <label className="block font-display text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-2.5 xs:pl-3 sm:pl-4 flex items-center pointer-events-none transition-all duration-300 group-focus-within:text-[#36496e]">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-[#36496e]" />
                      </div>
                      <input
                        type="date"
                        required
                        className="pl-9 xs:pl-10 sm:pl-12 w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#36496e]/20 focus:border-[#36496e] transition-all duration-300 font-medium"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block font-display text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-2.5 xs:pl-3 sm:pl-4 flex items-center pointer-events-none transition-all duration-300 group-focus-within:text-[#36496e]">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-[#36496e]" />
                      </div>
                      <input
                        type="time"
                        required
                        className="pl-9 xs:pl-10 sm:pl-12 w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#36496e]/20 focus:border-[#36496e] transition-all duration-300 font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <label className="block font-display text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">
                    Additional Information
                  </label>
                  <div className="relative group">
                    <div className="absolute top-2 xs:top-2.5 sm:top-3 md:top-4 left-0 pl-2.5 xs:pl-3 sm:pl-4 pointer-events-none transition-all duration-300 group-focus-within:text-[#36496e]">
                      <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-[#36496e]" />
                    </div>
                    <textarea
                      rows="3"
                      className="pl-9 xs:pl-10 sm:pl-12 w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#36496e]/20 focus:border-[#36496e] transition-all duration-300 resize-none font-medium"
                      placeholder="Please share any additional details..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="glow-button w-full bg-[#d03b38] text-white py-2.5 xs:py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl font-display font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 touch-target"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Submit Booking Request
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <p className="text-center text-xs sm:text-sm text-gray-500 mt-2 xs:mt-3 sm:mt-4">
                  We respect your privacy and will never share your information
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}