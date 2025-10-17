import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
      title: "1. Information We Collect",
      content: "We collect information that you provide directly to us, including: name, email address, phone number, project requirements, and any other information you choose to provide when contacting us or using our services."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to: provide and maintain our services, communicate with you about projects, send you updates and administrative information, respond to your comments and questions, and improve our services."
    },
    {
      title: "3. Information Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share information only with your consent or to comply with legal obligations. Project information may be shared with necessary third-party service providers (e.g., hosting providers) solely for the purpose of delivering our services."
    },
    {
      title: "4. Data Retention",
      content: "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Project data is typically retained for 3 years after project completion for reference and support purposes."
    },
    {
      title: "5. Your Rights",
      content: "You have the right to: access the personal information we hold about you, request correction of inaccurate information, request deletion of your personal information, object to processing of your personal information, and request data portability. To exercise these rights, please contact us at kerichemmanuel@gmail.com"
    },
    {
      title: "6. Cookies and Tracking",
      content: "Our website may use cookies and similar tracking technologies to enhance user experience. These may include essential cookies for website functionality and analytics cookies to understand how visitors interact with our website. You can control cookie preferences through your browser settings."
    },
    {
      title: "7. Third-Party Services",
      content: "Our website and services may contain links to third-party websites or services. This Privacy Policy does not apply to those third-party services, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services you use."
    },
    {
      title: "8. Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "9. International Data Transfers",
      content: "Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. By using our services, you consent to such transfers."
    },
    {
      title: "10. Children's Privacy",
      content: "Our services are not directed to individuals under 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information."
    },
    {
      title: "11. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. We encourage you to review this Privacy Policy periodically."
    },
    {
      title: "12. Contact Us",
      content: "If you have any questions about this Privacy Policy or our data practices, please contact us at: kerichemmanuel@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-25 md:py-30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl lg:text-5xl font-light text-gray-900 mb-6">
              Privacy Policy
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
            At Emmanuel Kerich, we are committed to protecting your privacy and ensuring the security of your 
            personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you use our services or visit our website.
          </p>
        </motion.div>

        {/* Policy Sections */}
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

        {/* Consent Section */}
        <motion.div 
          className="bg-blue-50 rounded-2xl p-8 mt-12 border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Your Consent
          </h3>
          <p className="text-gray-700 leading-relaxed">
            By using our website and services, you consent to our Privacy Policy and agree to its terms.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600">
            If you have any concerns about your privacy or data, please don't hesitate to contact us.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            © 2023 Emmanuel Kerich. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;