import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '80+', label: 'Happy Clients' },
    { value: '15+', label: 'Technologies' },
  ];

  const skills = [
    { name: 'UI/UX Design', percentage: 90 },
    { name: 'Frontend Development', percentage: 85 },
    { name: 'Graphic Design', percentage: 80 },
    { name: 'Responsive Design', percentage: 90 },
  ];

  return (
    <section id="about" className="py-20 md:py-32 lg:py-48">
      <SectionTitle title="ABOUT ME" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-2 lg:order-1"
        >
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 60px rgba(255, 114, 0, 0.15)",
                  "0 0 80px rgba(255, 114, 0, 0.25)",
                  "0 0 60px rgba(255, 114, 0, 0.15)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-[24px] bg-[#FF7200] p-2"
            >
              <div className="w-full h-full rounded-[20px] bg-[#1A1A1A] overflow-hidden border-4 border-[#0D0D0D]">
                <img
                  src={profileImage}
                  alt="JANDEL LOBOS"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Fullstack Developer & Creative UI/UX Designer
          </h3>
          <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed">
            I'm a passionate UI/UX designer and frontend developer with over 5 years of experience creating digital experiences that make a difference. I love turning complex problems into simple, beautiful, and intuitive designs that users love.
          </p>
          <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed">
            My approach combines strategic thinking with creative execution to deliver solutions that not only look great but also drive results. When I'm not designing, I enjoy exploring new design trends, photography, and sharing knowledge with the design community.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-6 border border-[#292929] rounded-[16px] bg-[#1A1A1A] text-center hover:border-[#FF7200]/30 transition-colors"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF7200] mb-2">
              {stat.value}
            </div>
            <div className="text-[#A1A1AA] uppercase text-sm tracking-wide font-semibold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">My Skills</h3>
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
              <span className="font-semibold text-white">{skill.name}</span>
              <span className="text-[#FF7200] font-bold">{skill.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-[#242528] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-[#FF7200] rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;