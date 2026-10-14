// Generates public/resume.pdf from the portfolio's own confirmed data.
// Run:  node scripts/make-resume.mjs
// Review the output and correct anything before sharing with recruiters.
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public", "resume.pdf");

const INK = "#0B0B0F";
const LIME = "#C6FF3D";
const MUTED = "#55555e";
const BODY = "#1c1c22";
const RULE = "#d8d8de";

const doc = new PDFDocument({ size: "A4", margins: { top: 0, bottom: 36, left: 44, right: 44 } });
doc.pipe(fs.createWriteStream(out));

const W = doc.page.width;
const LM = 44;
const CW = W - LM * 2; // content width

// ── Header band ──────────────────────────────────────────────
doc.rect(0, 0, W, 148).fill(INK);
doc.fillColor("#FFFFFF").font("Helvetica-Bold").fontSize(30);
doc.text("Jandel Lobos", LM, 34, { width: CW });
doc.fillColor(LIME).font("Helvetica-Bold").fontSize(12.5);
doc.text("Aspiring IT Professional & Developer", LM, 74, { width: CW });
doc.fillColor("#B9B9C2").font("Helvetica").fontSize(9.5);
doc.text(
  "Philippines  •  atoatolobos11@gmail.com  •  +63 994 910 2189",
  LM, 98, { width: CW }
);
doc.text(
  "github.com/atoatolobos11-del  •  portfolio-gamma-ruddy-yxdb2iwm5g.vercel.app",
  LM, 114, { width: CW }
);

let y = 172;

const section = (title) => {
  doc.fillColor(BODY).font("Helvetica-Bold").fontSize(12);
  doc.text(title.toUpperCase(), LM, y, { width: CW, characterSpacing: 1 });
  y += 18;
  doc.strokeColor(RULE).lineWidth(1).moveTo(LM, y).lineTo(W - LM, y).stroke();
  y += 10;
};

const para = (text, size = 10) => {
  doc.fillColor(BODY).font("Helvetica").fontSize(size);
  doc.text(text, LM, y, { width: CW, lineGap: 2 });
  y = doc.y + 8;
};

// ── Summary ──────────────────────────────────────────────────
section("Summary");
para(
  "Aspiring IT professional and developer focused on building clean, useful digital " +
  "experiences through code, design, and problem-solving. Currently strengthening " +
  "skills in modern web development and UI/UX. Open to internships and entry-level " +
  "opportunities."
);

// ── Skills ───────────────────────────────────────────────────
section("Skills");
const groups = [
  ["Development", "HTML, CSS, JavaScript, React, React Native, Tailwind CSS, PHP, MySQL"],
  ["Tools", "Git, GitHub, VS Code, Vite, Vercel, Figma"],
  ["Design", "UI/UX Design, Responsive Design, Prototyping, Figma"],
  ["IT Support", "Computer Hardware, Troubleshooting, Networking Basics, IT Infrastructure"],
];
for (const [label, items] of groups) {
  doc.fillColor(BODY).font("Helvetica-Bold").fontSize(10);
  const lw = doc.widthOfString(label + ":  ");
  doc.text(label + ":  ", LM, y, { continued: false });
  doc.font("Helvetica").fontSize(10);
  doc.text(items, LM + lw, y, { width: CW - lw, lineGap: 2 });
  y = doc.y + 6;
}
y += 4;

// ── Projects ─────────────────────────────────────────────────
section("Projects");
const projects = [
  ["Frost Breakout", "HTML5 Canvas, JavaScript, Web Audio",
    "Neon-frost arcade breakout game with retro synth audio and responsive mechanics."],
  ["Roots.co", "Figma, Web Design, Branding",
    "Modern website design for a sustainable living brand with clean aesthetics."],
  ["Homeline — Eco-Friendly Kitchenware", "React, Node.js, Stripe",
    "Full-featured e-commerce platform with a modern shopping experience."],
  ["Portfolio Website", "Figma, UI/UX",
    "Personal portfolio design showcasing modern minimal aesthetics."],
];
for (const [title, tech, desc] of projects) {
  doc.fillColor(BODY).font("Helvetica-Bold").fontSize(10.5);
  doc.text(title, LM, y, { width: CW });
  y = doc.y + 1;
  doc.fillColor(MUTED).font("Helvetica-Oblique").fontSize(9.5);
  doc.text(tech, LM, y, { width: CW });
  y = doc.y + 1;
  doc.fillColor(BODY).font("Helvetica").fontSize(10);
  doc.text(desc, LM, y, { width: CW, lineGap: 2 });
  y = doc.y + 8;
}

// ── Experience ───────────────────────────────────────────────
section("Experience");
const jobs = [
  ["February 9 – Present", "On-Call Staff — Bicol Speedtech Motor Corporation", "",
    [
      "Assisted customers with inquiries and provided courteous customer service.",
      "Supported daily operations and completed assigned tasks efficiently.",
      "Coordinated with team members to ensure smooth workflow and timely completion of duties.",
      "Maintained a clean, organized, and professional work environment.",
    ]],
  ["2026", "IT Intern & Developer — PANDR IT",
    "Gaining hands-on experience with web development and UI/UX design while contributing to real client projects.", []],
  ["2024", "Student Assistant — CCDI",
    "Supported school events and programs while handling mixed general duties assigned by the office.", []],
  ["August – December 2023", "Fiberglass Casting — Napay Arts and Crafts Manufacturing", "",
    [
      "Assisted in the fabrication and casting of fiberglass products by preparing molds, cutting fiberglass materials, mixing and applying resin, performing lamination, trimming and finishing completed products.",
    ]],
  ["March 27 – April 27, 2023", "Work Immersion — Electronics Product Assembly Services — Jun-Go Technological Institute, Inc.", "",
    [
      "Completed hands-on training in electronics product assembly by assembling and testing electronic components, performing basic soldering and inspection, using electronic tools and measuring instruments, following quality control procedures and observing workplace safety standards in a production environment.",
    ]],
  ["2021 – Present", "Carpentry/Laborer — Kilicao, Daraga, Albay", "",
    [
      "Assisted skilled carpenters and construction workers in building, repairing, and maintaining structures; performed material handling, site preparation, tool operation, cleanup, and basic carpentry tasks.",
    ]],
];
for (const [period, role, desc, details] of jobs) {
  doc.fillColor(MUTED).font("Helvetica-Bold").fontSize(9.5);
  doc.text(period, LM, y, { width: CW });
  y = doc.y + 1;
  doc.fillColor(BODY).font("Helvetica-Bold").fontSize(10.5);
  doc.text(role, LM, y, { width: CW });
  y = doc.y + 1;
  if (desc) {
    doc.fillColor(BODY).font("Helvetica").fontSize(10);
    doc.text(desc, LM, y, { width: CW, lineGap: 2 });
    y = doc.y + 8;
  } else {
    y += 6;
  }
  if (details?.length) {
    doc.fillColor(BODY).font("Helvetica").fontSize(9.5);
    for (const d of details) {
      doc.text(`•   ${d}`, LM + 10, y, { width: CW - 10, lineGap: 3 });
      y = doc.y + 4;
    }
    y += 4;
  }
}

doc.end();
console.log("Wrote", out);
