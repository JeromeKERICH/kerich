import React, { useState, useEffect } from 'react';

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        }
            , []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const caseStudies = [
    {
      id: 1,
      client: "Toto Village",
      industry: "NGO",
      problem: "Low online conversion rates and outdated eCommerce platform",
      solution: "Custom Shopify Plus store with AI-powered recommendations",
      image: "/assets/b.PNG",
      testimonial: "The new platform transformed our online business completely.",
      clientName: "Prisca Muyodi, Founder"
    },
    {
      id: 2,
      client: "CR Advocates Consultants LLP",
      industry: "Legal Firm",
      problem: "Manual onboarding process causing high customer churn",
      solution: "Automated workflow system with integrated CRM",
      image: "/assets/ba.PNG",
      testimonial: "Automation allowed us to scale without adding overhead.",
      clientName: "Dr. Princess Caroline, Founder"
    },
    {
      id: 3,
      client: "Thriving Moms Space",
      industry: "Personal Development",
      problem: "Inefficient booking system leading to lost reservations",
      solution: "Real-time booking platform with payment integration",
      image: "/assets/ga.PNG",
      testimonial: "Our booking system is now our competitive advantage.",
      clientName: "Lucy Kariuki, Founder"
      
    },

    {
        id: 4,
        client: "Eco Viatal Consulting Group",
        industry: "Investment Firm",
        problem: "Inefficient booking system leading to lost reservations",
        solution: "Real-time booking platform with payment integration",
        image: "/assets/ga.PNG",
        testimonial: "Our booking system is now our competitive advantage.",
        clientName: "Elizabeth Nasaka, Managing Director"
        
      }, 

      {
        id: 5,
        client: "Gloria Karen Foundation",
        industry: "Personal Development Website",
        problem: "Inefficient booking system leading to lost reservations",
        solution: "Real-time booking platform with payment integration",
        image: "/assets/ga.PNG",
        testimonial: "Our booking system is now our competitive advantage.",
        clientName: "Gloria Karen, Founder"
        
      }, 

      {
        id: 6,
        client: "Morning Star Foundation",
        industry: "NGO",
        problem: "Inefficient booking system leading to lost reservations",
        solution: "Real-time booking platform with payment integration",
        image: "/assets/ga.PNG",
        testimonial: "Our booking system is now our competitive advantage.",
        clientName: "Stephen Rotich, Director"
        
      }

  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-5 px-2 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-6 py-20">
          <h2 className="text-2xl md:text-5xl font-light bg-gradient-to-r from-gray-500 to-yellow-600 bg-clip-text text-transparent mb-4">
            Proven Results
          </h2>
          <p className="text-l md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real projects, measurable outcomes. See how I've helped businesses achieve their goals.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={study.id} className="w-full flex-shrink-0 px-2">
                  <CaseStudyCard study={study} />
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-gray-900 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-8">Want similar results for your business?</p>
          <a 
            href="/case-studies"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            View All Case Studies
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Case Study Card Component - Fixed Image Display
const CaseStudyCard = ({ study }) => {
    
        const [imageError, setImageError] = useState(false);
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 h-full flex flex-col">
      {/* Image Section - Fixed */}
      
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {!imageError ? (
          <img
            src={study.image}
            alt={`${study.client} Case Study`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium">{study.client}</span>
          </div>
        )}
        
        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <span className="text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200">
            {study.industry}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 lg:p-8 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
          {study.client}
        </h3>

        {/* Problem & Solution */}
        <div className="space-y-4 mb-6 flex-1">
          <div>
            <span className="text-sm font-medium text-gray-500 block mb-1">Challenge</span>
            <p className="text-gray-600 text-sm leading-relaxed">{study.problem}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500 block mb-1">Solution</span>
            <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <p className="text-gray-600 text-sm italic mb-2 leading-relaxed">"{study.testimonial}"</p>
          <p className="text-gray-500 text-xs font-medium">{study.clientName}</p>
        </div>

        {/* View Case Study Link */}
        <a 
          href={`/case-studies/${study.id}`}
          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 mt-4 transition-colors duration-300 group/link"
        >
          View Website
          <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;