import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Their freezer box service is reliable and well-maintained. The team handles everything respectfully.",
      rating: 5,
      role: "Service Partner",
      initials: "RK"
    },
    {
      name: "Gaurav Singh",
      text: "During our difficult time, they provided a freezer box quickly and professionally. Truly grateful.",
      rating: 5,
      role: "Family Member",
      initials: "GS"
    },
    {
      name: "Abbas Rampurawala",
      text: "The freezer box quality and timely delivery brought us peace of mind. Exceptional service.",
      rating: 5,
      role: "Client",
      initials: "AR"
    },
    {
      name: "Priya Sharma",
      text: "They handled everything with dignity and care. The preservation service was excellent.",
      rating: 5,
      role: "Family Member",
      initials: "PS"
    },
    {
      name: "Dr. Vikram Patel",
      text: "A dependable service that maintains proper hygiene and preservation standards. Highly recommended.",
      rating: 5,
      role: "Medical Professional",
      initials: "VP"
    },
    {
      name: "Anjali Mehta",
      text: "The team arrived on time and provided a well-maintained freezer box. Very supportive service.",
      rating: 5,
      role: "Client",
      initials: "AM"
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-slate-100 rounded-lg mb-4 sm:mb-6">
            <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-slate-600" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif bg-[#d03b38] bg-clip-text text-transparent mb-3 sm:mb-4 tracking-tight px-2">
            Client Testimonials
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#d03b38] to-transparent mx-auto" />

          
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 px-4">
            Trusted by families during their most challenging times
          </p>
        </div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4 lg:mb-6">
                  <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-slate-300" />
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 min-h-[100px] lg:min-h-[120px]">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 lg:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 lg:gap-4 pt-4 lg:pt-6 border-t border-slate-100">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-xs lg:text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm lg:text-base">{testimonial.name}</p>
                    <p className="text-xs lg:text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="flex justify-center items-center gap-3 lg:gap-4 mt-8 lg:mt-12">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 text-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5 lg:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-6 lg:w-8 h-2 bg-slate-900"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 text-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View - Single Card */}
        <div className="md:hidden">
          <div className="relative">
            {/* Navigation Buttons - Mobile */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 text-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 text-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 md:p-8 shadow-lg mx-6 sm:mx-8">
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-slate-300" />
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xs sm:text-sm">
                    {testimonials[currentIndex].initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">{testimonials[currentIndex].name}</p>
                  <p className="text-xs sm:text-sm text-slate-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots - Mobile */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-6 sm:w-8 h-2 bg-slate-900"
                    : "w-2 h-2 bg-slate-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}