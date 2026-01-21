import { useState } from 'react';
import { Stethoscope, Activity, Heart, Zap, Award, TrendingUp, Clock, CheckCircle2, Users, Briefcase } from 'lucide-react';

const MedicalTeamEquipment = () => {
  const [activeTab, setActiveTab] = useState('team');
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Officer',
      specialty: 'Cardiology',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
      certifications: 'Board Certified',
      patients: '2,500+',
      achievements: 'Published 47 papers',
      availability: 'Available Today'
    },
    {
      name: 'Dr. James Carter',
      role: 'Head of Emergency',
      specialty: 'Trauma Surgery',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      certifications: 'ATLS Certified',
      patients: '3,200+',
      achievements: 'Handled 1000+ emergencies',
      availability: 'On Call'
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Pediatric Specialist',
      specialty: 'Pediatrics',
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      certifications: 'ABP Certified',
      patients: '1,800+',
      achievements: 'Child Health Advocate',
      availability: 'Available Today'
    },
    {
      name: 'Dr. Michael Brooks',
      role: 'Anesthesiologist',
      specialty: 'Anesthesiology',
      experience: '18+ years',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg',
      certifications: 'ABA Certified',
      patients: '4,000+',
      achievements: 'Safety Excellence Award',
      availability: 'Available Today'
    }
  ];

  const equipment = [
    {
      name: 'MRI Scanner',
      type: 'Diagnostic Imaging',
      count: 3,
      features: '3T High-Resolution Imaging',
      icon: Activity,
      status: 'Active',
      utilization: 87,
      lastMaintenance: '2 days ago'
    },
    {
      name: 'CT Scanner',
      type: 'Diagnostic Imaging',
      count: 2,
      features: '64-Slice Dual Source Technology',
      icon: Zap,
      status: 'Active',
      utilization: 92,
      lastMaintenance: '1 week ago'
    },
    {
      name: 'Ventilators',
      type: 'Critical Care',
      count: 25,
      features: 'ICU Grade Life Support',
      icon: Heart,
      status: 'Active',
      utilization: 68,
      lastMaintenance: '3 days ago'
    },
    {
      name: 'Defibrillators',
      type: 'Emergency Care',
      count: 18,
      features: 'Biphasic Waveform AED',
      icon: Activity,
      status: 'Active',
      utilization: 45,
      lastMaintenance: 'Today'
    }
  ];

  return (
    <section className="min-h-screen bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(71 85 105) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      {/* Decorative Elements */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-slate-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-slate-100 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-700 font-semibold tracking-wider text-xs sm:text-sm uppercase">
              <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" strokeWidth={2.5} />
              <span>Medical Excellence</span>
            </div>
            <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight px-2">
            <span className="bg-[#d03b38] bg-clip-text text-transparent">
              Medical Team & Equipment
            </span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6 px-4">
            World-class professionals and state-of-the-art technology delivering exceptional care
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center mb-12 sm:mb-16 md:mb-20 px-2">
          <div className="relative inline-flex bg-slate-50 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-xl border border-slate-200 w-full sm:w-auto max-w-md">
            <div 
              className="absolute top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg sm:rounded-xl transition-all duration-500 ease-out shadow-lg"
              style={{
                left: activeTab === 'team' ? '6px' : 'calc(50%)',
                width: 'calc(50% - 6px)'
              }}
            />
            
            <button
              onClick={() => setActiveTab('team')}
              className={`relative px-4 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 z-10 flex-1 ${
                activeTab === 'team' ? 'text-white' : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
              <span className="hidden xs:inline">Medical Team</span>
              <span className="xs:hidden">Team</span>
            </button>
            
            <button
              onClick={() => setActiveTab('equipment')}
              className={`relative px-4 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 z-10 flex-1 ${
                activeTab === 'equipment' ? 'text-white' : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
              <span>Equipment</span>
            </button>
          </div>
        </div>

        {/* Team Cards */}
        {activeTab === 'team' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
                style={{ 
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                {/* Hover Shadow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-black border-2 border-slate-200 group-hover:border-slate-300 transition-all duration-500">
                  {/* Decorative Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600" />

                  <div className="p-4 sm:p-6">
                    {/* Image Section */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden ring-4 ring-slate-100 group-hover:ring-slate-200 transition-all duration-500">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex items-center gap-1 sm:gap-1.5 bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg border border-slate-200">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-500/50" />
                        <span className="text-slate-700 text-[10px] sm:text-xs font-bold">{member.availability}</span>
                      </div>

                      {/* Experience Badge */}
                      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-slate-800 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
                        <span className="text-white text-[10px] sm:text-xs font-bold">{member.experience}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1 group-hover:text-slate-700 transition-colors leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-1.5 sm:mb-2">
                          {member.role}
                        </p>
                        <div className="inline-block bg-slate-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                          <p className="text-[10px] sm:text-xs font-semibold text-slate-700">{member.specialty}</p>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-slate-200 group-hover:border-slate-300 transition-colors">
                          <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                            <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-600" strokeWidth={2.5} />
                            <span className="text-[10px] sm:text-xs text-slate-600 font-semibold">Patients</span>
                          </div>
                          <p className="text-sm sm:text-base md:text-lg font-bold text-slate-800">{member.patients}</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-slate-200 group-hover:border-slate-300 transition-colors">
                          <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-600" strokeWidth={2.5} />
                            <span className="text-[10px] sm:text-xs text-slate-600 font-semibold">Status</span>
                          </div>
                          <p className="text-[10px] sm:text-xs font-bold text-slate-800 leading-tight">{member.certifications}</p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="flex items-center gap-2">
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                      </div>

                      {/* Achievement */}
                      <div className="text-center">
                        <p className="text-[10px] sm:text-xs text-slate-600 font-medium italic">{member.achievements}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Equipment Cards */}
        {activeTab === 'equipment' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {equipment.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                  style={{ 
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 100}ms`,
                    opacity: 0
                  }}
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 group-hover:border-slate-300 shadow-black transition-all duration-500">
                    {/* Decorative Top Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600" />

                    <div className="p-4 sm:p-6">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 p-[3px] group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl flex items-center justify-center">
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={2} />
                          </div>
                          {/* Pulse Ring */}
                          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-slate-600 opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500" />
                        </div>
                        
                        {/* Count Badge */}
                        <div className="bg-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                          <span className="text-white text-base sm:text-lg font-bold">{item.count}</span>
                          <span className="text-slate-300 text-[10px] sm:text-xs ml-1 font-semibold">units</span>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="mb-4 sm:mb-5">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1.5 sm:mb-2 group-hover:text-slate-700 transition-colors">
                          {item.name}
                        </h3>
                        <div className="inline-block bg-slate-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                          <p className="text-[10px] sm:text-xs font-semibold text-slate-700">{item.type}</p>
                        </div>
                      </div>

                      {/* Utilization Bar */}
                      <div className="mb-4 sm:mb-5">
                        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                          <span className="text-[10px] sm:text-xs text-slate-600 font-semibold">Utilization Rate</span>
                          <span className="text-xs sm:text-sm font-bold text-slate-800">{item.utilization}%</span>
                        </div>
                        <div className="h-2.5 sm:h-3 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-200 shadow-inner">
                          <div 
                            className="h-full bg-gradient-to-r from-slate-700 to-slate-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{ width: hoveredCard === index ? `${item.utilization}%` : '0%' }}
                          >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                          </div>
                        </div>
                      </div>

                      {/* Features Box */}
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-slate-200 mb-4 sm:mb-5 group-hover:border-slate-300 transition-colors">
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {item.features}
                        </p>
                      </div>

                      {/* Footer Info */}
                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t-2 border-slate-200">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" strokeWidth={2.5} />
                          <span className="text-[10px] sm:text-xs text-slate-700 font-bold">{item.status}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500" strokeWidth={2.5} />
                          <span className="text-[10px] sm:text-xs text-slate-600 font-medium">{item.lastMaintenance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default MedicalTeamEquipment;