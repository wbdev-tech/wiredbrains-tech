import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0C0D0D] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                alt="IT professionals monitoring server infrastructure and security systems"
                src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/charlesdeluvio-lks7vei-eag-unsplash-7Or6F.jpg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              We're committed to IT <span className="text-[#F54B15]">excellence</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Security-First Approach</h3>
                <p className="text-lg text-gray-400">
                  Every solution is designed with enterprise-grade security protocols to protect your critical business assets and data.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Proactive IT Management</h3>
                <p className="text-lg text-gray-400">
                  We don't just respond to issues—we prevent them with 24/7 monitoring and proactive maintenance that keeps your systems running smoothly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:order-last"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                alt="IT team collaborating on network infrastructure and cloud solutions"
                src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/michael-t-rxri-ho62y4-unsplash-2-tvxRc.jpg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              Your technology, our <span className="text-[#F54B15]">expertise</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">IT Assessment & Strategy</h3>
                <p className="text-lg text-gray-400">
                  We begin with a comprehensive audit of your infrastructure to identify vulnerabilities, inefficiencies, and opportunities for optimization.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Seamless Implementation</h3>
                <p className="text-lg text-gray-400">
                  Our certified engineers deploy solutions with minimal disruption, ensuring smooth transitions and ongoing support every step of the way.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;