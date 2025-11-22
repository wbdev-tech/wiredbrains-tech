import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    slug: 'enterprise-network-security',
    title: 'Enterprise Network Security',
    description: 'A comprehensive cybersecurity infrastructure implementation for a Fortune 500 company.',
    imgKey: "network security operations center with monitoring screens"
  },
  {
    id: 2,
    slug: 'cloud-migration-project',
    title: 'Cloud Migration & Optimization',
    description: 'Complete Microsoft 365 migration and cloud infrastructure setup for a healthcare provider.',
    imgKey: "cloud computing infrastructure with server racks"
  },
  {
    id: 3,
    slug: 'managed-it-services',
    title: 'Managed IT Infrastructure',
    description: 'Full-scale managed IT services deployment with 24/7 monitoring and support.',
    imgKey: "IT technician working on server infrastructure"
  }
];

const Portfolio = () => {
  const navigate = useNavigate();

  const handleProjectClick = (slug) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-4 uppercase">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
              Proven IT <span className="text-[#F54B15]">success stories</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/3">
            <p className="text-lg text-gray-400">
              Discover how we've helped businesses enhance security, optimize operations, and achieve digital transformation through innovative IT solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => handleProjectClick('enterprise-network-security')}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Network security operations center with multiple monitoring screens displaying security analytics"
              src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/tech-daily-lkyv7faumza-unsplash-2-FOBCl.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Enterprise Network Security</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => handleProjectClick('cloud-migration-project')}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Modern cloud computing infrastructure with organized server racks and network equipment"
              src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/gemini_generated_image_n6u5epn6u5epn6u5-5abrf-2-W2Hon.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Cloud Migration & Optimization</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => handleProjectClick('managed-it-services')}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="IT technician working on server infrastructure and network maintenance"
              src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/sumup-vsyr_mbh7q4-unsplash-2-Hxitr.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Managed IT Infrastructure</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;