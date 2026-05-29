import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle
        eyebrow="Experience"
        title="A journey across code, strategy, and leadership."
        subtitle="From software engineering at TCS to product management leadership and strategic consulting — each role layered on a new lens."
      />

      <div className="relative">
        {/* Vertical line */}
        <div
          aria-hidden
          className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent-violet/40 via-white/10 to-transparent md:block"
        />

        <ol className="space-y-5">
          {profile.experience.map((job, i) => (
            <motion.li
              key={`${job.company}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: 'easeOut' }}
              className="relative md:pl-14"
            >
              {/* Timeline dot */}
              <div
                aria-hidden
                className="absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-ink-900/80 backdrop-blur md:flex"
              >
                <Briefcase className="h-3.5 w-3.5 text-accent-violet" />
              </div>

              <div className="glass group p-6 transition hover:bg-white/[0.07] md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="heading-display text-lg font-semibold text-white md:text-xl">
                    {job.role}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-accent-cyan">
                    {job.period}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 text-sm text-slate-400">
                  <span className="gradient-text-soft font-medium">{job.company}</span>
                  {job.location && (
                    <>
                      <span className="text-slate-600">·</span>
                      <span>{job.location}</span>
                    </>
                  )}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {job.highlights.map((h, k) => (
                    <li key={k} className="flex gap-3">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-violet" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
