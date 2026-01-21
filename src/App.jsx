import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSecttion from "./pages/home/HeroSection";
import WelcomeSection from "./pages/home/Welcome";
import StatsBar from "./pages/home/Stats";
import WhyChooseUs from "./pages/home/WhyChooseUs";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
//import ServicesPage from "./pages/Services";
import CallToAction from "./pages/home/Cta";
import Testimonials from "./pages/home/Testimonial";
import BlogList from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetails";
import ServiceSection from "./pages/home/ServiceSection";
import HospitalPartners from "./pages/home/ClientSection";
//import MedicalTeamEquipment from './pages/home/Medical-Team'
import CoverageArea from './pages/home/CoverageArea'

import Call from './components/Call'
import CallIcon from "./components/Call";
import WhatsAppIcon from "./pages/home/Icon";
import ServicePage from "./pages/services/ServicePage";
import Saket from './network/saket/page';
import GreaterKailash from './network/greater-kailash/page';
import GreenPark from './network/green-park/page';
import HauzKhas from './network/hauz-khas/page';
import Malviya from './network/malviya/page';
import SouthDelhi from './network/south-delhi/page'


const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="w-full min-h-screen flex flex-col">
                <HeroSecttion />
                <StatsBar />
                <WelcomeSection />
                <HospitalPartners/>
                {/* <MedicalTeamEquipment/> */}
                <CallToAction />
                <WhyChooseUs />
                <ServiceSection />
                <Testimonials />
                <CoverageArea/>
              </div>
            }
          />

          {/* Other Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
             <Route path="/services/:slug" element={<ServicePage />}/>
             <Route path="/network/ambulance-service-in-saket" element={<div>
              <Saket/>
              </div>} />
               <Route path="/network/ambulance-service-in-greater-kailash" element={<div>
              <GreaterKailash/>
              </div>} />
               <Route path="/network/ambulance-service-in-green-park" element={<div>
              <GreenPark/>
              </div>} />
                <Route path="/network/ambulance-service-in-hauz-khas" element={<div>
              <HauzKhas/>
              </div>} />
                <Route path="/network/ambulance-service-in-malviya-nagar" element={<div>
              <Malviya/>
              </div>} />
                <Route path="/network/ambulance-service-in-south-delhi" element={<div>
              <SouthDelhi/>
              </div>} />
        </Routes>

        <CallIcon/>
<WhatsAppIcon/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
