import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        eyebrow="Projects & Initiatives"
        title="Selected work — at the intersection of strategy and execution."
        subtitle="A snapshot of the case competitions, club leadership, and enterprise engagements that have shaped my craft."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {profile.projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: 'easeOut' }}
            className="glass group relative flex flex-col overflow-hidden p-6 transition hover:bg-white/[0.07]"
          >
            {/* Decorative gradient blob */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-accent-emerald/20 to-accent-amber/10 blur-2xl opacity-70 transition group-hover:opacity-100" />

            <div className="relative flex items-start justify-between gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-emerald/30 to-accent-amber/20 ring-1 ring-white/10">
                <Sparkles className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="text-[11px] font-medium uppercase tracking-wider text-accent-amber">
                {p.year}
              </span>
            </div>

            <h3 className="relative mt-4 heading-display text-lg font-semibold text-white">
              {p.title}
            </h3>
            <p className="relative mt-1 text-xs text-slate-400">{p.subtitle}</p>

            <p className="relative mt-3 text-sm leading-relaxed text-slate-300">
              {p.description}
            </p>

            <ul className="relative mt-4 space-y-1.5 text-xs text-slate-400">
              {p.impact.map((i) => (
                <li key={i} className="flex gap-2">
                  <ArrowUpRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-accent-emerald" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
