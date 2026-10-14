import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { contactForm, profile, socials } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const hasGithub = Boolean(socials.github);
const hasLinkedin = Boolean(socials.linkedin);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const backendOn = Boolean(contactForm.endpoint);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "Please write a message of at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus({ type: "error", text: "Please fix the highlighted fields and try again." });
      return;
    }
    // With a backend endpoint configured, deliver directly to the inbox.
    if (backendOn) {
      setSending(true);
      setStatus(null);
      try {
        const res = await fetch(contactForm.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setForm({ name: "", email: "", message: "" });
        setStatus({ type: "success", text: "Message sent — thanks for reaching out. I'll get back to you soon." });
      } catch {
        setStatus({ type: "error", text: "Couldn't send just now. Please try again, or email me directly instead." });
      } finally {
        setSending(false);
      }
      return;
    }
    // No backend is connected — compose via the visitor's own email app.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus({
      type: "success",
      text: "Your email app should now open with the message ready to send. Nothing is sent automatically — no backend is connected yet.",
    });
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-panel2 px-5 py-3.5 text-cream placeholder-muted transition-colors focus:outline-none ${
      errors[field]
        ? "border-red-400"
        : "border-line focus:border-lime"
    }`;

  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title={
            <>
              Let&rsquo;s <span className="text-lime">talk.</span>
            </>
          }
          description="Have an internship, role, or project in mind? My inbox is open."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Location", value: profile.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-lime/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime/15">
                  <Icon size={22} className="text-lime" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">{label}</p>
                  {href ? (
                    <a href={href} className="block truncate font-display text-lg font-bold text-cream hover:text-lime">
                      {value}
                    </a>
                  ) : (
                    <p className="font-display text-lg font-bold text-cream">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {(hasGithub || hasLinkedin) && (
              <div className="flex items-center gap-3 pt-2">
                {hasGithub && (
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-panel text-muted transition-all hover:-translate-y-1 hover:border-lime/50 hover:text-lime"
                  >
                    <GithubIcon size={20} />
                  </a>
                )}
                {hasLinkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-panel text-muted transition-all hover:-translate-y-1 hover:border-lime/50 hover:text-lime"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                )}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-line bg-panel p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-cream">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-cream">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-cream">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about the opportunity…"
                  value={form.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={`${inputClass("message")} resize-y`}
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-1.5 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(198,255,61,0.35)] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
              >
                {sending ? "Sending…" : "Send Message"}
                <Send size={18} className="dart-x" />
              </button>
              {status && (
                <p
                  role={status.type === "error" ? "alert" : "status"}
                  className={`mt-4 rounded-xl border p-4 text-sm leading-relaxed ${
                    status.type === "error"
                      ? "border-red-400/40 bg-red-400/10 text-cream"
                      : "border-lime/40 bg-lime/[0.07] text-cream"
                  }`}
                >
                  {status.text}
                </p>
              )}
              <p className="mt-4 text-xs leading-relaxed text-muted">
                {backendOn
                  ? "This form sends your message straight to my inbox."
                  : "This form opens your own email app to send the message — no form backend is connected yet."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
