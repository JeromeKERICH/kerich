import React from 'react';
import { motion } from 'framer-motion';
import { FaChess, FaChartLine, FaRobot, FaExpand } from 'react-icons/fa';

const Philosophy = () => {
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

  const approachPoints = [
    {
      icon: <FaChess className="text-3xl" />,
      title: "Strategy First",
      description: "Understanding your goals before writing a single line",
      details: "We start with deep discovery sessions to understand your business objectives, target audience, and success metrics. No assumptions, just data-driven strategy.",
      color: "from-gray-500 to-yellow-600",
      bgColor: "bg-gold-50",
      borderColor: "border-gray-200"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Built for Conversion",
      description: "Websites aren't pretty pictures; they're revenue tools",
      details: "Every design decision is backed by conversion psychology. Clear CTAs, intuitive user flows, and data-tracking built-in from day one.",
      color: "from-gray-500 to-yellow-600",
      bgColor: "bg-gold-50",
      borderColor: "border-gray-200"
    },
    {
      icon: <FaRobot className="text-3xl" />,
      title: "Automated by Default",
      description: "Payments, bookings, emails, no extra hassle",
      details: "Your business should run smoothly 24/7. We integrate automation for repetitive tasks so you can focus on growth, not admin work.",
      color: "from-gray-500 to-yellow-600",
      bgColor: "bg-gold-50",
      borderColor: "border-gray-200"
    },
    {
      icon: <FaExpand className="text-3xl" />,
      title: "Scalable",
      description: "Future-proof solutions that grow with you",
      details: "Built on robust architectures that handle growth seamlessly. No costly rebuilds when you're ready to expand or add new features.",
      color: "from-gray-500 to-yellow-600",
      bgColor: "bg-gold-500",
      borderColor: "border-gray-200"
    }
  ];

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-4xl font-light bg-gradient-to-r from-gray-500 to-yellow-600 bg-clip-text text-transparent mb-6">
              How I Work
            </h2>
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <p className="text-lg lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A different approach to web development, focused on your business outcomes, 
              not just technical implementation.
            </p>
          </motion.div>
        </motion.div>

        {/* Approach Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {approachPoints.map((point, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className={`p-8 rounded-2xl border-2 ${point.borderColor} ${point.bgColor} h-full transition-all duration-300 hover:shadow-lg`}>
                {/* Icon with Gradient Background */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${point.color} text-white shadow-lg`}>
                    {point.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-from-gray-500 to-yellow-600 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-lg font-light text-gray-700">
                      {point.description}
                    </p>
                  </div>

                  <p className="text-gray-500 leading-relaxed">
                    {point.details}
                  </p>
                </div>

                {/* Decorative Element */}
                <motion.div 
                  className={`w-full h-1 bg-gradient-to-r ${point.color} rounded-full mt-6`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-light mb-6">
              Ready to Build Your Growth Engine?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create a website that doesn't just look good, it drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent text-white px-8 py-4 rounded-lg font-medium border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                See Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;