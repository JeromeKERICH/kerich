import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const [isMobile, setIsMobile] = useState(false);

  const clientLogos = [
    {
      name: "Eco Vital Consulting",
      logo: "/assets/ecologo.png",
      category: "Investment"
    },
    {
      name: "Gulf Africa Investments Nexus",
      logo: "/assets/gain.png",
      category: "Finance"
    },
    {
      name: "Morning Star Foundation",
      logo: "/assets/log.jpg",
      category: "NGO"
    },
    {
      name: "BA Courthouse",
      logo: "/assets/log5.jpg",
      category: "Tech"
    },
    {
      name: "Fiery Network",
      logo: "/assets/fiery.png",
      category: "Personal Development"
    },
    {
      name: "Toto Village",
      logo: "/assets/log.png",
      category: "NGO"
    },
    {
      name: "CR Advocates LLP",
      logo: "/assets/logo.jpg",
      category: "Legal"
    },
    {
      name: "Thriving Moms Space",
      logo: "/assets/thriv.png",
      category: "Personal Development"
    }, 
    {
      name: "Build Your Best",
      logo: "/assets/build.png",
      category: "Personal Development"
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

  // Duplicate logos for seamless infinite scroll - more duplicates for smoother loop
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-5 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Trusted By Industry Leaders
          </h2>
          <motion.div 
            className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Collaborating with innovative companies across diverse sectors
          </p>
        </motion.div>

        {/* Desktop - Infinite Scroll */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden py-4">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            
            <motion.div
              className="flex space-x-16"
              animate={{
                x: [0, -2880] // Adjusted for more duplicates
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60, // Slower for smoother feel
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-44 h-24 flex items-center justify-center px-2"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <div className="relative group">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-14 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                      onError={(e) => {
                        // Fallback if logo doesn't load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback */}
                    <div 
                      className="hidden items-center justify-center w-full h-14 bg-gray-100 rounded-xl border border-gray-200"
                      style={{ display: 'none' }}
                    >
                      <span className="text-gray-600 text-xs font-medium text-center px-2">{client.name}</span>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 shadow-lg">
                      {client.name}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile - Enhanced Single Row Slider */}
        <div className="md:hidden">
          <div className="relative overflow-hidden py-6">
            {/* Gradient Overlays for Mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            
            <motion.div
              className="flex space-x-10"
              animate={{
                x: [0, -1440] // Adjusted for mobile
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Slower for mobile
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((client, index) => (
                <motion.div
                  key={`mobile-${client.name}-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center px-1"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <div className="relative group">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-12 w-auto object-contain filter grayscale opacity-80"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback for Mobile */}
                    <div 
                      className="hidden items-center justify-center w-full h-12 bg-gray-100 rounded-lg border border-gray-200"
                      style={{ display: 'none' }}
                    >
                      <span className="text-gray-600 text-xs font-medium text-center px-1">{client.name.split(' ')[0]}</span>
                    </div>
                    
                    {/* Mobile Tooltip */}
                    <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                      {client.name}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Industry Categories - Improved for Mobile */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            Experience Across Industries
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {Array.from(new Set(clientLogos.map(client => client.category))).map((category, index) => (
              <motion.span
                key={category}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 font-medium shadow-sm"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.1 * index,
                  type: "spring", 
                  stiffness: 300 
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#f9fafb"
                }}
              >
                {category}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA - Improved for Mobile */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6 text-lg">Ready to join these innovative companies?</p>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 text-base shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;