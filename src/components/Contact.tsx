import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle
        eyebrow="Contact"
        title="Let's build something meaningful."
        subtitle="Open to consulting, strategy, marketing, and analytics conversations — collaborations, internships, or roles aligned with sustainable business value."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong relative overflow-hidden p-8 md:p-12"
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-accent-emerald/40 to-accent-amber/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-accent-cream/30 to-accent-emerald/10 blur-3xl" />

        <div className="relative grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="heading-display text-3xl font-semibold text-white md:text-4xl">
              Drop me a line.
            </h3>
            <p className="mt-3 max-w-md text-slate-300">
              The fastest way to reach me is by email or LinkedIn — I respond within a day.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-slate-100"
              >
                <Mail className="h-4 w-4" />
                Email me
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="grid gap-3 self-center">
            <a
              href={`mailto:${profile.email}`}
              className="glass flex items-center gap-3 p-4 transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-accent-emerald" />
              <span className="text-sm text-slate-200">{profile.email}</span>
            </a>
            <div className="glass flex items-center gap-3 p-4">
              <MapPin className="h-4 w-4 text-accent-amber" />
              <span className="text-sm text-slate-200">{profile.location}</span>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center gap-3 p-4 transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4 text-accent-cream" />
              <span className="text-sm text-slate-200">/in/rakesh-kumar-behera-rk821604</span>
            </a>
          </div>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-3 text-xs text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Crafted with care.</p>
        <p>Built with React, Three.js & Tailwind.</p>
      </footer>
    </section>
  );
}
