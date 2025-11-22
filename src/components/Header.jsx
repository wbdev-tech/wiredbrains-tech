import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const [path, id] = href.split('#');

    if (isOpen) {
      setIsOpen(false);
    }
    
    if (path === '' && id) { // It's a hash link for the current page
        navigate('/');
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else if (path === '/' && id) { // Hash link for home page
        navigate('/');
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        navigate(path);
    }
  };
  
  const handleHomeClick = (e) => {
     e.preventDefault();
     navigate('/');
     if (isOpen) {
      setIsOpen(false);
    }
  }

  const handleCTA = () => {
    navigate('/contact');
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#0C0D0D]/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <Link to="/" onClick={handleHomeClick} className="flex items-center">
            <img src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/63e13a123efaa65fe8154aefd36b980c.png" alt="WIRED BRAINS Logo" className="h-10 md:h-12" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-300 hover:text-white transition-colors relative group">
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F54B15] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-[#F54B15] text-white hover:bg-[#D63F11] group rounded-full" onClick={handleCTA}>
              Get Started <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#0C0D0D] z-50 md:hidden"
          >
            <div className="container mx-auto px-6 h-full flex flex-col">
              <div className="flex justify-between items-center h-20">
                <Link to="/" onClick={handleHomeClick} className="flex items-center">
                  <img src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/63e13a123efaa65fe8154aefd36b980c.png" alt="WIRED BRAINS Logo" className="h-10" />
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={28} />
                </button>
              </div>
              <nav className="flex-grow flex flex-col justify-center items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-3xl font-semibold text-gray-300 hover:text-[#F54B15] transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              <div className="py-8 flex flex-col gap-4">
                <Button className="bg-[#F54B15] text-white hover:bg-[#D63F11] group w-full text-lg py-6 rounded-full" onClick={handleCTA}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;