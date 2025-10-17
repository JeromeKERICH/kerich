import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import About from "./pages/About";
import Programs from "./pages/Programs";
import PathFinder from "./pages/Path";
import FoundersSolution from "./pages/Founder";
import Portfolio from "./pages/Portfolio";
import ContactSection from "./pages/Contact";
import TermsOfService from "./pages/Terms";
import PrivacyPolicy from "./pages/Policy";





function App() {
  return (
    <div className="flex flex-col min-h-screen">
     
     
      <main className="flex-grow">
        <Header/>
        <Routes>
        
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/programs" element={<Programs/>}/>
          <Route path="/path-finder" element={<PathFinder/>}/>
          <Route path="/founder-solution" element={<FoundersSolution/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<ContactSection/>}/>
          <Route path="/terms" element={<TermsOfService/>}/>
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
          
        
        </Routes>
        <Footer/>
      </main>
     
    </div>
  );
}

export default App;
