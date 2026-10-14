// ─────────────────────────────────────────────────────────────
// Central content file — edit everything in ONE place.
// Replace / extend values with your real information.
// Leave github/linkedin as "" to hide that link automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Jandel Lobos",
  initials: "JL",
  title: "Aspiring IT Professional & Developer",
  intro: "I build useful digital experiences through code, design, and problem-solving.",
  bio: [
    "I'm an aspiring IT professional and developer focused on building clean, useful digital experiences. I enjoy turning ideas into working interfaces — from layout and design to functional code.",
    "I'm currently strengthening my skills in modern web development and UI/UX, and I'm looking for internship or entry-level opportunities where I can contribute, learn from a team, and grow as a developer.",
  ],
  interests: ["Web Development", "UI/UX Design", "Problem Solving", "IT Support"],
  seeking: "Open to internships and entry-level roles",
  location: "Philippines",
  email: "atoatolobos11@gmail.com",
  phone: "+63 994 910 2189",
  // Drop your resume file at:  public/resume.pdf  (see README).
  resumePdfPath: "/resume.pdf",
  resumeFileName: "Jandel-Lobos-Resume.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

// Only list skills you can genuinely demonstrate.
export const skillGroups = [
  {
    id: "dev",
    title: "Development",
    icon: "code",
    skills: ["HTML", "CSS", "JavaScript", "React", "React Native", "Tailwind CSS", "PHP", "MySQL"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Vercel", "Figma"],
  },
  {
    id: "design",
    title: "Design",
    icon: "palette",
    skills: ["UI/UX Design", "Responsive Design", "Prototyping", "Figma"],
  },
  {
    id: "support",
    title: "IT Support",
    icon: "server",
    skills: ["Computer Hardware", "Troubleshooting", "Networking Basics", "IT Infrastructure"],
  },
];

// 3–6 featured projects. Leave `live` / `source` as "" when
// unavailable — the button is hidden automatically (no dead links).
// `image` is optional; omit it to use the generated visual preview.
import imgFrost from "../assets/project-frost.jpg";
import imgRoots from "../assets/project-roots.jpg";
import imgHomeline from "../assets/project-homeline.jpg";
import imgPortfolio from "../assets/project-portfolio.jpg";

export const projects = [
  {
    id: "frost-breakout",
    title: "Frost Breakout",
    category: "web",
    categoryLabel: "Web Application",
    description:
      "A neon-frost arcade breakout game built with HTML5 Canvas, retro synth audio, and responsive mechanics.",
    tags: ["HTML5 Canvas", "JavaScript", "Web Audio", "CSS3"],
    live: "https://frost-breakout-omega.vercel.app/",
    source: "https://github.com/atoatolobos11-del/FROST",
    image: imgFrost,
  },
  {
    id: "roots",
    title: "Roots.co",
    category: "web",
    categoryLabel: "Web Design",
    description: "Modern website design for a sustainable living brand with clean aesthetics.",
    tags: ["Figma", "Web Design", "Branding"],
    live: "https://rootco-services-1r26.vercel.app",
    source: "",
    image: imgRoots,
  },
  {
    id: "homeline",
    title: "Homeline — Eco-Friendly Kitchenware",
    category: "web",
    categoryLabel: "Web Development",
    description: "Full-featured e-commerce platform with a modern shopping experience.",
    tags: ["React", "Node.js", "Stripe"],
    live: "https://homeline-services-gvwx.vercel.app",
    source: "",
    image: imgHomeline,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    category: "uiux",
    categoryLabel: "UI/UX",
    description: "Personal portfolio design showcasing modern minimal aesthetics.",
    tags: ["Figma", "UI/UX", "Portfolio"],
    live: "https://my-portfolio-jnd5.vercel.app",
    source: "",
    image: imgPortfolio,
  },
  {
    id: "smartkids",
    title: "SmartKids Learn",
    category: "mobile",
    categoryLabel: "Mobile App",
    description: "An educational mobile application designed to make learning fun for children.",
    tags: ["React Native", "UI/UX", "Education"],
    live: "",
    source: "",
  },
  {
    id: "healthcare",
    title: "Healthcare Monitoring System",
    category: "web",
    categoryLabel: "Web Application",
    description: "A healthcare dashboard concept for tracking patient vitals and records.",
    tags: ["React", "Tailwind", "Dashboard"],
    live: "",
    source: "",
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "uiux", label: "UI/UX" },
];

// Newest first. Edit freely — render order follows this array.
// Leave `education` empty until you have confirmed details;
// the section hides itself rather than showing placeholders.
export const education = [];

export const experience = [
  {
    id: 1,
    period: "February 9 – Present",
    role: "On-Call Staff",
    org: "Bicol Speedtech Motor Corporation",
    details: [
      "Assisted customers with inquiries and provided courteous customer service.",
      "Supported daily operations and completed assigned tasks efficiently.",
      "Coordinated with team members to ensure smooth workflow and timely completion of duties.",
      "Maintained a clean, organized, and professional work environment.",
    ],
  },
  {
    id: 2,
    period: "2026",
    role: "IT Intern & Developer",
    org: "PANDR IT",
    description:
      "Gaining hands-on experience with web development and UI/UX design while contributing to real client projects.",
  },
  {
    id: 3,
    period: "2024",
    role: "Student Assistant",
    org: "CCDI",
    description:
      "Supported school events and programs while handling mixed general duties assigned by the office.",
  },
  {
    id: 4,
    period: "August – December 2023",
    role: "Fiberglass Casting",
    org: "Napay Arts and Crafts Manufacturing",
    details: [
      "Assisted in the fabrication and casting of fiberglass products by preparing molds, cutting fiberglass materials, mixing and applying resin, performing lamination, trimming and finishing completed products.",
    ],
  },
  {
    id: 5,
    period: "March 27 – April 27, 2023",
    role: "Work Immersion — Electronics Product Assembly Services",
    org: "Jun-Go Technological Institute, Inc.",
    details: [
      "Completed hands-on training in electronics product assembly by assembling and testing electronic components, performing basic soldering and inspection, using electronic tools and measuring instruments, following quality control procedures and observing workplace safety standards in a production environment.",
    ],
  },
  {
    id: 6,
    period: "2021 – Present",
    role: "Carpentry/Laborer",
    org: "Kilicao, Daraga, Albay",
    details: [
      "Assisted skilled carpenters and construction workers in building, repairing, and maintaining structures; performed material handling, site preparation, tool operation, cleanup, and basic carpentry tasks.",
    ],
  },
];

// Leave empty until you hold the certification — section auto-hides.
export const certifications = [];

export const socials = {
  // Evidenced by your published project repos — update if it changes.
  github: "https://github.com/atoatolobos11-del",
  // Add your LinkedIn URL here; hidden while empty.
  linkedin: "",
};

// Contact form delivery. Leave `endpoint` empty to keep the honest
// mailto fallback. To receive messages in your inbox directly, create a
// free form endpoint (https://formspree.io or https://web3forms.com)
// and paste it here, e.g. "https://formspree.io/f/YOUR_FORM_ID".
export const contactForm = {
  endpoint: "",
};

// Optional per-project case-study fields. Add `role: "..."` and
// `highlights: ["..."]` to any project in `projects` above — the modal
// renders those sections only when present. Left empty, nothing invented.

export const siteMeta = {
  title: "Jandel Lobos — Aspiring IT Professional & Developer",
  description:
    "Portfolio of Jandel Lobos, an aspiring IT professional and developer building useful digital experiences through code, design, and problem-solving.",
  url: "https://jandellobos.dev",
};
