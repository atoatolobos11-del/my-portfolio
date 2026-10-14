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
    period: "2026",
    role: "IT Intern & Developer",
    org: "PANDR IT",
    description:
      "Gaining hands-on experience with web development and UI/UX design while contributing to real client projects.",
  },
  {
    id: 2,
    period: "2024",
    role: "Student Assistant",
    org: "CCDI",
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
