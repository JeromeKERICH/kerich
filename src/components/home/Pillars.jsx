import React, { useState } from 'react';

const PillarsSection = () => {
  const [activePillar, setActivePillar] = useState(null);

  const pillars = [
    {
      title: "Strategy First",
      description: "Every project starts with deep understanding of your goals and market.",
      image: "assets/8.png",
      gradient: "linear-gradient(135deg, rgba(156, 163, 175, 0.85) 0%, rgba(75, 85, 99, 0.75) 100%)",
      accentColor: "from-gray-600 to-gray-800"
    },
    {
      title: "Execution That Works",
      description: "Clean, scalable code + designs that convert.",
      image: "assets/1.png",
      gradient: "linear-gradient(135deg, rgba(156, 163, 175, 0.85) 0%, rgba(75, 85, 99, 0.75) 100%)",
      accentColor: "from-gray-600 to-gray-800"
    },
    {
      title: "Growth Driven",
      description: "Solutions that evolve with your business, not expire with trends.",
      image: "assets/5.png",
      gradient: "linear-gradient(135deg, rgba(156, 163, 175, 0.85) 0%, rgba(75, 85, 99, 0.75) 100%)",
      accentColor: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Why Choose Our Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven methodology that transforms bold claims into measurable results
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-100"
              onMouseEnter={() => setActivePillar(index)}
              onMouseLeave={() => setActivePillar(null)}
            >
              {/* Image Container - Top */}
              <div className="relative h-48 overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${pillar.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 transition-all duration-500 opacity-60 group-hover:opacity-80"
                  style={{ background: pillar.gradient }}
                />
                
                {/* Index Indicator */}
                <div className={`absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r ${pillar.accentColor} flex items-center justify-center text-white font-semibold text-sm transition-transform duration-300 group-hover:scale-110 z-10`}>
                  0{index + 1}
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
              </div>

              {/* Content Container - Bottom */}
              <div className="p-6 lg:p-8">
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-gray-800">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-gray-700">
                  {pillar.description}
                </p>

                {/* Hover Indicator Line */}
                <div className={`w-0 h-0.5 bg-gradient-to-r ${pillar.accentColor} group-hover:w-full transition-all duration-500 delay-200`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            See the Methodology in Action
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;