import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 lg:py-48">
      <SectionTitle
        title="LET'S WORK TOGETHER"
        subtitle="Have a project in mind? Let's create something meaningful together."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 md:p-6 border border-[#292929] rounded-[16px] bg-[#1A1A1A] hover:border-[#FF7200]/30 transition-colors">
              <div className="w-12 h-12 bg-[#FF7200]/20 rounded-xl flex items-center justify-center">
                <Mail size={24} className="text-[#FF7200]" />
              </div>
              <div>
                <p className="text-[#A1A1AA] text-sm">Email</p>
                <p className="text-white font-semibold text-base md:text-lg">
                  jandel.lobos@example.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 md:p-6 border border-[#292929] rounded-[16px] bg-[#1A1A1A] hover:border-[#FF7200]/30 transition-colors">
              <div className="w-12 h-12 bg-[#FF7200]/20 rounded-xl flex items-center justify-center">
                <Phone size={24} className="text-[#FF7200]" />
              </div>
              <div>
                <p className="text-[#A1A1AA] text-sm">Phone</p>
                <p className="text-white font-semibold text-base md:text-lg">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 md:p-6 border border-[#292929] rounded-[16px] bg-[#1A1A1A] hover:border-[#FF7200]/30 transition-colors">
              <div className="w-12 h-12 bg-[#FF7200]/20 rounded-xl flex items-center justify-center">
                <MapPin size={24} className="text-[#FF7200]" />
              </div>
              <div>
                <p className="text-[#A1A1AA] text-sm">Location</p>
                <p className="text-white font-semibold text-base md:text-lg">
                  New York, USA
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Follow Me</h3>
            <div className="flex gap-3">
              {[
                { name: 'GitHub', icon: null },
                { name: 'LinkedIn', icon: null },
                { name: 'Instagram', icon: null },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 border border-[#292929] rounded-full bg-[#1A1A1A] flex items-center justify-center hover:border-[#FF7200]/50 hover:bg-[#FF7200]/10 transition-all"
                >
                  <span className="text-xs text-[#A1A1AA] hover:text-[#FF7200] transition-colors">
                    {item.name[0]}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-8 border border-[#292929] rounded-[20px] bg-[#1A1A1A]"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-[#242528] border border-[#292929] rounded-[16px] text-white placeholder-[#A1A1AA] focus:outline-none focus:border-[#FF7200] transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-[#242528] border border-[#292929] rounded-[16px] text-white placeholder-[#A1A1AA] focus:outline-none focus:border-[#FF7200] transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-6 py-4 bg-[#242528] border border-[#292929] rounded-[16px] text-white placeholder-[#A1A1AA] focus:outline-none focus:border-[#FF7200] transition-colors"
            />
            <textarea
              rows="6"
              placeholder="Your Message"
              required
              className="w-full px-6 py-4 bg-[#242528] border border-[#292929] rounded-[16px] text-white placeholder-[#A1A1AA] focus:outline-none focus:border-[#FF7200] transition-colors resize-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 114, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="group w-full md:w-auto px-10 py-4 bg-[#FF7200] hover:bg-[#ff8f33] rounded-full text-white font-bold uppercase tracking-wide transition-all shadow-lg shadow-[#FF7200]/20 flex items-center justify-center gap-2"
            >
              SEND MESSAGE
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;