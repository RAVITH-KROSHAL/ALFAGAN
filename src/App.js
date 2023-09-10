import React from 'react';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Projects from './Pages/Projects/Projects';
import Careers from './Pages/Careers/Careers';
import Contact from './Pages/Contact/Contact';
import Search from './Pages/Search/Search';
import ScrollToTop from './/Components/ScrollToTop/ScrollToTop';


export default function App() {
  const appStyle = {
    overflowX: 'hidden', // Prevent horizontal scrolling
  };

  return (
    
    <div style={appStyle}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
      <Footer />
      </div>
   
  );
}
