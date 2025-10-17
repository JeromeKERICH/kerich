import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/assets/ker.jpg"
                alt="Emmanuel Kerich"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-gray-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
              Emmanuel Kerich
            </h1>
            
            <div className="w-20 h-0.5 bg-gray-300 mx-auto" />
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I Build digital solutions that drive business growth through clean code and strategic design.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link to='/portfolio' className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              View Projects
            </Link>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors">
              Download Free Guide
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;