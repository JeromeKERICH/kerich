import React from 'react';
import { motion } from 'framer-motion';

const MyStory = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
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
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                My Story
              </h2>
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            <motion.div variants={textVariants} className="space-y-6">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light italic">
                "I didn't start web development out of passion. I started because no one wanted to build my site within my budget."
              </p>

              <div className="space-y-4 text-sm md:text-lg text-gray-600 leading-relaxed">
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
                  <div className="text-2xl lg:text-3xl font-light text-gray-900">2</div>
                  <div className="text-sm text-gray-600">Months to first launch</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl lg:text-3xl font-light text-gray-900">20+</div>
                  <div className="text-sm text-gray-600">Projects delivered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl lg:text-3xl font-light text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Self-taught journey</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Timeline */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
              {/* Timeline */}
              <div className="space-y-8">
                {/* Start Point */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mt-2" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">The Beginning</h4>
                    <p className="text-gray-600 text-sm mt-1">Couldn't afford a developer</p>
                  </div>
                </div>

                {/* Learning Phase */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mt-2" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Learning Phase</h4>
                    <p className="text-gray-600 text-sm mt-1">Months of tutorials and failures</p>
                  </div>
                </div>

                {/* Breakthrough */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">First Real Project</h4>
                    <p className="text-gray-600 text-sm mt-1">Launched first functional site</p>
                  </div>
                </div>

                {/* Present */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Today</h4>
                    <p className="text-gray-600 text-sm mt-1">Helping businesses grow</p>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-green-500 -z-10" />

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-gray-200 rounded-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-gray-200 rounded-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
              />
            </div>

            {/* Floating Quote */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="flex items-start space-x-3">
                <div className="text-2xl text-yellow-400">★</div>
                <p className="text-sm text-gray-600">
                  "The best developers understand the struggle of starting from zero"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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