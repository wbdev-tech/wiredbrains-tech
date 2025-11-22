import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [{
  title: 'Managed IT Services',
  description: 'Comprehensive IT infrastructure management and 24/7 support that keeps your business running smoothly and securely.',
  details: [
    'Proactive monitoring and maintenance',
    '24/7 helpdesk and remote support',
    'Network and server management',
    'Automated security patching'
  ]
}, {
  title: 'Cybersecurity Services',
  description: 'Advanced threat protection and security solutions that safeguard your data and defend against evolving cyber threats.',
  details: [
    'Next-generation firewall management',
    'Endpoint detection and response (EDR)',
    'Security information and event management (SIEM)',
    'Vulnerability assessments and penetration testing'
  ]
}, {
  title: 'IT Strategy and Consulting',
  description: 'Strategic technology planning and expert guidance that aligns IT initiatives with your business objectives.',
  details: [
    'Technology roadmap development',
    'IT budget and cost optimization',
    'Cloud strategy and migration planning',
    'Vendor and risk management'
  ]
}, {
  title: 'Microsoft 365 Consulting',
  description: 'Expert implementation and optimization of Microsoft 365 to enhance collaboration and productivity across your organization.',
  details: [
    'Seamless migration and deployment',
    'SharePoint and Teams optimization',
    'Advanced security and compliance setup',
    'User training and adoption programs'
  ]
}, {
  title: 'Business Continuity Services',
  description: 'Robust disaster recovery and backup solutions that ensure uninterrupted operations and protect critical business data.',
  details: [
    'Automated cloud and on-premise backups',
    'Disaster recovery planning and testing',
    'Rapid data restoration services',
    'High-availability infrastructure design'
  ]
}, {
  title: 'VoIP Business Telephones',
  description: 'Modern cloud-based phone systems that deliver crystal-clear communication and seamless connectivity for your team.',
  details: [
    'Cloud PBX and auto-attendant features',
    'Mobile and desktop app integration',
    'HD voice quality and call analytics',
    'Cost-effective scalability'
  ]
}];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleServiceClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filterTags = ['Managed IT', 'Cybersecurity', 'Consulting', 'Microsoft 365', 'Business Continuity', 'VoIP'];

  return (
    <section id="services" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white uppercase">
            OUR <span className="text-[#F54B15]">SERVICES</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mt-4">We provide a comprehensive suite of IT solutions designed to protect your assets, streamline operations, and drive growth.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {filterTags.map(tag => (
              <button key={tag} className="px-5 py-2 border border-[#F54B15] rounded-full text-gray-300 cursor-default uppercase text-sm transition-colors hover:bg-[#F54B15]/10">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800">
          {services.map((service, index) => (
            <div key={service.title} className="border-b border-gray-800">
              <div className="flex justify-between items-center cursor-pointer py-8 group" onClick={() => handleServiceClick(index)}>
                <div className="flex items-center gap-4">
                  <h3 className={`text-3xl md:text-5xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                    {service.title}
                  </h3>
                  {activeIndex === index && (
                    <motion.div
                      className="w-4 h-4 bg-[#F54B15] rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </div>
                
                <motion.div 
                  className="text-[#F54B15]" 
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus size={40} className={`${activeIndex === index ? 'text-[#F54B15]' : 'text-gray-600 group-hover:text-gray-400'} transition-colors`} />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-16 grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-lg text-gray-400 max-w-2xl mb-6">{service.description}</p>
                        <ul className="space-y-2 text-gray-400">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#F54B15] mr-3 mt-1">&#10148;</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-end justify-start md:justify-end">
                        <Button asChild className="bg-[#F54B15] text-white hover:bg-[#D63F11] group rounded-full mt-4">
                          <Link to="/contact">
                            Get Started <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;