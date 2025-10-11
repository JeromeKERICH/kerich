import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden relative px-4 py-16"
    >
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-20 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent" 
           style={{
             backgroundSize: '50px 50px',
             backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)'
           }}></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Headline with elegant typography */}
        <div className="mb-10">
          <h1 className={`text-2xl md:text-5xl font-light mb-6 transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-extralight tracking-tight">
              Learn before you build.
            </span>
            <span className={`block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-extralight tracking-tight transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Understand before you pay.
            </span>
            <span className={`block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-extralight tracking-tight transition-all duration-1000 delay-600 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Built once for conversion.
            </span>
          </h1>
        </div>

        {/* Subline with elegant divider */}
        <div className="relative my-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-px h-8 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          <p className={`text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto transition-all duration-1000 delay-900 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            Websites shouldn’t be experiments. They should be growth engines. We help you build high-converting websites based on data and research.
          </p>
        </div>

        {/* CTA Buttons with glassmorphism effect */}
        <div className={`flex flex-col sm:flex-row justify-center gap-6 mt-16 transition-all duration-1000 delay-1200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          <button className="group relative bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Get started
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group relative bg-transparent backdrop-blur-md border border-gray-500/30 text-gray-300 font-medium py-4 px-10 rounded-full transition-all duration-300 hover:border-white/50 hover:text-white hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              See Results
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;