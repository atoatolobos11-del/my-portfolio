import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { servicesData } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 lg:py-48">
      <SectionTitle
        title="MY SERVICES"
        subtitle="I create modern digital experiences focused on usability, performance, and visual quality."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -20, 
                scale: 1.03,
                rotateX: 2,
                rotateY: -2,
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="group p-6 md:p-8 border border-[#292929] rounded-[20px] bg-[#1A1A1A] hover:border-[#FF7200]/50 transition-all duration-700 ease-out relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7200]/0 to-[#FF7200]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FF7200]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF7200]/30 transition-colors duration-700 group-hover:shadow-lg group-hover:shadow-[#FF7200]/20">
                  <Icon size={28} className="text-[#FF7200]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-wide text-white">
                  {service.title}
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed mb-6">
                  {service.description}
                </p>
                <ArrowRight
                  size={20}
                  className="text-[#FF7200] transform group-hover:translate-x-2 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;