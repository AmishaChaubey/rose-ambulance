import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ChevronDown, Send, User, MessageSquare, PhoneCall, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => window.scrollTo(0, 0), []);

  const contactInfo = [
    {
      icon: PhoneCall,
      title: '24/7 Support Line',
      detail: '+91 9355331118',
      subdDetail: 'Available Round the Clock',
      link: 'tel:+919355331118',
      color: 'bg-[#d03b38]',
      bgColor: 'bg-[#36496e]/5'
    },
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'info@roseambulance.com',
      subdDetail: 'Quick Response Guaranteed',
      link: 'mailto:info@roseambulance.com',
      color: 'bg-[#d03b38]',
      bgColor: 'bg-[#36496e]/5'
    },
    {
      icon: MapPin,
      title: 'Our Location',
      detail: 'C-339,Sec-3',
      subdDetail: 'Gr.Noida,201306,UP ',
      link: '#map',
      color: 'bg-[#d03b38]',
      bgColor: 'bg-[#36496e]/5'
    }
  ];

  const faqs = [
    {
      question: 'What types of ambulance services do you provide?',
      answer:
        'We provide a wide range of ambulance services including Emergency Ambulance, ICU Ambulance, Ventilator Ambulance, Cardiac Ambulance, Dead Body Ambulance, and Non-Emergency Patient Transport across Delhi NCR.'
    },
    {
      question: 'How quickly can your ambulance reach the patient?',
      answer:
        'Our 24/7 ambulance service ensures fast response times. In most locations across Noida, Greater Noida, and Delhi NCR, our ambulances reach within 15–30 minutes depending on traffic and location.'
    },
    {
      question: 'What medical facilities are available inside the ambulance?',
      answer:
        'Our ambulances are equipped with oxygen support, stretchers, cardiac monitors, emergency medicines, suction units, and trained paramedics. ICU and ventilator ambulances provide advanced life-support equipment.'
    },
    {
      question: 'Do you provide ambulance services outside Noida?',
      answer:
        'Yes, we provide ambulance services across Noida, Greater Noida, Delhi, Ghaziabad, Faridabad, Gurugram, and other NCR regions. Long-distance and intercity ambulance services are also available.'
    },
    {
      question: 'Are your ambulance services available 24/7?',
      answer:
        'Yes, our emergency ambulance services operate 24/7, including nights, weekends, and public holidays, ensuring immediate medical assistance whenever required.'
    },
    {
      question: 'Are your ambulance staff trained and certified?',
      answer:
        'Yes, all our ambulance drivers, paramedics, and medical staff are trained, certified, and experienced in handling emergency and critical care situations with professionalism and compassion.'
    },
    {
      question: 'What payment methods do you accept for ambulance services?',
      answer:
        'We accept multiple payment options including cash, UPI, debit cards, credit cards, and bank transfers for your convenience.'
    },
    {
      question: 'Can I book an ambulance in advance?',
      answer:
        'Yes, you can pre-book an ambulance for hospital discharge, scheduled checkups, intercity transfers, or planned medical transportation.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost/rose ambulance service/backend/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Contact form response:", data);

      if (data.success) {
        alert("✅ Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert("❌ Failed to send message: " + data.message);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white">
        <div className="absolute inset-0 " >
          <img src="/contact.png" alt="" className=' object-cover'/>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium text-white/90">Get in Touch</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-serif">
              Contact <span className="text-white drop-shadow-lg">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              We're here to help you 24/7. Reach out anytime for immediate assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-10 ">
        <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                className={`group ${info.bgColor} rounded-2xl shadow-xl hover:shadow-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 bg-white border border-white/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${info.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-[#d03b38] mb-2">{info.title}</h3>
                <p className="text-sm sm:text-base font-semibold text-gray-700 mb-1 break-words">{info.detail}</p>
                <p className="text-xs sm:text-sm text-gray-600">{info.subdDetail}</p>
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#d03b38] mb-3">Send Us a Message</h2>
                <p className="text-gray-600 text-sm sm:text-base flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  We'll respond within 24 hours
                </p>
              </div>

              <div ref={formRef} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#36496e] focus:bg-white transition-all outline-none text-sm sm:text-base" 
                        placeholder="Enter your name" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">Phone Number *</label>
                    <div className="relative">
                      <PhoneCall className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        required
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#36496e] focus:bg-white transition-all outline-none text-sm sm:text-base" 
                        placeholder="+91 9999999999" 
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#36496e] focus:bg-white transition-all outline-none text-sm sm:text-base" 
                      placeholder="your.email@example.com" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">Subject *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleInputChange} 
                      required
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#36496e] focus:bg-white transition-all outline-none text-sm sm:text-base" 
                      placeholder="What can we help you with?" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 sm:left-4 top-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      required
                      rows="5" 
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl resize-none focus:border-[#36496e] focus:bg-white transition-all outline-none text-sm sm:text-base" 
                      placeholder="Please describe your requirements..."
                    ></textarea>
                  </div>
                </div>

                <button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  className="w-full bg-[#d03b38] hover:bg-[#bd2a27] hover:to-[#36496e] text-white py-3 sm:py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Map & Info Section */}
          <div className={`lg:col-span-2 space-y-6 sm:space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Map */}
            <div id="map" className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="p-4 sm:p-6 bg-gradient-to-r from-[#36496e] to-[#2a3a54]">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Visit Our Office</h3>
                <p className="text-white/90 text-xs sm:text-sm">Galaxy Diamond Plaza, Sector-4, Greater Noida</p>
              </div>
               <iframe
        className="w-full h-[400px] border-0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.831377643062!2d77.4597611742203!3d28.574825786701215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef00507a78ff%3A0x18099670703b8a6e!2sSector%203%20Greater%20Noida%20West!5e0!3m2!1sen!2sin!4v1768820971379!5m2!1sen!2sin "
        title="Aarti Ambulance Location Map"
      >
        <a href="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">
          Bevölkerung visualisieren Karte
        </a>
      </iframe>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#36496e]/5 to-[#36496e]/10 rounded-3xl shadow-xl p-6 sm:p-8 border border-[#36496e]/20">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Us?</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  '24/7 Emergency Support',
                  'Temperature Monitoring',
                  'All NCR Areas Covered',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-[#36496e]/10 rounded-full">
              <p className="text-sm font-semibold text-[#36496e]">FAQ</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d03b38] mb-3 sm:mb-4 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our freezer box rental services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${openFaq === index ? 'ring-2 ring-[#36496e]' : ''}`} 
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button 
                  className="w-full p-4 sm:p-5 lg:p-6 text-left flex justify-between items-start gap-3 sm:gap-4" 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 flex-1 leading-snug">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-[#36496e] transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-4 sm:px-5 lg:px-6 text-gray-700 text-sm sm:text-base transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-96 pb-4 sm:pb-5 lg:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div>
  );
}