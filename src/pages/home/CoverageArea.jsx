import React, { useState } from 'react';
import { MapPin, CheckCircle, Search, X } from 'lucide-react';

const CoverageAreas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [showMap, setShowMap] = useState(false);

  // Coverage data for Crossing Republic, Ghaziabad and Delhi NCR
  const coverageAreas = [
    {
      city: 'Crossing Republic',
      zones: ['Phase 1', 'Phase 2', 'Phase 3', 'Central Park', 'Market Area'],
      available: true,
      coordinates: { lat: 28.6358, lng: 77.4136 }
    },
    {
      city: 'Ghaziabad',
      zones: ['Indirapuram', 'Vaishali', 'Kaushambi', 'Raj Nagar', 'Vasundhara'],
      available: true,
      coordinates: { lat: 28.6692, lng: 77.4538 }
    },
    {
      city: 'Noida',
      zones: ['Sector 62', 'Sector 18', 'Greater Noida', 'Noida Extension', 'Film City'],
      available: true,
      coordinates: { lat: 28.5355, lng: 77.3910 }
    },
    {
      city: 'Delhi',
      zones: ['Connaught Place', 'Lajpat Nagar', 'Saket', 'Nehru Place', 'Karol Bagh'],
      available: true,
      coordinates: { lat: 28.7041, lng: 77.1025 }
    },
    {
      city: 'Gurugram',
      zones: ['Cyber City', 'DLF Phase 1-5', 'Golf Course Road', 'Sohna Road', 'MG Road'],
      available: true,
      coordinates: { lat: 28.4595, lng: 77.0266 }
    },
    {
      city: 'Faridabad',
      zones: ['Sector 16', 'NIT', 'Old Faridabad', 'Neelam Chowk', 'Greater Faridabad'],
      available: true,
      coordinates: { lat: 28.4089, lng: 77.3178 }
    }
  ];

  const filteredAreas = coverageAreas.filter(area =>
    area.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.zones.some(zone => zone.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCityClick = (area) => {
    setSelectedCity(area);
    setShowMap(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm sticky top-0 z-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#d03b38] to-[#e84a47] bg-clip-text text-transparent mb-2 sm:mb-3">
              Our Coverage Areas
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
              We're proud to serve Crossing Republic, Ghaziabad, and Delhi NCR. 
              Check if we're available in your area.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-4 sm:mt-6">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search by city or zone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-[#d03b38] focus:ring-2 focus:ring-[#d03b38]/20 text-sm sm:text-base text-slate-900 placeholder-slate-400 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Cities and Zones List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                Cities & Zones
              </h2>
              <div className="lg:hidden">
                <button
                  onClick={() => setShowMap(!showMap)}
                  className="px-4 py-2 bg-[#d03b38] text-white text-sm font-medium rounded-lg hover:bg-[#b83330] transition-colors"
                >
                  {showMap ? 'Show List' : 'Show Map'}
                </button>
              </div>
            </div>
            
            <div className={`space-y-3 sm:space-y-4 ${showMap ? 'hidden lg:block' : 'block'}`}>
              <div className="space-y-3 max-h-[calc(100vh-300px)] sm:max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                {filteredAreas.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-xl border-2 border-slate-200">
                    <Search className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500 text-sm sm:text-base">
                      No areas found matching your search.
                    </p>
                  </div>
                ) : (
                  filteredAreas.map((area, index) => (
                    <div
                      key={index}
                      onClick={() => handleCityClick(area)}
                      className={`border-2 rounded-xl p-4 sm:p-5 lg:p-6 transition-all cursor-pointer shadow-sm hover:shadow-md ${
                        selectedCity?.city === area.city
                          ? 'border-[#d03b38] bg-gradient-to-br from-red-50 to-white shadow-md ring-2 ring-[#d03b38]/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3 gap-2">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <div className={`p-2 rounded-lg ${
                            selectedCity?.city === area.city 
                              ? 'bg-[#d03b38] text-white' 
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                            {area.city}
                          </h3>
                        </div>
                        {area.available && (
                          <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-200 flex-shrink-0">
                            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
                            <span className="text-xs sm:text-sm font-semibold text-green-700">
                              Available
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="ml-0 sm:ml-12">
                        <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-2">
                          Zones Covered:
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {area.zones.map((zone, zoneIndex) => (
                            <span
                              key={zoneIndex}
                              className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-50 text-slate-700 text-xs sm:text-sm rounded-lg border border-slate-200 font-medium hover:bg-slate-100 transition-colors"
                            >
                              {zone}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Mobile Map Overlay */}
            {showMap && (
              <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setShowMap(false)}>
                <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-3xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                  <div className="sticky top-0 bg-white border-b border-slate-200 px-4 py-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">
                      {selectedCity ? `${selectedCity.city} Location` : 'Service Area Map'}
                    </h3>
                    <button
                      onClick={() => setShowMap(false)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <iframe
                      className="w-full h-[60vh] rounded-xl border-2 border-slate-200"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Crossing%20Republik+(Aarti%20Ambulance)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      title="Aarti Ambulance Location Map"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Map Section */}
          <div className="hidden lg:block lg:sticky lg:top-24 h-fit">
            <div className="border-2 border-slate-200 rounded-xl overflow-hidden bg-white shadow-lg">
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b-2 border-slate-200">
                <h2 className="text-xl font-bold text-slate-900">
                  {selectedCity ? `${selectedCity.city} Location` : 'Service Area Map'}
                </h2>
                {selectedCity && (
                  <p className="text-sm text-slate-600 mt-1">
                    Click on a city to view its location on the map
                  </p>
                )}
              </div>
              
              <div className="relative">
                <iframe
                  className="w-full h-[500px] xl:h-[600px] border-0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Crossing%20Republik+(Aarti%20Ambulance)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Aarti Ambulance Location Map"
                />
              </div>
              
              {!selectedCity && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white px-6 py-4 rounded-xl shadow-xl border-2 border-slate-200">
                    <p className="text-slate-700 font-semibold text-sm md:text-base text-center">
                      Select a city to view on map
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Availability Indicator */}
            <div className="mt-6 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#d03b38]" />
                Check Availability
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                We're constantly expanding our service areas. If your location isn't listed, 
                contact us to learn about upcoming coverage.
              </p>
              <div className="flex items-center gap-2 text-slate-700 bg-green-50 border border-green-200 rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-semibold text-sm">
                  {coverageAreas.filter(a => a.available).length} cities currently available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Availability Card */}
        <div className="lg:hidden mt-6 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl p-5 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#d03b38]" />
            Check Availability
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mb-3 leading-relaxed">
            We're constantly expanding our service areas. If your location isn't listed, 
            contact us to learn about upcoming coverage.
          </p>
          <div className="flex items-center gap-2 text-slate-700 bg-green-50 border border-green-200 rounded-lg p-3">
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-xs sm:text-sm">
              {coverageAreas.filter(a => a.available).length} cities currently available
            </span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <div className="inline-block bg-amber-50 border border-amber-200 rounded-xl px-4 sm:px-6 py-3 sm:py-4">
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <span className="font-semibold text-amber-900">Note:</span> Coverage areas and zones are subject to change. 
              Please contact us to verify availability in your specific location.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default CoverageAreas;