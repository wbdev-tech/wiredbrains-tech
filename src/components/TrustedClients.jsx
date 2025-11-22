import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'ISC2', description: 'Placeholder for ISC2' },
  { name: 'Indagare', description: 'Placeholder for Indagare' },
  { name: 'DevColor', description: 'Placeholder for DevColor' },
  { name: 'Blue Grass Lending', description: 'Placeholder for Blue Grass Lending' },
  { name: 'STEM', description: 'Placeholder for STEM' },
  { name: 'I & E Insurance', description: 'Placeholder for I & E Insurance' },
  { name: 'BridgeView Endoscopy', description: 'Placeholder for BridgeView Endoscopy' },
  { name: 'Cassidy MD', description: 'Placeholder for Cassidy MD' },
  { name: 'Flock Theory', description: 'Placeholder for Flock Theory' },
  { name: 'LionHeart Funding', description: 'Placeholder for LionHeart Funding' },
  { name: 'DMM Law Firm', description: 'Placeholder for DMM Law Firm' },
  { name: 'Social Offset', description: 'Placeholder for Social Offset' },
  { name: 'Solliback Reclaims', description: 'Placeholder for Solliback Reclaims' },
  { name: 'Miltton Insights', description: 'Placeholder for Miltton Insights' },
  { name: 'C2 Medical Spa', description: 'Placeholder for C2 Medical Spa' },
  { name: 'Ivy Asset Management', description: 'Placeholder for Ivy Asset Management' },
  { name: 'New and Moderm', description: 'Placeholder for New and Moderm' },
  { name: 'Blooms at Belle Mead', description: 'Placeholder for Blooms at Belle Mead' },
  { name: 'InTouch Billing', description: 'Placeholder for InTouch Billing' },
  { name: 'Premier Medical Group', description: 'Placeholder for Premier Medical Group' },
];


const marqueeLogos = [...clientLogos, ...clientLogos]; // Duplicate for seamless loop

const TrustedClients = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -2016], // Adjust as needed based on actual width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30, // Adjusted for smoother loop with text
          ease: 'linear'
        }
      }
    }
  };

  return (
    <section className="py-20 bg-[#0C0D0D] border-t border-b border-[#1E1E2A] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-gray-400 mb-12 uppercase">Trusted by 25+ Companies Worldwide</p>
        <div className="relative w-full">
          <motion.div className="flex" variants={marqueeVariants} animate="animate">
            {marqueeLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-12 flex justify-center items-center">
                <span className="text-white text-2xl md:text-3xl font-semibold opacity-70">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;