import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedCtaBackground from '@/components/AnimatedCtaBackground';

const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0C0D0D]">
      <AnimatedCtaBackground />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Let's turn your ideas into reality. Get in touch with us today and let's discuss how we can help you achieve your goals.
        </p>
        <Button asChild size="lg" className="bg-[#F54B15] text-white hover:bg-[#D63F11] group rounded-full text-lg py-7 px-10">
          <Link to="/contact">
            Get Started <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;