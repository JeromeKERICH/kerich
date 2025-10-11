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
          
        
        </Routes>
        <Footer/>
      </main>
     
    </div>
  );
}

export default App;
