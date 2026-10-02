import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 md:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#FF7200] font-bold uppercase tracking-[0.2em] text-sm md:text-base"
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-baseline gap-2 sm:gap-3 md:gap-4 whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-white">JANDEL</span>
            <span className="text-[#FF7200]">LOBOS</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight"
          >
            Creative UI/UX Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-[#A1A1AA] max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Passionate about creating beautiful and functional digital experiences that solve real problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 114, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 md:px-10 md:py-4 bg-[#FF7200] hover:bg-[#ff8f33] rounded-full text-white font-bold uppercase tracking-wide transition-all shadow-lg shadow-[#FF7200]/20 flex items-center justify-center gap-2"
            >
              HIRE ME
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 md:px-10 md:py-4 border-2 border-[#FF7200] text-[#FF7200] hover:bg-[#FF7200] hover:text-white rounded-full font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2"
            >
              GET CV
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center lg:justify-end order-first lg:order-last"
        >
          <div className="relative">
            {/* Main Profile Circle */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 60px rgba(255, 114, 0, 0.25)",
                  "0 0 80px rgba(255, 114, 0, 0.35)",
                  "0 0 60px rgba(255, 114, 0, 0.25)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] rounded-full bg-[#FF7200] p-3"
            >
              <div className="w-full h-full rounded-full bg-[#1A1A1A] flex items-center justify-center overflow-hidden border-4 border-[#0D0D0D] relative">
                <img
                  src={profileImage}
                  alt="JANDEL LOBOS"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: 'center 20%', transform: 'scale(1.10)' }}
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-[#1A1A1A] border-2 border-[#FF7200] rounded-full flex items-center justify-center shadow-lg shadow-[#FF7200]/20"
            >
              <span className="text-[#FF7200] font-bold text-lg md:text-2xl text-center leading-tight">
                5+ <br />
                <span className="text-sm md:text-base">Yrs</span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;