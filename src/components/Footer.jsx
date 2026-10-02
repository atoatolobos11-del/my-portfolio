import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#292929] bg-[#111111] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={logo}
              alt="Jandel Lobos — UI/UX Designer"
              draggable="false"
              className="w-[110px] md:w-[130px] h-auto object-contain select-none"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {['HOME', 'SERVICES', 'ABOUT', 'PORTFOLIO', 'CONTACT'].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase() === 'home' ? 'home' : link.toLowerCase() === 'about' ? 'about' : link.toLowerCase() === 'portfolio' ? 'portfolio' : link.toLowerCase() === 'contact' ? 'contact' : 'services'}`}
                className="text-[#A1A1AA] hover:text-[#FF7200] transition-colors font-semibold uppercase text-sm tracking-wide"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-3">
            {['GH', 'LI', 'IG'].map((label, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 border border-[#292929] rounded-full bg-[#1A1A1A] flex items-center justify-center hover:border-[#FF7200]/50 transition-all"
              >
                <span className="text-xs text-[#A1A1AA] hover:text-[#FF7200] transition-colors font-bold">
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#292929] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A1A1AA] text-sm text-center md:text-left">
            © 2026 Jandel Lobos. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-[#FF7200] rounded-full shadow-lg shadow-[#FF7200]/20 hover:shadow-[#FF7200]/30 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;