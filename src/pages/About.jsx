import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Heart, Users, Clock, Award, Phone, ArrowRight, CheckCircle, 
  Shield, Zap, Activity, Eye, Star, MapPin, Calendar, 
  HeadphonesIcon, Sparkles, Globe, HandHeart, Compass, 
  Leaf, Sun, Cloud, ChevronDown, Quote, Mail, MessageCircle,
  Ambulance, Target, TrendingUp, UserCheck, PhoneCall, Navigation
} from "lucide-react";
import { Link } from "react-router-dom";
import WhyChooseUs from "./WhyChoose";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [hoveredValue, setHoveredValue] = useState(null);
  const statsRef = useRef(null);
  const [counters, setCounters] = useState({ years: 0, lives: 0, response: 0, satisfaction: 0 });
  const timelineRefs = useRef([]);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const targets = { years: 10, lives: 5000, response: 8, satisfaction: 98 };
          const steps = 60;
          const stepDuration = duration / steps;

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCounters({
              years: Math.floor(targets.years * progress),
              lives: Math.floor(targets.lives * progress),
              response: Math.floor(targets.response * progress),
              satisfaction: Math.floor(targets.satisfaction * progress)
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounters(targets);
            }
          }, stepDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => statsRef.current && observer.unobserve(statsRef.current);
  }, []);

  // Timeline items visibility observer
  useEffect(() => {
    const observers = [];
    
    timelineRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setVisibleTimelineItems(prev => [...prev, index]);
            }
          },
          { threshold: 0.5 }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const stats = [
    { 
      value: counters.years, 
      suffix: "+",
      label: "Years of Excellence", 
      icon: Clock, 
      color: "from-[#36496e] to-[#4a5f7f]",
      description: "Serving communities"
    },
    { 
      value: counters.lives, 
      suffix: "+",
      label: "Lives Saved", 
      icon: Heart, 
      color: "from-[#d64545] to-[#e24065]",
      description: "Emergency responses completed"
    },
    { 
      value: counters.response, 
      suffix: " min",
      label: "Avg Response Time", 
      icon: Zap, 
      color: "from-[#f59e0b] to-[#f97316]",
      description: "Fastest in the region"
    },
    { 
      value: counters.satisfaction, 
      suffix: "%",
      label: "Patient Satisfaction", 
      icon: Shield, 
      color: "from-[#10b981] to-[#059669]",
      description: "Trust and reliability"
    },
  ];

  const coreValues = [
    {
      title: "Rapid Response",
      desc: "Every second counts in emergencies. Our fleet is strategically positioned for the fastest response times.",
      icon: Zap,
      gradient: "from-[#f59e0b] to-[#f97316]",
      stat: "< 8 min",
      pattern: "dots"
    },
    {
      title: "Expert Care",
      desc: "Highly trained paramedics and medical professionals equipped with advanced life support systems.",
      icon: UserCheck,
      gradient: "from-[#36496e] to-[#4a5f7f]",
      stat: "24/7",
      pattern: "grid"
    },
    {
      title: "State-of-Art Fleet",
      desc: "Modern ambulances with ICU facilities, ensuring hospital-grade care en route to medical facilities.",
      icon: Ambulance,
      gradient: "from-[#d64545] to-[#e24065]",
      stat: "100%",
      pattern: "waves"
    },
    {
      title: "Compassionate Service",
      desc: "Beyond medical care, we provide emotional support and dignity to patients and their families.",
      icon: Heart,
      gradient: "from-[#ec4899] to-[#f472b6]",
      stat: "Always",
      pattern: "circles"
    },
    {
      title: "GPS Tracking",
      desc: "Real-time tracking and optimized routing ensure the quickest path to medical facilities.",
      icon: Navigation,
      gradient: "from-[#8b5cf6] to-[#a78bfa]",
      stat: "Live",
      pattern: "lines"
    },
    {
      title: "Transparent Pricing",
      desc: "Clear, upfront pricing with no hidden costs. Quality emergency care shouldn't come with surprises.",
      icon: Shield,
      gradient: "from-[#10b981] to-[#34d399]",
      stat: "No Hidden Fees",
      pattern: "squares"
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      desc: "Started with a vision to provide world-class emergency medical services",
      icon: Sparkles,
      color: "#36496e"
    },
    {
      year: "2017",
      title: "Fleet Expansion",
      desc: "Expanded to 25 ambulances with advanced life support systems",
      icon: TrendingUp,
      color: "#4a5f7f"
    },
    {
      year: "2019",
      title: "Technology Integration",
      desc: "Implemented GPS tracking and digital health records",
      icon: Globe,
      color: "#5a7aa5"
    },
    {
      year: "2022",
      title: "Award Recognition",
      desc: "Received National Excellence Award for Emergency Services",
      icon: Award,
      color: "#f59e0b"
    },
    {
      year: "2025",
      title: "Serving Thousands",
      desc: "Over 5000+ successful emergency responses and growing",
      icon: Heart,
      color: "#e24065"
    }
  ];

  const whyChooseUs = [
    {
      title: "Certified Professionals",
      desc: "All our paramedics hold advanced certifications",
      icon: Award
    },
    {
      title: "Advanced Equipment",
      desc: "ICU-equipped ambulances with latest medical technology",
      icon: Activity
    },
    {
      title: "Insurance Accepted",
      desc: "We work with all major insurance providers",
      icon: Shield
    },
    {
      title: "Zero Wait Time",
      desc: "Immediate dispatch upon receiving emergency calls",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        .font-display {
          font-family: 'DM Serif Display', serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(54, 73, 110, 0.3); }
          50% { box-shadow: 0 0 40px rgba(54, 73, 110, 0.6); }
        }
        
        @keyframes slide-in {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .pattern-dots {
          background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .pattern-grid {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        .pattern-waves {
          background-image: repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.05) 0px,
            rgba(255,255,255,0.05) 10px,
            transparent 10px,
            transparent 20px
          );
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .text-gradient-primary {
          background: linear-gradient(135deg, #36496e 0%, #5a7aa5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Hero Section - Premium Redesign with Fixed Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/9391904/pexels-photo-9391904.jpeg" 
            alt="Emergency Medical Services" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Geometric Shapes */}
          <motion.div 
            className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-[#4a5f7f]/30 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-[#5a7aa5]/30 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px sm:50px 50px'
            }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide">24/7 Emergency Services</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                About{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">
                  Our Mission
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg  md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Delivering life-saving emergency medical services with compassion, expertise, and cutting-edge technology for over a decade.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a href="tel:+919355331118" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto bg-gradient-to-r from-[#e24065] to-[#d64545] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-xl sm:shadow-2xl shadow-red-500/30 flex items-center justify-center gap-2 sm:gap-3 hover:shadow-red-500/50 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Emergency Call</span>
                  </motion.button>
                </a>
                
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold border-2 border-white/20 flex items-center justify-center gap-2 sm:gap-3 hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm sm:text-base">Contact</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Floating Stats Card */}
           <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="relative hidden lg:block"
>
  <div className="relative scale-90">
    {/* Main Glass Card */}
    <div className="glass-card rounded-2xl p-3 border border-white/20 shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/20">
        <div className="w-14 h-14 bg-gradient-to-br from-[#e24065] to-[#d64545] rounded-2xl flex items-center justify-center shadow-lg pulse-glow">
          <Ambulance className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#36496e] font-display">
            Emergency Ready
          </h3>
          <p className="text-sm text-gray-600 font-medium">
            Round-the-clock service
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="space-y-4">
        {[
          { label: "Response Time", value: "< 8 minutes", icon: Zap, color: "from-[#fbbf24] to-[#f97316]" },
          { label: "Success Rate", value: "98%", icon: CheckCircle, color: "from-[#10b981] to-[#059669]" },
          { label: "Fleet Size", value: "50+ Ambulances", icon: Ambulance, color: "from-[#36496e] to-[#4a5f7f]" }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {item.label}
                </span>
              </div>
              <span className="text-base font-bold text-[#36496e]">
                {item.value}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Trust Badge */}
      <div className="mt-6 pt-6 border-t border-white/20 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <Shield className="w-4 h-4 text-[#36496e]" />
          <span className="font-semibold">Trusted by 5000+ families</span>
        </div>
      </div>
    </div>

    {/* Floating Orbs */}
    <motion.div
      className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-[#36496e]/30 to-[#5a7aa5]/30 rounded-full blur-2xl"
      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    <motion.div
      className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-br from-[#e24065]/30 to-[#d64545]/30 rounded-full blur-2xl"
      animate={{ scale: [1.3, 1, 1.3], opacity: [0.8, 0.5, 0.8] }}
      transition={{ duration: 4, repeat: Infinity, delay: 2 }}
    />
  </div>
</motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-1.5 sm:pt-2">
            <motion.div 
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section - Redesigned */}
      <section ref={statsRef} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #36496e 1px, transparent 0)',
            backgroundSize: '40px 40px sm:60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-[#36496e]/10 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-[#36496e]" />
              <span className="text-xs sm:text-sm font-bold text-[#36496e] tracking-wide">OUR IMPACT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#d03b38] mb-3 sm:mb-4 px-2">
              Numbers That Matter
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
              Every statistic represents lives touched, families helped, and emergencies handled with care
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group-hover:-translate-y-2 sm:group-hover:-translate-y-3">
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${stat.color}`}></div>
                    
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Icon Container */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg sm:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    
                    {/* Value - Large and Bold */}
                    <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {stat.value}<span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{stat.suffix}</span>
                    </div>
                    
                    {/* Label */}
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-700 mb-1 sm:mb-2">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                      {stat.description}
                    </div>

                    {/* Decorative Line */}
                    <div className={`mt-3 sm:mt-4 md:mt-6 h-0.5 sm:h-1 bg-gradient-to-r ${stat.color} rounded-full w-0 group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section - Redesigned */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#36496e]/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-[#36496e]/10 to-[#5a7aa5]/10 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full mb-6 sm:mb-8">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-[#36496e]" />
                <span className="text-xs sm:text-sm font-bold text-[#36496e] tracking-wide">OUR STORY</span>
              </div>

              {/* Heading */}
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#d03b38] mb-6 sm:mb-8 leading-tight">
                A Decade of{" "}
                <span className="text-gray-900 block">
                  Life-Saving Excellence
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-10">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Founded in <span className="font-bold text-[#36496e]">2015</span> with a mission to revolutionize emergency medical services, we've grown from a small team with big dreams to one of the most trusted ambulance services in the region.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Our journey has been driven by one simple belief: <span className="font-bold text-[#36496e]">every life matters</span>, and every second counts. Today, we're proud to serve thousands of families with the same dedication and compassion that defined our first day.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-10">
                {whyChooseUs.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={idx} 
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-[#36496e]/30 hover:shadow-md transition-all group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#36496e] to-[#5a7aa5] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</h4>
                        <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Link to="/services/funeral-services">
                <motion.button
                  className="bg-[#d03b38] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg hover:shadow-xl sm:hover:shadow-2xl hover:shadow-[#36496e]/30 transition-all inline-flex items-center gap-2 sm:gap-3 group"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right - Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#36496e]/5 via-white to-[#5a7aa5]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#36496e]/10 shadow-xl relative overflow-hidden">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-[#36496e]/10 to-transparent rounded-bl-full"></div>
                
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-10">Our Journey</h3>
                
                <div className="space-y-6 sm:space-y-8">
                  {timeline.map((item, idx) => {
                    const Icon = item.icon;
                    const isVisible = visibleTimelineItems.includes(idx);
                    
                    return (
                      <motion.div 
                        key={idx}
                        ref={el => timelineRefs.current[idx] = el}
                        className="flex gap-4 sm:gap-6 group cursor-pointer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        whileHover={{ x: 5 }}
                      >
                        {/* Timeline Line & Icon */}
                        <div className="flex flex-col items-center">
                          <motion.div 
                            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transition-all ${
                              isVisible 
                                ? 'bg-gradient-to-br from-[#36496e] to-[#5a7aa5]' 
                                : 'bg-white border-2 border-gray-300'
                            }`}
                            animate={isVisible ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-colors ${
                              isVisible ? 'text-white' : 'text-gray-400'
                            }`} />
                          </motion.div>
                          {idx < timeline.length - 1 && (
                            <div className={`w-0.5 sm:w-1 h-16 sm:h-20 my-2 sm:my-3 rounded-full transition-all ${
                              isVisible ? 'bg-gradient-to-b from-[#36496e] to-[#5a7aa5]' : 'bg-gray-200'
                            }`}></div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 pb-6 sm:pb-8">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <span className={`font-display text-xl sm:text-2xl font-bold transition-colors ${
                              isVisible ? 'text-[#36496e]' : 'text-gray-900'
                            }`}>
                              {item.year}
                            </span>
                            <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all inline-block ${
                              isVisible 
                                ? 'bg-gradient-to-r from-[#36496e] to-[#5a7aa5] text-white shadow-md' 
                                : 'bg-gray-200 text-gray-600'
                            }`}>
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyChooseUs/>

      {/* Core Values Section - Premium Redesign */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#36496e]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#5a7aa5]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-[#36496e]/10 to-[#5a7aa5]/10 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full mb-4 sm:mb-6">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-[#36496e]" />
              <span className="text-xs sm:text-sm font-bold text-[#36496e] tracking-wide">WHAT SETS US APART</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#d03b38] mb-4 sm:mb-6 px-2">
              Our Core Values
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6 px-4">
              The principles that guide every emergency response and define our commitment to saving lives
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={idx} 
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredValue(idx)}
                  onMouseLeave={() => setHoveredValue(null)}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#36496e]/20 h-full relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${value.pattern === 'dots' ? 'pattern-dots' : value.pattern === 'grid' ? 'pattern-grid' : value.pattern === 'waves' ? 'pattern-waves' : ''}`}></div>
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative">
                      {/* Icon & Stat */}
                      <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${value.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                        </div>
                        <span className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs font-bold bg-gradient-to-r ${value.gradient} text-white shadow-md`}>
                          {value.stat}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">{value.desc}</p>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className={`absolute bottom-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tl ${value.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-tl-full`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}