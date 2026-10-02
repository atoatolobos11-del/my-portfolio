import { motion } from 'framer-motion';

const TechMarquee = () => {
  const techItems = [
    'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS',
    'Node.js', 'Git', 'GitHub', 'Docker', 'Figma', 'Vite'
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="relative overflow-hidden border-t border-b border-[#292929] bg-[#111111]/50 py-8 my-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-[#0D0D0D] z-10 pointer-events-none" />
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="flex whitespace-nowrap gap-12"
      >
        {[...techItems, ...techItems].map((tech, index) => (
          <span
            key={index}
            className="text-2xl md:text-4xl font-bold text-[#A1A1AA]/40 uppercase tracking-widest"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;