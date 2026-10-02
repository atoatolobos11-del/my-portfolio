import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import {
  Code,
  Database,
  Globe,
  Palette,
  Server,
} from 'lucide-react';

const Technologies = () => {
  const techs = [
    { name: 'React', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'HTML', icon: Globe },
    { name: 'CSS', icon: Palette },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Node.js', icon: Server },
    { name: 'Git', icon: Code },
    { name: 'GitHub', icon: Globe },
    { name: 'Docker', icon: Server },
    { name: 'Figma', icon: Palette },
    { name: 'MySQL', icon: Database },
    { name: 'Flutter', icon: Code },
  ];

  return (
    <section id="technologies" className="py-20 md:py-32 lg:py-48">
      <SectionTitle
        title="TOOLS & TECHNOLOGIES"
        subtitle="Technologies I work with to bring ideas to life"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {techs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group p-4 md:p-6 border border-[#292929] rounded-[16px] bg-[#1A1A1A] flex flex-col items-center justify-center gap-3 hover:border-[#FF7200]/50 transition-all"
            >
              <Icon size={28} className="text-[#FF7200] group-hover:scale-110 transition-transform" />
              <span className="text-xs md:text-sm font-semibold text-center text-white">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;