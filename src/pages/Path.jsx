import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaDownload, 
  FaRocket, 
  FaPlay, 
  FaCheck, 
  FaUserGraduate, 
  FaSync, 
  FaShieldAlt, 
  FaProjectDiagram,  
  FaArrowRight, 
  FaStar, 
  FaClock, 
  FaUsers, 
  FaAward, 
  FaLightbulb, 
  FaMap, 
  FaGraduationCap, 
  FaTools, 
  FaCompass,
  FaCode,
  FaSearch,
  FaChartLine,
  FaHeart,
  FaCalendar,
  FaComments,
  FaFileAlt,
  FaBook
} from 'react-icons/fa';

const PathFinder = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  // Emotional problem statements
  const emotionalProblems = [
    {
      icon: <FaSearch className="text-lg" />,
      text: "Waking up each day feeling stuck in tutorial hell",
      description: "You watch videos but can't build anything real on your own. You waste hours jumping between courses without a clear roadmap"
    },
    {
      icon: <FaSync className="text-lg" />,
      text: "The sinking feeling that AI will make your skills obsolete",
      description: "Worrying about relevance in a rapidly changing industry. Fear of being replaced by automation and not knowing how to future-proof yourself. Alot of uncertainty about what to learn next"
    },
    {
      icon: <FaUserGraduate className="text-lg" />,
      text: "Seeing others succeed while you're still figuring it out",
      description: "Comparison anxiety and imposter syndrome creep in. Feeling isolated without a community to support and guide you. Lack of mentorship to help navigate your learning journey"
    },
    {
      icon: <FaClock className="text-lg" />,
      text: "Wasted nights trying courses with no direction",
      description: "Wasted time, energy, and money without progress. Frustration from lack of clarity on what to learn and how to apply it. Feeling overwhelmed by endless options and not knowing where to start"
    }
  ];

  // What you'll get
  const benefits = [
    {
      icon: <FaMap className="text-2xl" />,
      title: "Personalized Roadmap",
      description: "A step-by-step plan tailored to your goals and learning style"
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Foundation-First Learning",
      description: "Learn concepts that won't become obsolete with AI changes"
    },
    {
      icon: <FaProjectDiagram className="text-2xl" />,
      title: "Portfolio Projects",
      description: "Build real projects that actually impress employers"
    },
    {
      icon: <FaCompass className="text-2xl" />,
      title: "Future-Proof Mindset",
      description: "Learn how to adapt and grow as technology evolves"
    }
  ];

  // Pricing tiers - side by side on desktop
  const pricingTiers = [
    {
      id: 'free',
      name: 'Path Finder Blueprint',
      price: 'Free',
      description: 'Your starting point to clarity',
      cta: 'Download Free Guide',
      icon: <FaDownload className="text-2xl" />,
      features: [
        { icon: <FaFileAlt className="text-gray-400" />, text: 'Step-by-step learning roadmap' },
        { icon: <FaCheck className="text-gray-400" />, text: 'AI-proof foundation checklist' },
        { icon: <FaProjectDiagram className="text-gray-400" />, text: 'Project ideas for beginners' },
        { icon: <FaBook className="text-gray-400" />, text: 'Resource library access' },
        { icon: <FaChartLine className="text-gray-400" />, text: 'Weekly productivity tips' }
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Full Path Finder Program',
      price: '$67',
      description: 'Complete transformation with guidance',
      cta: 'Start Your Journey',
      icon: <FaRocket className="text-2xl" />,
      features: [
        { icon: <FaDownload className="text-gray-400" />, text: 'Everything in Free plan' },
        { icon: <FaCalendar className="text-gray-400" />, text: '4 weeks of guided mentorship ' },
        { icon: <FaCode className="text-gray-400" />, text: 'Personal project reviews' },
        { icon: <FaChartLine className="text-gray-400" />, text: 'Career strategy sessions' },
        { icon: <FaUsers className="text-gray-400" />, text: 'Lifetime community access' },
        { icon: <FaAward className="text-gray-400" />, text: 'Job search preparation' },
        { icon: <FaFileAlt className="text-gray-400" />, text: 'Resume and portfolio review' },
        { icon: <FaComments className="text-gray-400" />, text: '1:1 weekly coaching calls' }
      ],
      popular: true
    }
  ];

 

  // Program modules
  const programModules = [
    {
      week: "Day 1-2",
      title: "Foundation & Discovery",
      icon: <FaLightbulb className="text-xl" />,
      items: ["Tech landscape overview", "Skill assessment", "Niche discovery", "Learning plan creation"]
    },
    {
      week: "Day 3-4",
      title: "Core Skills Development",
      icon: <FaTools className="text-xl" />,
      items: ["Essential programming concepts", "Tools & workflows", "Project planning", "Version control"]
    },
    {
      week: "Day 5-6",
      title: "Project & Portfolio",
      icon: <FaProjectDiagram className="text-xl" />,
      items: ["Real project development", "Portfolio building", "Career preparation", "Next steps planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-25">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-4">
                 
                  <span className="text-gray-900 text-sm font-medium">Stop Guessing, Start Building</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white/60 leading-tight">
                  From Tutorial Hell
                  <span className="block text-white/90 mt-2">To Confident Builder</span>
                </h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-l md:text-xl text-white/50 leading-relaxed font-light">
                  Path Finder is your escape route from endless tutorials. Get the clarity, direction, and confidence to build real projects and launch your tech career.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-4 rounded-lg font-medium  transition-colors"
                  >
                    <FaDownload />
                    <span>Get Free Blueprint</span>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 border border-white text-white px-6 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors"
                  >
                    <FaPlay className="text-sm" />
                    <span>Watch Course Preview</span>
                  </motion.button>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-gray-400" />
                    <FaStar className="text-gray-400" />
                    <FaStar className="text-gray-400" />
                    <FaStar className="text-gray-400" />
                    <FaStar className="text-gray-400" />
                  </div>
                  <span>100+ techies found their path</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                    <FaCompass className="text-3xl text-gray-600" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-gray-900">Your Journey to Clarity</h3>
                    <div className="space-y-2">
                      {["Confusion → Direction", "Doubt → Confidence", "Isolation → Community", "Stagnation → Growth"].map((journey, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.2 }}
                          className="flex items-center gap-2 text-gray-700 text-sm"
                        >
                          <FaArrowRight className="text-gray-400 text-xs" />
                          <span>{journey}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-light text-white/90 mb-4">
                Does This Sound Familiar?
              </h2>
              <p className="text-white/50">
                These are the exact feelings that keep talented people stuck
              </p>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {emotionalProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-white/10 rounded-lg border border-white/20"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-900 flex-shrink-0">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="font-medium text-white/90 mb-1">{problem.text}</h3>
                  <p className="text-white/40 text-sm">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Path Finder */}
      <section className="py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-light text-white/90 mb-4">
                What is Path Finder?
              </h2>
              <div className="w-12 h-0.5 bg-gray-300 mx-auto mb-4" />
              <p className="text-white/50 max-w-2xl mx-auto">
                Your personalized GPS for the tech world. No more guessing, no more overwhelm.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="bg-white/5 p-6 rounded-lg border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-900 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-medium text-white/90 mb-2">{benefit.title}</h3>
                <p className="text-white/50 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section className="py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-light text-white/90 mb-4">
                1-Week Transformation Journey
              </h2>
              <div className="w-12 h-0.5 bg-gray-300 mx-auto mb-4" />
              <p className="text-white/50 max-w-2xl mx-auto">
                A structured path from confusion to confidence
              </p>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programModules.map((module, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="bg-white/10 p-8 rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600">
                    {module.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/90">{module.week}</div>
                    <h3 className="font-semibold text-white/70">{module.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-white/50 text-sm">
                      <FaCheck className="text-gray-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Pricing Section - Side by side on desktop */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-4xl font-light text-gray-900 mb-4">
                Choose Your Path to Clarity
              </h2>
              <div className="w-12 h-0.5 bg-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">
                Start free or go all-in with personalized guidance
              </p>
            </motion.div>
          </motion.div>

          {/* Pricing Cards - Side by side on desktop */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className={`bg-white rounded-xl p-8 border ${tier.popular ? 'border-gray-900 relative' : 'border-gray-200'} flex flex-col h-full`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 mx-auto mb-4">
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{tier.price}</div>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      {feature.icon}
                      <span className="text-sm">{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    tier.popular
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

    
    </div>
  );
};

export default PathFinder;