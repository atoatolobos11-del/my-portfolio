import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 lg:py-48">
      <SectionTitle title="MY EXPERIENCE" />
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#292929] transform md:-translate-x-1/2"></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#FF7200] rounded-full transform md:-translate-x-1/2 z-10 shadow-lg shadow-[#FF7200]/30"></div>

              {/* Content */}
              <div className={`w-full ml-10 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
              }`}>
                <div className="p-6 md:p-8 border border-[#292929] rounded-[20px] bg-[#1A1A1A] hover:border-[#FF7200]/30 transition-colors">
                  <span className="text-2xl md:text-3xl font-bold text-[#FF7200] mb-2 block">
                    {exp.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-[#FF7200] font-semibold mb-4">{exp.company}</p>
                  <p className="text-[#A1A1AA] leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;