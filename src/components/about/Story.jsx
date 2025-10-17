import React from 'react';
import { motion } from 'framer-motion';

const MyStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={textVariants}>
              <h2 className="text-2xl md:text-4xl font-light bg-gradient-to-r from-gray-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
                My Story
              </h2>
              <div className="w-16 h-0.5 bg-gray-300 mt-6" />
            </motion.div>

            <motion.div variants={textVariants} className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-light italic">
                "I didn't start web development out of passion. I started because no one wanted to build my site within my budget."
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  So I learned, failed, and rebuilt. Six months of late nights, countless tutorials, 
                  and more broken code than I'd like to admit. But with each failure came a lesson, 
                  and with each lesson came progress.
                </p>
                
                <p>
                  The moment it all clicked? Launching my first real site. Not a tutorial project, 
                  but something that actually solved a real problem for a real person. That feeling 
                  of creating something meaningful, that's what hooked me.
                </p>

                <p className="text-gray-800 font-medium">
                  Today, I help businesses skip the frustration and get straight to results.
                </p>
              </div>
            </motion.div>

            {/* Key Milestones */}
            <motion.div variants={textVariants} className="pt-8">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-semibold text-gray-900">2</div>
                  <div className="text-sm text-gray-600">Months to launch</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-semibold text-gray-900">20+</div>
                  <div className="text-sm text-gray-600">Projects delivered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-semibold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Self-taught</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Timeline with Image */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="bg-gray-50 rounded-2xl p-2 border border-gray-200">
              {/* Main Image */}
              <motion.img
                src="/assets/story.png" // Replace with your actual image path
                alt="My development journey"
                className="w-full h-74 object-cover rounded-xl mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
            Ready to build something meaningful?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Start Your Project
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-all duration-300"
            >
              Get My Free Web Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyStory;