import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Skills = () => {
  const skills = [
    { name: 'UI/UX Design', percentage: 90 },
    { name: 'Frontend Development', percentage: 85 },
    { name: 'Graphic Design', percentage: 80 },
    { name: 'Responsive Design', percentage: 90 },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 lg:py-48">
      <SectionTitle title="MY SKILLS" subtitle="Core competencies and technical expertise" />
      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-white text-base md:text-lg">{skill.name}</span>
              <span className="text-[#FF7200] font-bold">{skill.percentage}%</span>
            </div>
            <div className="w-full h-3 bg-[#242528] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-[#FF7200] to-[#ff8f33] rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;