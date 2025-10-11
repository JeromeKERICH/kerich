import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight">
                More than code.
                <span className="block mt-4 text-transparent bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text">
                  A commitment to growth.
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
                Every line of code, every integration, every design, built to move businesses forward.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <div className="flex  gap-4 sm:flex-row flex-col">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-900 text-sm md:text-lg text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-gray-300 text-gray-700 px-8 py-4 text-sm md:text-lg rounded-lg font-medium hover:border-gray-400 hover:bg-white transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Photo Section */}
          <motion.div 
            className="relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden  bg-gradient-to-br from-white to-gray-50 ">
                <motion.img
                  src="/assets/KER.PNG" 
                  alt="Emmanuel Kerich"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 to-transparent " />
              </div>

              
              
            </div>

            </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutHero;