import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa';

const ProgramsHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const programHighlights = [
    {
      icon: <FaCode className="text-xl" />,
      text: "Hands-on technical training"
    },
    {
      icon: <FaUsers className="text-xl" />,
      text: "Mentorship & community"
    },
    {
      icon: <FaRocket className="text-xl" />,
      text: "Launch-ready projects"
    },
    {
      icon: <FaChartLine className="text-xl" />,
      text: "Growth-focused outcomes"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/25 rounded-full blur-3xl animate-pulse-medium" />
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 opacity-5">
          <div className="w-32 h-32 border-2 border-blue-300 rounded-full" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-5">
          <div className="w-24 h-24 border border-indigo-300 rotate-45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-700 text-sm font-medium tracking-wide">Transformative Programs</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl  lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight">
                Beyond Code.
                <motion.span 
                  className="block mt-2 bg-gradient-to-r from-gray-500 to-yellow-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Programs that Build
                </motion.span>
                <motion.span 
                  className="block mt-2 bg-gradient-to-r from-gray-500 to-yellow-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  People, Ideas, and Growth.
                </motion.span>
              </h1>
            </motion.div>

            {/* Animated Divider */}
            <motion.div variants={itemVariants}>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-gray-500 to-yellow-900 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.9, duration: 1 }}
              />
            </motion.div>

            {/* Subline */}
            <motion.div variants={itemVariants}>
              <p className="text-sm md:text-lg lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
                From upcoming developers to startup founders and growing businesses,
                these programs are designed to guide, equip, and scale.
              </p>
            </motion.div>

            {/* Program Highlights */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mt-4">
                {programHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center p-4"
                    variants={iconVariants}
                    custom={index}
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center text-gray-900 mb-3"
                      
                    >
                      {highlight.icon}
                    </motion.div>
                    <span className="text-sm text-gray-600 font-medium leading-tight">
                      {highlight.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="pt-8 mb-10">
              <div className="flex  gap-2 justify-center items-center">
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-lg font-medium border border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-300 flex items-center gap-3"
                >
                  <span>Download Brochure</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            </motion.div>

        </div>
        </div>
    </section>
  );
};

export default ProgramsHero;