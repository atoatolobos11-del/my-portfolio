import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { projectsData, categories } from '../data/projects';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  const openProject = (project) => {
    const url = project.link || project.github;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 lg:py-48">
      <SectionTitle
        title="MY PORTFOLIO"
        subtitle="Selected projects and creative work."
      />
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold uppercase tracking-wide transition-all ${
              activeCategory === category.id
                ? 'bg-[#FF7200] text-white shadow-lg shadow-[#FF7200]/20'
                : 'bg-[#1A1A1A] text-[#A1A1AA] border border-[#292929] hover:border-[#FF7200]/50 hover:text-white'
            }`}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {filteredProjects.map((project, index) => {
          const hasLink = Boolean(project.link || project.github);
          return (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              y: -15, 
              scale: 1.02,
              rotateX: 1,
              rotateY: -1,
            }}
            whileTap={{ scale: 0.995 }}
            onClick={() => { if (hasLink) openProject(project); }}
            style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            className={`group border border-[#292929] rounded-[20px] bg-[#1A1A1A] overflow-hidden hover:border-[#FF7200]/50 transition-all duration-500 ease-out ${hasLink ? 'cursor-pointer' : ''}`}
          >
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-[#242528] to-[#1A1A1A] flex items-center justify-center relative overflow-hidden">
              <div className="text-4xl md:text-5xl font-bold text-[#FF7200]/30">PROJECT</div>
              <div className="absolute inset-0 bg-[#FF7200]/0 group-hover:bg-[#FF7200]/10 transition-colors duration-300 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => { e.stopPropagation(); openProject(project); }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-2 bg-[#FF7200] rounded-full text-white font-semibold flex items-center gap-2 shadow-lg shadow-[#FF7200]/30 cursor-pointer"
                >
                  {project.link ? 'VIEW PROJECT' : project.github ? 'VIEW CODE' : 'GET IN TOUCH'}
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[#FF7200] uppercase text-xs md:text-sm tracking-widest font-bold">
                  {project.categoryLabel}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-[#242528] rounded-full text-xs text-[#A1A1AA] border border-[#292929]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Portfolio;