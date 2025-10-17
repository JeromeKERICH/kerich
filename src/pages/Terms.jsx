import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Emmanuel Kerich's services, website, and any associated content, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service."
    },
    {
      title: "2. Services Provided",
      content: "Emmanuel Kerich provides web development, digital strategy, and consulting services. All services are provided 'as is' and 'as available' without warranties of any kind."
    },
    {
      title: "3. Client Responsibilities",
      content: "Clients are responsible for providing accurate project requirements, necessary materials, and timely feedback. Delays in client response may impact project timelines."
    },
    {
      title: "4. Payment Terms",
      content: "Payment terms are outlined in individual project proposals. Typically, a 50% deposit is required to begin work, with the balance due upon project completion. All payments are non-refundable once work has commenced."
    },
    {
      title: "5. Intellectual Property",
      content: "Upon full payment, clients receive ownership of the final delivered work. Emmanuel Kerich retains the right to display completed work in his portfolio and marketing materials."
    },
    {
      title: "6. Confidentiality",
      content: "All client information and project details are kept confidential. No client information is shared with third parties without explicit permission."
    },
    {
      title: "7. Project Timeline",
      content: "Project timelines are estimates based on project scope. While every effort is made to meet deadlines, they are not guaranteed and may be affected by client response times and project complexity."
    },
    {
      title: "8. Revisions",
      content: "Each project includes a specified number of revision rounds. Additional revisions may be subject to additional charges at the standard hourly rate."
    },
    {
      title: "9. Third-Party Services",
      content: "Some projects may require third-party services (hosting, domains, APIs). Clients are responsible for ongoing costs associated with these services after project completion."
    },
    {
      title: "10. Limitation of Liability",
      content: "Emmanuel Kerich's total liability for any claim arising from services provided shall not exceed the total amount paid by the client for those specific services."
    },
    {
      title: "11. Termination",
      content: "Either party may terminate a project with written notice. Upon termination, clients are responsible for payment for all work completed up to the termination date."
    },
    {
      title: "12. Governing Law",
      content: "These terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions."
    },
    {
      title: "13. Changes to Terms",
      content: "These Terms of Service may be updated periodically. Continued use of services after changes constitutes acceptance of the modified terms."
    },
    {
      title: "14. Contact Information",
      content: "For questions about these Terms of Service, contact Emmanuel Kerich at info@kerich.co.ke"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-25 md:py-30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Terms of Service
            </h1>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Last updated: December 2023
            </p>
          </motion.div>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          className="bg-white rounded-2xl p-8 mb-12 border border-gray-200"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <p className="text-gray-700 leading-relaxed">
            Welcome to Emmanuel Kerich's Terms of Service. These terms govern your use of my services, 
            website, and any related content. Please read them carefully before engaging my services.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600">
            By using my services, you acknowledge that you have read and agree to these Terms of Service.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            © 2023 Emmanuel Kerich. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;