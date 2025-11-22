import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Phone, Mail, Building } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ];
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0D0D] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo and mission */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
               <img src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/63e13a123efaa65fe8154aefd36b980c.png" alt="WIRED BRAINS Logo" className="h-10" />
            </Link>
            <p className="text-gray-400">
              Delivering innovative IT solutions to power your business's future.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1 md:justify-self-center">
            <span className="font-semibold text-white uppercase tracking-wider">Menu</span>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#F54B15] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
             <span className="font-semibold text-white uppercase tracking-wider">Contact</span>
             <div className="mt-4 space-y-4">
                <a href="mailto:contact@wiredbrains.io" className="flex items-center gap-3 text-gray-400 hover:text-[#F54B15] transition-colors">
                    <Mail size={18} />
                    <span>contact@wiredbrains.io</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-[#F54B15] transition-colors">
                    <Phone size={18} />
                    <span>+1 (234) 567-890</span>
                </a>
                 <div className="flex items-start gap-3 text-gray-400">
                    <Building size={18} className="mt-1 flex-shrink-0" />
                    <span>123 Innovation Drive, Tech City, USA</span>
                </div>
             </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-1 md:justify-self-end">
            <span className="font-semibold text-white uppercase tracking-wider">Follow Us</span>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <link.icon size={24} />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {currentYear} WIRED BRAINS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;