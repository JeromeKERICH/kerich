import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Websites built for growth and conversion.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: "/services/web-development",
      features: ["Performance optimized", "Mobile-first", "SEO ready"]
    },
    {
      title: "eCommerce Solutions",
      description: "Seamless shops with payments, automation, and scale.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: "/services/ecommerce",
      features: ["Payment integration", "Inventory management", "Analytics dashboard"]
    },
    {
      title: "Automation & Integrations",
      description: "Emails, bookings, payments, done for you.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      link: "/services/automation",
      features: ["Workflow automation", "API integrations", "Real-time sync"]
    },
    {
      title: "Mentorship & Programs",
      description: "Learn the craft and strategy behind successful projects.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      link: "/programs",
      features: ["1-on-1 sessions", "Project reviews", "Strategy workshops"]
    }
  ];

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 border-t border-gray-200">
         
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 mt-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional services designed to deliver measurable results and drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-sm"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-gray-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More Link */}
              <a 
                href={service.link}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group/link"
              >
                Learn more
                <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-100 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

      
      </div>

    </section>
  );
};

export default ServicesSection;