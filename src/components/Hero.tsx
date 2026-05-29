import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Linkedin, FileDown } from 'lucide-react';
import { profile } from '../data/profile';
import CountUp from './CountUp';

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center px-6 pt-28">
      <div className="mx-auto w-full max-w-5xl text-center">
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to consulting · strategy · analytics roles
        </motion.div>

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="heading-display mt-8 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-slate-300 md:text-xl"
        >
          {profile.headline}
        </motion.p>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={3}
          className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 md:text-base"
        >
          {profile.subHeadline}
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="chip">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </span>
          <a href={`mailto:${profile.email}`} className="chip transition hover:bg-white/10">
            <Mail className="h-3.5 w-3.5" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="chip transition hover:bg-white/10"
          >
            <Linkedin className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:from-white/20 hover:to-white/10"
          >
            Explore my journey
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="rounded-2xl border border-white/10 px-6 py-3 text-sm text-slate-200 backdrop-blur transition hover:bg-white/5"
          >
            Let's connect
          </a>
          <a
            href="/rakesh-behera-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 text-sm text-slate-200 backdrop-blur transition hover:bg-white/5"
          >
            <FileDown className="h-4 w-4" />
            Résumé
          </a>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={6}
          className="mx-auto mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {profile.metrics.map((m) => (
            <div
              key={m.label}
              className="glass px-4 py-5 text-center"
            >
              <div className="heading-display text-2xl font-semibold gradient-text-soft">
                <CountUp value={m.value} />
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
