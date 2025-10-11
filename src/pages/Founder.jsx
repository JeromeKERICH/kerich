import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDownload, 
  FaCalendar,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa';

const FoundersSolution = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Your Website Shouldn't Be
                <span className="block mt-4 font-normal">An Expensive Mistake</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Before you hire, design, or build — understand what your business truly needs.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <FaDownload />
                <span>Get the Founders Checklist</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors"
              >
                <FaCalendar />
                <span>Book Strategy Call</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Most Founders Waste Money on Websites That Don't Work
              </h2>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto" />
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              "Paying thousands for designs that don't convert",
              "Developers overpromise and under-deliver",
              "Sites launch but deliver no growth",
              "Skipping strategy for immediate execution"
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="flex items-start gap-4 p-6"
              >
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 text-left">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Build an Investment, Not an Expense
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your website should work as a business tool, not a digital poster. 
                Aligned with your goals, built for growth.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="border-t border-b border-gray-200 py-8 max-w-md mx-auto">
                <p className="text-xl font-normal text-gray-900">
                  "You don't need another website. You need the right one."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                The Founders Solution Framework
              </h2>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto" />
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Vision Mapping", desc: "Clarify goals & audience" },
              { step: "02", title: "Strategy First", desc: "Define what really matters" },
              { step: "03", title: "Budget & Tech", desc: "Know what to pay and why" },
              { step: "04", title: "Vendor Clarity", desc: "Choose the right partner" },
              { step: "05", title: "Growth Roadmap", desc: "Build for scale" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="text-center p-6"
              >
                <div className="text-sm text-gray-500 mb-2">{item.step}</div>
                <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resource */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Get The Founders Checklist
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-600 mb-8 text-lg">
                Essential questions to ask before hiring any developer or agency.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-3"
              >
                <FaDownload />
                <span>Download Free Checklist</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-light text-white mb-6">
                Build With Clarity First
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Download Checklist
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
              >
                Book a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoundersSolution;