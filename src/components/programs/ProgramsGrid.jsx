import React from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaClock, FaLaptop, FaRocket, FaShareAlt, FaUpload, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProgramsGrid = () => {
  const programs = [
    {
      id: 1,
      title: "Path Finder",
      subtitle: "For Upcoming Techies",
      description: "Discover the roadmap into tech without the overwhelm. Covers fundamentals, learning paths, productivity hacks, and real-world advice.",
      targetAudience: "Aspiring developers & career changers",
      duration: "5 Sessions",
      mode: "Self-paced + Live sessions",
      icon: <FaUserFriends />,
      image: "/assets/pathfinder.jpg",
      cta: "Start Your Journey",
      link: "/path-finder"
    },
    {
      id: 2,
      title: "Founders Solution",
      subtitle: "Smart Website Building",
      description: "What every founder must know before building a website. Avoid wasted money, wrong hires, and misaligned expectations.",
      targetAudience: "Startup founders & entrepreneurs",
      duration: "4 Sessions",
      mode: "Live workshops",
      icon: <FaLaptop />,
      image: "/assets/founders.jpg",
      cta: "Build Smart from Day One",
      link: "/founder-solution"
    },
    {
      id: 3,
      title: "Social Media & Websites",
      subtitle: "Integrated Digital Presence",
      description: "Bridging the gap between your online presence and your digital home. Learn how websites + social work together to attract, engage, and convert.",
      targetAudience: "Content creators & entrepreneurs",
      duration: "2 Masterclasses",
      mode: "Video lessons + Community",
      icon: <FaShareAlt />,
      image: "/assets/social-media.jpg",
      cta: "Connect the Dots",
      link: "/programs/social-media-websites"
    },
    {
      id: 4,
      title: "Scale with Kerich",
      subtitle: "Growth Frameworks",
      description: "Move from functioning to thriving. Growth frameworks for businesses ready to automate, optimize, and expand.",
      targetAudience: "Growing businesses & startups",
      duration: "1 week program",
      mode: "Mentorship program",
      icon: <FaRocket />,
      image: "/assets/scale.jpg",
      cta: "Scale With Confidence",
      link: "/programs/scale-with-kerich"
    },
    {
      id: 5,
      title: "Trends Masterclass",
      subtitle: "Stay Ahead of the Curve",
      description: "A breakdown of current and emerging digital trends, and how to apply them before they're mainstream.",
      targetAudience: "Tech enthusiasts & marketers",
      duration: "2 weeks",
      mode: "Live masterclasses monthly",
      icon: <FaUpload />,
      image: "/assets/trends.jpg",
      cta: "Stay Ahead of the Curve",
      link: "/programs/trends-masterclass"
    },
    {
      id: 6,
      title: "Development Toolkit",
      subtitle: "Modern Developer Essentials",
      description: "The must-have tools, libraries, and workflows for modern developers. From setups to automation to deployment.",
      targetAudience: "Developers & tech teams",
      duration: "Lifetime access",
      mode: "Resource library",
      icon: <FaTools />,
      image: "/assets/toolkit.jpg",
      cta: "Get the Toolkit",
      link: "/programs/development-toolkit"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Transformative Programs
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Carefully crafted programs designed to guide, equip, and scale your journey
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -4,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <Link 
                to={program.link}
                className="block h-full"
              >
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  
                  {/* Banner Image */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if image doesn't load */}
                    <div 
                      className="hidden absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center"
                      style={{ display: 'none' }}
                    >
                      <div className="text-center">
                        <div className="text-3xl text-gray-500 mb-2">{program.icon}</div>
                        <span className="text-gray-600 font-medium text-sm">{program.title}</span>
                      </div>
                    </div>
                    
                    {/* Subtitle Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-600 text-sm">
                          {program.icon}
                        </div>
                        <span className="text-gray-700 text-sm font-medium">
                          {program.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm">
                      {program.description}
                    </p>

                    {/* Target Audience */}
                    <div className="mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <div>
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1">
                            Perfect For
                          </span>
                          <span className="text-gray-700 text-sm">
                            {program.targetAudience}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Duration & Mode */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-gray-400 text-xs" />
                        <span className="text-xs">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaLaptop className="text-gray-400 text-xs" />
                        <span className="text-xs">{program.mode}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 text-sm text-center"
                    >
                      {program.cta}
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Not Sure Which Program is Right for You?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take our quick assessment and we'll recommend the perfect program for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 text-sm"
              >
                Take Assessment
              </motion.button>
              <Link to="/consultation">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-gray-700 px-8 py-3 rounded-lg font-medium border border-gray-300 hover:border-gray-400 transition-all duration-300 text-sm"
                >
                  Book Consultation
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsGrid;