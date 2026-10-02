import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Logo = ({ className = '' }) => {
  return (
    <motion.a
      href="#home"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center shrink-0 ${className}`}
      aria-label="Jandel Lobos — home"
    >
      <img
        src={logo}
        alt="Jandel Lobos — UI/UX Designer"
        draggable="false"
        className="w-[65px] sm:w-[70px] md:w-[75px] lg:w-[85px] h-auto object-contain select-none"
      />
    </motion.a>
  );
};

export default Logo;
