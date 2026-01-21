import React from 'react';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaClock,
} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block ">
              <img
                src="/footer.png"
                alt="MediCare Ambulance Logo"
                className="h-34 sm:h-26 md:h-25 object-contain"
              />
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing emergency medical services with compassion, speed, and professionalism.
              Your trusted partner in critical moments.
            </p>

            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/medicareambulance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition transform hover:scale-110"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/medicareambulance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Services', link: '/services' },
                { name: 'Emergency Response', link: '/contact' },
                { name: 'Blog', link: '/blog' },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.link} className="text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-2">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'Funeral Services',
                'Dead Body Freezer Box',
                'ICU Ambulance Services',
                'Embalming Services',
                'Prayer Meetings',
              ].map((service, i) => (
                <li key={i} className="text-gray-300 hover:text-white">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-2">
              Contact Information
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h4>

            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                C-339, Sector-3, Greater Noida West, UP 201306
              </p>

              <a href="tel:+919355331118" className="flex items-center gap-3 hover:text-white">
                <FaPhoneAlt className="text-blue-400" />
                (+91) 9355331118
              </a>

              <a href="mailto:info@roseambulance.com" className="flex items-center gap-3 hover:text-white">
                <FaEnvelope className="text-blue-400" />
                info@roseambulance.com
              </a>

              <p className="flex items-start gap-3">
                <FaClock className="mt-1 text-blue-400" />
                24/7 Emergency Service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 py-4 text-center text-gray-400 text-sm">
        <a href="https://deboxtechnology.com/" target="_blank" rel="noreferrer">
          © Developed by Debox Technology. All rights reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
