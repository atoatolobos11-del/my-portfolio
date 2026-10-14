import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { profile } from "../data/portfolio";

/**
 * Floating WhatsApp chat button (bottom-left, mirrors the joystick).
 * Number comes from the central data file — update it there.
 */
export default function WhatsAppButton() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const href = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    `Hi ${profile.name}! I found your portfolio and would like to talk about an opportunity.`
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4, y: 32 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_36px_rgba(37,211,102,0.4)]"
        >
          <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
          <MessageCircle size={24} className="relative transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
